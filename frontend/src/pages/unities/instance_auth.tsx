import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const instance_auth = axios.create({
  baseURL: "http://api.nps.shoporganic.com/auth",
  timeout: 1000,
});

try {
  instance_auth.interceptors.request.use(
    async (configs) => {
      const _ut = cookies.get("_ut");
      if (_ut) {
        configs.headers.Authorization = `Bearer ${_ut}`;
      }
      return configs;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  instance_auth.interceptors.response.use(
    async (res) => {
      return res;
    },
    async (error) => {
      const originRequest = error.config;
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403) &&
        !originRequest._retry
      ) {
        originRequest._retry = true;
        const _ur = cookies.get("_ur");
        if (_ur) {
          try {
            // const url_deploy = "https://api-shoporganic-ecommerce.onrender.com/refresh/r_auth";
            const url_dev = "http://api.nps.shoporganic.com/refresh/r_auth";
            await axios({
              method: "post",
              url: url_dev,
              data: { massage: "Authorize" },
              headers: {
                Authorization: `Bearer ${_ur}`,
              },
            }).then((res: any) => {
              if (res.status === 200) {
                const date = new Date();
                cookies.set("_ut", res.data._ut, {
                  expires: new Date(date.setMinutes(date.getMinutes() + 6)),
                  sameSite: "strict",
                  domain: "nps.shoporganic.com",
                });
                cookies.set("_ur", res.data._ur, {
                  expires: new Date(date.setDate(date.getDate() + 15)),
                  sameSite: "strict",
                  domain: "nps.shoporganic.com",
                });
              }
            });
            return instance_auth(originRequest);
          } catch (err) {
            console.log(err);
          }
        }
      }
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}

export default instance_auth;
