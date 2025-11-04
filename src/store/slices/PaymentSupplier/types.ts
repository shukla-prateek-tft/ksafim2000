import { InvoiceHeaderData, T705Data, T760Data } from '@/pages/invoice/addInvoice/types';
import { SelectedInvoice } from '@/pages/invoice/listOfInvoices/ListOfInvoices.controller';
import { SortDirection } from '@/pages/type';

export interface MCFW1370Filters {
  Supp_Num: string;
  Size: number;
  Supp_Name: string;
  Supp_Vat_Num: string;
  Supp_Num_Dealer: string;
  If_Hsb_Open: boolean;
  Inv_Confirm: boolean;
  SortColumn: string;
  SortType: SortDirection;
  SystemYear: string;
  Institution: string;
  Page: number;
}

export interface MCFW1250Filters {
  Page: number;
  SortColumn: string;
  SortType: SortDirection;
}
export interface SupplierType {
  supp_Num: string;
  supp_Name: string;
  bank: string;
  bank_Name: string;
  bank_Account: string;
  phone_Num1: string;
  phone_Prefix1: string;
  email_1: string;
  tax_Deduct: number;
  tax_Date: string;
  acc_Card: string;
  hsb_Open: number;
  total: number;
}

export interface PaymentListType {
  Act_No: string;
  Student: string;
  Date_Aut: string;
  Order_Number: string;
  Desc_Aut: string;
  Outcome_Sum: string;
  Is_Confirm: boolean;
  Is_Confirm_Text: string;
  Act_Status: string;
  Acc_act_type: string;
  Acc_act_type_text: string;
  Type_no: string;
  Type_no_text: string;
  Service_Type_Name: string;
  Acc_Card_Name: string;
  Service_subject_id: string;
  Service_type_id: string;
  Acc_card_id: string;
  Trasmit: string;
}

export interface PaymentSupplierState {
  supplierData: SupplierType[];
  paymentList: PaymentListType[];
  addedInvoiceData: AddedInvoiceDataType;
  recentInvoicesAddedList: AddedInvoiceDataType[];
  updatedInvoiceData: AddedInvoiceDataType;
  mcfw1370Filters: MCFW1370Filters;
  mcfw1250Filters: MCFW1250Filters;
  mcfw1250CurrentElementIndex: SelectedInvoice;
}

export interface AddedInvoiceDataType {
  invoiceHeaderData: InvoiceHeaderData;
  t705Data: T705Data[];
  t760Data: T760Data[];
}
