export default class Quote {
  constructor(data) {
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return /*html*/`
  <div class="col-10" id="myDIV">${this.quote}</div>
  <div calss="col-2 mr-1" id="hide">${this.author}</div>
  `
  }

} 