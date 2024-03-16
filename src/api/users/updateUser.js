import axios from "../axios";

export default (data, token) => {
  const url = "/users";

  return axios
    .patch(url, data, {
      params: {
        'Authorization': token,
      }
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
