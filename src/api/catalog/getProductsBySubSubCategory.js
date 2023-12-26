import axios from "../axios";

export default (data) => {
  const url = `/catalog/${data.categoryName}/${data.subCategoryName}/${data.subSubCategoryName}`;

  return axios
    .get(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};
