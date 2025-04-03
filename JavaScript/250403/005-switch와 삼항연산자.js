console.log('===== switch =====');
let month = 4;
let season;
switch(month) {
    case 3:
    case 4:
    case 5:
        season = '봄';
        break;
    case 6:
    case 7:
    case 8:
        season = '여름';
        break;
    case 9:
    case 10:
    case 11:
        season = '가을';
        break;
    case 12:
    case 1:
    case 2:
        season = '겨울';
        break;
    default:
        season = '올바른 입력이 아닙니다';
}
console.log(season);

const today = new Date();
console.log(today.getDay()); // 요일
// 0 일, 1 월, 2 화, 3 수, 4 목, 5 금, 6 토

switch(today.getDay()) {
    case 0:
        console.log('일요일');
        break;
    case 1:
        console.log('월요일');
        break;
    case 2:
        console.log('화요일');
        break;
    case 3:
        console.log('수요일');
        break;
    case 4:
        console.log('목요일');
        break;
    case 5:
        console.log('금요일');
        break;
    case 6:
        console.log('토요일');
        break;
    default:
        console.log('올바른 요일이 아닙니다.');
}

console.log('===== 삼항 연산자 =====');
let score = 80;

console.log(score > 50 ? '참 잘했어요' : '잘했어요');

const result =
score > 50 ? console.log('참 잘했어요') : console.log('잘했어요');
console.log(result);

let item = false ? 'apple' : 'banana';
console.log(item);

console.log('----- 중첩된 삼항 연산자 -----');
score = 80;

let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
console.log('grade', grade);