import axios from "../axios";

export default () => {
  const url = `/orders`;

  return axios
    .post(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
