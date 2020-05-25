export default class Weather {
  constructor(data) {
    //console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.round(1.8 * (data.main.temp - 273.15) + 32)
    this.celsius = Math.round(data.main.temp - 273.15)
    this.currentTemp = ""
  }

  get Template() {
    return /*html*/`
  <div class="col-sm-3 col-12 m-auto">
  <div class="card shadow">
  <div class="card-body bg-dark text-light">
  <h1 class="card-title">Weather</h1>
  <h3>city:${this.city}</h3>
 <div id= "currentTemp">
  
  </div>
  <button onclick="app.weatherController.toggle(${this.currentTemp})">f/c</button>
  </div>
  </div>
</div>
  `
  }



}
//  <h3>${this.fahrenheit} f</h3>

// get SubTemplate() {
//   if (this.fahrenheit) {
//     return /*html*/`
//     <h3>temp: ${this.celsius} c</h3>
//     `
//   }
//   return `<h3>temp:temp: ${this.fahrenheit} f</h3>`
// }

