import axios from "../axios";

export default (data) => {
  const url = "/orders/promo";

  return axios
    .post(url, data)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
