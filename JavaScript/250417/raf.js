let position = 0;
const box = document.querySelector('.box');

let isMovingRight = false;
let isMovingLeft = false;
const speed = 5;

document.addEventListener('keydown', (e) => {

  if(e.key === 'ArrowRight') {
    isMovingRight = true;
  }

  if(e.key === 'ArrowLeft') {
    isMovingLeft = true;
  }
});

document.addEventListener('keyup', (e) => {
  if(e.key === 'ArrowRight') {
    isMovingRight = false;
  }
  if(e.key === 'ArrowLeft') {
    isMovingLeft = false;
  }
});

function animate() {
  if(isMovingRight) {
    position += speed;
  }
  if(isMovingLeft) {
    position -= speed;
  }
  if(isMovingLeft || isMovingRight) {
    box.style.transform = `translate(${position}px)`;
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);