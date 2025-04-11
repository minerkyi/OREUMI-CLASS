// 동기와 비동기
// 동기 (synchronous): 작업을 순차적으로 처리, 순서가 보장
console.log(1);
console.log(2);
console.log(3);

// 비동기 (asynchronous): 작업을 순차적으로 처리X, 작업의 완료를 기다리지 않는 방식
console.log('----- 비동기 -----');
console.log(1);
// 타이머 함수
setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3);
console.log('//----- 비동기 -----');

// 자바스크립트의 코드는 엔진에 의해서 실행
// 엔진은 브라우저에 내장되어 있다.
function func1() {
    console.log('func1');
    func2();
}
function func2() {
    console.log('func2');
    func3();
}
function func3() {
    console.log('func3');
}
func1();
// 자바스크립트의 콜 스택은 한 번에 하나의 작업을 처리 -> 동기적 처리만 가능
// 자바스크립트 -> 비동기적인 작업