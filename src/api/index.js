import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://192.168.0.100:3333/"
});

api.interceptors.request.use(async config => {
  const token = await localStorage.getItem("@DonJuan:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
