import { CustomRowRenderType } from "../type";

export interface ClosingCheckInvoiceLpOpen {
  act_No: string;
  payment_Date: string;
  bank: number;
  bank_Account: number;
  check_Num: string;
  outcome: number;
  pay_Way_Desc: string;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface ClosingCheckInvoiceLpHbnOpen {
  act_No: string;
  date_Aut: string;
  student: number;
  outcome_Sum: number;
  desc_Aut: string;
  service_Type: number;
  service_Subject: number;
  acc_card: number;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface ClosingInvoiceData {
  closingCheckInvoicesLpOpen?: ClosingCheckInvoiceLpOpen[];
  closingCheckInvoicesLpOpen_Total?: number;
  closingCheckInvoicesLpHbnOpen?: ClosingCheckInvoiceLpHbnOpen[];
  closingCheckInvoicesLpHbnOpen_Total?: number;
  SuppNum?: number;
  SuppName?: string;
}

export interface GetClosingInvoiceResponse {
  success: boolean;
  data: ClosingInvoiceData;
  message: string;
  metaInfo: boolean;
}

export interface GetCreatingIncomeTaxFileParams {
  Page: string;
  Size: string;
  SortColumn: string;
  SortType: string;
  SystemYear: number | string;
  Institution: number | string;
  SuppNum: string | number;
  ShowInvoice: string;
}

export interface CustomRowenderTypeofClosingCheckInvoiceLpOpen {
  key: string;
   customRowRenderer: CustomRowRenderType<ClosingCheckInvoiceLpOpen>;
}

export interface ClosingInvoiceProps {
  data: ClosingInvoiceData;
  customRowRendererOfClosingCheckInvoiceLpOpen: CustomRowRenderType<ClosingCheckInvoiceLpOpen>;
  customRowRendererOfClosingCheckInvoiceLpHbnOpen: CustomRowRenderType<ClosingCheckInvoiceLpHbnOpen>;
}