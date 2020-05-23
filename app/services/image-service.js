//import Image from "../models/imag.js"
import store from "../store.js"


// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  constructor() {
    this.getPic()
  }
  async getPic() {
    //console.log("get that pic")
    let res = await imgApi.get();
    //console.log(res.data.large_url)

    store.commit("image", (res.data.large_url))

  }


}

const imageService = new ImageService();
export default imageService;
