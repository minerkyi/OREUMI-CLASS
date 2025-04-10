// this
// 생성자함수 ,클래스, 이벤트

// this 함수가 호출 방식, 사용되는 위치에 따라서 가리키는 값이 달라지는 특수한 키워드

// 1. 전역 범위 this
console.log(this); // 전역 객체 window

// 2-1. 일반 함수를 호출
function func1() {
    console.log('일반 함수', this);
}
func1(); // 전역 객체 window

function outer() {
    function inner() {
        console.log('내부 함수:', this);
    }
    inner(); // 일반 함수로 호출 -> window 전역 객체
}
outer();

// 2-2. 메서드
const obj1 = {
    name: '객체',
    func1() {
        console.log('객체의 메서드:', this);
    }
};
obj1.func1(); // 메서드를 호출한 객체(. 앞에 작성된 객체)

// 2-3. 메서드 내부에서 함수
console.log('=================');
const obj2 = {
    name: '객체2',
    func2() {
        function inner() {
            console.log('객체2의 inner', this);
        }
        console.log('obj2의 func2', this);
        inner(); // 일반 함수 호출 this는 전역객체
    }
};
obj2.func2();

// 2-4. 화살표 함수
// 자신만의 this (x) 상위 스코프의 this -> 렉시컬 this
const arrowFunc = () => {
    console.log('전역의 화살표 함수:', this); // window
};
arrowFunc();

const obj3 = {
    name: '객체3',
    func3() {
        console.log('객체3의 func3', this);
        const innerFunc = () => {
            console.log('innerFunc(화살표함수):', this);
        };
        innerFunc();
    }
};
obj3.func3();

// 2-5. 생성자 함수
// new 키워드와 함께 함수를 호출
function Person(name) {
    // this는 인스턴스
    this.name = name;
}
const pesron1 = new Person('경현');
const pesron2 = new Person('유진');

// 일반 함수로 호출하면 this는 window
const person3 = Person('민승');
console.log(person3); // undefined
console.log(window.name);

// 2-6. 클래스
// 문법적 설탕: 내부 로직이 동일하고, 더 깔끔한 문법
class Person2 {
    // this는 인스턴스
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}
const person4 = new Person2('경현2');
console.log(person4);
person4.sayName();

// 2-7. 이벤트 핸들러 this
const $button = document.getElementById('click-btn');
$button.addEventListener('click', function() {
    // 이벤트가 등록된 DOM 요소
    // this (e.currentTarget);
    console.log(this);
});
// 화살표 함수: 자신만의 this, 상위 스코프 this window

// this 조작법
const user = {
    name: '알리',
    sayName() {
        console.log(`내 이름은 ${this.name}`);
    },
    saySkill(skill1, skill2) {
        console.log(`${this.name}의 기술은 ${skill1}과 ${skill2}`);
    }
};
user.sayName();
user.saySkill('Data', 'AI');

const bot = {
    name: '알리봇'
};

// call: 호출과 동시에 this를 지정
user.sayName.call(bot);
user.saySkill.call(bot, '디스코드', '데이터수집');

// 2. apply
// 호출과 동시에 this를 지정
user.sayName.apply(bot);
user.saySkill.apply(bot, ['디스코드', '데이터수집']);

// 3. bind
// this가 고정된 새로운 함수
const boundFunc = user.sayName.bind(bot);
console.log(boundFunc);
boundFunc();
boundFunc();
boundFunc();

class Counter {
    constructor() {
        this.count = 0;
        this.button = document.getElementById('counter-btn');

        this.button.addEventListener('click', this.increase.bind(this));
    }

    increase() {
        this.count++;
        console.log(this.count);
    }
}
const counter1 = new Counter();
console.log(counter1);