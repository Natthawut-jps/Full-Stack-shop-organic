import axios from "axios";

const instance = axios.create({
  baseURL: 'http://api.shop.nps.rest',
  timeout: 1000,
});

export default instance;
