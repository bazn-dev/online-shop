import axios from "../axios";

export default (data) => {
  const url = `/orders`;

  return axios
    .delete(url, { params: data })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
