import axios from "../axios";

export default (token) => {
  const url = "/users";

  return axios
    .get(url, {
        params: {
          'Authorization': token,
        }
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
