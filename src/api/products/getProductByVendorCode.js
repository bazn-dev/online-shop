import axios from "../axios";

export default (vendorCode) => {
  const url = `/products/${vendorCode}`;

  return axios
    .get(url, {params: {userId: 4}})
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
