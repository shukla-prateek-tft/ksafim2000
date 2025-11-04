export interface PaymentOrder {
  Act_No?: string;
  Pay_Date?: Date;
  Supp_Num?: number;
  Supp_Name?: string;
  Desc_Aut?: string;
  Pay_Way?: number;
  Payment_Date?: Date;
  Bank_Account?: number;
  Check_Num?: number;
  Outcome?: number;
  Student?: number;
  Service_Type?: string;
  Acc_Card?: string;
  Acc_Act_Type?: string;
  Outcome_Sum?: number;
  Income_Sum?: number;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface ExpenceVoucherDetails {
  Act_No?: string;
  Pay_Date?: Date;
  Supp_Num?: string | number;
  Supp_Name?: string;
  Desc_Aut?: string;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface GetExpenceVoucherDetailsResponseType {
  success: boolean;
  message: string;
  data: ExpenceVoucherDetails;
  metaInfo: {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export interface PaymentDetails {
  Pay_Way?: number;
  Bank: number | string;
  Bank_Name?: string;
  Payment_Date?: Date;
  Bank_Account?: string | number;
  Check_Num?: number | string;
  Outcome?: number | string;
}

export interface GetPaymentDetalsResponseType {
  success: boolean;
  message: string;
  data: PaymentDetails[];
  metaInfo: {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export interface ExpenceDetailsInvoicesType {
  Student?: string | number;
  Service_Type?: string;
  Acc_Card?: string;
  Acc_Act_Type?: string;
  Outcome_Sum?: string | number;
  Income_Sum?: string | number;
}

export interface GetExpenseDetailsInvoicesResponseType {
  success: boolean;
  message: string;
  data: ExpenceDetailsInvoicesType[];
  metaInfo: {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export interface InputValueType {
  desc: string;
  cancel_Payment_Voucher: boolean;
}
