console.log('===== 숫자 메서드 =====');
console.log('----- parseInt, parseFloat -----');
let year = '2025년';
let pixel = '32.4px';
console.log(parseInt(year)); // 2025
console.log(parseInt(pixel)); // 32
console.log(parseFloat(pixel)); // 32.4

console.log(parseInt('1011', 2)); // 문자열이 진법의 숫자 -> 10진수로 변환

console.log('----- isNaN -----');
console.log(isNaN(230)); // false
console.log(isNaN('hello') * 3); // true
console.log(isNaN('hello')); // 'hello' -> 숫자로 변환, true
console.log(isNaN('2024')); // false

console.log('----- isFinite -----');
// 값이 유한한지 평가 -> Infinity, -Infinity, NaN false
// isFinite는 숫자형으로 타입 변환이 일어난다.
console.log(isFinite(20)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite('Hello')); // 'Hello' -> NaN

console.log('----- toFixed -----');
// 소수점 자리 설정 (반올림) -> 문자열 반환
let pi = 3.141592;
console.log(pi.toFixed()); // 정수 자릿수
console.log(typeof pi.toFixed()); // string
console.log(pi.toFixed(2)); // 소수점 이하 2자리까지
console.log(pi.toFixed(3)); // 소수점 이하 3자리까지
console.log(pi.toFixed(10));

console.log('----- toString -----');
console.log(pi.toString());
console.log((3).toString(2)); // 숫자 3을 2진수로 변환해서 문자열로 반환

console.log(3.1.toString(2));
console.log((3).toString(2));

console.log('----- Number.isNaN -----');
console.log(Number.isNaN(230)); // false
console.log(Number.isNaN('hello') * 3); // true
console.log(Number.isNaN('hello')); // true -> false
console.log(Number.isNaN('2024')); // false
// 타입 변환 X isNaN('hello') false

console.log('----- Number.isFinite -----');
console.log(Number.isFinite('hello'));
console.log(Number.isFinite('230')); // 숫자로 평가X
// 타입 변환 X

console.log('----- 원시타입의 메서드 -----');
const message = 'hello world';
const temp = new String('hello world');
console.log(temp.toUpperCase());
// temp 제거