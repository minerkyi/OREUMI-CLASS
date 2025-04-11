// JSON (JavaScript Object Notaion)
// 자바스크립트 객체 문법으로 작성된 데이터
// 자바스크립트에서 독립적인 데이터 포멧, 다양한 프로그래밍 언어에서 사용 (C, Python) 
// 데이터 교환 형식

fetch('./data.json')
.then((response) => {
    return response.text();
})
.then((json) => {
    console.log(json);
    // 문자열 타입인 JSON 데이터 -> 객체로 변환
    const obj = JSON.parse(json);
    console.log(obj);
    console.log(obj['company']);
});
// 텍스트로 응답받은 데이터 -> 자바스크립트 객체 JSON.parse

// 자바스크립트 객체 -> 텍스트 JSON.stringify
const userInfo = {
    name: '경현',
    location: {
        city: '제주',
        country: '대한민국'
    },
    age: 20
};
const userJson = JSON.stringify(userInfo);
console.log('>> userJson:', userJson);

// JSON.parse, JSON.stringify -> 깊은 복사
// 원본 객체 -> 문자열로 -> 다시 객체로
const symbol = Symbol();
const origin = {
    name: '위니브',
    founded: 2022,
    location: {
        city: '제주',
        country: '대한민국'
    },
    arr: [1, 2, 3],
    func1: () => {
        console.log('함수');
    },
    [symbol]: 'symbol'
};

const copy = JSON.parse(JSON.stringify(origin));
console.log('copy:', copy);
copy.location.city = '서귀포';
console.log('orgin', origin);

// 사라지는 값: 심볼, 함수, undefined
// 변하는 값: Date[객체]-> 문자열, ReqExp(정규표현식) -> 빈 객체, 특수한 숫자(Infinity, NaN) -> null
// -> 라이브러리 lodash cloneDeep 사용을 권장