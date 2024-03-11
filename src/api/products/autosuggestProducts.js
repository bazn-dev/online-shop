import axios from "../axios";

export default (data) => {
  const url = "/products/autosuggest";

  return axios
    .get(url, data)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
