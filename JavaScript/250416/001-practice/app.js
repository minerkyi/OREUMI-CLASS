import {add, sub, multi, div} from './basic.js';

// input 요소
const num1 = document.getElementById('num1-input');
const num2 = document.getElementById('num2-input');
const $resultText = document.getElementById('result-text');

// 기본 기능 버튼 요소
const $addBtn = document.getElementById('add-btn');
const $subBtn = document.getElementById('sub-btn');
const $multiBtn = document.getElementById('multi-btn');
const $divBtn = document.getElementById('div-btn');

// 고급기능 버튼 요소
const $advanceArea = document.getElementById('advance-area');
const $advanceBtn = document.getElementById('advance-btn');
const $powBtn = document.getElementById('pow-btn');
const $sqrtBtn = document.getElementById('sqrt-btn');

// 문자열 -> 숫자 변환
function StringToNumber(str) {
  return Number(str);
}

// 기본 기능 이벤트 등록
// 더하기
$addBtn.addEventListener('click', () => {
  $resultText.innerText = add(StringToNumber(num1.value), StringToNumber(num2.value))
});
// 빼기
$subBtn.addEventListener('click', () => {
  $resultText.innerText = sub(StringToNumber(num1.value), StringToNumber(num2.value))
});
// 곱하기
$multiBtn.addEventListener('click', () => {
  $resultText.innerText = multi(StringToNumber(num1.value), StringToNumber(num2.value))
});
//나누기
$divBtn.addEventListener('click', () => {
  $resultText.innerText = div(StringToNumber(num1.value), StringToNumber(num2.value));
});

// 고급 기능 활성화 이벤트 등록
$advanceBtn.addEventListener('click', async () => {
  // 고급 기능 DOM 제어
  $advanceBtn.style.display = 'none';
  $advanceArea.style.display = 'block';
  $resultText.innerText = '고급 계산기 기능이 활성화되었습니다. 이제 제곱과 제곱근 계산이 가능합니다.';

  // 고급 기능 js import
  const {pow, sqrt} = await import('./advance.js');

  // 제곱
  $powBtn.addEventListener('click', () => {
    $resultText.innerText = pow(StringToNumber(num1.value), StringToNumber(num2.value));
  });
  // 제곱근
  $sqrtBtn.addEventListener('click', () => {
    $resultText.innerText = sqrt(StringToNumber(num1.value), StringToNumber(num2.value));
  });
});