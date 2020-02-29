const COORDS_LS = 'coords',
  API_KEYS = 'da4dc289d9f56bed3aaf787f30be7515';

const weather = document.querySelector('.js-weather');

//7. 날씨 넣기
function putInWeather(name, temp) {
    weather.textContent = `${name},  ${temp}C`;
}

//5. weather API 사용하기 
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`)
    .then(function(resp) {
        return resp.json();
    }).then(function(json){
        const temp = json.main.temp;
        const name = json.name;

        putInWeather(name, temp);
    })
}

//4. 로컬스토리지에 담기
function setUpCoords(coords) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coords));
}
//3. 성공했다면?
function successFn(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    const coordsObj = { latitude, longitude };
    setUpCoords(coordsObj);
    //좌표 받아오기
    getWeather(latitude, longitude);
}
//2. 없다면? 생성해야지. 함수 작성해~
function getCoords() {
    navigator.geolocation.watchPosition(successFn);
    //네비게이터 window.API를 사용해서 위도와 경도 구하기
}

//1. coords가 있는지 확인하기
function isItcorrds() {
    const coords = localStorage.getItem(COORDS_LS);
    if(coords === null) {
        //로컬스토리지에 coords가 없을 때
        getCoords();
    } else {
        //로컬스토리지에 coords가 있을 때
        //coords를 파싱함
        //좌표 받아와 (바로 5번으로)
        const parseCoords = JSON.parse(coords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
isItcorrds();
}

init();