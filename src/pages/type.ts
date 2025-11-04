import { UseApiQueryOptionsType } from '@/services/types';
import { AxiosResponse } from 'axios';
import { TFunction } from 'i18next';

export interface DialogCommonPropsType {
  isOpen: boolean;
  onClose: () => void;
}
export type ColumnProps = {
  [key: string]: TFunction;
};

export type CustomRowRenderType<T> = (
  key?: Extract<keyof T, string | number> | string,
  row?: T,
  index?: number
) => JSX.Element | undefined | React.ReactNode;

export type TableColumnType<T> = {
  key: Extract<keyof T, string | number>; // only real keys allowed
  label?: string;
  width?: string;
  printWidth?:string;
  sortable?: boolean;
  header?: (
    key: Extract<keyof T, string | number>,
    column: TableColumnType<T>,
    index: number
  ) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
};

export interface OptionsType {
  label: string;
  value: string;
}

export interface ServiceFn <T = undefined> { 
  (inputs: unknown, extraInputs?: unknown): UseApiQueryOptionsType<T>;
}

export interface EnumStateType {
  budgetTypes: Array<OptionsType>;
  invoiceStatus: Array<OptionsType>;
  reportFilters: Array<OptionsType>;
}

export interface GlobalStateType {
  enums: EnumStateType;
}

export interface StateType {
  global: GlobalStateType;
  document: { isPdfAvailable: boolean };
}

export type CallServieType = (
  inputs?: unknown,
  extraInputs?: unknown
) => Promise<AxiosResponse | undefined>;

export interface ApiErrorType {
  message: string;
}

export interface ExpenseVoucherType {
  id?: string;
  insti: number;
  year: number;
  act_No: string;
  desc_Aut: string;
  acc_Act_Type: string;
  student: string;
  expNo: string;
  date_Aut: string;
  accAutType: string;
  service_Type: string;
  serviceType: string;
  acc_Card: string;
  accCard: string;
  outcome_Sum: number;
  service_Subject: string;
  priority_Aut: number | null;
  income_Sum: number;
  deduct_Sum: number;
  order_Number: number | null;
  real_Study_Year: number;
  pay_Insti: string | null;
  pay_Study_Year: number;
  pay_Act_No: string | null;
  act_Status: number;
  process_No: string | null;
  type_No: string | null;
  is_Confirm: boolean;
  [key: string]: string | number | undefined | null | boolean;
}

export interface InvoiceDataType {
  invoices?: {
    suppNum?: string;
    supp_Num?: string;
    suppName?: string;
    supp_Name?: string;
  };
}

export interface PaymentDataType {
  id: string;
  familyName: string;
  privateName: string;
  date: string;
  bank: string;
  bankAccount: string;
  sum: string;
  actNo: string;
  returned: boolean;
  paid: boolean;
  signed: boolean;
  [key: string]: string | boolean;
}

export enum SortDirection {
  Asc = 'Asc',
  Desc = 'Desc'
};

export interface SortConfig {
  key: string;
  direction: SortDirection;
}

export interface ApiState<T = unknown> {
  loading: boolean;
  isSuccess: boolean;
  data: T;
  isError: boolean;
  error: { message?: string , data?:string };
}

export interface PaginationType {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}


export interface CommonApiResponseType {
  success: boolean;
  message: string;
}
export interface ApiDefaultResponseType{
  data: {
    data: Record<string, unknown>[];
    paginationMetadata?: PaginationType;
  };
}