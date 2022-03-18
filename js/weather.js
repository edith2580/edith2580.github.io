// https://api.openweathermap.org/data/2.5/weather?lat=37.5324672&lon=126.9235712&appid=4042706ea005651508b716ed39d6066e
const API_KEY = "4042706ea005651508b716ed39d6066e";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
//  console.log("Success Geo Position", lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.dir(data);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");  //? 배열의 2번째 차일드를 가져오는듯
      const temp = document.querySelector("#weather span:last-child");
      
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = `${Math.floor(data.main.temp)}˚C`;
    });
}

function onGeoError() {
  alert("Cant't found you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
