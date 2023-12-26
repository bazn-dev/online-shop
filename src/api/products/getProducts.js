import axios from "../axios";

export default () => {
  const url = "/products";

  return axios
    .get(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
