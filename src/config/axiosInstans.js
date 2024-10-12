import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let store;

export const injectStore = _store => {
  store = _store;
};

axiosInstance.interceptors.request.use(
  function (config) {
    const updateConfig = { ...config };
    const token = store.getState().auth.token;

    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
