// 호이스팅
// 선언부 -> 최상단
console.log('name: ', name);
console.log('age: ', age);

var name = 'weniv';
var age = 20;

// console.log('company: ', company);

// 내부적으로 동작
var name;
var age;

console.log('name: ', name);
console.log('age: ', age);

name = 'weniv';
age = 20;

console.log('name: ', name);
console.log('age: ', age);

// let과 const
console.log(country);
let country = 'korea';
console.log(country);