
let h1Title = document.getElementById('h1Title');
let OTHER_COLOR = 'othercolor';

//이걸 메소드로 한다면?
//classList.toggle 메서드는 있으면 삭제하고, 없으면 넣어 주는 역할을 함.
function changeColor() {
  h1Title.classList.toggle(OTHER_COLOR);
}

h1Title.addEventListener('click', changeColor)

/*만약 className이 기존에 있다면?
function changeColor() {
  //contains를 사용해서 OTHER_COLOR이 있는지 확인.
  let currentClass = h1Title.classList.contains(OTHER_COLOR);
  if(currentClass) {
    //classList.remove or add를 사용하여 추가.
    h1Title.classList.remove(OTHER_COLOR);
  } else {
    h1Title.classList.add(OTHER_COLOR);
  }
}
*/

/* 자바스크립트로 클래스 네임 제어하기
function changeColor() {
  if(h1Title.className !== OTHER_COLOR) {
    h1Title.className = OTHER_COLOR;
  } else {
    h1Title.className = '';
  }
}
*/

/* 자바스크립트로 CSS 제어하기
h1Title.innerHTML = 'sexy javascript';
document.title = 'i own you now';

const BASE_COLOR = 'rgb(52, 73, 94)';
const ORIGIN_COLOR = '#a23f33';

h1Title.style.color = BASE_COLOR;

function changeColor() {
  let currentColor = this.style.color;
    if(currentColor === BASE_COLOR) {
      this.style.color = ORIGIN_COLOR;
    } else {
      this.style.color = BASE_COLOR;
    }
}

h1Title.addEventListener('click', changeColor);
*/

/* 덧셈, 뺄셈, 나눗셈, 제곱근을 콘솔 로그에 나타내 보자.
const calculater = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  divison: function(a, b){
    return a / b;
  },
  multiply: function(a, b){
    return a * b;
  },
  power: function(a, b){
    return a ** b;
  }
}

//`여기 안에 말하면 플러스나 콤마 쓰지 않아도 되고, 변수 이름은 ${이렇게} 사용하면 된다. 짱 편함.`
function allCalculater (obj, a, b) {
  console.log('a와 b에 각 5를 대입했을 때,')
  for(let key in obj) {
    console.log(`${key} 값: ${obj[key](a, b)}`)
  }
}

allCalculater(calculater, 5, 5);
*/
