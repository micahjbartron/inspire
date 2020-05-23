export default class image {

  constructor(data) {
    this.img = data.larg_url || data.url

  }


  get Template() {
    return /*html*/`
  <div class="col">
				<img src="${this.img}" alt="">
			</div>
  `
  }


}















// "id": 8233,
// "url": "https://splashbase.s3.amazonaws.com/snapwiresnaps/regular/tumblr_ohqdb6E5Um1teue7jo1_1280.jpg",
// "large_url": "https://splashbase.s3.amazonaws.com/snapwiresnaps/large/tumblr_ohqdb6E5Um1teue7jo1_1280.jpg",
// "source_id": null,
// "copyright": "CC0",
// "site": "snapwiresnaps"
// }




