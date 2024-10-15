import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axiosInstanceFile = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

let store;

export const fileInjectStore = _store => {
  store = _store;
};

axiosInstanceFile.interceptors.request.use(
  function (config) {
    const updateConfig = { ...config };
    const token = store.getState();

    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstanceFile.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
