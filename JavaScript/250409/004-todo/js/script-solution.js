// 1. 입력 요소에 대한 정보를 가져옵니다.
// - 입력과 관련된 요소: input, form
// - 출력과 관견된 요소: todo-list
const $todoForm = document.getElementById('todo-form');
const $todoInput = document.getElementById('todo-input');
const $todoList = document.getElementById('todo-list');
// - (도전) 정보와 관련된 요소: tota-todo, rest-todo
const $totalTodo = document.getElementById('total-todo');
const $restTodo = document.getElementById('rest-todo');

function undateTodoCount() {
    const total = $todoList.querySelectorAll('.todo-item').length;
    const completedTotal = $todoList.querySelectorAll('.todo-item.completed').length;

    $totalTodo.innerText = total;
    $completedTodo.innerText = total - completedTotal;
}


// 2. form 이벤트
// - 입력값이 있을 때 요소를 추가
$todoForm.addEventListener('click', (e) => {
    e.preventDefault();

    const todoText = $todoInput.value.trim();
    if(todoText) {
        const todoItem =document.createElement('li');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.innerText = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'todo-delete-btn';
        deleteBtn.innerText = '삭제';
        
        todoItem.append(checkbox, span, deleteBtn);
        $todoList.appendChild(todoItem);
        undateTodoCount();
        $todoInput.value = '';
    }
});

// 3. 이벤트 위임
// - 체크박스가 눌리면 완료 상태로 바꿈
// - 삭제 버튼이 눌리면 요소를 삭제
$todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('todo-checkbox')) {
        const todoItem = e.target.closest('.todo-item');
        if(e.target.checked) {
            todoItem.classList.add('completed');
        } else {
            todoItem.classList.remove('completed');
        }
        undateTodoCount();
    } else if(e.target.classList.contains('todo-delete-btn')) {
        const result = confirm('정말 삭제하시겠습니까?');
        if(result) {
            const todoItem = e.target.closest('.todo-item');
            $todoList.removeChild(todoItem);
            undateTodoCount();
        }
    }
});
// (도전) 전체 할일, 남은 할인 갱신