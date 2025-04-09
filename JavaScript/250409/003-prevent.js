// preventDefault
// 브라우저 기본 동작 중지
// ex) form 태그의 submit 새로고침, a 태그를 href 속성으로 이동

document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('폼 제출');
});

document.getElementById('weniv-link').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('링크 클릭');
    // 로직을 추가
    // 페이지 이동
});

// BOM API
// location 객체를 이용하면 URL에 대한 정보, 기능
console.log('href', location.href); // 현재 페이지 URL 정보
// location.href = 'https://weniv.co.kr';
console.log('origin', location.origin); // 도메인 정보
console.log('pathname', location.pathname);
console.log('search', location.search);
const search = new URLSearchParams(location.search);
console.log('>>', search.get('search'));

// location 기능
// location.href = 'https://weniv.co.kr'; // 페이지
// location.assign('https://weniv.co.kr'); // 현재 페이지 -> 새로운 url
// location.replace('https://weniv.co.kr'); // 현재 페이지 -> 새로운 url 대체
// location.reload();