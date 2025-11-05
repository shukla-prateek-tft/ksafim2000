import axios, { AxiosRequestConfig, HttpStatusCode } from 'axios';
import { HttpMethods, MakeAdminRequestFn, MakeAdminRequestFnError, MakeAdminRequestOptions } from './type';

const axiosInst = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 50000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInst.interceptors.response.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);
axiosInst.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);
export const makeMultipleRequests = async (reqParamsArray: AxiosRequestConfig[]) => {
  const promiseArray = [];
  for (const reqParams of reqParamsArray) {
    const promise = axiosInst(reqParams);
    promiseArray.push(promise);
  }
  return Promise.all(promiseArray)
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};
export const exportData = async (path: string, token: string = "", data: unknown, fileName: string, method: HttpMethods = 'POST') => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const userToken = token && token;
  const apiUrl = `${baseURL}${path}`;
  const documentName = fileName || 'invoice.pdf';
  const fetchOptions: RequestInit = {
    method: method,
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json',
      'Accept-Language': import.meta.env.VITE_DEFAULT_LANGUAGE || 'he'
    }
  };
  if (data && method !== 'GET') {
    fetchOptions.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(apiUrl, fetchOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    const blob = await response.blob();

    // Create a link and download the file
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = documentName;
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);

    return { success: true, message: 'File downloaded successfully' };
  } catch (error) {
    console.error('Error during file download:', error);
    return {
      success: false,
      message: 'Failed to download the file'
    };
  }
};
export const previewFile = async (path: string, token: string = "", data: unknown, fileName: string, method: HttpMethods = 'POST') => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const userToken = token && token;
  const apiUrl = `${baseURL}${path}`;
  const documentName = fileName || 'invoice.pdf';
  const fetchOptions: RequestInit = {
    method: method,
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    }
  };
  if (data && method !== 'GET') {
    fetchOptions.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(apiUrl, fetchOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');

    return { success: true, message: 'File downloaded successfully' };
  } catch (error) {
    console.error('Error during file download:', error);
    return {
      success: false,
      message: 'Failed to download the file'
    };
  }
};
const makeAdminRequest: MakeAdminRequestFn = async (
  reqParams,
  { token, onSuccess, onError, throwErrorOnFailure = true, handleLogout, translation } = {} as MakeAdminRequestOptions
) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  axiosInst.interceptors.request.use(
    config => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.headers['Accept-Language'] = reqParams?.language;
      config.headers['Time-Zone'] = timeZone; //TODO- Need to uncomment when backend changes are done
      return config;
    },
    error => Promise.reject(error)
  );
  try {
    const response = await axiosInst(reqParams);
    if (response?.status === HttpStatusCode.NoContent) {
      onSuccess && onSuccess({ data: { message: translation('successValidation') } });
      return response;
    }

    onSuccess && onSuccess(response);
    return response;
  } catch (error) {
    if ((error as MakeAdminRequestFnError)?.status === HttpStatusCode.Unauthorized) {
      handleLogout && handleLogout();
    }

    onError && onError((error as MakeAdminRequestFnError)?.response);
    if (throwErrorOnFailure) {
      throw error;
    }
  }
};

export default makeAdminRequest;
