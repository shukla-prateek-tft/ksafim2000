import { ApiState, CallServieType, PaginationType } from "../type";

export interface GetSupplierApprovalDataResponseRow {
  record_Number: string;
  act_No: string;
  payment_Date: string;
  bank: number;
  bank_Account: number;
  supp: number;
  supp_Name: string;
  sum_Aut: number;
}

export interface GetSupplierApprovalDataResponsePayload {
  bank_Name: string;
  branch: string;
  bank_Account: string;
  bankTransferFormReport1308QueryDto: GetSupplierApprovalDataResponseRow[];
  total: number;
}

export interface SummaryData {
  supp_Num_Dealer_Supp_Dim: boolean;
  supp_Vat_Num_Supp_Dim: boolean;
  supp_Num_Dealer_Header_Dim: boolean;
  supp_Vat_Num_Header_Dim: boolean;
}
export interface SupplierApprovalDataDto {
  caseId: any;
  caseValue: any;
  insti?: number;
  insti_Fullname?: string;
  supp_Num: number;
  supp_Name?: string;
  tax_Deduct?: number;
  tax_Date?: string; // DateTime -> string (ISO from API)
  supp_Num_Dealer?: number;
  supp_Vat_Num?: number;
  bank?: number;
  bank_Account?: number;
  stamp_Idate?: string; // DateTime -> string
  status?: number;
  books_aproved?: boolean;
  status_Yes?: boolean;
  status_No?: boolean;
  status_Done?: boolean;
}


export interface responseInterface<Data> {
  success?: boolean;
  message?: string;
  data: SupplierApprovalDataDto[];
  metaInfo?: PaginationType;
  summaryData?: SummaryData;
}

export interface GetSupplierApprovalDataResponseInterface {
  state: ApiState<responseInterface<GetSupplierApprovalDataResponsePayload[]>>;
  callService: CallServieType;
}
export interface CaseData {
  caseId: number;
  caseValue: string;
}

export interface GetCaseDataResponseInterface {
  state: ApiState<responseInterface<CaseData[]>>;
  callService: CallServieType;
}