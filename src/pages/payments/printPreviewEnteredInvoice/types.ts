export interface InvoiceItem {
  invoice_Number: string;
  pay_Act_no: string;
  date_Aut: Date;
  inv_Desc_Aut: string;
  inv_Service_Type: string;
  acc_Card: string;
  price_Per_Service_Type: number;
  returned: string | null;
  order_Number?: string | null;
}

export interface InvoiceHeaderData {
  desc_Aut: string;
  insti_Code: string;
  inst_Fullname: string;
  insti_Build_Num: string;
  phone_Num: string;
  fax_Num: string;
  return_Name: string;
  act_No: string;
  invoice_Number: string;
  date_Aut: string;
  pay_Date: string;
  stamp_Idate: string;
  hebrew_Year: string;
  set_Number: number;
  inv_Desc_Aut: string;
  supp: string;
  service_Type: string;
  service_Subject: string;
  acc_Card: string;
  acc_Act_Type: string;
  outcome_Sum: number;
  type_No: number;
  is_Confirm: boolean;
  is_Confirm_Text: string;
  supp_Num: string;
  supp_Name: string;
  contact_Man_Name: string;
  supp_Build_Num: string;
  is_Gefen_Invoice: boolean;
}

export interface InvoiceType {
  fax_Num: string;
  insti_Code: string;
  inst_Fullname: string;
  phone_Num: string;
  pay_date: string;
  act_No: string;
  supp_Num: string;
  hebrew_Year: string;
  set_Number: number | string;
  return_Name: string;
  desc_Aut: string;
  invoices: InvoiceItem[];
}

export interface t760DataType {
  line_no: number;
  catalog_no: number;
  desc_aut: string;
  amount_aut: number;
  price_aut: number;
  inv_acc_card: string;
  inv_service_type: string;
  inv_service_subject: string;
  sug_taktziv: string;
  vat_type: number;
  vat_sum: number;
  discount: number;
  price_with_vat: number;
}

export interface InvoiceQueryResponse {
  state: {
    loading: boolean;
    data: InvoiceApiResponse;
  };
  callService: (payload: GetInvoiceForPrintParamsTypes) => void;
}

export interface GetInvoiceForPrintParamsTypes {
  ActNo: string;
  SystemYear: string | null;
  InstitutionCode: string | null;
}

export interface InvoiceApiResponse {
  success: boolean;
  message: string;
  data: {
    invoiceHeaderData: InvoiceHeaderData;
    t705Data: InvoiceItem[];
    t760Data: t760DataType[];
  };
}
