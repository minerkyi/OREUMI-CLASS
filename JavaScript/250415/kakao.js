const BOOK_URL = "https://dapi.kakao.com/v3/search/book";
const REST_API_KEY = '2d943d978a6afdfc8d9a9775728baf53';

// fetch(`${BOOK_URL}?query=자바스크립트`, {
//   headers: {
//     Authorization: `KakaoAK ${REST_API_KEY}`,
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

  async function searchBook() {
    const query = document.getElementById("search-input").value;
  
    if (query.trim() === "") return;
  
    try {
      const response = await fetch(
        `${BOOK_URL}?query=${encodeURIComponent(query)}`,
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
      renderBook(data?.documents);
    } catch (error) {
      console.error("검색 실패:", error);
    }
  }
  
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBook();
  });
  
  function renderBook(books) {
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";
  
    // 1. results가 없으면 -> 결과가 없습니다.
    if (books.length === 0) {
      resultDiv.innerHTML = "<p>검색 결과가 없습니다.</p>";
      return;
    }
  
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