import axios from "axios";

const instance = axios.create({
  baseURL: 'http://api.52.65.68.216.com',
  timeout: 1000,
});

export default instance;
