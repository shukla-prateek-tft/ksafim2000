export interface InvoiceRecord {
  record_Number: number;
  run_Number: Date;
  set_Number: number;
  user_Name: string;
  check_No: number;
  details: string;
  value_date: Date;
  date_Relevant: Date;
  credit: number;
  debit: number;
  total: number;
  contraName: string;
  [key: string]: string | number | Date;
}

export interface InvoiceData {
  records?: InvoiceRecord;
  header?: string;
  budget?: string;
  sort_Name?: string;
  sort_Code?: string;
  descAut?: string;
  accCard?: string;
  grandDebit?: number;
  grandCredit?: number;
  grandTotal?: number;
  includeDebit?: number;
  includeCredit?: number;
  includeTotal?: number;
  totalDebit?: number;
  totalCredit?: number;
  totalTotal?: number;
  beforeDebit?: number;
  beforeCredit?: number;
  beforeTotal?: number;
}

export interface LocationState {
  data?: {
    acc_Card?: string;
  };
  isNew?: boolean;
}

export interface GetInvoiceDataAPIResponse {
  success: boolean;
  message: string;
  data: InvoiceData;
  metaInfo: boolean;
}

export interface PaginationType {
  pageNumber?: number;
  pageSize?: number;
  totalPages: number;
  totalCount?: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export type SortConfig = {
  key: string;
  direction: 'asc' | 'desc';
} | null;
