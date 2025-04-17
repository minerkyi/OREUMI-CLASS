import { add, subtract, multiply, divide } from './calculator/basic.js';
import { userState, changeUserState } from './user/userManager.js';

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultText = document.getElementById('result');

const upgradeBtn = document.getElementById('upgrade-btn');
console.log(upgradeBtn);

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

upgradeBtn.addEventListener('click', async () => {
  // 고급 사용자 기능 활성화
  changeUserState(true);

  if(userState) {
    try {
      const { power, squareRoot } = await import('./calculator/advance.js');

      document.getElementById('power').addEventListener('click', () => {
        calculator(power);
      });

      document.getElementById('squareRoot').addEventListener('click', () => {
        calculator(squareRoot);
      });

      // UI 화면 변경
      document.getElementById('advance-calculator').style.display = 'block';
      upgradeBtn.style.display = 'none';
      resultText.textContent = '고급 계산기 기능이 활성화되었습니다.';
    } catch(error) {
      resultText.textContent = '[오류] 고급 계산기 기능을 로드할 수 없습니다.';
    }
  } else {
    resultText.textContent('고급 계산기 사용 권한이 없습니다.');
  }
});

function calculator(operation) {
  try {
    // 유효성 검사
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // isNaN(타입 변환, 숫자로 변환), Number.isNaN(타입 변환X)
    if(isNaN(num1)) {
      throw new Error('유효한 첫번째 숫자를 입력해주세요');
    }

    if(isNaN(num2)) {
      throw new Error('유효한 두번째 숫자를 입력해주세요');
    }

    const result = operation(num1, num2);

    if(isNaN(result) || !isFinite(result)) {
      throw new Error('계산 결과가 유효하지 않습니다.');
    }

    resultText.textContent = result;
  } catch(error) {
    console.error(error);
    resultText.textContent = `[오류] ${error.message}`;
  }
}