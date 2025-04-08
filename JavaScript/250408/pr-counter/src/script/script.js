// 1. 요소 선택
const $countText = document.getElementById('count-text');
// DOM 요소는 변수명 앞에 $를 표시
// console.log(countText);

const $decreaseBtn = document.getElementById('decrease-btn');
const $resetBtn = document.getElementById('reset-btn');
const $increaseBtn = document.getElementById('increase-btn');
// console.log($decreaseBtn, $resetBtn, $increaseBtn);

let count = 0;
$decreaseBtn.addEventListener('click', () => {
    count--;
    renderCounter();
});

$resetBtn.addEventListener('click', () => {
    count = 0;
    renderCounter();
});

$increaseBtn.addEventListener('click', () => {
    count++;
    renderCounter();
});

function renderCounter() {
    // 1. 컨텐츠 변경
    $countText.innerText = count;

    // 2. count 값에 따라 스타일 속성
    // if(count > 0) {
    //     // 양수: 빨간색
    //     $countText.style.color = 'red';
    // } else if(count < 0) {
    //     $countText.style.color = 'blue';
    // } else {
    //     $countText.style.color = 'black';
    // }

    // 2.2 클래스를 이용한 스타일 조작
    if(count > 0) {
        $countText.classList.add('positive');
        $countText.classList.remove('negative');
    } else if(count < 0) {
        $countText.classList.add('negative');
        $countText.classList.remove('positive');
    } else {
        $countText.classList.remove('positive', 'negative');
    }
}