import axios from "axios";
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const API_URL = process.env.SERVER_URL_BACKEND; // เปลี่ยนเป็น URL ของ backend
export const API_AUTH_URL = process.env.SERVER_URL_AUTH; // เปลี่ยนเป็น URL ของ auth

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
