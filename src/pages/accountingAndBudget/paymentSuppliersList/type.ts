import { ApiState, CallServieType, PaginationType, SortDirection } from '@/pages/type';
import { getPaymentSuppilerListParamsType } from '@/services/supplier/types';
import { SupplierType, PaymentListType } from '@/store/slices/PaymentSupplier/types';
import { GetInvoiceForPrintVoucherAPIResponse } from '@/pages/invoice/addInvoice/component/printVoucher/type';
import type { ChangeEvent, ReactNode } from 'react';

export interface ParamsResponseDataType {
  system_Code: number;
  param_Name: string;
  desc_Aut: string;
  param_Desc: string;
  param: string;
  param_Type: string;
  param_Char: string | null;
  table_Number: number | null;
  to_Client: boolean;
}

export interface PaymentSupplierListUIProps {
  data: SupplierType[];
  handlePagination?: (page: number) => void;
  pagination?: PaginationType;
  handleShow: () => void;
  selectedSuppliers: SupplierType | null;
  handleSelectSupplier: (supplier: SupplierType) => void;
  renderActionItems?: () => ReactNode;
  filters: getPaymentSuppilerListParamsType;
  handleChangeFilters: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClearFilters: () => void;
  headerTitle?: string;
  paramTypeData: ParamsResponseDataType;
  handleApiSortingSupplier: (columnId: string, direction: SortDirection) => void;
  handleGoToPaymentSupplier: (
    supplierData: SupplierType,
    validationCheck?: boolean
  ) => boolean | void;
  renderMainButtons: () => ReactNode;
  handleGoToSupplier: (actNo: string) => void;
  handleClick?: () => void;
  handleClickOnNewExpenseVouchers?: () => void;
}

export interface Supplier {
  supp_Num?: string;
  name?: string;
  email?: string;
  [key: string]: string | number | boolean | null | undefined;
}
export interface SupplierPaymentListTypes {
  onSelectSupplierForPayment?: (data?: SupplierType) => void;
  onCloseSelection: () => void;
  headerTitle?: string;
}

export interface responseInterface<Data> {
  success?: boolean;
  message?: string;
  loading: boolean;
  data: Data;
}

export interface GetParamsDetailsByNameAPIResponseInterface {
  state: ApiState<responseInterface<ParamsResponseDataType>>;
  callService: CallServieType;
}

// API response types for Payment Suppliers List
export interface PaymentSupplierListApiResponse extends responseInterface<SupplierType[]> {
  metaInfo?: PaginationType;
}

export interface GetPaymentSupplierListAPIResponseInterface {
  state: ApiState<PaymentSupplierListApiResponse>;
  callService: CallServieType;
}

export interface PaymentListApiResponse extends responseInterface<PaymentListType[]> {}

export interface GetPaymentListAPIResponseInterface {
  state: ApiState<PaymentListApiResponse>;
  callService: CallServieType;
}

export interface GetInvoiceForPrintVoucherServiceInterface {
  state: ApiState<GetInvoiceForPrintVoucherAPIResponse>;
  callService: CallServieType;
}

export type ExtendedSupplierRow = SupplierType & {
  action1?: string;
  action2?: string;
  id_Supplier?: string;
  [key: string]: string | number | boolean | null | undefined;
};

export type PaymentRow = {
  act_No?: string;
  date_Aut?: string;
  outcome_Sum?: number | string;
  is_Confirm_Text?: string;
  [key: string]: string | number | boolean | null | undefined;
};

export interface ValidateExpenseVoucherData {
  canProceed: boolean;
  error_Message: null | string;
}
export interface ValidateExpenseVoucherResponse {
  success: boolean;
  message: string;
  data: ValidateExpenseVoucherData;
}
