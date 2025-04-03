// 조건문
console.log('----- 1. if 조건문 -----')
if(false) {
    // 실행할 코드
    console.log('이 코드는 항상 실행됩니다');
}

let trafficLight = 'red';
if(trafficLight === 'green') {
    console.log('길을 건너세요!');
}

let age = 24;
if(age > 20) {
    console.log('성인입니다!');
}

let name = '위니브';
if(name) {
    console.log(`안녕하세요 ${name}님`);
}

console.log('----- 2. else문 -----');
if(true) {
    console.log('조건을 만족했을 때 실행할 코드');
} else {
    console.log('조건을 만족하지 않았을 때 실행할 코드');
}

let x = 5;
let y = 5;

if(x === y) {
    console.log('x와 y가 같습니다.');
} else {
    console.log('x와 y가 같지 않습니다.');
}

console.log('----- 3. else if문 -----');
x = 20;
y = 30;
if(x === y) {
    console.log('x와 y가 같습니다.');
} else if(x > y) {
    console.log('x가 y보다 큽니다.');
} else {
    console.log('x가 y보다 작습니다.');
}

console.log('==========')
const score = 80;
let grade;
// 90점 이상 A / 80점 이상 B / 70점 이상 C / 60점 이상 D / 그 외에는 F
// 성적을 출력
if(score >= 90) {
    grade = 'A';
} else if(score >= 80) {
    grade = 'B';
} else if(score >= 70) {
    grade = 'C';
} else if(score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log('성적:', grade);

// 월 정보에 따라서 계절을 출력하는 if 조건문
// month 3, 4, 5: 봄 / 6, 7, 8 여름 / 9, 10, 11 가을 / 12, 1, 2 겨울
const month = 4;
let season;

if(month >= 3 && month <= 5) {
    season = '봄';
} else if(month >= 6 && month <= 8) {
    season = '여름';
} else if(month >= 9 && month <= 11) {
    season = '가을';
} else {
    season = '겨울';
}
console.log(season);

{
    // 풀이
    let month = 4;

    if(parseInt(month) !== month || month < 1 || month > 12) {
        console.log('정확한 달이 아닙니다');
    } else if(month >= 3 && month <= 5) {
        console.log('봄');
    } else if(month >= 6 && month <= 8) {
        console.log('여름');
    } else if(month >= 9 && month <= 11) {
        console.log('가을');
    } else {
        console.log('겨울');
    }

    const spring = [3, 4, 5];
    const summer = [6, 7, 8];
    const autumn = [9, 10, 11];
    const winter = [12, 1, 2];

    if(spring.includes(month)) {
        console.log('봄');
    } else if(summer.includes(month)) {
        console.log('여름');
    } else if(autumn.includes(month)) {
        console.log('가을');
    } else if(winter.includes(month)) {
        console.log('겨울');
    } else {
        console.log('정확한 달이 아닙니다');
    }
}