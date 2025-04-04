console.log('===== 스코프 =====');
// 스코프: 변수의 범위
// 1. 전역 스코프
// 2. 함수 스코프 var
// 3. 블록 스코프 let const

// 렉시컬 스코프: 코드가 작성되는 위치에 유효범위를 갖는다.
// 렉시컬 환경 
// (1) 환경 레코드: 스코프 안에 저장된 함수, 변수
// (2) 외부 환경 참조: 상위 스코프에 대한 정보
const x = 10; // 전역 스코프 (1) x, outer (2)X

function outer() {
    // (1) y, inner
    // (2) -> 전역 스코프
    const y = 20; // outer 함수 지역 스코프
    console.log(x, y);

    function inner() {
        const z = 30; // inner 함수 지역 스코프
        console.log(x, y, z);
    }
    inner();
}
outer();

console.log('===== 클로저 =====');
{
    function outer() {
        const outVar = 'outer 변수';
        function inner() {
            console.log(outVar);
        }
        return inner;
    }
    const innerFunc = outer(); // inner함수, outVar를 기억하고 렉시컬 환경
    innerFunc();
}

{
    function createCounter() {
        let counter =0; // 외부에서 counter로 접근X

        return function() {
            counter++;
            console.log(counter);
        }
    }
    const counter1 = createCounter();
    counter1(); // 1
    counter1(); // 2

    console.log('----------');
    const counter2 = createCounter();
    counter2(); // 1

    // console.log(counter); // 직접 접근X
}

{
    // 모듈
    console.log('===== 모듈 패턴 =====');
    const counter = (function() {
        let count = 0;

        return {
            increment: function() {
                count++;
                console.log(count);
            },
            decrement: function() {
                count--;
                console.log(count);
            },
            getCount: function() {
                console.log(count);
            },
        };
    })();
    counter.getCount();
    counter.increment();
    counter.increment();
    counter.decrement();
}

{
    console.log('스로틀링');
    // 이벤트가 발생한 시점 + delay -> 이벤트를 실행하지X
}

{
    console.log('디바운싱');
    // 이벤트의 마지막 시점을 + delay -> 이벤트를 실행
}