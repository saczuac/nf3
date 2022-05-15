import axios from 'axios';
import { TIMEOUT } from '../constants';
import { NFTService } from './nft.service';

class AxiosClient {
  NFTService = new NFTService(axios);

  buildServices = (
    _APIURL: string = '',
    _msUrl: string = '',
  ) => {
    axios.defaults.baseURL = _APIURL;
    axios.defaults.timeout = TIMEOUT;
    axios.defaults.timeoutErrorMessage = 'timeout';

    const msClient = axios.create({ baseURL: _msUrl });
    msClient.interceptors.request = axios.interceptors.request;

    this.NFTService = new NFTService(axios);
  };
}

export const APIClient = new AxiosClient();
