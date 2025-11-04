// src/utils/api.ts
import { UseApiQueryOptionsType } from '@/services/types';
import { showToastErrors } from '@/utils/commonHelper';
import axios from 'axios';

const axiosInst = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 50000,
  withCredentials: true,
  headers: {
    'X-TenantId': 'In_111_M',
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
  }
});

const baseUrl = `https://192.168.23.143/api/v1/suppliers`

export const fetchApi = async <T>(
  options: UseApiQueryOptionsType,
  token: string,
  language: string
): Promise<T> => {
  try {
    // const response = await axiosInst({
    //   ...options,
    //   headers: {
    //     ...options.headers,
    //     Authorization: `Bearer ${token}`,
    //     'Accept-Language': language
    //   }
    // });

    const fetchOptions = {
      method:options.method,
      headers: {
        'X-TenantId': 'In_111_M',
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
        'Accept-Language': language,
        ...options?.headers
      }
    }

    if(options.method!=='GET'){
      fetchOptions.body = JSON.stringify(options.data);
    }

    const response = await fetch(`${baseUrl}${options.url}`,fetchOptions);
    
    // Check for HTTP errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      showToastErrors(errorData);
      throw new Error(response.statusText || 'Request failed');
    }

    // Parse and return JSON data
    const data = await response.json();
    // console.log("data = ",data);
    return data as T;
  } catch (error) {
    showToastErrors(error);
    throw error;
  }
};