// 클래스
// ES6 도입
// 클래스 붕어빵틀 / 인스턴스 붕어빵
class Robot {
    // 생성자 함수
    // 클래스 당 1개만 존재
    // new 키워드와 함께 클래스를 호출할 때 자동으로 실행
    constructor(name) {
        this.name = name;
    }

    // 메서드를 정의
    introduce() {
        console.log(`삐빅 저는 ${this.name}입니다.`);
    }
    
    move() {
        console.log(`${this.name}이 이동 중 입니다.`);
    }
}

const robot1 = new Robot('로봇캣');
const robot2 = new Robot('알리봇');

robot1.introduce();
robot2.introduce();
console.log(robot1);

console.log(Robot.prototype);
// 내부적으로 생성자 함수와 동일하게 프로토타입 기반으로 동작
// 클래스처럼 사용할 수 있는 문법
// -> sugar syntax (문법적 설탕)

// 클래스에 추가된 문법
// [1] 상속
// extends 키워드 사용
// 상속을 받은 클래스: 파생 클래스(derived class)
class BabtRobot extends Robot {
    // 파생 클래스에서 constructor 생략 -> 부모 constructor 호출
    constructor(name, age) {
        super(name); // 부모 클래스 생성자 호출
        this.age = age;
        this.owner = '위니브';
    }

    // 부모 클래스에 있는 메서드 이름, 매개변수가 동일한 함수
    // 메서드 재정의 -> 오버라이딩
    introduce() {
        console.log(`삐빅- 저는 위니브의 ${this.name}입니다.`);
    }

    // 오버로딩
    introduce(friend) {
        console.log(`내 친구는 ${friend} 입니다.`);
    }
}
const babyRobot1 = new BabtRobot('알리봇2', 10);
console.log(babyRobot1);
babyRobot1.introduce();

// [실습] 소시지 만들기
// 1. 소시지 클래스
// - 두 가지 매개변수 -> 맛1, 맛2
// - eat() 메서드 -> {맛1}과 {맛2} 맛이 난다!
// 풀이
class Sausage {
    constructor(taste1, taste2) {
        this.taste1 = taste1;
        this.taste2 = taste2;
    }

    eat() {
        console.log(`${this.taste1}과 ${this.taste2} 맛이 난다!`)
    }
}
const sausage1 = new Sausage('소고기', '파');
console.log(sausage1);
const sausage2 = new Sausage('닭고기', '치즈');
console.log(sausage2);
sausage2.eat();

/*
class Sausage {
    constructor(taste1, taste2) {
        this.taste1 = taste1;
        this.taste2 = taste2;
    }

    eat() {
        console.log(`${this.taste1}과 ${this.taste2} 맛이 난다!`);
    }
}
*/

// 2. 직화 소시지 클래스
// - 파생 클래스
// - 두 가지 매개변수 -> 맛1, 맛2
// - eat() 메서드 -> {맛1}과 {맛2} 맛이 난다! 불맛이 난다!
// 풀이
class GrilledSausage extends Sausage {
    constructor(taste1, taste2) {
        super(taste1, taste2);
    }
    eat() {
        console.log(`${this.taste1}과 ${this.taste2} 맛이 난다! 불 맛도 난다!`);
    }
}
const grilledSausage1 = new GrilledSausage('닭고기', '떡');
console.log(grilledSausage1);
grilledSausage1.eat();

/*
class FireSausage extends Sausage {
    eat() {
        console.log(`${this.taste1}과 ${this.taste2} 맛이 난다! 불맛이 난다!`)
    }
}
*/

// [2] 비공개 프로퍼티
// 객체의 중요한 정보를 안전하게 보호
class PwRobot extends Robot {
    constructor(name, password) {
        super(name);
        this.password = password;
    }

    login(password) {
        if(password === this.password) {
            console.log(`<system> ${this.name} 접속 성공`);
        } else {
            console.log(`<system> ${this.name} 접속 실패`);
        }
    }
}
const pwRobot1 = new PwRobot('로보캣', '1234');
console.log(pwRobot1);
pwRobot1.introduce()
pwRobot1.login('1234');
console.log(pwRobot1.password);
pwRobot1.password = '0000';
console.log(pwRobot1.password);
pwRobot1.login('1234');
// 직접 접근할 수 없는 안전한 속성 => 비공개 프로퍼티
class SafeRobot extends Robot {
    #password;

    constructor(name, password) {
        super(name);
        this.#password = password;
    }

    login(password) {
        if(password === this.#password) {
            console.log(`<system> ${this.name} 접속 성공`);
        } else {
            console.log(`<system> ${this.name} 접속 실패`);
        }
    }

    get password() {
        return this.#password;
    }

    set password(newPassword) {
        this.#password = newPassword;
    }
}

const safeRobot1 = new SafeRobot('안전한 로봇', '1234');
console.log(safeRobot1);
// console.log(safeRobot1.#password);
safeRobot1.login('1234');
// safeRobot1.#password = '0000';

// getter, setter 메서드
// 일반 프로퍼티처럼 접근이 가능
console.log(safeRobot1.password);
safeRobot1.password = '0000';
console.log(safeRobot1.password);

// getter, setter -> 일반 프로퍼티처럼 접근은 가능 내부 로직을 파악하기 어려움
