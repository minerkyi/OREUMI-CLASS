// 스코프: 변수의 유효 범위

// 전역 스코프
let global = 'hello';
console.log(global);

function func1() {
    // global 변수를 사용할 수 있는지?
    console.log('내부', global);
}
func1();

// 함수 스코프
// 함수 내부에서 var로 선언한 변수 -> 함수 스코프
function func2() {
    var inner = 'inner var';
    let letFunc = 'letFunc';
    console.log('func2 inner', inner);

    function func3() {
        console.log('func3 inner', inner);
    }
    func3();
}
func2();
// console.log('letFunc', letFunc);

// 선언을 하지 않고 값을 참조했을 때 발생
// console.log('outer var', inner); // ReferenceError

// let const - 블록 스코프
if(true) {
    var blockVar = '블록 안 var';
    let value = 'let 변수';
    console.log('블록 안', value);
}
// console.log('블록 바깥', value);
console.log('블록 바깥', blockVar);

console.log('-------------------');
// var -> let으로 선언 키워드 바꾸기
let name = 'hello';
if(true) {
    let name = 'weniv';
    console.log('블록 name', name);
}
console.log(name);