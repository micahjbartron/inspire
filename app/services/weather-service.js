import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {



  constructor() {
    this.getWeather()
  }
  async getWeather() {
    //console.log("Calling the Weatherman");
    let res = await weatherApi.get();
    store.commit("weather", new Weather(res.data));
    //console.log(res.data);

  }
  // getTemp(temp) {
  //   let foundTemp = store.State.weather.find(t => t.fahrenheit == temp )
  //   let currentTemp = 0
  //   if (temp == store.State.weather.fahrenheit) {
  //     temp = (temp - 32) * .55
  //     let currentTemp = temp
  //     store.State.weather.currentTemp.push(currentTemp)
  //   } else (temp == store.State.weather.celsius)
  //   temp = (temp * 1.8) + 32
  //   currentTemp = temp

  //   store.State.weather.currentTemp.push(currentTemp)


  // }

}

const weatherService = new WeatherService();
export default weatherService;
