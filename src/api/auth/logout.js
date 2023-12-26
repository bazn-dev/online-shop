import axios from "../axios";

export default () => {
  const url = "/auth/logout";

  return axios
    .post(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
