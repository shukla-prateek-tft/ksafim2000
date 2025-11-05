export interface SearchQueries {
  dbName: string;
  dbId: string;
  code: string;
  SortColumn: string;
  SortType: string;
}

export interface Database {
  id: string;
  name: string;
  code: string;
}

export interface PaginationMetadata {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface DatabaseResponse {
  success: boolean;
  message: string;
  data: {
    databases: Database[];
    paginationMetadata: PaginationMetadata;
  };
}

export interface SwitchDatabaseResponse {
  success: boolean;
  message: string;
  data: boolean;
}

export interface DatabaseCustomRow {
  id: string;
  name: string;
  code: string;
  [key: string]: string | boolean;
}
