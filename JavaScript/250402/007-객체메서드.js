console.log('===== 객체(object) 타입의 메서드 =====');
// 키와 값의 쌍
const user = {
    name: '라이캣',
    age: 20,
    company: '위니브',
    greet() {
        console.log('안녕하세요');
    }
}

console.log('----- 프로퍼티 가져오기 -----');
console.log(Object.keys(user));
Object.keys(user).forEach((key) => {console.log(key, user[key])});

// 값
console.log(Object.values(user));

// 키와 값의 쌍
// [키, 값]
console.log(Object.entries(user));
Object.entries(user).forEach(([key, value]) => {
    console.log(key, value);
});

console.log('----- 객체를 병합 -----');
const obj1 = {
    a: 10,
    b: 20,
}
const obj2 = {
    b: 30,
    c: 40,
}

const result = Object.assign(obj1, obj2);
console.log(obj1); // {a:10, b:30, c:40}
console.log(result); // {a:10, b:30, c:40}

const obj3 = {c:50, d:60};
const newResult = Object.assign(obj1, obj2, obj3);
console.log(obj1);
console.log(newResult);

let objA = {name: '위니브', numbers: [1, 2, 3]};
let objB = objA;
objB.name = '라이캣';
console.log(objA);

console.log('----- 얕은 복사 -----');
let objC = Object.assign({}, objA);
console.log(objA);
console.log(objC);

objC.age = 20;
objC.numbers.push(4);
console.log(objA);
console.log(objC);

console.log('----- 객체 속성 확인 -----')
console.log(objC.hasOwnProperty('age')); // true
console.log(objC.hasOwnProperty('company')); // false