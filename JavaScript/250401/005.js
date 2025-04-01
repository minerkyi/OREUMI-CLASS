let name; // 선언
name = 'weniv'; // 할당
console.log('name: ', name); // 참조

// 선언과 할당
let age = 20;
console.log('age: ', age);

// const 재할당 X
name = 'licat'; // 재할당
console.log('재할당한 name: ', name);

// const compay; // 오류1. 할당문이 없는 const 선언
const company = 'weniv'; // 선언
console.log('company: ', company);

// 오류2. 선언하지 않은 변수를 참조
// 변수 사용 전에는 선언 먼저
// console.log('city: ', city);

// 사용 X. 선언문을 생략
// window.console.log -> window의 속성 중 하나가 console.log
// window.country -> korea
// country = 'korea';
// console.log('country: ', country);

// 변수는 가리키는 값
let x = 10;
let y = x;
let z = y;

x = 20;
console.log('x: ', x);
console.log('y: ', y);
console.log('z: ', z);

// 변수명
// 1. 문자, 숫자, 언더스코어(_), 달러($) 포함
// 온점(.), 쉼표(,), 물음표(?), 샵(#) 같은 특수문자X
const number = 10;
// const #number = 10;
let 나이 = 20;
console.log('나이: ', 나이);

// 2. 변수 숫자로 시작 X
// 문자, 언더스코어(_), 달러($)로 시작
const user1 = 10;
// const 1user = 10;

// 3. 예약어 사용 X

// 4. 대소문자 구분
let NAME1 = 'licat';
// console.log('name1: ', name1);
console.log('NAME1: ', NAME1);

// 변수명 작성 관습
// 1. 카멜케이스: 변수, 함수, 메서드
const userName = 'weniv';
function getUserName() {

}

// 2. 파스칼 케이스: 클래스
class UserName {

}

// 3. 스네이크 케이스: 상수
const COMPANY_NAME = 'weniv';

// [실습] 이름, 성별, mbti를 변수에 저장하고 -> 콘솔 출력
let myName = '김용일';
let gender = '남자';
let mbti = 'ISTP';

console.log(myName, gender, mbti);