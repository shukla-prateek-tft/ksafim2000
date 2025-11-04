// type.ts

export interface ParentDetailRow {
  serviceType: string;
  payDate: string;
  actNo: string;
  plan: string;
  receipt: string;
  accActType: string;
  sCreditDebit: string;
  rest: string;
}

export type ParentDetailKey = string;

export type CustomRowRenderer = (
  key: ParentDetailKey,
  row: ParentDetailRow,
  index: number
) => React.ReactNode;

export interface FinancialTransactionUIProps {
  data: ParentDetailRow[];
  customRowRender?: CustomRowRenderer;
}

// API types
export interface FinancialAPIResponse {
  success: boolean;
  data: ParentDetailRow[];
  message?: string;
}
