// AJAX
// 자바스크립트를 이용해서 비동기로 서버와 통신
// ActiveXObject -> XMLHttpRequest 객체

// 서버와 비동기적으로 데이터를 주고 받는다
const xhr = new XMLHttpRequest();

// 요청을 초기화
xhr.open('GET', 'https://dev.wenivops.co.kr/services/fastapi-crud/1/product');

xhr.onreadystatechange = function() {
    // readyState 4: 요청이 완료된 상태
    if(xhr.readyState === 4) {
        // 응답이 올바른 응답인지
        if(xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            renderList(response);
        } else {
            console.error('오류:', xhr.status, xhr.statusText);
        }
    }
};

// 요청을 전송
xhr.send();

// readyState: XHR 요청의 통신 상태
// - 0: 객체만 생성
// - 1: xhr.open 호출, 요청 초기화
// - 2: xhr.send 호출, 요청 전송
// - 3: 요청 진행 중
// - 4: 요청 완료

// status: HTTP 응답의 상태 코드

function renderList(dataList) {
    const $productList = document.getElementById('product-list');
    $productList.innerHTML = '';

    dataList.forEach(data => {
        const $li = document.createElement('li');
        $li.innerHTML = `
        <h3>${data.productName}</h3>
        <img src="${data.thumbnailImg}" alt="">
        <p>가격: ${data.price}원</p>
        `;
        $productList.appendChild($li);
    });
}