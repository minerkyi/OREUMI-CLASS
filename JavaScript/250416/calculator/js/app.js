import { add, subtract, multiply, divide } from './calculator/basic.js';
import { userState, changeUserState } from './user/userManager.js';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

const resultText = document.getElementById('result');

const upgradeBtn = document.getElementById('upgrade-btn');

// 기본 계산기 기능
document.getElementById('add').addEventListener('click', () => {
  calculator(add);
});
document.getElementById('subtract').addEventListener('click', () => {
  calculator(subtract);
});
document.getElementById('multiply').addEventListener('click', () => {
  calculator(multiply);
});
document.getElementById('divide').addEventListener('click', () => {
  calculator(divide);
});

function calculator(callback) {
  try {
    // 유효성 검사
    const num1 = num1Input.value;
    const num2 = num2Input.value;
    const result = callback(num1, num2);
    console.log()
  } catch(error) {

  }
}