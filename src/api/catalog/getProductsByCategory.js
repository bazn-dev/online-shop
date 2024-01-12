import axios from "../axios";

export default (url, data) => {
  return axios
    .get(url, { params: data })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
