import axios from "axios";

const instance = axios.create({
  baseURL: 'http://nps.rest',
  timeout: 1000,
});

export default instance;
