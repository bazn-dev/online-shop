import axios from "../axios";

export default () => {
  const url = "/users";

  return axios
    .get(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
