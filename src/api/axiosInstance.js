import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "www.portlandnativeplants.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
