// 1. 캔버스와 콘텍스트
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 2. 그리드 설정
const gridSize = 30;
const gridWidth = Math.floor(canvas.width / gridSize);
const gridHeight = Math.floor(canvas.height / gridSize);

canvas.width = gridWidth * gridSize;
canvas.height = gridHeight * gridSize;

// 3. 게임에서 사용될 변수
// 3-1. 뱀의 정보, 방향, 점수, 먹이 위치, 속도
let snake = [{x: 0, y: 0}];
let dir = 'right';
let nextDir = 'right';
let score = 0;
let gameSpeed = 200; // ms 작을 수록 빨라짐

let food = {}; // .x, .y
const foodImg = new Image();
foodImg.src = './assets/pizza.png';

let gameOver = false;
let lastUpdateTime = 0;

// 4. 화면 생성
// 먹이 생성
function createFood() {
  food = {
    x: Math.floor(Math.random() * gridWidth),
    y: Math.floor(Math.random() * gridHeight)
  };

  // 뱀 몸 위에 먹이가 위치 -> createFood
  for(const pos of snake) {
    if(pos.x === food.x && pos.y === food.y) {
      return createFood();
    }
  }
}

// 화면 그리기
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 먹이 그리기
  ctx.drawImage(foodImg, food.x * gridSize, food.y * gridSize, gridSize, gridSize);

  // 뱀 그리기
  for(let i=0; i<snake.length; i++) {
    if(i === 0) {
      // 머리
      ctx.fillStyle = 'dodgerblue';
    } else {
      ctx.fillStyle = 'skyblue';
    }
    ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize);
  }

  // 그리드
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
  for(let i=0; i<gridWidth; i++) {
    for(let j=0; j<gridHeight; j++) {
      ctx.strokeRect(i * gridSize, j * gridSize, gridSize, gridSize);
    }
  }

  if(gameOver) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '50px pretendard';
    ctx.fillStyle = 'wihte';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 50);

    ctx.font = '20px pretendard';
    ctx.fillText(
      `최종 점수:${score}`,
      canvas.width /2,
      canvas.height / 2 + 20
    );
    ctx.fillText(
      "스페이스바를 눌러 게임을 다시 시작하세요",
      canvas.width / 2,
      canvas.height / 2 + 60
    );
  }
}

// 뱀의 이동 경로에 따라서 점수, 게임 종료
function moveSnake() {
  // 키보드로 수정 -> nextDir / 주기에 따라서 nextDir -> dir
  dir = nextDir;
  const head = {...snake[0]};

  switch(dir) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }

  if(checkCollision(head)) {
    gameOver = true;
    return;
  }
  snake.unshift(head);

  if(head.x === food.x && head.y === food.y) {
    score += 10;
    document.getElementById('score').innerText = score;

    createFood();
  } else {
    snake.pop();
  }
}

function checkCollision(head) {
  // 벽에 닿았을 때
  if (head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight) {
    return true;
  }

  // 자기 몸에 닿았을 때
  for (const pos of snake) {
    if (head.x === pos.x && head.y === pos.y) {
      return true;
    }
  }

  return false;
}

// 키보드 입력에 따라서 방향을 바꿈
document.addEventListener('keydown', (e) => {
  
  if(!gameOver && e.key === ' ') {
    initGame();
    return;
  }

  switch(e.key) {
    case 'ArrowUp':
      if(dir !== 'down') nextDir = 'up';
      break;
    case 'ArrowDown':
      if(dir !== 'up') nextDir = 'down';
      break;
    case 'ArrowLeft':
      if(dir !== 'right') nextDir = 'left';
      break;
    case 'ArrowRight':
      if(dir !== 'left') nextDir = 'right';
      break;
  }
});

function gameLoop(currentTime) {
  if(currentTime - lastUpdateTime > gameSpeed) {
    console.log(currentTime, lastUpdateTime);
    moveSnake();
    draw();
    lastUpdateTime = currentTime;
  }
  requestAnimationFrame(gameLoop);
}

function initGame() {
  snake = [{x: 0, y: 0}];
  dir = 'right';
  nextDir = 'right';
  score = 0;
  document.getElementById('score').innerText = score;
  gameSpeed = 200; // ms 작을 수록 빨라짐

  food = {}; // .x, .y
  gameOver = false;

  createFood();
  gameLoop();
}

initGame();