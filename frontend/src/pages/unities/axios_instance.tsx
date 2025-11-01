import axios from "axios";

const instance = axios.create({
  baseURL: 'http://shop.nps.rest',
  timeout: 1000,
});

export default instance;
