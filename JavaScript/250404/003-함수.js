console.log('===== 함수 =====');

function 나의시크릿라면레시피() {
    let 그릇;

    console.log('1. 물을 550ml 넣는다.');
    console.log('2. 스프를 넣는다.');
    console.log('3. 물이 끓으면 후레이크와 면을 넣는다.');
    console.log('4. 3분간 끓인다.');
    console.log('5. 계란을 넣고 면으로 덮는다.');
    그릇 = '맛있는 라면 완성!';

    return 그릇;
}
console.log(나의시크릿라면레시피());

let hungry = true;
if(hungry) {
    나의시크릿라면레시피();
}

console.log('----- 함수의 기본 구조 -----');
// 이름을 받아서, 인사를 하는 함수
function greet(name) {
    console.log(`안녕하세요, ${name}님!`);
}
greet('라이캣');

function sum(num1, num2) {
    return num1 + num2;
}
const result = sum(10, 20);
console.log(result);

console.log('===== 함수의 구성 요소 =====');
console.log('----- 1. 매개변수와 전달인자 -----');
{
    function sum(num1, num2) {
        return num1 + num2;
    }
    const result = sum(10, 20);
}

function introduce(name, age) {
    console.log(`안녕하세요. 저는 ${name}이고, ${age}살입니다.`);
}
introduce('하티', 20);

// 파라미터와 아규먼트의 개수가 같지 않아도 오류 발생X
function printNumber(num1, num2) {
    console.log(num1, num2);
}
printNumber();
printNumber(10, 20, 30, 40); // 파라미터 개수를 넘어가는 인자는 무시
printNumber(10);

function greet() {
    console.log('안녕하세요!');
}
greet();

console.log('===== 반환값 =====');
{
    function mul(num1, num2) {
        return num1 * num2;
    }
    // return 문이 X: undefined
    const result = mul(10, 20); 
    console.log(result); // 200
    
    function sum(num1, num2) {
        console.log('1');
        console.log('2');
        return num1 + num2; // 함수를 종료 + 값을 반환
        console.log('3');
        console.log('4');
    }
    const result2 = sum(10, 20);
    console.log(result2);
}

{
    console.log('===== 값의 전달 =====');
    // 자바스크립트는 값에 의한 전달

    console.log('1. 원시타입');
    // 실제 값
    let x = 10;
    let y = x; // 실제값 10이 복사되어 전달
    function add(num) {
        num += 10;
        console.log('num', num);
    }
    let a = 20;
    add(a);
    console.log('a', a);

    function getJob(obj) {
        obj.company = 'weniv';
        console.log(obj);
    }
    const user = {
        name: 'licat',
        age: 30,
    };
    getJob(user);
    console.log(user);
}

// 1. 재사용성
// 2. 유지보수
// 3. 구조파악
// 4. 추상화
function 로그인() {
    사용자입력();
    유효성검사();
    서버요청();
    화면출력();
}

function 사용자입력() {
    console.log('유효성 검사');
}

function 유효성검사() {
    console.log('유효성 검사');
}

function 서버요청() {
    console.log('서버 요청');
}

function 화면출력() {
    console.log('성공 또는 실패 화면에 출력');
}
로그인();