import axios from "../axios";

export default (data) => {
  const url = `/orders/place`;

  return axios
    .post(url, data)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
