import { useState, useCallback } from 'react';
import { useQuery, useMutation, QueryKey } from '@tanstack/react-query';
import { fetchApi } from '@/utils/api';
import { UseApiQueryOptionsType } from '@/services/types';
import { useAuth } from './useAuth';
import { useLanguage } from './useLanguage';

type ServiceFunction<P = any> = (params?: P) => UseApiQueryOptionsType;

interface CommonOptions<TData, TParams> {
  onSuccess?: (data: TData, variables?: TParams) => void;
  onError?: (error: unknown, variables?: TParams) => void;
}

/**
 * Auto-detecting unified API hook (GET + Mutation)
 */
export function useApi<TData = unknown, TParams = any>(
  service: ServiceFunction<TParams>,
  options?: {
    queryKey?: string | QueryKey;
    initialParams?: TParams;
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
    keepPreviousData?: boolean;
    mutationKey?: string | QueryKey;
    onMutate?: (variables: TParams) => unknown;
    onSettled?: (data: TData | undefined, error: unknown | null, variables: TParams) => void;
    invalidateQueries?: QueryKey[];
  } & CommonOptions<TData, TParams>
) {
  const { user } = useAuth();
  const { currentLanguage } = useLanguage();
  const [params, setParams] = useState<TParams | undefined>(options?.initialParams);

  const serviceOptions = service(params || options?.initialParams);
  const method = serviceOptions.method?.toUpperCase() || 'GET';

  const queryKey = Array.isArray(options?.queryKey)
    ? [...options.queryKey, params]
    : [options?.queryKey || service.name, params];

  // 🟢 GET → useQuery
  if (method === 'GET') {
    const query = useQuery<TData>({
      queryKey,
      queryFn: async () => {
        const opts = service(params || options?.initialParams);
        if (!opts.url) throw new Error('Service function must return a valid URL');
        const res = await fetchApi<TData>(opts, user?.token ?? '', currentLanguage);
        options?.onSuccess?.(res);
        return res;
      },
      enabled: !!params && (options?.enabled ?? true),
      refetchOnWindowFocus: options?.refetchOnWindowFocus,
      keepPreviousData: options?.keepPreviousData,
      onError: options?.onError
    });

    const callService = useCallback((newParams?: TParams) => {
      setParams(newParams);
    }, []);

    const resetServiceState = useCallback(() => query.remove(), [query]);

    return {
      ...query,
      loading: query.isLoading,
      callService,
      resetServiceState
    };
  }

  // 🔵 POST / PUT / DELETE → useMutation
  const mutation = useMutation<TData, unknown, TParams>({
    mutationKey: options?.mutationKey
      ? Array.isArray(options.mutationKey)
        ? options.mutationKey
        : [options.mutationKey]
      : [service.name],
    mutationFn: async (mutationParams: TParams) => {
      const opts = service(mutationParams);
      if (!opts.url) throw new Error('Service function must return a valid URL');
      return fetchApi<TData>(opts, user?.token ?? '', currentLanguage);
    },
    onSuccess: (data, vars) => options?.onSuccess?.(data, vars),
    onError: (error, vars) => options?.onError?.(error, vars),
    onMutate: options?.onMutate,
    onSettled: options?.onSettled
  });

  const callService = useCallback((params: TParams) => mutation.mutate(params), [mutation]);

  return {
    ...mutation,
    loading: mutation.isPending,
    callService
  };
}
