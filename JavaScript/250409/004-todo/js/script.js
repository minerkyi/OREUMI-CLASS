// 1. 입력 요소에 대한 정보를 가져옵니다.
// - 입력과 관련된 요소: input, form
// - 출력과 관견된 요소: todo-list
// - (도전) 정보와 관련된 요소: todo-todo, rest-todo
const $todoInput = document.getElementById('todo-input');
const $submitBtn = document.getElementById('todo-add-btn');
const totalSpan = document.getElementById('total-todo');
const restSpan = document.getElementById('rest-todo');
const $todoListUl = document.getElementById('todo-list');
let totalCnt = 0;
let restCnt = 0;

// 2. form 이벤트
// - 입력값이 있을 때 요소를 추가
let itemHtml = '';
$submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if($todoInput.value.trim() !== '') {
        const todoIndex = document.querySelectorAll('[name="todo-item"]').length;
        const $todoItem = document.createElement('li');
        $todoItem.classList.add('todo-item');
        itemHtml =   `<input type="checkbox" name="todo-checkbox" class="todo-checkbox" id="todo-checkbox${todoIndex}"> <label for="todo-checkbox${todoIndex}" class="todo-text">${$todoInput.value}</label> <button type="button" class="todo-delete-btn">삭제</button>`;
        $todoItem.innerHTML = itemHtml;
        $todoListUl.appendChild($todoItem);
        totalCnt++;
        restCnt++;
        totalSpan.innerText = totalCnt;
        restSpan.innerText = restCnt;
    }
});

// 3. 이벤트 위임
// - 체크박스가 눌리면 완료 상태로 바꿈
// - 삭제 버튼이 눌리면 요소를 삭제
// (도전) 전체 할일, 남은 할인 갱신
$todoListUl.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target.type);
    if(target.type.toLowerCase() === 'button') {
        if(!target.closest('li').classList.contains('completed')) {
            restCnt--;
        }
        target.closest('li').remove();
        totalCnt--;
        if(totalCnt < 0) {
            totalCnt = 0;
        }
        if(restCnt < 0) {
            restCnt = 0;
        }
        totalSpan.innerText = totalCnt;
        restSpan.innerText = restCnt;
    } else if(target.type.toLowerCase() === 'checkbox') {
        target.closest('li').classList.toggle('completed');
        if(target.closest('li').classList.contains('completed')) {
            restCnt--;
            if(restCnt < 0) {
                restCnt = 0;
            }
        } else {
            restCnt++;
        }
        restSpan.innerText = restCnt;
    }
});