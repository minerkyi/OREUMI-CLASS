console.log('===== 함수를 작성법 =====');

{
    console.log('----- 1. 함수 선언식 -----');
    // 호이스팅 : 변수나 함수의 선언식이 스코프의 최상단으로 끌어올려진 것처럼 동작하는 것
    function greeting(name) {
        console.log(`안녕하세요 ${name}입니다.`);
    }
    greeting('라이캣');

    console.log('----- 2. 함수 표현식 -----');
    const sayGoodbye = function (name) {
        console.log(`안녕히가세요, ${name}님!`);
    };
    sayGoodbye('빙키');

    const sayHi = function greet(name) {
        console.log(`안녕하세요 ${name}님`);
        console.log(greet);
    };
    sayHi('소울곰');
    // greet('소울곰');

    console.log('===== 3. 화살표 함수 =====');
    // 익명함수, 함수 표현식(변수에 할당)
    // const arrowFunc = (param1, param2) => {
    //     console.log(param1, param2);
    // }

    const sumFunc = (num1, num2) => {
        console.log(num1, num2);
        return num1 + num2;
    };
    console.log(sumFunc(10, 20));

    // return 문만 있으면 중괄호 생략O
    const subFunc = (num1, num2) => num1 - num2;
    console.log(subFunc(20, 10)); // 10

    // 파라미터가 1개일 때는 소괄호를 생략O
    const addFunc = num1 => num1 + 10;
    console.log(addFunc(5));

    const printFunc = () => console.log('printFunc');
    printFunc();

    const arr = [10, 20, 30, 40, 50];
    const resultArr = arr.map((el) => el + 5); // 콜백함수
    // el 파라미터를 받아서, el + 5 반환
    console.log(resultArr);

    console.log('===== 콜백 함수 =====');
    // 다른 함수의 인자로 전달되는 함수를 콜백 함수
    function callFunc(name, callback) {
        console.log(`안녕하세요 ${name}님!`);
        callback();
    }

    function sayHello() {
        console.log('반갑습니다!');
    }

    callFunc('라이캣', sayHello);

    console.log('===== 재귀 함수 =====');
    // 자기 자신을 호출하는 함수
    // 팩토리얼: 5! = 5*4*3*2*1

    function factorial(num) {
        if(num === 0 || num === 1) {
            // 0! = 1
            return 1;
        }
        return num*factorial(num-1);
    }
    console.log(factorial(5));

    console.log('===== 즉시 실행 함수 =====');
    (function () {
        console.log('이 함수는 선언과 동시에 실행됩니다.');
    })();
}