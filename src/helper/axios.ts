import axios from "axios";
import config from "@/config/config";

const axiosWrapper = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosWrapper;
