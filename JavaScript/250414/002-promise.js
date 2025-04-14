// Fetch API
// XMLHttpRequest를 대체할 새로운 AJAX 기술
// 비동기적으로 서버와 통신을 할 수 있는 기술

const result = fetch('https://dev.wenivops.co.kr/services/fastapi-crud/1/product');
console.log(result);

// XHR: 객체를 사용하여 비동기 통신을 수행
// fetch: Promise 객체를 기반으로 비동기 통신

// Promise
// 약속을 하는 것(pending)
// 커피가 완성이 되어서 주문이 완료(resolve) -> 약속은 이행되었다(fulfilled)
// 커피를 만들 수가 없다고 안내(reject) -> 약속은 실패합니다.(rejected)

const orderCoffee = new Promise((resolve, reject) => {
  let isCoffeeReady = false;
  setTimeout(() => {
    isCoffeeReady = true;

    if(isCoffeeReady) {
      resolve('커피가 준비되었습니다.');
    } else {
      reject('커피가 준비되지 않았습니다.');
    }
  }, 1000);
});
console.log('orderCoffee', orderCoffee);

// promise 객체가 만들어지면 대기(pending)
// resolve 함수가 호출 -> 성공, 이행(fulfilled)
// reject 함수가 호출 -> 실패, 거절(rejected)
// -> 한 번 상태가 변경된 다시 변경

orderCoffee
  .then((message) => {
    // resolve 함수에 전달된 값 -> 인자
    console.log(message);
    console.log(orderCoffee);
  })
  .catch((error) => {
    // reject 함수에 전달된 값 -> 인자
    console.error(error);
    console.log(orderCoffee);
  })
  .finally(() => {
    // resolve, reject 실행되는 것
    console.log('//----- 커피 주문 완료');
  });