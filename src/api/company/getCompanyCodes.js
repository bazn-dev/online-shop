import axios from "../axios";

export default (isHomePage) => {
  const url = "/company/codes";

  return axios
    .get(url, {
      params: {
        homepage: isHomePage
      }
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
