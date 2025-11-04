import { useState, useCallback } from 'react';
import { useQuery, useMutation, QueryKey } from '@tanstack/react-query';
import { fetchApi } from '@/utils/api';
import { UseApiQueryOptionsType } from '@/services/types';
import { useAuth } from './useAuth';
import { useLanguage } from './useLanguage';

type ServiceFunction<P = any> = (params?: P) => UseApiQueryOptionsType;

/**
 * Hook for GET operations using React Query
 */
export function useApiQuery<TData = unknown, TParams = any>(
  service: ServiceFunction<TParams>,
  options?: {
    queryKey?: string | QueryKey;
    initialParams?: TParams;
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
    onSuccess?: (data: TData) => void;
    onError?: (error: unknown) => void;
    keepPreviousData?: boolean;
  }
) {
  const { user } = useAuth();
  const { currentLanguage } = useLanguage();
  const [params, setParams] = useState<TParams | undefined>(options?.initialParams);

  const queryKey = Array.isArray(options?.queryKey)
    ? [...options.queryKey, params]
    : [options?.queryKey || service.name, params];

  const query = useQuery<TData>({
    queryKey,
    queryFn: async () => {
      try {
        const serviceOptions = service(params || options?.initialParams);
        const res = await fetchApi<TData>(serviceOptions, user?.token ?? '', currentLanguage);
        
        // Call onSuccess immediately after successful fetch
        if (options?.onSuccess) {
          options.onSuccess(res);
        }
        
        return res;
      } catch (error) {
        // Call onError immediately when error occurs
        if (options?.onError) {
          options.onError(error);
        }
        
        throw error; // Re-throw to let React Query handle it
      }
    },
    // enabled: options?.enabled !== false,
    enabled: !!params,
    refetchOnWindowFocus: options?.refetchOnWindowFocus,
    keepPreviousData: options?.keepPreviousData
  });

  // Add the ability to call with new params
  const callService = useCallback(
  (newParams?: TParams) => {
    // if (JSON.stringify(newParams) === JSON.stringify(params)) {
    //   // Params are the same, force a refetch
    //   query.refetch();
    // } else {
    //   // Params are different, update and let React Query refetch automatically
    //   setParams(newParams);
    // }
    // console.log("new params = ",newParams)
    setParams(newParams);
    // query.refetch();
  },
  [ query]
);

  // Reset the service state
  const resetServiceState = useCallback(() => {
    return query.remove();
  }, [query]);

  return {
    ...query, // Spread all properties from React Query
    loading:query.isLoading,
    callService,
    resetServiceState
  };
}

/**
 * Hook for POST/PUT/DELETE operations using React Query
 */
export function useApiMutation<TData = unknown, TParams = any>(
  service: ServiceFunction<TParams>,
  options?: {
    mutationKey?: string | QueryKey;
    onSuccess?: (data: TData, variables: TParams) => void;
    onError?: (error: unknown, variables: TParams) => void;
    onMutate?: (variables: TParams) => unknown;
    onSettled?: (data: TData | undefined, error: unknown | null, variables: TParams) => void;
    invalidateQueries?: QueryKey[];
  }
) {
  const { user } = useAuth();
  const { currentLanguage } = useLanguage();

  const mutation = useMutation<TData, unknown, TParams>({
    mutationKey: options?.mutationKey
      ? Array.isArray(options.mutationKey)
        ? options.mutationKey
        : [options.mutationKey]
      : [service.name],
    mutationFn: async (mutationParams: TParams) => {
      const serviceOptions = service(mutationParams);
      return fetchApi<TData>(serviceOptions, user?.token ?? '', currentLanguage);
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
    onMutate: options?.onMutate,
    onSettled: options?.onSettled
  });

  const callService = useCallback(
    (params: TParams) => {
      return mutation.mutate(params);
    },
    [mutation]
  );

  return {
    ...mutation, // Spread all properties from React Query
    loading:mutation.isPending,
    callService
  };
}
