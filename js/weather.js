const weather = document.querySelector("#weather1 ");
const city = document.querySelector("#weather2");
const API_KEY = "9095254cfef7350f4efd28730958823f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat,lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather1")
      const city = document.querySelector("#weather2")
      
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = data.name;

    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);