import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.portlandnativeplants.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
