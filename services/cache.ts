import { AxiosStatic } from 'axios';
import { differenceInMinutes, parseISO } from 'date-fns';
import { TTL } from '../constants';

const responsesCached: ResponseCachedList = {};

function getResponse(url: string) {
  return { ...responsesCached[url] };
}

export function cacheResponse(axiosInstance: AxiosStatic) {
  axiosInstance.interceptors.request.use(config => {
    try {
      const { url, method } = config;
      if (method?.toUpperCase() !== 'GET') return config;
      if (!url) return config;

      const cachedResponse = getResponse(url);

      const updatedAgo = differenceInMinutes(
        parseISO(cachedResponse?.updatedAt),
        new Date(),
      );

      if (updatedAgo < TTL) {
        return {
          ...config,
          adapter: () => new Promise(cb => cb(getResponse(url).response)),
        };
      }

      delete responsesCached[url];

      return config;
    } catch (error) {
      // Capture error exception here
      return config;
    }
  });

  axiosInstance.interceptors.response.use(response => {
    try {
      const url = response.config.url || '';
      const cachedResponse = getResponse(url);

      if (url && response.status === 200 && !cachedResponse) {
        responsesCached[url] = {
          response,
          updatedAt: new Date().toISOString(),
        };
      }

      return response;
    } catch (error) {
      // Capture error exception here
      return response;
    }
  });
}

export function clearCacheResponse() {
  Object.keys(responsesCached).forEach(key => {
    delete responsesCached[key];
  });
}
