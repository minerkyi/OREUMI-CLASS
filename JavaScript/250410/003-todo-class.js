// 투두 리스트 클래스로 구현하기
// 1. TodoItem
// - 할 일 내용, 상태 프로퍼티
// - 상태를 변경하는 메서드
// 풀이
class TodoItem {
    constructor(todo, isDone=false) {
        this.todo = todo;
        this.isDone = isDone;
    }
    changeStatus() {
        this.isDone = !this.isDone;
        return this.isDone;
    }
}

/*
class TodoItem {
    constructor(todo, state) {
        this.todo = todo;
        this.state = state
    }

    changeState(state) {
        this.state = state;
    }
}
*/

// 2. TodoList
// - 할 일 목록을 관리
// - addItem: 할 일 추가
// - getItem: 할 일 목록을 가져오는 메서드
// - removeItem: 특정 할 일 삭제
// - getLeftTodoCount(): 남은 할 일 개수
class TodoList {
    constructor() {
        this.items = [];
    }

    addItem(text) {
        const newTodo = new TodoItem(text, false);
        this.items.push(newTodo);
        return newTodo;
    }

    getItems() {
        return this.items;
    }

    removeItem(index) {
        if(index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    getLeftTodoCount() {
        // this.items 요소들 중에 elem.isDone이 false인 값
        return this.items.filter((item) => !item.isDone).length;
    }
}

const myTodoList = new TodoList();
console.log(myTodoList);
const item1 = myTodoList.addItem('자바스크립트 복습하기');
console.log('item1', item1);
console.log(myTodoList);
item1.changeStatus();

const item2 = myTodoList.addItem('청소하기');
console.log(item2);

console.log('할일목록', myTodoList.getItems());

myTodoList.removeItem(2);
console.log('할일목록:', myTodoList.getItems());

console.log(myTodoList.getLeftTodoCount());

/*
class TodoList {
    #todoList;
    constructor() {
        this.#todoList = [];
    }

    addItem(todoItem) {
        this.#todoList.push(todoItem);
    }

    getItem() {
        return this.#todoList;
    }

    removeItem(index) {
        this.#todoList.splice(index, 1);
    }

    getLeftTodoCount() {
        return this.#todoList.length;
    }
}
*/