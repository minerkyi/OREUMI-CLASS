const BOOK_URL = "https://dapi.kakao.com/v3/search/book";
const REST_API_KEY = '2d943d978a6afdfc8d9a9775728baf53';

let page = 1;
let size = 10;
let isLoading = false;
let isEnd = false;

async function searchBook() {
  const query = document.getElementById("search-input").value;

  if (query.trim() === "") return;

  if (isLoading || isEnd) return;
  isLoading = true;

  try {
    const response = await fetch(
      `${BOOK_URL}?query=${encodeURIComponent(query)}&page=${page}&size=${size}`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("HTTP 응답 중 오류");
    }

    const data = await response.json();
    console.log(data);

    if (data.documents.length === 0) {
      isEnd = true;
      document.getElementById("results").textContent =
        "검색 결과가 없습니다.";
      return;
    }
    renderBook(data?.documents);
    renderPageNavi(page, data.meta.pageable_count);
    page++;
  } catch (error) {
    console.error("검색 실패:", error);
  } finally {
    isLoading = false;
  }
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  isEnd = false;
  searchBook();
  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = '';
});

function renderBook(books) {
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = '';

  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
    <h3>${book.title}</h3>
    <img src="${book.thumbnail}" alt=""/>
    <p>저자: ${book.authors.join(", ")}</p>
    `;
    resultDiv.appendChild(bookDiv);
  });
}

// 카카오 책 검색 기능으로 페이지네이션을 구현하세요.
// 페이지는 하단에 출력되며 버튼을 클릭하여 해당 페이지의 데이터를 요청합니다.

// 페이지 네비게이션 요소
const $pageNavigation = document.getElementById('page-navigation');
$pageNavigation.innerHTML = ''; // 페이지 네비게이션 초기화

// 페이지 생성
function renderPageNavi(currPage, totalPage) {
  $pageNavigation.innerHTML = '';
  // size(10) 크기 기준 현재 페이지 그룹(2 -> 1, 13 -> 2), 최대 페이지
  const currGroupCnt = Math.ceil(currPage / size);
  const maxPageCnt = Math.ceil(totalPage / size);
  console.log('currGroupCnt', currGroupCnt);
  console.log('maxPageCnt', maxPageCnt);

  // 화면에 노출될 페이지 숫자 시작과 끝
  const startPage = (currGroupCnt * 10) - 9;
  let endPage = startPage + 9;
  if(endPage > maxPageCnt) {
    endPage = maxPageCnt;
  }


  // 페이지 노드 생성
  const docFrag = document.createDocumentFragment();
  // 이전 버튼 생성
  if(currGroupCnt > 1) {
    const $li = document.createElement('li');
    $li.textContent = '<<';
    $li.dataset.index = startPage - 1;
    docFrag.appendChild($li);
  }

  // 페이지 숫자 생성
  for(let i=startPage; i<=endPage; i++) {
    const $li = document.createElement('li');
    $li.textContent = i;
    if(currPage === i) {
      $li.classList.add('selected');
    }
    $li.dataset.index = i;
    docFrag.appendChild($li);
  }

  // 다음 버튼 생성
  if(maxPageCnt > (currGroupCnt * 10)) {
    const $li = document.createElement('li');
    $li.textContent = '>>';
    $li.dataset.index = endPage + 1;
    docFrag.appendChild($li);
  }
  
  $pageNavigation.appendChild(docFrag);
}

// 페이지 숫자 이벤트 등록
$pageNavigation.addEventListener('click', (e) => {
  const $target = e.target;
  if($target.tagName === 'LI') {
    if(!$target.classList.contains('selected')) {
      page = Number($target.dataset.index);
      searchBook();
    }
  }
});

