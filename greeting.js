const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings');

  const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

//로컬스토리지에 셋업하기
function setUpName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    //새로고침 막기
    event.preventDefault();
    //받은 이름을 전송하기
    const currentValue = input.value;
    //프린트헬로우에 전송하기
    printHello(currentValue);
    setUpName(currentValue);
}

//이름 묻는 창
function askName() {
    form.addEventListener('submit', handleSubmit);
}

//헬로우 창
function printHello(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.textContent = `Hello, ${text}`;
}

function load() {
    //현재유저 만들기
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //로컬스토리지에 현재유저가 없으면?
        //폼 생성하기
        askName();
        form.classList.add(SHOWING_CN);
    } else {
        //로컬스토리지에 현재유저가 있으면?
        //헬로우 창 만들기
        printHello(currentUser);
    }
}

function init() {
    load();
}

init();