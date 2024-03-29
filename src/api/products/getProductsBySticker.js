import axios from "../axios";

export default (sticker, userId) => {
  const url = `/products/sticker/${sticker}`;

  return axios
    .get(url, {
      params: { userId }
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
