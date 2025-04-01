// 1. 원시타입
// 가장 기본적인 데이터, 단일 값

// 1-1. 문자열 string
const name = '위니브';
console.log('문자열:', name, typeof name);

// 1-2. 숫자 number
const age = 20;
const height = 165.4;
console.log('숫자:', age, typeof age);
console.log('숫자:', height, typeof height);

// 1-3. 논리 boolean
// 참(true)와 거짓(false)
const isStudent = false;
console.log(isStudent, typeof isStudent);

// 1-4. undefined
// 값을 할당하지 않은 변수
let value;
console.log('undefined:', value, typeof value);

// 1-5. null
// 비어있음을 표현
let user = {
    name: 'weniv',
};
user = null;
console.log('null:', user, typeof user);

// 1-6. 심볼 symbol
// 고유한 값을 생성, 외부적으로 값이 공개X
const uniqueID = Symbol();
console.log('심볼:', uniqueID, typeof uniqueID);

// 1-7. 빅인트 BigInt
// 큰 범위(Big)의 정수(Int)
// 숫자(number)와 다른 별개의 타입
const bigNumber = 123123123123123123n;
console.log('BigInt:', bigNumber, typeof bigNumber);

// 2. 객체 타입
// 여러 개의 값을 저장

// 2-1. 객체 object
// 키와 값이 쌍
const member = {
    name: '라이캣',
    age: 20,
    company: '위니브'
}
console.log('객체:', member, typeof member);

// 2-2. 배열 array
// 순서가 있는 집합
const number = [10, 20, 30, 40];
console.log('배열:', number, typeof number);

// 2-3. 함수 Function
function sayHi() {
    console.log("안녕하세요!");
}
sayHi();
console.log('함수:', sayHi, typeof sayHi)

//  2.4 기타 객체: 날짜, 정규표현식, Map, Set 등
const date = new Date();
console.log('날짜:', date, typeof date);

// 타입의 중요성
// + : 2개의 숫자를 더해서 결과를 보여준다.
console.log(2 +3);
console.log('Hello' +3); // 연결 연산자

// 사용자의 입력을 받습니다.
// let num1 = prompt('숫자를 입력하세요(num1)');
// let num2 = prompt('숫자를 입력하세요(num2)');

// num1과 num2가 숫자인 경우에만
// console.log(num1 + num2);

// 타입을 확인하기
// 1. typeof
const typeValue = 123;
console.log('-typeValue:', typeof typeValue);
console.log('-hello:', typeof 'hello');

// 2. Object.prototype.toString.call()
console.log('----- Object.prototype.toString.call -----');
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call([10, 20, 30]));
console.log(Object.prototype.toString.call(new Date()));

// 변수의 타입은?
// 변수의 타입은 할당된 값에 따라서 결정 -> 동적 타입 언어
console.log('===== 변수의 타입 =====');
let data = 'hello world';
console.log(typeof data); // string

data = 200;
console.log(typeof data); // number

data = [10, 20, 30];
console.log(typeof data); // object
console.log(Object.prototype.toString.call(data)); // object array

/*
// C언어
// 정적 타입 언어: 변수 선언할 때 타입을 지정
int num = 10; // 정수
num = 'Hello World'; // 오류가 발생
*/
