import axios from "../axios";

export default (sticker) => {
  const url = `/products/sticker/${sticker}`;

  return axios
    .get(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
