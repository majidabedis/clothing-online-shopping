import axios from "axios";
const apiproducts = axios.create({
  baseURL: 'https://raw.githubusercontent.com/majidabedis/majid-/main',
})


apiproducts.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  });



export {apiproducts }