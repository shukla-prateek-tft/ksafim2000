// src/utils/api.ts
import { UseApiQueryOptionsType } from '@/services/types';
import { showToastErrors } from '@/utils/commonHelper';
import Jsona from 'jsona';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchApi = async <T>(
  options: UseApiQueryOptionsType,
  token: string,
  language: string
): Promise<T> => {
  try {
    console.log('hello bro');
    
    const fetchOptions: RequestInit = {
      method: options.method || 'GET',
      headers: {
        ...options.headers,
        'X-TenantId': 'IN_244111_M_2',
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        // Authorization: token ? `Bearer ${token}` : '',
        'Accept-Language': language || 'en',
      }
    };

    if (options.method && options.method !== 'GET' && options.data) {
      fetchOptions.body = JSON.stringify(options.data);
    }

    const response = await fetch(`${baseUrl}${options.url}`, fetchOptions);

    // ❌ Handle HTTP-level errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('❌ HTTP Error:', response.status, errorData);
      showToastErrors(errorData);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    // 🧩 Try parsing JSON safely
    let rawData: any;
    try {
      rawData = await response.json();
    } catch (parseError) {
      console.warn('⚠️ Failed to parse JSON response:', parseError);
      return {} as T;
    }

    if (!rawData) {
      console.warn('⚠️ Empty API response detected.');
      return {} as T;
    }

    // 🧠 Detect JSON:API pattern before deserialization
    const isJsonApi =
      typeof rawData === 'object' &&
      rawData !== null &&
      (('data' in rawData && (Array.isArray(rawData.data) || typeof rawData.data === 'object')) ||
        'included' in rawData ||
        'meta' in rawData);

    // 🧩 Deserialize only if JSON:API detected
    if (isJsonApi) {
      try {
        const formatter = new Jsona();
        const deserialized = formatter.deserialize(rawData);
        return deserialized as T;
      } catch (err) {
        console.warn('⚠️ Jsona failed to deserialize, returning raw JSON:', err);
        return rawData as T;
      }
    }

    // ✅ Otherwise, return plain JSON
    return rawData as T;
  } catch (error: any) {
    console.error('❌ API Request Error:', error);
    showToastErrors(error);
    throw new Error(error?.message || 'Unknown API error occurred');
  }
};
