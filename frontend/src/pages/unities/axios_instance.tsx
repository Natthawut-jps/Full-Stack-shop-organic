import axios from "axios";

const instance = axios.create({
  baseURL: 'http://146.190.106.138/api',
  timeout: 1000,
});

export default instance;
