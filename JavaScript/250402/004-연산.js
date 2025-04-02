// 연산
console.log('===== 산술 연산 =====');
let num1 = 10;
let num2 = 4;

console.log('덧셈 +', num1 + num2); // 14
console.log('빼기 -', num1 - num2); // 6
console.log('곱하기 *', num1 * num2); // 40
console.log('나눗셈 /', num1 / num2); // 2.5
console.log('나머지 %', num1 % num2); // 2
console.log('거듭제곱 **', num1 ** num2); // 10^4

console.log('----- + 연산자의 다른 기능 -----');
let str1 = 'hello';
console.log('문자열 연결', str1 + num1); // num1을 문자열로 변환 -> 문자열 연결

console.log(num1 + num2 + str1); // 더하기 연산, 문자열 연결
console.log(num1 + str1 + num2); // 문자열 연결, 문자열 연결
console.log(str1 + num1 + num2); // 문자열 연결, 문자열 연결

console.log('----- 다른 산술 연산자에서 문자열이 온다면');
// 더하기 연산을 제외한 연산의 결과는 NaN
console.log(str1 - num1);
console.log(str1 * num1);
console.log(str1 / num1);
console.log(str1 % num1);
console.log(str1 ** num1);

console.log('===== Math 객체 =====');
console.log('Math.PI:', Math.PI); // 원주율

console.log('반올림:', Math.round(3.5));
console.log('반올림:', Math.round(2.4));

console.log('올림:', Math.ceil(2.4));
console.log('내림:', Math.floor(2.4));

console.log('제곱:', Math.pow(2, 3)); // 2^3 == 8
console.log('제곱근:', Math.sqrt(64));
console.log('제곱으로 제곱근:', Math.pow(16, 1 / 2));
console.log('** 제곱근:', 16 ** 0.5);

console.log('절대값:', Math.abs(-5));

console.log('랜덤숫자(난수):', Math.random()); // 0부터 1 사이의 랜덤 숫자
// 0부터 10 사이의 랜덤 숫자
console.log(Math.floor(Math.random() * 10));

console.log('최대값', Math.max(10, 30, 20, 45, 5)); // 45
console.log('최소값', Math.min(20, 40, 50, 20, 10, 30)); // 10

console.log('===== 단항 산술 연산자 =====');
let x = 10;
let y = '10';

console.log('+:', +x);
console.log(+-10);
console.log(typeof +y); // 숫자형 변환

console.log('-:', -x);
console.log(-(-10));
console.log(-y); // 부호를 바꾸면서 숫자형 변환

console.log('----- 증감 연산자(증가/감소) -----');
let a = 10;
// ++ 증가 연산
console.log(a++); // 후위 증가 연산 : 출력 후 1 증가
console.log(a);
console.log(++a); // 전위 증가 연산 : 1 증가 시킨 후 출력

// -- 감소 연산
console.log(a--); // 후위 감소 연산 : 출력 후 1 감소
console.log(a); // 11
console.log(--a); // 전위 감소 연산 : 1 감소 후 출력

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

console.log('===== 산술 할당 연산 =====');
{
    let num = 10;

    // num = num + 10;
    num += 10;
    console.log('num += 10:', num); // 20

    num -= 5; // num = num -5;
    console.log('num -= 5:', num); // 15

    num *= 2; // num = num * 2;
    console.log('num *= 2:', num); // 30

    num /= 3; // num = num / 3;
    console.log('num /= 3', num); // 10

    num %= 3; // num = num % 3;
    console.log('num %= 3:', num); // 1

    num += 1; // 2
    num **= 2 // num = num ** 2;
    console.log('num **= 2:', num); // 4

    console.log('===== 비교 연산 =====');
    {
        console.log('동등 연산자, 일치 연산자');
        let a = 10; // number
        let b = '10'; // string

        console.log('동등 연산자(==):', a == b); // 타입을 변환하여 값이 동일
        console.log('일치 연산자(===):', a === b); // 타입 변환 X -> 값과 타입이 일치할 경우에만 true

        console.log('동등 연산자 비교 알아보기');
        console.log(1 == true);
        console.log(0 == false);
        console.log('1010' == 1010);
        console.log(null == undefined); // 서로만 동등하다고 평가
        console.log(null == false); // false

        console.log('일치 연산자 비교 알아보기');
        console.log(1 === true);
        console.log(0 === false);
        console.log('1010' === 1010);
        console.log(null === undefined);
        console.log(10 === 10);

        // NaN는 자기자신과 동등/일치하지도 않는 값 -> isNaN
        console.log(NaN == NaN); // false
        console.log(NaN === NaN); // false
        console.log(isNaN(NaN)); // isNaN

        console.log('부등 연산자, 불일치 연산자');
        console.log('부등 연산자(!=):', a != b); // false, 타입 변환 O
        console.log('불일치 연산자(!==):', a !== b); // true, 타입 변환 X

        console.log('대소 관계 비교 연산');
        console.log(10 > 20); // false
        console.log(10 < 20); // true;
        console.log(10 >= 10); // true;
        console.log(20 <= 10); // false;

        // 문자열을 대소 관계
        console.log('abc' < 'ABC'); // false
        console.log('ABC' < 'abc');
        console.log(123 < 'ABC'); // ABC가 숫자(NaN로 변환)
    }

    console.log('===== 논리 연산자 =====');
    {
        console.log('1. 논리곱 AND(&&)');
        console.log(true && true); // true
        console.log(true && false); // false
        console.log(false && true); // false
        console.log(false && false); // false

        let isLoggedIn = true;
        let isAdmin = true;

        if(isLoggedIn && isAdmin) {
            console.log('관리자님 안녕하세요!');
        }

        console.log('2. 논리합 OR(||)');
        console.log(true || true); // true
        console.log(true || false); // true
        console.log(false || true); // true
        console.log(false || false); // false

        if(isLoggedIn || isAdmin) {
            console.log('사용자 페이지로 이동합니다');
        }

        console.log('3. 논리 부정 연산자 NOT(!)');
        console.log(!true); // false
        console.log(!false); // true

        // 부정 + 부정 = 긍정 / 타입이 boolean 변환
        console.log(!!2); // 2 -> true
        console.log(!!0); // 0 -> false
        console.log(!!'hello'); // 'hello' -> true
        console.log(!!''); // '' -> false

        console.log('단축 평가');
        console.log(false && true); // 논리곱(AND, &&): false 만으로 결과 결정
        console.log(true || false); // 논리합(OR, ||): true 만으로 결과 결정

        console.log('' && 'licat'); // ''
        console.log('licat' && ''); // ''

        console.log('' || 'licat'); // 'licat'
        console.log('licat' || ''); // 'licat'

        console.log(24 && 'hello' && NaN && 23); // NaN
        console.log(24 || 'hello' || NaN || 23); // 24

        console.log('true처럼 평가되는 값 => Truthy');
        console.log(!!1); // 0이 아닌 숫자
        console.log(!!-1);
        console.log(!!'false'); // 비어있지 않은 문자열
        console.log(!!true); // true
        console.log(!!{}); // true
        console.log(!![]); // true

        console.log('false처럼 평가되는 값 => Falsy');
        console.log(!!0); // 숫자 0
        console.log(!!NaN); // NaN
        console.log(!!''); // 비어있는 문자열
        console.log(!!false);
        console.log(!!undefined);
        console.log(!!null);

        isLoggedIn = true;
        isLoggedIn && console.log('로그인이 되었습니다.');

        let username = '위니브'; // 사용자에게 값을 받습니다.
        username = username || '사용자';
        console.log(username);
    }
}