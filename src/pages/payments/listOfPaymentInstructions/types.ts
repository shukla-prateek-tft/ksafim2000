import { PaginationType } from '../type';

export interface PaymentRecord {
  supp_Order: string | null;
  outcome: number;
  payment_Date: string; // ISO date string
  tax_Dedect: string | null;
  pay_Date: string; // ISO date string
  name: string;
  supp_Num: number;
  check_Num: number;
  act_No: string;
}

// The `metaInfo` object
export interface MetaInfo {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

// The `summaryData` object
export interface SummaryData {
  total_Outcome: number;
  total_Amount: number;
}

// Full API response
export interface PaymentsApiResponse {
  success: boolean;
  message: string;
  data: PaymentRecord[];
  metaInfo: PaginationType;
  summaryData: SummaryData;
}
