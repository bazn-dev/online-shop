import axios from "../axios";

export default (data) => {
  const url = "/products/review";

  return axios
    .post(url, data)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
