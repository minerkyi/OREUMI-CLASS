// Nullish 널리시 연산자
// ES2020 도입, null 또는 undefined 판단하는 연산자

console.log('hello' ?? null); // hello
console.log('' ?? 'hello');

// 논리합 연산자와 유사
// 논리합 -> 값이 true, false한 값인지
// 널리시 -> 값이 null 또는 undefined인지를 평가
// null 또는 undefined가 아닌 값

// nullish -> 0, false, NaN, ''과 같은 falsy한 값도 유효한 값

console.log(null ?? 'hello');
console.log(null ?? undefined);
console.log(undefined ?? null);

// let name = prompt('이름을 입력하세요');
name = name ?? '사용자';
console.log(name);

// nullish 연산자와 논리 연산자 혼합 사용X
// -> 괄호를 묶어서 우선순위를 지정
const a = null;
const b = 5;
const c = 10;
// console.log(a ?? b || c);
console.log((a ?? b) || c);
console.log(a ?? (b || c));

// 옵셔널 체이닝
// ES2020 도입
// 객체의 속성이나 메서드에 접근, 참조가 null 또는 undefined일 때도 오류 없이 처리
const user = {
    name: '경현',
    address: {
        country: '대한민국',
        city: '제주'
    }
};
const user2 = {
    name: '민수',
    address: {
        city: ''
    }
};
let user3 = null;

console.log(user.address.city);
console.log(user2.address); // undefined
// console.log(user2.address.city); // undefined의 city 속성을 찾게됨 -> 오류

// undefined 또는 null에서 참조 -> undefined
console.log(user2.address?.city);
console.log(user2.address && user2.address.city);

// null에서 address라는 속성을 참조 -> 오류 발생
console.log(user3?.address?.city);

// 대괄호 표기법
console.log(user3?.['adress']?.['city']);

// 메서드도 안전하게 호출
user.introduce?.();

// 옵셔널 체이닝 -> 널리시 연산
const city = user2?.address?.city || '주소가 입력되지 않았습니다';
console.log(city);