import axios from "../axios";

export default (data) => {
  const url = "/orders/entries";

  return axios
    .delete(url, { data })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
