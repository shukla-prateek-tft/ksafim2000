import { SortDirection } from "@/pages/type";

interface getPaymentSuppilerListParamsType {
  Supp_Num: string;
  Page: number;
  Size: number;
  Supp_Name: string;
  Supp_Vat_Num: string;
  Supp_Num_Dealer: string;
  If_Hsb_Open: boolean;
  Inv_Confirm: boolean;
  SortColumn: string;
  SortType: SortDirection;
  SystemYear: number | string;
  Institution: number | string;
}
interface getPaymentListParamsType {
  Supp_Num: string;
  Inv_Confirm?: boolean;
  SystemYear: number | string;
  Institution: number | string;
}

interface getSupplierBankType {
  Desc_Aut: string;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: SortDirection;
  SystemYear: number | string;
  Institution: number | string;
}

interface getSuppliersDetails0649ParamsType {
  FromDate: string;
  ToDate: string;
  FromNum: string;
  ToNum: string;
  FromCheck: string;
  ToCheck: string;
  FromInvoiceNumber: string;
  ToInvoiceNumber: string;
  SuppNum: string;
  CurrYear: boolean;
  NoOrder: boolean;
  Cancelled: boolean;
  OrderNum: string;
  AccNo: string;
  ParentId: string;
  TypeNo: string;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: SortDirection;
  SystemYear: string;
  Institution: string;
}

interface getSupplierReport0597ParamsType {
  Page: number;
  Size: number;
  SortColumn?: string;
  SortType?: SortDirection;
  SystemYear?: number;
  Institution?: number;
  Xversion?: string;
}
interface getSupplierApprovalDataParamsType{
  Supp_Status?:number;
  Page: number;
  Size: number;
  SortColumn?: string;
  SortType?: SortDirection;
  SystemYear?: number;
  Institution?: number;
}
export type {
  getPaymentListParamsType,
  getPaymentSuppilerListParamsType,
  getSupplierBankType,
  getSuppliersDetails0649ParamsType,
  getSupplierReport0597ParamsType,
  getSupplierApprovalDataParamsType
};
export interface CheckDuplicateParams {
  checkNo?: string;
}
export interface GetListOfSuppliers0597Params {
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: SortDirection;
  SystemYear?: string;
  Institution?: string;
}
export interface CheckSupplierBankAccountParams {
  BankNo?: string;
  AccountNo?: string;
  SystemYear?: string;
  InstitutionCode?: string;
}

export interface GetParamsDetailsByNameParams {
  paramName: string;
}
export interface UpdateSupplierValidityPayload {
  supp_num: string;
  tax_date: string;
}
export interface GetPaymentSuppliersParams {
  page?: number;
  limit?: number;
}

export interface GetLaunchBearingSupplier1349ParamsType {
  Mesav_Num?: number;
  Mesav_Date?: string;
  Mesav_Sup_Ref?: number;
  Payment_Date?: string;
  Mesav_Status?: number;
  Send_Mail?: boolean;
  G_Return?: number;
  Date_Aut?: string;
  To_Date?: string;
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: string;
  SystemYear?: string;
  Institution?: string;
  Xversion?: string;
}
export interface AccCardValidationParams {
  Supp_Num: string | number;
  Acc_Card: string | number;
  New_Row: boolean;
  Supp_Num_Dealer:string | number;
}