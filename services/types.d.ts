interface ResponseCachedList {
  [key: string]: ResponseCached;
}
interface ResponseCached {
  response: AxiosResponse;
  updatedAt: string;
}
