// .env থেকে API Base URL নিচ্ছি

const BASE_URL = import.meta.env.VITE_API_BASE_URL;



import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;