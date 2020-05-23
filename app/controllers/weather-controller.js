import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let weather = store.State.weather
  //console.log(weather);

  document.getElementById("weather").innerHTML = weather.Template
  //console.log("THE WEATHER MAN SAYS:", store.State.weather);
}

function drawTime() {
  setInterval(() => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let realTime = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    //let currentTime = time.getHours() + ":" + time.getMinutes();
    let template = ''
    template += `<div class="col-2 text-light bg-dark">${hours + ":" + minutes + ' ' + realTime}</div>`
    document.getElementById("currentTime").innerHTML = template
  }, 1000);
}
drawTime()

export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
