import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
  _api: AxiosInstance;

  constructor(axiosConfig: AxiosRequestConfig) {
    this._api = axios.create(axiosConfig);
    this._api.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error) => {
        if (axios.isAxiosError(error) && error.response) {
          const { statusText } = error.response;
          throw new Error(statusText);
        }
        return Promise.reject(error);
      }
    );
  }

  get(url: string, params: any = {}): Promise<any> {
    return this._api({
      method: "get",
      url,
      params,
    });
  }
}

const apiClient = new ApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default apiClient;
