import axios from "../axios";

export default (token) => {
  const url = "/auth/logout";

  return axios
    .post(url, {}, {
      headers: {
        'Authorization': token
      }
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
