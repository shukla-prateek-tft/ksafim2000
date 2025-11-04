import { ApiState, CallServieType, CustomRowRenderType } from '../type';

export interface ReceiptAndPaymentBooksReportRow {
  act_No: string;
  payment_Date: string | null;
  bank: number | null;
  bank_Account: number | null;
  check_Num: string;
  pay_Way_Desc: string;
  deposit_Date: string | null;
  deposit_Num: number | null;
  bank_Deposit_Num: number | null;
  return_Status: number | null;
  pay_Way: number | null;
  bank_Returns: number | null;
  payer_Name: string | null;
  sum_Aut: number | null;
}

export interface ReceiptAndPaymentBooksReportPayload {
  query_Params: string;
  reportData: ReceiptAndPaymentBooksReportRow[];
  total: number;
}

export interface ResponseInterface<Data> {
  success?: boolean;
  message?: string;
  data: Data;
  metaInfo?: boolean;
}

export interface GetReceiptAndPaymentBooksReportResponseInterface {
  state: ApiState<ResponseInterface<ReceiptAndPaymentBooksReportPayload>>;
  callService: CallServieType;
}

export interface ReceiptAndPaymentBooksReportFilters {
  Bank_Deposit: number | null;
  PayWay: number;
  BankNo: number | null;
  BankAccount: number | null;
  Return_Status: number | null;
  F_Date: string;
  T_Date: string;
  Check_Num: number | null;
  Act_No: string;
}

export interface ReceiptAndPaymentBooksReportProps {
  data: ReceiptAndPaymentBooksReportPayload;
  filters: ReceiptAndPaymentBooksReportFilters;
  onChangeFilter: (patch: Partial<ReceiptAndPaymentBooksReportFilters>) => void;
  onRetrieve: () => void;
  onClear: () => void;
  customRowRender?: CustomRowRenderType<ReceiptAndPaymentBooksReportRow>;
  paywayData?: { label: string; value: number }[];
}

export type PaywayDataType = {
  pay_Way: string | number;
  pay_Way_Desc: string;
};

export interface GetPaywayResponse {
  success: boolean;
  message: string;
  data: PaywayDataType[];
}
