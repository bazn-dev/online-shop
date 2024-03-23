import axios from "../axios";

export default () => {
  const url = "/company/faq";

  return axios
    .get(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
