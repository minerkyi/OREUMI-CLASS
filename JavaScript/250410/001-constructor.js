// 프로그램 패러다임
// 1. 절차적 프로그래밍: 순차적으로 코드를 작성

// 2. 함수형 프로그래밍: 함수를 값으로 사용 가능, 함수에 인자로 전달/ 함수의 반환값을 함수

// 3. 객체지향 프로그래밍: 객체를 중심으로 코드를 작성
// - 객체: 상태나 행동을 가지는 단위

// - 객체: 상태(프로퍼티)나 행동(메서드)을 가진다
const teacher = {
    name: '백경현',
    job: '프론트엔드 개발자',
    skill: ['HTML', 'CSS', 'JavaScript'],
    introduce() {
        console.log(`안녕하세요 ${this.name}입니다.`)
    },
    teach(student) {
        student.levelUp();
    }
};

const student1 = {
    name: '승훈',
    level: 1,
    levelUp() {
        this.level++;
    },
};
teacher.teach(student1);
teacher.teach(student1);
teacher.teach(student1);
console.log(student1);

const student2 = {
    name: '광석',
    level: 1,
    levelUp() {
        this.level++;
    }
};
teacher.teach(student2);
console.log(student2);
// 객체와 객체가 메서드를 통해서 상호작용

// 자바스크립트 객체 생성
// 1. 객체 리터럴 { }

// 2. 생성자 함수 (constructor)
// 객체를 만들기 위한 틀

// 우리가 사용해본 생성자 함수 => 내장 생성자 함수
const myArr1 = [1, 2, 3]; // 리터럴
const myArr2 = new Array(1, 2, 3); // 생성자 함수
const myArr3 = new Array(1, 2, 3, 4);
console.log(myArr2.length);
console.log(myArr3.length);
myArr2.map((el) => console.log(el));
myArr3.map((el) => console.log(el));

// 커스텀 생성자 함수
// 일반 함수와 구분하기 위해서 파스칼 케이스
// 생성자 함수는 new 키워드와 함께 사용한다.
function Student(name) {
    this.name = name;
    this.level = 1;
    this.levelUp = function() {
        this.level++;
    };
}

// 생성자 함수로 만들어진 객체 -> 인스턴스
const conStudent1 = new Student('경현');
console.log(conStudent1);
const conStudent2 = new Student('규진');
console.log(conStudent2);

console.log(conStudent1 instanceof Student); // true
console.log(student2 instanceof Student); // false

conStudent1.levelUp();
conStudent2.levelUp();
conStudent2.levelUp();
console.log('level', conStudent1.level);
console.log('level', conStudent2.level);

console.log(conStudent1.levelUp === conStudent2.levelUp); // false
// 생성자 함수는 각각의 함수를 만들어서 메모리 낭비가 발생

// 프로토타입
// 객체가 상속을 통해 프로퍼티와 메서드를 공유할 수 있는 기능을 제공하는 객체
function User(name, age) {
    this.name = name;
    this.age = age;
    this.level = 1;
}
User.prototype.levelUp = function() {
    this.level++;
};
// 생성자 함수 prototype 속성 -> 객체(constructor 속성으로 생성자 함수)
console.log('prototype', User.prototype);
// 모든 객체는 [[Prototype]] 내부 슬롯
// __proto__ / Object.getPrototype(user))

const user1 = new User('경현', 20);
console.log(user1); // user1은 User의 인스턴스
console.log(Object.getPrototypeOf(user1) === User.prototype); // true
user1.levelUp();
console.log(user1);

const user2 = new User('유진', 20);
console.log(user2);
user2.levelUp();
console.log(user2);
console.log(user1.levelUp === user2.levelUp); // true
// prototype을 이용해서 메서드를 공유

// Object prototype
// 프로토타입 체이닝을 통해서 다른 객체의 메서드를 사용할 수가 있다.
console.log('Object prototype', Object.prototype);
console.log('name:', user2.hasOwnProperty('name'));
console.log('hasOwnProperty:', user2.hasOwnProperty('hasOwnProperty'));

console.log(myArr1);

console.log('----- 프로토타입 메서드 찾기 -----');
function Test(name) {
    this.name = name;
    // this.hasOwnProperty = function() {
    //     console.log('인스턴스 메서드');
    // }
}
Test.prototype.hasOwnProperty = function() {
    console.log('프로토타입 메서드');
};

const test1 = new Test('함수 호출 테스트');
console.log(test1);

console.log(test1.hasOwnProperty());
// 1. 인스턴스 객체에서 메서드 탐색
// 2. 없으면 [[Prototype]]을 통해 생성자 함수의 prototype(Test.prototype)
// 3. 없으면 [[Prototype]]을 통해 Object.prototype 탐색
// 4. 없으면 TypeError 발생
// -> 프로토타입 체이닝을 통해 메서드 탐색

// 상속
function Parent(name) {
    this.name = name;
}
Parent.prototype.rename = function(name) {
    this.name = name;
};
Parent.prototype.sayHello = function() {
    console.log(`안녕하세요 ${this.name}입니다.`); // 메서드를 호출한 객체
};

function Child(name) {
    Parent.call(this, name); 
    // Child 호출했을 때 만들어지는 빈 객체 (-> 인스턴스)
}
// 부모 생성자 함수의 프로퍼티
const child1 = new Child('자식1');
console.log(child1);
// 프로토타입 메서드
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// 오버라이딩: 부모의 메서드를 자식 재정의
// 부모 메서드 사용 불가 -> 프로퍼티 섀도잉
Child.prototype.sayHello = function() {
    console.log(`안녕하세요 ${this.name}입니다. (child)`);
};

// 인스턴스
const child2 = new Child('자식2');
console.log('자식2', child2);
child2.sayHello();
child2.rename('자식3');
child2.sayHello();

// 프로토타입 기반 생성자 함수 단점
// 1. 상태 + 행동 -> 객체: 캡슐화, 구문 분산
// ~ 상태와 행동이 분산되어 있다는 단점
// 2. 클래스 기반
// -> ES6에서 클래스 문법을 도입