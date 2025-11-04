import { SortDirection } from "../type";

export type PaymentMethodsColumnKey = 
  | 'pay_Way'
  | 'pay_Way_Desc'
  | 'acc_Card_Name'
  | 'acc_Card2_Name'
  | 'credit_Card'
  | 'cheq_Card'
  | 'bank_Req'
  | 'cheque_Req';


export enum PaymentMethodsColumnEnum {
  PayWay = 'pay_Way',
  PayWayDesc = 'pay_Way_Desc',
  AccCardName = 'acc_Card_Name',
  AccCard2Name = 'acc_Card2_Name',
  CreditCard = 'credit_Card',
  CheqCard = 'cheq_Card',
  BankReq = 'bank_Req',
  ChequeReq = 'cheque_Req'
}

export interface PaymentMethodItem {
  pay_Way: number | string;
  acc_Card?: number | null;
  pay_Way_Desc: string;
  acc_Card_Name: string;
  acc_Card2?: number | null;
  acc_Card2_Name: string | null;
  credit_Card: boolean;
  cheq_Card: boolean;
  bank_Req: boolean;
  cheque_Req: boolean;
  [key: string]: string | number | boolean | null | undefined;
}

export interface PaymentMethodsMetaInfo {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetPaymentMethodsResponse {
  success: boolean;
  message: string;
  data: PaymentMethodItem[];
  metaInfo: PaymentMethodsMetaInfo;
  summaryData: {
    cheq_Card_Hid: boolean;
  };
}

export interface ValidateCheqCardValueChangeData {
  canProceed: boolean;
  message: string | null;
  cheq_Card: boolean | null;
}

export interface ValidateCheqCardValueChangeResponse {
  success: boolean;
  message: string;
  data: ValidateCheqCardValueChangeData;
}

export interface PaymentMethodsProps {
  renderActionItems: () => JSX.Element;
  data: PaymentMethodItem[];
  pagination?: PaymentMethodsMetaInfo;
  handlePaginationChange?: (page: number) => void;
  handleSort?: (key: PaymentMethodsColumnKey, direction: SortDirection) => void;
  hideCheqCard?: boolean;
  onToggleCheqCard?: (row: PaymentMethodItem, nextChecked: boolean, index: number) => void;
}
