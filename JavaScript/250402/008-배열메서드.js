console.log('===== 배열의 메서드 =====');
let numbers = [1, 2, 3, 4, 5];

console.log('1. 요소를 추가 / 삭제');
console.log(numbers.push(10)); // length
console.log(numbers);

console.log(numbers.pop()); // 마지막 요소
console.log(numbers);

console.log(numbers.unshift(20)); // length
console.log(numbers);

console.log(numbers.shift()); // 20
console.log(numbers);

console.log('----- splice -----');
// 원하는 위치에 요소를 추가, 삭제, 교체
// splice(시작 인덱스, 요소의 개수, 새롭게 넣을 요소)

// 인덱스 2번 위치에 45 추가 [1, 2, 45, 3, 4, 5]
numbers.splice(2, 0, 45);
console.log(numbers); // [1, 2, 45, 3, 4, 5]

// 인덱스 4 삭제
numbers.splice(4, 1);
console.log(numbers); // [1, 2, 45, 3, 5]

// 교체 [1, 2, 45, 3, 5] -> [1, 2, 10, 20]
numbers.splice(2, 3, 10, 20);
console.log(numbers);

console.log('----- 요소 검색 -----')
numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(30)); // 2
console.log(numbers.indexOf(100)); // -1

console.log(numbers.includes(30)); // true (포함O)
console.log(numbers.includes(0)); // false (포함X)

console.log('----- 배열 추출 및 결합 -----');
// 문자열, 배열
const arr = Array.from('Hello', (v) => v.toUpperCase());
console.log(arr);

const arr2 = Array.from({ length: 5 }, (v, i) => i);
console.log(arr2);

numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(1, 3)); // 새로운 배열 추출
console.log(numbers); // 원본 배열 유지
const arrA = [1, 2, 3];
const arrB = [3, 4, 5];
const arrC = [5, 6, 7];
const arrResult = arrA.concat(arrB, arrC);
console.log(arrResult);
console.log(arrA);
console.log(arrB);
console.log(arrC);

console.log('----- 얕은 복사 -----');
const original1 = ['a', 'b', 'c'];
const copy1 = Array.from(original1);
copy1[0] = 'k';
console.log(original1);
console.log(copy1);

const original2 = [10, 20, 30, 40];
const copy2 = original2.slice();
copy2[2] = 100;
console.log(original2);
console.log(copy2);

const original3 = [1, 2, 3, 4, 5, [10, 20]];
const copy3 = original3.concat();
copy3[5][0] = 30;
console.log(original3);
console.log(copy3);

console.log('----- join -----');
const fruits = ['apple', 'banana', 'mango'];
// split: 문자열을 구분자 기분 나눠 배열
// join: 배열의 요소를 구분자 기준 연결 문자열
console.log(fruits.join()); // ','가 기본 구분자
console.log(fruits.join('-'));

{
    console.log('----- flat -----');
    const arr = [1, 2, [3, 4, [5, 6]]];
    console.log(arr);
    console.log(arr.flat()); // 기본값 1 [1, 2, 3, 4, [5, 6]]
    console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]
}