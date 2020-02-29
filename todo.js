const todoForm = document.querySelector('.js-toDoForm'),
  todoInput = todoForm.querySelector('input'),
  todoList = document.querySelector('.js-toDoList');

const TODO_LS = 'toDo';

//로컬스토리지에 넣을 정보 배열
let toDoArr = [];

//6. 딜리트 이벤트 리스너
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    //해당 버튼의 부모를 찾고, 리스트에서 그 부모를 제거함
    todoList.removeChild(li);
    //삭제한 li만 빠진 새로운 배열을 필터링으로 반환하여 기존 배열에 넣어 줌
    const cleanToDoArr = toDoArr.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    //로컬 스토리지에 업데이트함
    toDoArr = cleanToDoArr;
    setUpToDo();
}

//5. 로컬 스토리지에 추가하기
function setUpToDo() {
    //추가할 때 제이슨 스트링기파이로 오브젝트 -> 문자열로 변환
    localStorage.setItem(TODO_LS, JSON.stringify(toDoArr));
}

//4. 생성될 투두 리스트를 만들기
function paintToDoList(text) {
    //투두리스트와 딜리트 버튼이 같이 나올 수 있게 만들기
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    let span = document.createElement('span');
    let toDoNumber = toDoArr.length + 1;

    span.textContent = text;
    delBtn.textContent = '❌';
    //삭제 버튼에 이벤트 리스너 사용하기
    delBtn.addEventListener('click', deleteToDo);

    //추가
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = toDoNumber;

    todoList.appendChild(li);

    //배열에 넣을 정보를 오브젝으로 생성
    const toDoObj = {
        text: text,
        id: toDoNumber
    }
    //배열에 넣어 주기
    toDoArr.push(toDoObj);
    //배열을 로컬 스토리지에 추가하기
    setUpToDo();

}

//3. 투두 리스트를 생성할 수 있게 하는 이벤트 리스너 함수 생성
function handleInput(event) {
    event.preventDefault();
    const CurrentValue = todoInput.value;
    paintToDoList(CurrentValue);
    todoInput.value = '';
}

//2. 로컬스토리지에서 투두 리스트를 받아오기
function loadToDo() {
    //로컬스토리지에서 투두 리스트를 받아 옴
    const toDo = localStorage.getItem(TODO_LS);

    //만약 투두 리스트가 있다면?
    if(toDo !== null) {
        //로컬스트리지에서 파일을 파싱해서
        const jsonToDo = JSON.parse(toDo);

        jsonToDo.forEach(toDo => {
         return paintToDoList(toDo.text);
        });

    }
}

//1. 초기화를 할 때마다 실행시킬 것들
// 투두 리스트를 로드시키고
// 누를 때마다 이벤트가 발생할 수 있게 함
function init() {
    //투두 리스트를 로드시킨다
    loadToDo();
    //언제라도 투두 리스트에 넣을 수 있게 이벤트 리스너 생성함
    todoForm.addEventListener('submit', handleInput);
}

init();