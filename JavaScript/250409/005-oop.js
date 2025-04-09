// 객체 지향 프로그램
// 코드를 작성하는 방식, 패러다임
// 자바스크립트의 패러다임
// 1. 명령형(절차형) 프로그래밍: 상태, 상태 변경 연산
// - 순차적 명령어 작성, 변수에 값을 할당하고 변경하는 방식

// 2. 함수형
// - 순수 함수(같은 입력 같은 결과, 부가적인 변경X) 함수
// - 함수에서 데이터를 직접 수정X, 새로운 데이터를 반환
// - ex) RORO: 객체를 받아서 객체를 반환

// 3. 객체지향
// - 객체: 데이터(속성)와 데이터를 조작하는 메서드(행동)
// 객체를 중심으로 프로그램을 구성하는 방법론

const teacher = {
    name: '백경현',
    age: 20,
    job: '프론트엔드 개발자',
    skills: ['HTML', 'CSS', 'JavaScript'],
    teaching(student) {
        student.levelUp();
    },
};

const student1 = {
    name: '학생1',
    level: 1,
    levelUp() {
        this.level++; // this.level++; === (student.level++)
    },
}

teacher.teaching(student1);
console.log('student1의 레벨:', student1.level);

// 객체 리터럴({}): 프로퍼티, 메서드를 반복해서 작성
// -> 생서자 함수

// 배열 리터럴([])
// new Array: 생성자 함수
const arr = new Array(1, 2, 3); // [1, 2, 3];

const myArr1 = new Array(1, 2, 3);
const myArr2 = new Array(1, 2, 3);

console.log(myArr1);
console.log(myArr2);

// 생성자 함수: 객체를 만드는 틀
// 파스칼 케이스로 작성
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`안녕하세요 ${this.name}입니다.`);
    }
}
const user1 = new Person('경현', 30);
const user2 = new Person('승훈', 20);

user1.introduce();
user2.introduce();
// user1, user2는 인스턴스
// 인스턴스는 생성자 함수를 통해 생성된 객체

// 생성자 함수의 인스턴스인지 확인
console.log(user1 instanceof Person); // true
console.log(myArr1 instanceof Person); // false
console.log(myArr1 instanceof Array); // true

console.log(user1.constructor); // Person
console.log(myArr1.constructor); // Array

// 로봇
function Robot(name) {
    this.name = name;
    this.introduce = function() {
        console.log(`삐빅~ 저는 ${this.name}입니다.`);
    };
    this.select = function (arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
}
const robot1 = new Robot('알리봇');
console.log(robot1.name);
robot1.introduce();

const robot2 = new Robot('로보캣');
console.log(robot2.name);
robot2.introduce();

// const robot3 = new Robot('주문봇', ['김밥', '라면', '돈까스', '튀김']);
// console.log(robot3.orderMenu());
const foodRobot = new Robot('음식로봇');
foodRobot.introduce();

const menuList = [
    "햄버거",
    "피자",
    "스파게티",
    "치킨",
    "초밥",
    "돈까스",
    "샐러드",
    "국수",
    "떡볶이",
    "김밥",
];
console.log(foodRobot.select(menuList));
console.log(robot1.introduce === robot2.introduce);
// 생성자 함수가 호출될 때마다 메서드는 새롭게 만들어짐

// 프로토타입
function UpdatePerson(name, age) {
    this.name = name;
    this.age = age;
}

UpdatePerson.prototype.introduce = function() {
    console.log(`안녕하세요 ${this.name}입니다.`);
}

const updateUser1 = new UpdatePerson('경현', 30);
const updateUser2 = new UpdatePerson('용일', 20);
console.log(updateUser1.name);
console.log(updateUser2.name);

updateUser1.introduce();
updateUser2.introduce();
// 프로토타입을 이용하면 인스턴스들이 공유할 기능을 작성
// 메서드 공유가 가능
console.log(updateUser1.introduce === updateUser2.introduce);
console.log(updateUser1);
console.log(updateUser2);

const obj1 = {name: '위니브'};
console.log(obj1);
console.log(updateUser1.__proto__); // 프로토타입
console.log(Object.getPrototypeOf(updateUser1));

console.log('생성자 함수', UpdatePerson.prototype);

// function Robot(name) {
//     this.name = name;
//     this.introduce = function() {
//         console.log(`삐빅~ 저는 ${this.name}입니다.`);
//     };
//     this.select = function (arr) {
//         const randomIndex = Math.floor(Math.random() * arr.length);
//         return arr[randomIndex];
//     }
// }

function RobotProto(name) {
    this.name = name;
}

RobotProto.prototype.introduce = function() {
    console.log(`삐빅~ 저는 ${this.name}입니다.`);
};

RobotProto.prototype.select = function(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

const robotA = new RobotProto('학생');
const robotB = new RobotProto('교수');
robotA.introduce();
console.log(robotA.select(menuList));
console.log(robotA);