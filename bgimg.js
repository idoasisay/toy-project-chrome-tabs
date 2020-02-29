const body = document.querySelector('body');
const bgImgNum = 4;

//2. 이미지를 구현하고..;
function paintImg(num) {
    const image = new Image;
    image.src = `images/${num}.jpg`;
    image.classList.add('bgImg');
    body.prepend(image);
}


//1. 랜덤 넘버를 구해서
function randomSum() {
    return Math.floor(Math.random() * bgImgNum + 1);    
}

function init() {
    const randomNum = randomSum();
    paintImg(randomNum);
}

init();