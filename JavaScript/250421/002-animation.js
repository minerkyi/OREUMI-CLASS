// 애니메이션
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'tomato';
let boxX = 0;
let boxY = 0;
ctx.fillRect(boxX, boxY, 50, 50);

function moveBox() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  boxX += 1;
  boxY += 1;

  ctx.fillStyle = 'tomato';
  ctx.fillRect(boxX, boxY, 50, 50);

  requestAnimationFrame(moveBox);
}
// moveBox();

// 마우스를 따라 움직이는 원
ctx.clearRect(0, 0, canvas.width, canvas.height);
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
  drawCircle();
});

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
  ctx.fill();
}

// 키보드에 따라 이동하는 원
// 방향키로 원을 이동 - addEventListener
// 원의 초기 위치는 가운데 (canvas.width/2, canvas.height/2)
// 원이 캔버르를 벗어나지 않도록
// 풀이
let posX = canvas.width / 2;
let posY = canvas.height / 2;
let radius = 20;
let speed = 10;

function drawKeyboardCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'pink';
  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, Math.PI * 2);
  ctx.fill();
}
drawKeyboardCircle();

window.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowUp':
      posY -= speed;
      break;
    case 'ArrowDown':
      posY += speed;
      break;
    case 'ArrowLeft':
      posX -= speed;
      break;
    case 'ArrowRight':
      posX += speed;
      break;
  }

  if(posX < radius) posX = radius;
  if(posX > canvas.width - radius) posX = canvas.width - radius;
  if(posY < radius) posY = radius;
  if(posY > canvas.height - radius) posY = canvas.height - radius;

  drawKeyboardCircle();
});

// let arrowX = canvas.width/2;
// let arrowY = canvas.height/2;

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.arc(arrowX, arrowY, 50, 0, Math.PI * 2);
// ctx.fill();

// window.addEventListener('keydown', (e) => {
//   if(e.key === 'ArrowLeft') {
//     arrowX -= 5;
//   } else if(e.key === 'ArrowRight') {
//     arrowX += 5;
//   } else if(e.key === 'ArrowUp') {
//     arrowY -= 5;
//   } else if(e.key === 'ArrowDown') {
//     arrowY += 5;
//   }

//   arrowX = arrowX < 50 ? 50 : arrowX;
//   arrowY = arrowY < 50 ? 50 : arrowY;
//   arrowX = arrowX > 750 ? 750 : arrowX;
//   arrowY = arrowY > 550 ? 550 : arrowY;

//   drawCircle1();
// });

// function drawCircle1() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ctx.beginPath();
//   ctx.arc(arrowX, arrowY, 50, 0, Math.PI * 2);
//   ctx.fill();
// }