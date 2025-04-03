console.log('===== 반복문 =====');

for(let i = 0; i <= 10; i++) {
    // 반복할 코드
    console.log(i);
}

const weniv_friends = ['licat', 'binky', 'gary', 'soulgom', 'mura'];

let text = '<ul>\n';
text += `<li>${weniv_friends[0]}</li>\n`;
text += `<li>${weniv_friends[1]}</li>\n`;
text += `<li>${weniv_friends[2]}</li>\n`;
text += `<li>${weniv_friends[3]}</li>\n`;
text += `<li>${weniv_friends[4]}</li>\n`;
text += '</ul>';
console.log(text);
document.body.innerHTML = text;

let text2 = '<ul>\n';
for(let i = 0; i < weniv_friends.length; i++) {
    text2 += `<li>${weniv_friends[i]}</li>\n`;
}
text2 += '</ul>';
console.log(text2);
document.body.innerHTML = text2;

console.log('1. 숫자 출력');
// 1부터 10까지 출력
// 1) 초기화는 1로
// 2) 조건식 10 보다 작거나 같을 때
// 3) 1 증가시키면서 반복
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('----------')
for(let i = 0; i < 10; i++) {
    console.log(i + 1);
}

// 2. 짝수의 합
// 1부터 100까지의 짝수의 합
// 1) 초기값 0 또는 1
// 2) 조건식: 100까지
let sum = 0;
for(let i = 2; i <= 100; i += 2) {
    sum += i;
}
console.log(sum);

{
    // 풀이
    // 1. 조건식
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        // 짝수일 경우에만 sum에 더한다.
        if(!(i % 2)) {
            sum += i;
        }
    }
    console.log(sum);

    let sum2 = 0;
    for(let i = 2; i <= 100; i += 2) {
        sum2 += i;
    }
    console.log(sum2);
}

// 3. 구구단
// 2단, 3단, 4단, ..., 9단
// 1단 * 1, * 2, ..., * 9
for(let i = 2; i <= 9; i++) {
    console.log(`===${i}===`);
    for(let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 4. 특정 조건의 합
// 100보다 작은 3의 배수와 5의 배수의 합
{
    let sum = 0;
    for(let i = 0; i < 100; i++) {
        //조건식
        //배수인지 확인하는 방법: 값으로 나머지 0
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}

let i = 0;
for(; i < 7; i++) {
    console.log(i);
}