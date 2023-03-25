import axios from "axios";

const Api = axios.create({

  baseURL: "https://data-rain-finance-tool-server-production.up.railway.app/",
  // baseURL: "http://localhost:3333/",

  
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