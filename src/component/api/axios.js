import Axios from "axios";
import { getToken } from "./token";

export const BaseUrl = "http://192.168.0.106:8088/api/";

export const apiAgent = Axios.create({ baseURL: BaseUrl });

apiAgent.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (!config.headers.Authorization && token) {
      config.headers.Authorization = `bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiAgent.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);
