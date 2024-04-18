import axios from "../axios";

export default (token) => {
  const url = "/users";

  return axios
    .get(url, {
      headers: {
        'Authorization': token,
      }
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
