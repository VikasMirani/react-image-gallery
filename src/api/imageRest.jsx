import axiosUtil from "../utils/axiosUtil";

const imageRest = {
   fetchImages(url) {
    return axiosUtil(url, "get", "", "");
  },
  getBgImage(url) {
    return axiosUtil(url, "get", "", "", true);
  }
}

export default imageRest;
