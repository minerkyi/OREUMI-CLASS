console.log('===== 전개구문 =====');
console.log('1. 배열의 전개 구문')
const fruits1 = ['사과', '수박', '복숭아'];
const fruits2 = ['딸기', '토마토'];
const fruitList = [...fruits1, ...fruits2];
console.log('fruitList:', fruitList); // concat

console.log('----- 얕은 복사 -----');
const copyFruit = [...fruitList]; // 얕은복사
copyFruit.push('망고');
console.log(fruitList);
console.log(copyFruit);

console.log('2. 객체의 전개 구문');
const user1 = {
    name: '라이캣',
    age: 20,
};

const user2 = {
    name: '빙키',
    level: 10,
};

const user = {...user1, ...user2};
console.log(user); // Object.assign

console.log('----- 얕은 복사 -----');
const copyUser = {...user};
user.name = '소울곰';
console.log(copyUser);

const level = 20;
const levelupUser = {...user1, level}; // {...user1, level:level}
console.log('levelupUser:', levelupUser);

console.log('+) 함수의 인자로 사용');
console.log(...[1, 2, 3]); // console.log(1, 2, 3)
console.log(Math.max(...[10, 20, 30, 40]));