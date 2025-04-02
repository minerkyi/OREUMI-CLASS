// BigInt
// 아주 큰 정수를 표현
const bigNumb = 123123123123n;
console.log(typeof bigNumb);

const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt);
console.log(maxInt + 1);
console.log(maxInt + 2);

console.log(BigInt(123123));
// console.log(BigInt(9007199254740993)); // 안전하지 못한 숫자를 이용
console.log(BigInt('9007199254740993')); // 문자열로 작성해야 안전하다.

// BigInt와 숫자와 별개의 자료형
// console.log(10n + 20); // BigInt + 숫자
console.log(10 / 3);
console.log(10n / 3n); // 정수형