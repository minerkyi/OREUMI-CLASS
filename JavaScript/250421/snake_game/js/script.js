// 1. 캔버스와 콘텍스트
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 2. 그리드 설정
const gridX = 20;
const gridY = 20;

// 3. 게임에서 사용될 변수
// 3-1. 뱀의 정보, 방향, 점수, 먹이 위치, 속도
let snakeInfo = [[60, 0], [40, 0], [20, 0], [0, 0], [-20, 0]];
let direction = 'R';
let arrow = 'R';
let score = 0;
let pizzaPosX = 0;
let pizzaPosY = 0;
let speed = 10;
let snakeX = 0;
let snakeY = 0;

// 4. 화면 생성
// 화면 그리기
// 먹이 생성
// 뱀의 이동 경로에 따라서 점수, 게임 종료
function moveSnake(arrow) {
  let add, idx;
  switch(arrow) {
    case 'L':
      add = [...snakeInfo[0]];
      add[0] = add[0] - gridX;
      break;
    case 'R':
      add = [...snakeInfo[0]];
      add[0] = add[0] + gridX;
      break;
    case 'D':
      add = [...snakeInfo[0]];
      add[1] = add[1] + gridY;
      break;
      case 'U':
        add = [...snakeInfo[0]];
        add[1] = add[1] - gridY;
        break;  
  }

  if(!checkGameOver(add)) {
    snakeInfo.unshift(add);
    snakeInfo.pop();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    snakeInfo.forEach((el) => {
      ctx.fillRect(el[0], el[1], gridX, gridY);
      ctx.strokeRect(el[0], el[1], gridX, gridY);
    });
  }
}

function checkGameOver(add) {
  let result = false;
  if(add[0] < 0 || add[0] >= 800 || add[1] < 0 || add[1] >= 600) {
    clearInterval(interval);
    console.log('game over');
    return true;
  }

  snakeInfo.forEach((el) => {
    if(el[0] === add[0] && el[1] === add[1]) {
      clearInterval(interval);
      console.log('game over');
      result = true;
      return;
    }
  });

  return result;
}

const interval = setInterval(() => {
  moveSnake(arrow);
}, 1000);

// 키보드 입력에 따라서 방향을 바꿈
window.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowLeft':
      if(arrow !== 'R') {
        direction = 'L';
        arrow = 'L';
      }
      break;
    case 'ArrowRight':
      if(arrow !== 'L') {
        direction = 'R';
        arrow = 'R';
      }
      break;
    case 'ArrowDown':
      if(arrow !== 'U') {
        arrow = 'D';
      }
      break;
    case 'ArrowUp':
      if(arrow !== 'D') {
        arrow = 'U';
      }
      break;
  }
});

function addTail() {
  let add;
  if(direction === 'L') {
    add = [...snakeInfo[snakeInfo.length - 1]];
    add[0] = add[0] - gridX;
    snakeInfo.push(add);
  } else {
    add = [...snakeInfo[0]];
    add[0] = add[0] + gridX;
    snakeInfo.unshift(add);
  }
}