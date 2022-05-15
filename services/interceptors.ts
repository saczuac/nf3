import axios from 'axios';
import { cacheResponse } from './cache';

export const applyInterceptors = () => {
  axios.interceptors.request.use(config => {
    const newConfig = { ...config } as any;
    newConfig.headers = newConfig.headers || {};
    const token = 'myToken';

    // newConfig.headers['API-Token'] = `API-TOKEN:${token}`;
    newConfig.headers.Authorization = `API-TOKEN:${token}`;

    return newConfig;
  });

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      // Response interceptor here
      return Promise.reject(error);
    },
  );

  cacheResponse(axios);
};

