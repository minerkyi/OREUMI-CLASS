// 이벤트 흐름
// 이벤트가 발생했을 때 최상위 객체 -> 타켓 객체 / 타켓 객체 -> 최상위 객체
// 1. 캡쳐링: 최상위 객체 -> ... -> 타켓 객체 캡쳐링 이벤트를 실행
// 2. 타켓: 타켓 객체 이벤트
// 3. 버블링: 타켓 객체 -> ... -> 최상위 객체 버블링
// => 이벤트 전파

const eventType = {
    1: '캡쳐링',
    2: '타켓',
    3: '버블링',
};

function consoleEvent(event) {
    console.log(`${event.currentTarget.id}: ${eventType[event.eventPhase]}`);
}

const $parent = document.getElementById('parent');
const $child = document.getElementById('child');

$parent.addEventListener('click', consoleEvent, true); // 캡쳐링
$parent.addEventListener('click', consoleEvent); // 버블링(기본값 false)
$child.addEventListener('click', consoleEvent, true); // 캡쳐링
$child.addEventListener('click', consoleEvent); // 버블링(기본값 false)

// 이벤트 위임
// 1. 부모 요소 addEventListener 추가
// 2. 이벤트 객체 event.target
// 3. 자식요소에 일어나는 이벤트를 탐지할 수 있다.
const $list = document.getElementById('list');
$list.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    const target = e.target.closest('button'); // 자기자신을 포함 탐색
    if(!target) return;
    if(target) {
        console.log('버튼이 클릭되었습니다.', target.innerText);
    }
});

// 이벤트 전파를 멈추는 방법
$child.addEventListener('click', (e) => {
    e.stopPropagation(); // 이벤트 흐름 상에서 이후 전파를 모두 중지
}, true);