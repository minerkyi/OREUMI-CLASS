// 이벤트 흐름
// 이벤트가 발생했는지 탐색
// 캡쳐링 단계: 브라우저 최상위 객체 (window) -> document -> body -> ... -> target 탐색
// 타켓 단계: 이벤트가 발생한 위치를 발견
// 버블링 단계: target -> ... -> body -> document -> window


// window.addEventListener('click', () => {
//     console.log('window 캡쳐링');
// }, true);

// window.addEventListener('click', () => {
//     console.log('window 버블링');
// });

// document.addEventListener('click', () => {
//     console.log('document 캡쳐링');
// }, true);

// document.addEventListener('click', () => {
//     console.log('document 버블링');
// });

const $parentSection = document.getElementById('parent');
$parentSection.addEventListener('click', () => {
    console.log('parentSection 캡쳐링');
}, true);

$parentSection.addEventListener('click', (event) => {
    console.log('----- parentSection -----');
    console.log('parentSection 버블링');

    console.log('target:', event.target);
    console.log('currentTarget', event.currentTarget);
    console.log('type:', event.type);
});

const $btn1 = document.getElementById('btn1');
$btn1.addEventListener('click', () => {
    console.log('btn1 캡쳐링');
}, true);

$btn1.addEventListener('click', (event) => {
    console.log('btn1 버블링', event);
    console.log('target:', event.target);
    console.log('currentTarget', event.currentTarget);
});


const $outer = document.getElementById('outer');
const $inner = document.getElementById('inner');

// mouseover: 버블링O
// $outer.addEventListener('mouseover', () => {
//     console.log('outer 마우스 오버');
// });
// $inner.addEventListener('mouseover', () => {
//     console.log('inner 마우스 오버');
// });

// $outer.addEventListener('mouseenter', () => {
//     console.log('outer 마우스 엔터');
// });
// $inner.addEventListener('mouseenter', () => {
//     console.log('inner 마우스 엔터');
// });

window.addEventListener('click', (e) => {
    console.log('=============================');
    // 1. target: 이벤트가 발생한 요소
    // 2. currentTarget: 이벤트 리스터가 등록된 요소
    // console.log('target:', e.target);
    // console.log('currentTarget:', e.currentTarget);

});

$outer.addEventListener('click', (e) => {
    // 이벤트가 발생한 위치의 좌표 정보
    // clientX, clientY: 브라우저 창(뷰포트)를 기준
    // 좌측상단(0, 0)
    console.log('client:', e.clientX, e.clientY);

    // offsetX, offsetY
    console.log('offset:', e.offsetX, e.offsetY);

    // pageX, pageY: 문서를 기준 (스크롤을 포함)
    console.log('page:', e.pageX, e.pageY);

    // screenX, screenY: 모니터
    // 더블 모니터의 경우 기본 모니터 기준
    console.log('screen:', e.screenX, e.screenY);
});

window.addEventListener('keydown', (event) => {
    console.log('=============================');
    // console.log(event.key);
    // console.log(event.code);
    // console.log(event.keyCode); // deprecated
});

$outer.addEventListener('click', function() {
    console.log('-----------------------------------');
    console.log(this); // e.currentTarget
    console.log('-----------------------------------');
});
// 함수 선언식에서 this는 이벤트가 등록된 요소
// 화살표 함수는 자기자신의 this를 가지지X, 렉시컬 환경의 This를 따름