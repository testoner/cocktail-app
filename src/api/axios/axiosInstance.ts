import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (import.meta.env.DEV) {
      console.error("[API ERROR]", error);
    }
    return Promise.reject(error);
  },
);
