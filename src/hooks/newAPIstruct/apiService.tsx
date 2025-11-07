import { AxiosInstance } from "axios";
import qs from "qs";

export type QueryParams = {
  include?: string[];
  fields?: Record<string, string[]>;
  filter?: Record<string, any>;
  sort?: string | string[];
  page?: Record<string, any>;
  [k: string]: any;
};

export class ApiService {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  // basic url builder (similar to previous sample)
  private buildUrl(path: string, params?: QueryParams) {
    if (!params) return path;
    const q: Record<string, any> = {};
    if (params.include) q.include = params.include.join(",");
    if (params.fields) {
      Object.entries(params.fields).forEach(([type, fields]) => {
        q[`fields[${type}]`] = fields.join(",");
      });
    }
    if (params.sort) q.sort = Array.isArray(params.sort) ? params.sort.join(",") : params.sort;
    if (params.page) Object.entries(params.page).forEach(([k, v]) => (q[`page[${k}]`] = v));
    if (params.filter) {
      const add = (obj: Record<string, any>, prefix = "filter") => {
        Object.entries(obj).forEach(([k, v]) => {
          const key = `${prefix}[${k}]`;
          if (v === undefined || v === null) return;
          if (typeof v === "object" && !Array.isArray(v)) add(v, key);
          else q[key] = Array.isArray(v) ? v.join(",") : String(v);
        });
      };
      add(params.filter);
    }
    // pass through extra ad-hoc params
    Object.entries(params).forEach(([k, v]) => {
      if (["include", "fields", "sort", "page", "filter"].includes(k)) return;
      if (v === undefined || v === null) return;
      q[k] = v;
    });

    const qsString = qs.stringify(q, { encode: false, arrayFormat: "comma" });
    return qsString ? `${path}?${qsString}` : path;
  }

  // GET list or single
  async get(path: string, params?: QueryParams) {
    const url = this.buildUrl(path, params);
    const resp = await this.client.get(url);
    return resp.data; // keep raw JSON:API — consumers can normalize
  }

  // POST expects full JSON:API payload { data: { type, attributes, relationships? } }
  async post(path: string, payload: any, params?: QueryParams) {
    const url = this.buildUrl(path, params);
    const resp = await this.client.post(url, payload);
    return resp.data;
  }

  async put(path: string, payload: any, params?: QueryParams) {
    const url = this.buildUrl(path, params);
    const resp = await this.client.put(url, payload);
    return resp.data;
  }

  async patch(path: string, payload: any, params?: QueryParams) {
    const url = this.buildUrl(path, params);
    const resp = await this.client.patch(url, payload);
    return resp.data;
  }

  async delete(path: string, params?: QueryParams) {
    const url = this.buildUrl(path, params);
    const resp = await this.client.delete(url);
    return resp.data;
  }
}

// export single instance
import { apiClient } from "./apiClient";
export const apiService = new ApiService(apiClient);
