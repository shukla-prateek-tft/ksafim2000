import { SortDirection } from '@/pages/type';

export interface PaginationParams {
  Page: number;
  Size: number;
}

export interface SortingParams {
  SortColumn: string;
  SortType: SortDirection;
}
export interface PaginationSortingParams extends PaginationParams, SortingParams {}
export interface InstitutionContext {
  SystemYear: string | number;
  Institution?: string | number;
  InstitutionCode?: string | number;
}

interface getPayWayByPaywayId {
  paywayId: string;
  institutionCode: string;
}

interface getPaymentToSupplierParamsType {
  Supp_Num: number | string;
  SystemYear: number | string;
  Institution: number | string;
}
interface getDetailsToCancelPaymentOrderType {
  Expense_Num?: number | string;
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: string;
  Supp_Num?: number | string;
  SystemYear: number | string;
  Institution: number | string;
  Bank_Card: number | string;
  Xversion?: string;
}

interface getPaymentMethods {
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: string;
  SystemYear: number | string;
  Institution: number | string;
}

interface getReceiptBookCutOutReportParamsType {
  Bank_Deposit?: number;
  Act_Status?: number;
  PayWay?: number;
  BankNo?: number;
  BankAccount?: number;
  Return_Status?: boolean;
  F_Date?: string;
  T_Date?: string;
  Check_Num?: number;
  Act_No?: number;
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: string;
  SystemYear?: number;
  Institution?: number;
  'x-version'?: string;
}

interface getPettyCashDeposit0602Type {
  SystemYear: number | string;
  InstitutionCode: number | string;
}
interface getReport607DetailsType {
  F_Date: string;
  T_Date: string;
  Is_Select_Act: boolean;
  AccCard: number;
  Temp_1: boolean;
  Temp_0: boolean;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: string;
  SystemYear: number;
  Institution: number;
}

interface getClosingChecksAgainstInvoicesType {
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: string;
  ShowInvoice?: number;
  SystemYear: number;
  Institution: number;
  SuppNum: number;
}

interface GetStudyGroupsParamsType {
  Page?: number;
  Size?: number;
  Include_Finished?: boolean;
  Group_Num: number;
  Group_Name: string;
  Institution: number;
  SystemYear: number;
  SortColumn?: string;
  SortType?: string;
}

interface GetBearingMovementReportParamsType {
  Act_Nos?: [string];
  Mesav_Supp_Num: number;
  Mesav_Send_Date: string;
  Mesav_Payment_Date: string;
  Mesav_Supp_Ref?: number;
  Mesav_Status: number;
  Page?: number;
  Size?: number;
  Institution: number;
  SystemYear: number;
  SortColumn?: string;
  SortType?: string;
}
interface StudentLocatorFilterDto {
  SortColumn: string;
  SortType: string;
  Page: number;
  Size: number;
  Class_Code: number | null;
  Family_Name: string | null;
  Private_Name: string | null;
  Class_Num: number | null;
  Institution: number;
  SystemYear: number;
}

interface ValidateCheqCardValueChangeParamsType {
  Pay_Way: number | string | null;
  SystemYear: number | string;
  InstitutionCode: number | string;
}

interface ValidateOnClickSuppOrderParamsType {
  Payment_Date: string;
  SystemYear: number | string;
  InstitutionCode: number | string;
}

export type {
  getPaymentMethods,
  getPaymentToSupplierParamsType,
  getPayWayByPaywayId,
  getDetailsToCancelPaymentOrderType,
  getClosingChecksAgainstInvoicesType,
  GetStudyGroupsParamsType,
  GetBearingMovementReportParamsType,
  getPettyCashDeposit0602Type,
  getReport607DetailsType,
  getReceiptBookCutOutReportParamsType,
  StudentLocatorFilterDto,
  ValidateCheqCardValueChangeParamsType,
  ValidateOnClickSuppOrderParamsType
};

export interface CancelPaymentVoucherPayloadType {
  systemYear: number | string;
  institutionCode: number | string;
  act_No: string;
  desc: string;
  cancel_Payment_Voucher: boolean;
  cancel_Invoice: boolean;
  kalendarYear: string;
}

export interface GetUpdateCheckInPaymentDetailsParamsType
  extends PaginationSortingParams,
    InstitutionContext {
  From_Pay_Date?: string;
  To_Pay_Date?: string;
  From_Check_Num?: number;
  FromInvoice?: number;
  To_Check_Num?: string;
  Supp_Num?: number;
  From_Act_No?: number;
  To_Act_No?: number;
  Curr_Year: boolean;
}

export interface GetFilterScreenMCFL0621ParamsType
  extends PaginationSortingParams,
    InstitutionContext {
  PayerType: number;
  FamilyName?: string;
  PrivateName?: string;
  Id?: number;
  ClassCode?: number;
  ClassNum?: number;
  StudyYear?: number;
}
export interface GetPaymentVoucherDetailsParamsType {
  Act_No?: number;
  Check_Num?: number;
  Payment_Date?: string;
  Outcome?: number;
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: string;
  SystemYear: number;
  Institution: number;
  'x-version'?: string;
}

export interface ValidateNewCheckNumValueChangeParamsType {
  New_Check_Num?: number | string;
  Insti?: number | string;
  Bank?: number | string;
  Bank_Account?: number | string;
}

export interface ValidateNewPaymentDateValueChangeParamsType {
  New_Payment_Date: string;
  SystemYear: number | string;
  InstitutionCode: number | string;
}

export interface UpdateCheckNumAndPaymentDatePayloadType {
  systemYear: number | string;
  institutionCode: number | string;
  act_No: string;
  check_Num: number | string;
  payment_Date: Date;
  insti: number | string;
  study_Year: number | string;
  new_Check_Num: number | string;
  new_Payment_Date: Date;
}

// POST: /api/Payment/PerformPettyCashDeposit0602
export interface PerformPettyCashDeposit0602Payload {
  systemYear: number | string;
  institutionCode: number | string;
  desc_Aut: string;
  pay_Date: string; // ISO datetime
  oposit_Card: number;
  bank_Card: number;
  middleGrid0602Dtos: Array<{
    bank: number;
    payment_Date: string; // ISO datetime
    bank_Account: number;
    check_Num: number;
    outcome: number;
  }>;
  endGrid0602Dtos?: Array<{
    supp_Number: number;
    invoice_Number: number;
    date_Aut: string; // ISO datetime
    desc_Aut: string;
    service_Type: number;
    service_Subject: number;
    acc_Card: number;
    debit: number;
    project_No: number;
  }>;
  project_No_Prompt: number;
  is_Temp: boolean;
}

export interface PerformPettyCashDeposit0602Response {
  success: boolean;
  message: string;
  data: {
    expenseNumber: number | null;
    message: string;
  };
}