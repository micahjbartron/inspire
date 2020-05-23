import ImageService from "../services/image-service.js";
import store from "../store.js"
//import image from "../models/imag.js";
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function drawBackgroundPic() {
  let picture = store.State.image
  //console.log(picture);

  document.getElementById("background-pic").style.backgroundImage = `url('${picture}')`
}


export default class ImageController {
  constructor() {
    store.subscribe("image", drawBackgroundPic)
  }

}
