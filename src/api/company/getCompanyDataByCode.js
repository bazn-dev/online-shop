import axios from "../axios";

export default (codes) => {
  const url = `/company`;

  return axios
    .get(url, {
      params: {
        codes: codes.join(','),
      }
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
