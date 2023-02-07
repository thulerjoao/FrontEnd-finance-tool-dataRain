import axios from "axios";

const Api = axios.create({

  baseURL: "https://back-btc-finance-tool-production-0df0.up.railway.app",
});

Api.interceptors.request.use((config: any) => {
  try {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error: any) {
  }
});

export default Api;