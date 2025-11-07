// src/hooks/createResourceHooks.ts
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "react-query";
import { apiService } from "../api/apiService";
import type { QueryParams } from "../api/apiService";

type ResourceHooksConfig = {
  resourceName: string; 
  endpoint: string;
};

export const createResourceHooks = <T = any>({ resourceName, endpoint }: ResourceHooksConfig) => {
  const listKey = (params?: QueryParams) => [resourceName, "list", params];
  const itemKey = (id: string | number, params?: QueryParams) => [resourceName, "item", id, params];

  function useList(params?: QueryParams, options?: UseQueryOptions) {
    return useQuery(listKey(params), async () => {
      const data = await apiService.get(endpoint, params);
      return data as T;
    }, options);
  }

  function useGet(id: string | number, params?: QueryParams, options?: UseQueryOptions) {
    return useQuery(itemKey(String(id), params), async () => {
      const path = `${endpoint}/${id}`;
      const data = await apiService.get(path, params);
      return data as T;
    }, options);
  }

  function useCreate(options?: UseMutationOptions) {
    const qc = useQueryClient();
    return useMutation(async (payload: any) => {
      const data = await apiService.post(endpoint, payload);
      return data;
    }, {
      onSuccess: () => {
        qc.invalidateQueries([resourceName]);
      },
      ...options,
    });
  }

  function useUpdate(options?: UseMutationOptions) {
    const qc = useQueryClient();
    return useMutation(async (payload: { id: string | number, body: any }) => {
      const path = `${endpoint}/${payload.id}`;
      const data = await apiService.patch(path, payload.body);
      return data;
    }, {
      onSuccess: () => {
        qc.invalidateQueries([resourceName]);
      },
      ...options,
    });
  }

  function useDelete(options?: UseMutationOptions) {
    const qc = useQueryClient();
    return useMutation(async (id: string | number) => {
      const path = `${endpoint}/${id}`;
      const data = await apiService.delete(path);
      return data;
    }, {
      onSuccess: () => {
        qc.invalidateQueries([resourceName]);
      },
      ...options,
    });
  }

  return { useList, useGet, useCreate, useUpdate, useDelete, listKey, itemKey };
};
