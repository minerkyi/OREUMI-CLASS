console.log('===== break =====');

// 0부터 9까지 출력
// i가 5가 되면 break: 반복문 종료
console.log('----- for문 break -----');
for(let i = 0; i < 10; i++) {
    console.log(i);

    if(i === 5) break;
}

// while break
console.log('----- while문 break -----');
// 1부터 5까지 출력하는 while문
// 3의 배수가 되면 반복문 종료
let i = 1;
while(i <= 5) {
    console.log(i);
    
    if(i % 3 === 0) break;
    i++;
}

console.log('----- 배열에서 검색하는 기능 -----');
const numbers = [10, 20, 30, 40, 50, 60];
const target = 40;

let hasTarget = false;
let targetIndex = -1;

for(let i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i]);
    if(numbers[i] === target) {
        console.log('요소를 찾았습니다');
        hasTarget = true;
        targetIndex = i;
        break;
    }
}
console.log(`hasTarget:${hasTarget}, targetIndex:${targetIndex}`);

console.log('----- break -----');
outLoop: for(let i = 1; i <= 3; i++) {
    console.log('----------')
    for(let j = 1; j <=3; j++) {
        console.log(`i:${i}, j:${j}`);

        if(i === 2 && j === 2) {
            break outLoop;
        }
    }
}

console.log('===== continue =====');
console.log('----- for continue -----');
for(let i = 0; i < 10; i++) {
    if(i === 5) continue;
    console.log(i);
}

console.log('----- for 홀수 출력 -----');
for(let i = 1; i <= 10; i++) {
    // 홀수만 출력 -> i가 짝수일 때 continue
    if(i % 2 === 0) continue;
    console.log(i);
}

const users = [
    {
    "index": "1",
    "name": "보다원",
    "age": "25"
    },
    {
    "index": "2",
    "name": "도호준",
    "age": "28"
    },
    {
    "index": "3",
    "name": "팽이랑",
    "age": "17"
    },
    {
    "index": "4",
    "name": "경강",
    "age": "22"
    },
    {
    "index": "5",
    "name": "동이현",
    "age": "15"
    }
];

console.log('성인인 사람들만 이름과 나이를 출력');
for(let i = 0; i < users.length; i++) {
    // 미성년자 -> continue
    if(users[i].age < 18) continue;
    console.log(`${users[i].name} (${users[i].age})`);
}

console.log('----- 중첩반복문과 continue -----');
outLoop:for(let i = 1; i <= 3; i++) {
    console.log('----------')
    for(let j = 1; j <=3; j++) {
        if(i === 1 && j === 1) {
            continue outLoop;
        }

        console.log(`i:${i}, j:${j}`);
    }
}