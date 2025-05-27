import axios from "axios";

export const API_URL = "https://backend-e-testing.trrcane.com"; // เปลี่ยนเป็น URL ของ backend
export const API_AUTH_URL = "https://auth-e-testing.trrcane.com"; // เปลี่ยนเป็น URL ของ auth

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
