import axios from "axios";

const instance = axios.create({
  baseURL: 'http://api.nps.shoporganic.com',
  timeout: 1000,
});

export default instance;
