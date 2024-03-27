import { AxiosRequestConfig } from "axios";
import apiFacade from "./apiFacade";

const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    return await apiFacade.get<T>(url, config).then(response => response.data);
  },
};

export default api;
