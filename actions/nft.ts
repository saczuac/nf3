import { AxiosResponse } from "axios";
import { APIClient } from "../services";

export const fetchNFTs = async (query: string) => {
  try {
    let { data } = (await APIClient.NFTService.search(query)) as AxiosResponse<
      NFTList[]
    >;
    return data;
  } catch (error) {
    // Do something with the error
  }
};
