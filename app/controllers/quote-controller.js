import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)


function drawQuote() {
  let quote = store.State.quote
  // console.log(quote);


  // let template = ''
  // template += `<div class="col">${quote}</div>`
  document.getElementById("quote").innerHTML = quote.Template
}
export default class QuoteController {

  constructor() {
    store.subscribe("quote", drawQuote)
    QuoteService.getQuote()
  }
}
