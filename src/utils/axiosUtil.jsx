import axios from "axios"; 

const baseURL = "https://api.unsplash.com/";

const axiosUtil = (url, method, data, params, bgFlag) => {
  return axios({
    method: method,
    url: bgFlag ? url : `${baseURL}${url}`,
    data: data,
    params: params,
    headers: { Authorization: "" },
  })
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      return err.data;
    });
}

export default axiosUtil;