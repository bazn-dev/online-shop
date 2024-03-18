import axios from "../axios";

export default (data, token) => {
  const url = "/users/update";

  return axios
    .post(url, data, {
      params: {
        'Authorization': token,
      }
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
