// 객체 타입
// 여러 값을 한 번에 저장

const user = {
    name: 'licat',
    age: 20,
};
// 가변성
user.age = 30;
console.log(user);

// 객체 Object
console.log('===== 객체 =====')
// 프로퍼티 키: 문자열(변수명 명명규칙을 지키는 문자열은 따옴표 생략이 가능), 심볼
// 프로퍼티 값: 원시타입, 객체타입 모든 값
// 프로퍼티 순서가 보장되는 객체X
const passwordKey = Symbol('password');
const isStudent = false;

const licat = {
    name: '라이캣',
    age: 20,
    isStudent, // isStudent: isStudent
    'company-name': '위니브',
    [passwordKey]: 12345,
    address: {
        country: '대한민국',
        city: '제주',
    },
    // greet: function () {
    // 메서드: 값이 함수인 프로퍼티
    greet() {
        console.log('안녕하세요');
    }
};
console.log('licat:', licat);

console.log('----- 프로퍼티 접근법 -----');
console.log('1. 점 표기법: ', licat.name, licat.age); // 명명규칙을 만족 키만 접근 가능
console.log('2. 대괄호 표기법: ', licat['name'], licat['age']);

console.log('----- 프로퍼티 수정 / 추가 -----');
// 1. 수정: 프로퍼티 접근 -> 할당 연산자로 새로운 값
licat["company-name"] = '';
console.log('수정 후:', licat);

// 2. 새로운 프로퍼티 추가
licat.skill = ['HTML', 'CSS', 'Java'];
console.log('skill 추가:', licat);

console.log('----- 프로퍼티 삭제 -----');
delete licat.skill;
delete licat["company-name"];
console.log('삭제 후 객체:', licat);

console.log('----- 프로퍼티 검색 -----');
// 키가 있는지를 판별
console.log('age가 있나요?', 'age' in licat);
console.log('skill이 있나요?', 'skill' in licat);


// [실습] 프로필 객체 만들기
// 1. 이름, 취미(배열), 인사를 출력하는 함수를 작성합니다.
// 2. 객체의 속성에 접근해서 콘솔 창에 출력
// 3. 함수를 호출합니다.
const info = {
    name: '김용일',
    hobby: ['음악듣기', '영화보기'],
    greet: function() {
        console.log('안녕하세요');
    }
};
console.log(info.name, info.hobby[0], info.hobby[1]);
info.greet();
