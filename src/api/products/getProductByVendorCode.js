import axios from "../axios";

export default (vendorCode, userId) => {
  const url = `/products/${vendorCode}`;

  return axios
    .get(url, {params: { userId }})
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
