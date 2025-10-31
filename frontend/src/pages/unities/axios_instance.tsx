import axios from "axios";

const instance = axios.create({
  baseURL: 'http://api.146.190.106.138.com',
  timeout: 1000,
});

export default instance;
