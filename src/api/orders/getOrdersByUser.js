import axios from "../axios";

export default (userId) => {
  const url = "/orders/user";

  return axios
    .get(url, userId)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
