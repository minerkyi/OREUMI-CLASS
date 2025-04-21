// 캔버스
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // 2차원 그래픽

// 경로
ctx.beginPath(); // 새로운 경로
ctx.moveTo(50, 50); // 시작점(기본값 (0, 0))
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.closePath(); // 경로 종료

ctx.fillStyle = 'skyblue';
ctx.fill();

ctx.strokeStyle = 'gold';
ctx.lineWidth = 5;
ctx.stroke();

// 삼각형
ctx.beginPath();
ctx.moveTo(250, 50);
ctx.lineTo(300, 150);
ctx.lineTo(200, 150);
ctx.closePath();

ctx.fillStyle = 'orange';
ctx.fill();

ctx.strokeStyle = 'greenYellow';
ctx.lineWidth = 10;
ctx.stroke();

// 사각형
ctx.fillStyle = 'tomato';
// x, y, width, height
ctx.fillRect(50, 200, 100, 100);

ctx.strokeRect(200, 200, 100, 100);

ctx.clearRect(100, 200, 100, 100);
// ctx.clearRect(0, 0, canvas.width, canvas.height);

// 원
ctx.beginPath();

// arc(중심좌표 x, y, redius, startAngle, endAngle, direction)
ctx.arc(400, 250, 50, 0, degreeToRad(90), true);
ctx.strokeStyle = 'orchid';
ctx.stroke();


ctx.beginPath();
ctx.arc(550, 250, 80, 0, Math.PI);
ctx.fillStyle = 'Lightgreen';
ctx.fill();

function degreeToRad(degree) {
  return (Math.PI / 180) * degree;
}

// 곡선
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.arcTo(350, 50, 400, 150, 50);
ctx.lineTo(400, 150);
ctx.strokeStyle = 'gray';
ctx.lineWidth = 5;

ctx.stroke();

// 스타일 속성
ctx.clearRect(0, 0, canvas.width, canvas.height);

// 1. 색
ctx.fillStyle = 'skyblue';
ctx.fillRect(50, 50, 100, 100);

ctx.fillStyle = 'orchid';
ctx.fillRect(160, 50, 100, 100);

// 2-1. 컨텍스트 투명도
// ctx.globalAlpha = 0.5;

// 2-2. rgba 개별 요소의 투명도
ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
ctx.lineWidth = 10;
ctx.fillRect(270, 50, 100, 100);
ctx.strokeRect(270, 50, 100, 100);

// 3. 선
ctx.beginPath();
ctx.moveTo(450, 50);
ctx.lineTo(400, 150);
ctx.lineTo(500, 150);

ctx.strokeStyle = 'tomato'; // 색
ctx.lineWidth = 5; // 굵기

// lineCap: 끝부분 모양 - butt, round, square
ctx.lineCap = 'round';

// lineJoin: 선들이 연결되는 부분의 모양 - miter, round, bevel
ctx.lineJoin = 'bevel';

// 점선
ctx.setLineDash([10, 10]); // 10픽셀 선, 10픽셀 간격
ctx.lineDashOffset = -13; // 양수면 시계방향, 음수면 반시계방향

ctx.stroke();

// 4. 그라데이션
// 4-1. 선형
let linearGradient = ctx.createLinearGradient(100, 250, 350, 250);
linearGradient = ctx.createLinearGradient(150, 150, 250, 250);
linearGradient.addColorStop(0, 'tomato');
linearGradient.addColorStop(0.5, 'gold');
linearGradient.addColorStop(0.8, 'orchid');
linearGradient.addColorStop(1, 'skyblue');

ctx.fillStyle = linearGradient;
ctx.fillRect(50, 250, 200, 200);

// 4-2. 방사형
const radialGradient = ctx.createRadialGradient(400, 400, 10, 400, 400, 80);
radialGradient.addColorStop(0, 'orchid');
radialGradient.addColorStop(0.5, 'pink');
radialGradient.addColorStop(1, 'tomato');

ctx.fillStyle = radialGradient;
ctx.fillRect(350, 350, 100, 100);

// 텍스트
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.font = '30px pretendard';
ctx.fillText('Hello World', 50, 50);

// 대시 스타일 초기화
ctx.setLineDash([]);
ctx.lineWidth = 2;
ctx.strokeText('Hello World', 50, 100);

// 텍스트 정렬
ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(400, 300);
ctx.strokeStyle = 'gray';
ctx.stroke();

ctx.font = '30px, pretendard';
ctx.fillStyle = 'dodgerabule';

// start, end, left, rigth, center
ctx.textAlign = 'start';
ctx.fillText('start', 400, 50);

ctx.textAlign = 'end';
ctx.fillText('end', 400, 100);

ctx.textAlign = 'left';
ctx.fillText('left', 400, 150);

ctx.textAlign = 'right';
ctx.fillText('right', 400, 200);

ctx.textAlign = 'center';
ctx.fillText('center', 400, 250);

// 세로 정렬
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(canvas.width, 400);
ctx.stroke();

// top, hanging, middle, alphabetic, ideograhiuc, bottom
ctx.textBaseLine = 'top';
ctx.fillText('top', 50, 400);

ctx.textBaseLine = 'hanging';
ctx.fillText('hanging', 150, 400);

ctx.textBaseLine = 'middle';
ctx.fillText('middle', 280, 400);

ctx.textBaseLine = 'alphabetic';
ctx.fillText('alphabetic', 420, 400);

ctx.textBaseLine = 'ideographic';
ctx.fillText('ideographic', 600, 400);

ctx.textBaseLine = 'bottom';
ctx.fillText('bottom', 700, 400);

// 초기화
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = 'tomato';
ctx.lineWidth = 5;
ctx.fillRect(50, 50, 100, 100);
ctx.strokeRect(50, 50, 100, 100);

ctx.save();

ctx.fillStyle = 'skyblue';
ctx.strokeStyle = 'gold';
ctx.fillRect(200, 50, 100, 100);
ctx.strokeRect(200, 50, 100, 100);

ctx.save();

ctx.fillStyle = 'orchid';
ctx.strokeStyle = 'lightgreen';
ctx.fillRect(350, 50, 100, 100);
ctx.strokeRect(350, 50, 100, 100);

ctx.restore();

ctx.fillRect(500, 50, 100, 100);
ctx.strokeRect(500, 50, 100, 100);

ctx.restore();

ctx.fillRect(650, 50, 100, 100);
ctx.strokeRect(650, 50, 100, 100);

// 변형
// x축, y축
ctx.save();
ctx.translate(50, 200);
ctx.fillRect(0, 0, 100, 100); // x = 50, y = 200

ctx.translate(100, 0); // x = 150, y = 200
ctx.fillStyle = 'skyblue';
ctx.fillRect(0, 0, 100, 100);

ctx.restore();

// x축, y축의 회전
ctx.save();
ctx.globalAlpha = 0.5;
ctx.translate(450, 200);

ctx.fillRect(0, 0, 100, 100);

ctx.rotate(Math.PI / 4); // 45도 회전
ctx.fillStyle = 'skyblue';
ctx.fillRect(0 ,0 ,100, 100);

ctx.rotate(Math.PI / 4);
ctx.fillStyle = 'orchid';
ctx.fillRect(0 ,0 ,100, 100);

ctx.restore();

// 크기 비율
ctx.save();
ctx.translate(600, 200);
ctx.globalAlpha = 0.5;

ctx.fillRect(0, 0, 100, 100);
ctx.scale(0.5, 2);

ctx.fillStyle = 'skyblue';
ctx.fillRect(0, 0, 100, 100);
// x좌표: 100*0.5 = 50px / y좌표 100*2 = 200px;

ctx.restore();

// transform, setTransform
ctx.clearRect(0, 0, canvas.width, canvas.height);
// scaleX, skewX, skewY, scaleY, transX, transY

ctx.fillRect(0, 0 , 100, 100);

ctx.transform(0.5, 0, 0, 0.5, 100, 100);
ctx.fillStyle = 'skyblue';
ctx.fillRect(0, 0, 100, 100);

ctx.transform(2, 0, 0, 1, 100, 100);
ctx.fillStyle = 'orchid';
ctx.fillRect(0, 0, 100, 100);

// skew
ctx.setTransform(1, 0, 0, 1, 0, 200);

const imgElem = new Image();
imgElem.src = 'https://paullab.co.kr/images/message_licat.png';

// imgElem.addEventListener('load', () => {})
  imgElem.onload = () => {
    ctx.transform(1, 0, 0.5, 1, 0, 0);

    ctx.drawImage(imgElem, 0, 0, 300, 300);
  };