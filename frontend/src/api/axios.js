import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor — প্রতিটা request এ token পাঠাবে
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor — 401 হলে token refresh করবে
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        const refresh = localStorage.getItem('refresh');
        const res = await axios.post(`${BASE_URL}/auth/refresh/`, { refresh });

        const newAccess = res.data.access;
        localStorage.setItem('access', newAccess);

        original.headers.Authorization = `Bearer ${newAccess}`;
        return API(original);
      } catch {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default API;