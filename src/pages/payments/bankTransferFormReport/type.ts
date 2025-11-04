import { ApiState, CallServieType } from '../type';

export interface metaInfoInterface {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface BankTransferFormReportRow {
  record_Number: string;
  act_No: string;
  payment_Date: string;
  bank: number;
  bank_Account: number;
  supp: number;
  supp_Name: string;
  sum_Aut: number;
}

export interface BankTransferFormReportPayload {
  bank_Name: string;
  branch: string;
  bank_Account: string;
  bankTransferFormReport1308QueryDto: BankTransferFormReportRow[];
  total: number;
}

export interface responseInterface<Data> {
  success?: boolean;
  message?: string;
  data: Data;
  metaInfo?: boolean;
}

export interface GetBankTransferFormReportResponseInterface {
  state: ApiState<responseInterface<BankTransferFormReportPayload>>;
  callService: CallServieType;
}

export interface BankTranferFormReportProps {
  data: BankTransferFormReportPayload;
  renderActionItems?: () => JSX.Element;
  filters: BankTransferFormReportFilters;
  onChangeFilter: (patch: Partial<BankTransferFormReportFilters>) => void;
  onRetrieve: () => void;
  onClear: () => void;
}

export interface getBankTransferFormReportParamsType {
    Act_No?: string;
    Pay_Way: number;
    F_Date?: string;
    T_Date?: string;
    F_Rel_Date?: string;
    T_Rel_Date?: string;
    SuppNum: number; 
    Page?: number;
    Size?: number;
    SortColumn?: string;
    SortType?: string;
    SystemYear: number; 
    Institution: number;
  }

export interface BankTransferFormReportFilters {
  Act_No: string;
  Pay_Way: number;
  F_Date: string;
  T_Date: string;
  F_Rel_Date: string;
  T_Rel_Date: string;
  SuppNum: number;
}
export interface getParentDetailsReportParamsType {
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: string;
  SystemYear: number | string | null;
  Institution: number | string | null;
  f_class_code: number | null;
  t_class_code: number | null;
  f_class_num: number | null;
  t_class_num: number | null;
}
