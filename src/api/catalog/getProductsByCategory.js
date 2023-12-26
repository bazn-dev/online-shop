import axios from "../axios";

export default (data) => {
  const url = `/catalog/${data.categoryName}`;

  return axios
    .get(url)
    // .get(url, { params: data })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
