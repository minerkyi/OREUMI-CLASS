const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const imgElem = new Image();
imgElem.src = 'https://paullab.co.kr/images/weniv-gary.png';

// imgElem.addEventListener('load', () => {})
imgElem.onload = () => {
  ctx.drawImage(imgElem, 0, 0); // 이미지, x, y

  // 크기 지정 (비율 고정)
  ctx.drawImage(imgElem, 240, 0, 160, 200);

  // imgElem.width, imgElem.height
  console.log(imgElem.width, imgElem.height);
  const ratio = imgElem.height / imgElem.width;
  ctx.drawImage(imgElem, 420, 0, 150, 150 * ratio);

  // 이미지 일부 가져오기
  ctx.drawImage(imgElem, 40, 40, 130, 80, 0, 250, 130, 80);
};

let imgX = canvas.width / 2;
let imgY = 350;
let speed = 3;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(imgElem.complete) {
    ctx.drawImage(imgElem, imgX, imgY);
  }
  imgX += speed;

  if(imgX + imgElem.width > canvas.width || imgX < 0) {
    speed = -speed;
  }
  requestAnimationFrame(animate);
}
animate();