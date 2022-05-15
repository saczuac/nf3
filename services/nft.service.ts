import { AxiosInstance } from 'axios';

export class NFTService {
  constructor(private client: AxiosInstance) {}

  search(query: string) {
    return this.client.get('/api/cryptokitties', {
      params: { query },
    });
  }
}
