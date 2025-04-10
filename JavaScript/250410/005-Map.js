// Map
// ES6. 키-값 쌍을 저장하는 컬렉션

const emptyMap = new Map();
console.log(emptyMap);

// Object.entries(obj) -> [[key, value], [key, value]]
const mapWithData = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
]);
console.log(mapWithData);

// 1. 엔트리 추가
const myMap = new Map();
myMap.set('name', '경현');

// 객체 키: 문자열, Symbol
// Map의 키: 모든 값
myMap.set(1, 'number');
myMap.set(true, 'boolean');
myMap.set([1, 2, 3], 'array');
myMap.set(Symbol(), 'Symbol');
myMap.set(null, 'null');
console.log(myMap);

// Map get 메서드
console.log(myMap.get([1, 2, 3])); // undefined

// 객체 타입 -> 참조값 (실제 객체가 저장되어있는 메모리 주소)
const obj1 = {name: '위니브'};
const obj2 = {name: '위니브'};
console.log(obj1 === obj2); // false
const obj3 = obj1;
console.log(obj1 === obj3); // 같은 메모리 참조 true

console.log(myMap.get(1));
console.log(myMap.get(null));

// 일반 객체에서 길이
const objLen = {name: '위니브'};
console.log(objLen.length);
console.log(Object.keys(objLen).length);

console.log('myMap size:', myMap.size);
console.log('myMap length:', myMap.length);

// 값이 있는지 has
console.log('name' in objLen);
console.log(myMap.has('name'));
console.log(myMap.has('adress'));

// 값 삭제
console.log(myMap);

myMap.delete(1);
console.log(myMap);

// 모든 키-값 쌍을 제거
// myMap.clear();
console.log(myMap);

// 순회 (for of, forEach)
for(const [key, value] of myMap) {
    console.log(key, value);
}

myMap.forEach((value, key) => {
    console.log(value, key);
});

// 객체 접근 메서드
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

// 이터레이터: 컬렉션의 요소를 순회하는 객체
// next() 메서드를 사용하여 순회의 다음 요소를 접근
const keyIterator = myMap.keys();
console.log(keyIterator.next());
console.log(keyIterator.next());
console.log(keyIterator.next());
console.log(keyIterator.next());
console.log(keyIterator.next());
console.log(keyIterator.next());

// 배열 -> Map
const mapFromArray = new Map([['key', 'value'], ['key2', 'value2']]);
console.log(mapFromArray);

// 객체 <-> Map
const object = {
    name: '경현',
    age: 20
};
const mapFromObject = new Map(Object.entries(object));
console.log(mapFromObject);

const newObject = Object.fromEntries(mapFromObject);
console.log(newObject);

// Map과 Object의 차이점
// 1. 키의 타입
// - Map: 모든 데이터 타입을 키로 사용O
// - Object: 문자열 Symbol

// 2. 순서
// - Map: 삽입되는 순서를 기억, for of를 이용한 순회
// - Object: 순서를 기억X

// 3. 성능
// - 대량의 데이터를 수정하거나 삭제 -> Map 성능이 좋다.