import axios, { AxiosRequestConfig, AxiosResponse, Method, ResponseType } from "axios";

import { API_BASE_URL } from "@config/constants";

export const getDataFromLocalStorage = (key: string): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};

export const setLocalstorageData = (key: string, value: any): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value);
};

const getHeaders = (contentType: string): { [key: string]: string } => {
  const headers: { [key: string]: string } = { "Content-Type": contentType };

  const token = getDataFromLocalStorage("token");
  if (token) headers.Authorization = `Bearer ${token}`;

  return headers;
};

export const clearDataFromLocalStorage = (): void => {
  localStorage.clear();
};

interface CallApiArgs {
  url: string;
  method?: Method;
  data?: any;
  timeout?: number;
  content_type?: string;
  responseType?: ResponseType;
  axios_args?: Partial<AxiosRequestConfig>;
}

export const callApi = ({
  url,
  method = "GET",
  data = {},
  timeout = 20000,
  content_type = "application/json",
  responseType,
  axios_args = {},
}: CallApiArgs): Promise<any> => {
  const params = method === "GET" ? data : {};
  const payload = method !== "GET" ? data : {};

  return new Promise((resolve, reject) => {
    axios({
      baseURL: API_BASE_URL,
      url,
      method,
      timeout,
      responseType,
      params,
      data: payload,
      headers: getHeaders(content_type),
      validateStatus: (status) => status >= 200 && status < 300,
      ...axios_args,
    })
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error?.response?.status === 401 || error?.code === "ERR_NETWORK") {
          clearDataFromLocalStorage();

          window.location.replace("/login");
        }

        reject(error);
      });
  });
};
