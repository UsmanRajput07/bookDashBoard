import axios from "axios";
import config from "@/config/config";
import authToken from "@/zustand/store";

const axiosWrapper = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosWrapper.interceptors.request.use((config) => {
  const token = authToken((state) => state.token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosWrapper;
