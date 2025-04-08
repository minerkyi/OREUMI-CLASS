// 1. 요소 선택
const $studyForm = document.getElementById('study-form');
const $submitBtn = document.getElementById('submit-btn');
const $resetBtn = document.getElementById('reset-btn');

// 입력 요소
const $q1Input = document.getElementById('q1');
const $q2Select = document.getElementById('q2');
const $q3Checkboxes = document.querySelectorAll('input[name="q3"]');
const $q4Radios = document.querySelectorAll('input[name="q4"]');
const $q5Textarea = document.getElementById('q5');
console.log($q1Input, $q2Select, $q3Checkboxes, $q4Radios, $q5Textarea);

const formProgress = {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
};

function updateProgress() {
    // Object.values: 객체의 프로퍼티 값들을 배열로 반환
    // 모든 요소가 조건을 만족할 때 true를 반환하는 배열 메서드
    Object.values(formProgress);
    const isAllComplete = Object.values(formProgress).every((el) => el);
    if(isAllComplete) {
        $submitBtn.disabled = false;
    } else {
        $submitBtn.disabled = true;
    }
}
updateProgress();

// input: 입력이 있을 때마다 발생
// change: 입력이 있고, 요소에 포커스가 해제되었을 때
$q1Input.addEventListener('input', () => {
    formProgress.q1= $q1Input.value.trim() !== '';
    updateProgress();
});

$q2Select.addEventListener('change', () => {
    formProgress.q2 = $q2Select.value !== '';
    updateProgress();
});

console.log($q3Checkboxes);
$q3Checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        // $q3Checkboxes 중 하나라도 checked 되어있다면 true
        // some: 배열의 요소 중 하나라도 조건을 만족하는 요소가 있다면 true
        // NodeList some 메서드가 X -> NodeList를 배열로 반환
        formProgress.q3 = Array.from($q3Checkboxes).some((item) => item.checked);
        updateProgress();
    });
});

$q4Radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        formProgress.q4 = Array.from($q4Radios).some((item) => item.checked);
        updateProgress();
    });
});    

$q5Textarea.addEventListener('input', () => {
    formProgress.q5 = $q5Textarea.value !== '';
    updateProgress();
});

// 제출했을 때 화면을 모달을 띄우고 결과를 보여주는 기능
const $resultQ1 = document.getElementById('result-q1');
const $resultQ2 = document.getElementById('result-q2');
const $resultQ3 = document.getElementById('result-q3');
const $resultQ4 = document.getElementById('result-q4');
const $resultQ5 = document.getElementById('result-q5');

const $resultModal = document.getElementById('result-modal');
const $closeModalBtn = $resultModal.querySelector('.close-modal-btn');

$studyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit 이벤트 발생');

    // 컨턴츠를 작성한 innerText, textContent
    $resultQ1.innerText = $q1Input.value;
    $resultQ2.innerText = $q2Select.value;
    
    // 체크박스
    // $q3Checkboxes 중에 checked된 요소의 value
    $resultQ3.innerText = Array.from($q3Checkboxes).filter((item) => item.checked).map((el) => el.value).join(', ');

    $resultQ4.innerText = Array.from($q4Radios).find((el) => el.checked).value;

    $resultQ5.innerText = $q5Textarea.value;

    $resultModal.showModal();
});

$closeModalBtn.addEventListener('click', () => {
    $resultModal.close();
});

$resetBtn.addEventListener('click', () => {
    for(const key in formProgress) {
        formProgress[key] = false;
    }
    updateProgress();
});