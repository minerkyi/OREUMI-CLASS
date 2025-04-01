// 원시타입
// 가장 기본적인 데이터 타입, 단일한 값
{
    let message = 'Hello world';
    message[0] = 'B';
    console.log(message);

    message = message + '!!';
    console.log(message);

    const value = 'hello';
}

// 1. 문자열 string
{
    console.log('===== 문자열 =====');
    // 작은따옴표('), 큰따옴표("), 백틱(`) 텍스트를 감쌉니다.
    let name = '라이캣';
    let greeting = "안녕하세요";
    let message = `안녕하세요, ${name}님`;
    console.log(name);
    console.log(greeting);
    console.log(message);

    // 특징1. 순서
    let text = 'hello world';
    console.log(text[0]); // h
    console.log(text[4]); // o
    console.log(text[5]); // 공백

    // 특징2. 길이
    let myPassword = '123456!@#';
    console.log(myPassword.length);

    // 특징3. 불변성
    // 한 번 만들어진 원시타입의 값은 변하지 않는다.
    text[5] = '-';
    console.log(text);

    // 이스케이프 문자
    // I'm gyeonghyeon.
    let introduce = "I'm gyeonghyeon.";
    let message2 = 'he say "hi"';
    console.log(introduce);
    console.log(message2);
    console.log(
        "문자열은 작은따옴표(''), 큰따옴표(\"\"), 백틱(``) 텍스트를 감쌉니다."
    );
    console.log('문자열\n\t1.특징');
    console.log('\\');
    // 작은따옴표('), 큰따옴표("), 백틱(`)
    console.log('I\'m gyeonghyeon');
    console.log("she say \"hi\"");
    console.log(`백틱은 \`을 의미합니다.`)
    //특별한 기능
    console.log('\\n은 줄바꿈\n입니다.');
    console.log('\\t는 탭\t입니다.');
    console.log('\\는 백슬래시입니다.');

    // 콘솔 로그 3번
    console.log(' /\\_/\\');
    console.log('( o.o )');
    console.log(' > ♥ <');

    //콘솔 로그 1번
    console.log(' /\\_/\\\n( o.o )\n > ♥ <');

    console.log(`백틱을 이용하면
        이스케이프 문자 없이 줄바꿈이 가능`);
    console.log(`2 + 3 = ${2 + 3}`);

    // 템플릿 리터럴
    // 안녕하세요 저는 {이름}이고 {지역}에 삽니다.
    let userName = '경현';
    let location = '제주';
    console.log(`안녕하세요 저는 ${userName}이고 ${location}에 삽니다.`);
}

{
    console.log('===== 숫자 =====');
    // 정수, 실수, Infinity, -Infinity, NaN
    let age = 20;
    let height = 165.4;
    console.log(typeof age);
    console.log(typeof height);

    // 1. 특수한 숫자값
    console.log(Infinity); // 자바스크립트에서 표현할 수 있는 가장 큰 숫자보다 큰 값
    console.log(Number.MAX_VALUE * 1e300);
    console.log(1 / 0);
    console.log(-Infinity);

    // NaN(Not a Number)
    // 유효하지 않은 숫자 연산의 결과
    console.log('hello' - 3);
    console.log(0 / 0);
    console.log('hello' * 10);
    console.log(typeof NaN); // number

    // 2. 진법 표현
    let decimal = 10; // 10진수
    console.log(decimal);

    // 2진수 (0b)
    let binary = 0b1010; // 2진수 1010을 binary 할당
    console.log('0b1010', binary);

    // 8진수 (0o)
    let octal = 0o15; // 8진수 15를 octal 할당
    console.log(octal);
    // let octal2 = 015;
    // console.log('octal2', octal2);
    // 전화번호, 우편번호 0으로 시작하는 값 '010' -> 숫자로 변환

    // 16진수 (0x)
    let hex = 0xFA; // 16지수 FA를 hex 할당
    console.log('0xFA', hex);

    // 3. 지수 표기법
    // a*10^b => aeb
    // 2000 -> 2 * 10^3
    // -0.000000003
    console.log(2e3);

    // 숫자 구분자 (ES2021~)
    let carNumber = 1234_5678_9101;
    console.log(carNumber);
}

// 논리
{
    // true, false
    // const answer = confirm('삭제하시겠습니까?');
    // console.log(answer); // 확인 true, 취소 false
}

// undefined
{
    let name;
    console.log(name);

    let text = 'Hello world';
    console.log(text[20]); // undefined
}

// null
{
    let isLoggedIn = false;
    let user = {
        name: 'weniv',
        age: 20,
    }

    if (isLoggedIn === false) {
        user = null; // 개발자가 명시적으로 비어있는 값을 나타낼 때
    }
    console.log(user);
}

// Symbol
// ES6 고유한 값을 나타내는 자료형
// -> 객체의 키 값으로 이용이 됩니다.
{
    let symbol1 = Symbol();
    console.log(symbol1);

    let symbol2 = Symbol('id');
    let symbol3 = Symbol('id');
    console.log(symbol2);
    console.log(symbol3);
    console.log(symbol2 === symbol3);
}