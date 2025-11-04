import { Dispatch, SetStateAction } from 'react';
import { CallServieType, ApiState } from '../type';

export interface GetPaymentVoucherDetailsReturnType {
  state: ApiState<{ data: PaymentVoucherDetailsResponse }> | unknown;
  callService: CallServieType;
}

export interface ChangePaymentDetailsUIProps {
  renderActionItems?: () => JSX.Element;
  data: PaymentVoucherDetail;
  loading?: boolean;
  newPaymentDate: string | Date;
  setNewPaymentDate: Dispatch<SetStateAction<string | Date>>;
  newCheckNum: number | string;
  setNewCheckNum: Dispatch<SetStateAction<number | string>>;
}

export interface PaymentVoucherDetail {
  act_No?: string;
  check_Num?: string;
  payment_Date?: string;
  outcome?: string | number;
  df_Date: string;
  insti?: string | null;
  bank?: string | null;
  bank_Account?: string | null;
  study_Year?: string | null;
  new_Payment_Date_Dim?: boolean;
}

export interface PaymentVoucherDetailsResponse {
  success: boolean;
  message: string;
  data: PaymentVoucherDetail;
}
export interface GetPaymentVoucherDetailsResponse {
  success: boolean;
  message: string;
  data: PaymentVoucherDetail[];
  metaInfo: {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}
