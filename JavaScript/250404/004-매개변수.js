console.log('1. 기본값');

function printNumbers(num1 = 10, num2 = 20, num3 = 30) {
    console.log(num1, num2, num3);
    return num1 + num2 + num3;
}
console.log(printNumbers(10, 20, 30));
console.log(printNumbers(10, 20));
console.log(printNumbers()); // num1 = 10, num2 = 20, num3 = 30
console.log(printNumbers(0, 0, 0));

console.log(printNumbers(num1=100, num3=200));
// printNumbers(100, 200)과 동일하게 동작
console.log((x = 5)); // 값으로 평가되었을 때 5
// num1은 100, num2는 200, num3 30(기본값)

// 속성 파라미터의 기본값 사용하기
// 해당 인자에 undefined
// num1에 20, num2는 기본값(20), num3는 40을 넣고 싶다면
console.log(printNumbers(20, undefined, 40));
{
    console.log('===== 2. 구조 분해 할당 =====');
    console.log('----- 2-1. 객체의 구조 분해 할당 -----');

    const user = {
        name: '라이캣',
        age: 20,
        company: '위니브',
        skills: ['HTML', 'CSS', 'JavaScript'],
    }
    // const name = user.name;
    // const age = user.age;
    // const company = user.company;
    // const skills = user.skills;

    // console.log(name, age, company, skills);

    // 기본값
    const {name, age, location = '제주', ...rest} = user;
    console.log('name', name);
    console.log('age', age);
    console.log('location', location); // 해당 객체에 없는 프로퍼티 키 undefined
    console.log(rest);

    // const {key: 변수명} = {key: value}
    const {name: userName, age: userAge} = user;
    console.log(userName);
    console.log(userAge);

    console.log('2. 배열의 구조 분해 할당');
    const arr = [10, 20, 30];
    // const a = arr[0];
    // const b = arr[1];
    // const c = arr[2];
    // console.log(a, b, c);

    const [a, b, c] = arr;
    console.log(a);
    console.log(b);
    console.log(c);

    const [num1, _, num2] = arr;
    console.log(num1);
    console.log(num2); // 필요한 값만 추출

    console.log('나머지 매개변수(...)');
    const [num, ...numbers] = [10, 20, 30, 40];
    console.log(num); // 10
    console.log(numbers); // [20, 30, 40]

    // const [...numbers2, num3]  = [10, 20, 30, 40];
    // console.log(numbers2);
    // console.log(num3);

    // 배열을 결과로 반환하는 메서드를 처리
    const phoneNumber = '010-1234-5678';
    const [one, two, three] = phoneNumber.split('-');
    console.log('one:', one);
    console.log('two:', two);
    console.log('three:', three);
}

{
    console.log('===== 함수의 구조 분해 할당 =====');
    function printUser({name, age = 15, company = '위니브'} = {}) {
        console.log(`이름: ${name}, 나이: ${age}, 회사: ${company}`);
    }
    // printUser('라이캣', 20, '위니브');
    printUser({company: '위니브', name: '라이캣', age: 20});
    printUser({name: '빙키', age: 10});
    // const {name, age, company} = {name: 빙키, age: 10};
    printUser({name: '뮤라'});
    printUser({
        name: '하티', 
        age: 20, 
        company: '위니브', 
        job: 'FE', 
        hobby: 'baseball'
    });

    printUser(); // undefined
    // const {name, age = 15, company = '위니브'} = undefined;

    function arrayFunc([a, b, c = 10] = []) {
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
    }
    arrayFunc([1, 2, 3]);
    arrayFunc([1, 2]); // undefined

    arrayFunc(); // undefined는 구조 분해 할당 불가
}

{
    console.log('===== 나머지 매개변수 =====');
    // 1. 매개변수에서 1개만 존재
    // 2. 매개변수의 마지막에 와야한다.
    function restFunc(a, b, ...args) {
        console.log(`a: ${a}, b: ${b}, args: ${args}`);
    }
    restFunc(10, 20, 30, 40, 50, 60);
}

{
    console.log('===== 전개 구문과 나머지 매개변수 =====');
    console.log('사용되는 위치에 따라서 구분');
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const newArr = [...arr1, ...arr2]; // spread
    console.log('newArr:', newArr);
    //객체나 배열 안에서 작성되는 ... -> 전개 구문

    const {name, age, ...rest} = {name: '위니브', age: 20, location: '제주'};
    console.log(rest);
    function func1(a, b, ...rest) {
        console.log(rest);
    }
    // 구조분해할당, 함수의 매개변수 ... -> 나머지 매개변수
}