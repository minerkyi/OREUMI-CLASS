// 배열
console.log('----- 배열 -----');
const fruits = ['banana', 'apple', 'strawberry'];
console.log(fruits);

// 요소 접근
console.log(fruits[0]); // banana
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

const types = ['string', NaN, true, undefined, null, [], {}];
console.log(types);

const numbers = new Array(1, 2, 3, 4);
console.log(numbers);
// 주의사항
console.log([3]);

// 숫자가 1개만 전달 -> 길이로써 작용
const numbers2 = new Array(3);
console.log(numbers2);

// 배열 요소 수정
console.log(fruits);
fruits[0] = 'mango';
console.log(fruits);
fruits[4] = 'tomato';
console.log(fruits);

// 맨 마지막 요소 뒤에 추가
fruits.push('tangerine');
console.log(fruits);

// 첫번째 요소 앞에 추가
fruits.unshift('peach');
console.log(fruits);

// 맨 마지막 요소 삭제
fruits.pop();
console.log(fruits);

// 첫번째 요소 삭제
fruits.shift();
console.log(fruits);