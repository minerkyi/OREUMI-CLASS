// 풀이
const parent = document.getElementsByClassName('parent')[0];

// const img = parent.getElementsByTagName('img')[0];
// console.log('img', img);
// img.src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*nZaiJiMSPGsLGp9oiUoWsA.png';

// const figCap = parent.querySelector('.figCap');
// figCap.textContent = '개리는 무엇을 먹을지 고민합니다.';

// 요소를 기준으로 탐색
const figure = parent.firstElementChild;
const img = figure.firstElementChild;
const figCap = figure.lastElementChild;
img.src = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*nZaiJiMSPGsLGp9oiUoWsA.png';
figCap.textContent = '개리는 무엇을 먹을지 고민합니다.';



// const $figImg = document.querySelector('article.parent img.figImg');
// const $figCap = document.querySelector('article.parent figcaption.figCap');
// let isHungry = true;

// $figImg.addEventListener('click', () => {
//   if(isHungry) {
//     $figImg.setAttribute('src', 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*nZaiJiMSPGsLGp9oiUoWsA.png');
//     $figCap.textContent = '개리는 무엇을 먹을지 고민합니다.';
//     isHungry = false;
//   } else {
//     $figImg.setAttribute('src', 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*FvUDSeJMpEJ_Lihbtuu-aw.png');
//     $figCap.textContent = '개리는 아무 생각이 없습니다.';
//     isHungry = true;
//   }
// });