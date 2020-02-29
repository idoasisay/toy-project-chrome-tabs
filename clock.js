const clockContainer = document.querySelector('.js-clock'),
  clockTitle = clockContainer.querySelector('.js-title');


function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();
  clockTitle.textContent = `${hours > 9 ? `${hours}` : `0${hours}`}:${minutes > 9 ? `${minutes}` : `0${minutes}`}:${second > 9 ? `${second}` : `0${second}`}`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();