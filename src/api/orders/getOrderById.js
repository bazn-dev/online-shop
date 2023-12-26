import axios from "../axios";

export default (id) => {
  const url = `/orders/${id}`;

  return axios
    .get(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
