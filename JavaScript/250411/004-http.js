// 1. call stack: console.log(1)
// console.log(1); // (1) 콜스택

// setTimeout(() => { //(2) 콜스택 -> Web API, Web API 처리
//     console.log(2);
// }, 1000);
// console.log(3); // (3) 콜스택

// (4) 시간이 지나 타이머가 종료 Web API가 콜백함수 -> 콜백 큐
// (5) 이벤트 루프가 콜스택, 콜백큐를 비교하면서 콜스택이 비어있으면 콜백 큐에 있는 작업을 이동해서 처리

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 0);
// console.log(3);

// console.log('----- 시작 -----');

// setTimeout(() => {
//     console.log('타임아웃 콜백');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('프로미스 콜백');
// });

// console.log('----- 끝 -----');

// 비동기 함수
function asyncfunc1() {
    setTimeout(() => {
        return 10;
    }, 1000);
}

function asyncfunc2() {
    setTimeout(() => {
        return 20;
    }, 2000);
}

const result1 = asyncfunc1();
const result2 = asyncfunc2();
console.log(result1 + result2);
console.log(result1);
console.log(result2);

// HTTP 통신
// 웹에서 데이터를 주고 받기 위한 약속
// 클라이언트(브라우저) 서버에 요청을 보내고 응답을 받을 수 있다.

// 요청 메서드
// GET: 서버에서 데이터를 가져오는 요청(ex. 검색 결과, 상품 정보 리스트)
// POST: 서버에 데이터를 보내는 요청(ex. 로그인, 댓글 작성)
// PUT: 서버에 있는 데이터를 수정하는 요청
// DELETE: 서버에 있는 데이터를 삭제하는 요청
// PATCH: 서버에 있는 데이터를 수정(부분적)
// -> CRUD

// CRUD
// Create: 데이터를 생성
// Read: 데이터를 조회
// Update: 데이터를 수정
// Delete: 데이터를 삭제