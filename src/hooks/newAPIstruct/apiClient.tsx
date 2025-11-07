import axios, { AxiosInstance } from "axios";

export const createAxiosInstance = (baseUrl: string, defaultHeaders = {}) : AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30_000,
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      ...defaultHeaders,
    },
  });

  // Request interceptor (auth token example)
  instance.interceptors.request.use((cfg) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;
    if (token) {
      cfg.headers = cfg.headers ?? {};
      (cfg.headers as any).Authorization = `Bearer ${token}`;
    }
    return cfg;
  });

  // Response interceptor (map JSON:API errors)
  instance.interceptors.response.use(
    (r) => r,
    (err) => {
      if (err.response?.data?.errors) {
        const message = err.response.data.errors.map((e: any) => e.detail || e.title).join("; ");
        const enhanced = new Error(message);
        (enhanced as any).jsonApi = err.response.data.errors;
        (enhanced as any).status = err.response.status;
        return Promise.reject(enhanced);
      }
      return Promise.reject(err);
    }
  );

  return instance;
};

// Create a single app instance (configure base URL via env)
export const apiClient = createAxiosInstance(process.env.REACT_APP_API_BASE || "https://api.example.com");
