interface UseApiQueryOptionsType<T = undefined> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: T | Record<string, unknown> | null;
  params?: Record<string, unknown>;
  pagination?: { page?: number; limit?: number };
  headers?: Record<string, string>;
}
export type { UseApiQueryOptionsType };
