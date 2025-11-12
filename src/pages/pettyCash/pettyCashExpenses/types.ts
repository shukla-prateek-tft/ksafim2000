import { PaginationType } from '../type';

export interface ServiceTypeItem {
  service_Type: number;
  desc_Aut: string;
}

export interface GetServiceTypeListApiResponse {
  success: boolean;
  message: string;
  data: ServiceTypeItem[];
  metaInfo: PaginationType;
}

export interface GetServiceTypeListFilterType {
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: string;
  SystemYear: number | null;
  Institution: number | null;
}

export interface ProjectNoModel {
  project_No?: number | string;
  project_Name?: string | number;
}

export interface GetProjectNoListApiResponse {
  success: boolean;
  message: string;
  data: ProjectNoModel[];
  metaInfo: PaginationType;
}

export interface PettyCashExpensesUIProps {
  serviceTypeOptions: Array<{ label: string; value: number }>;
  projectNoListOptions: Array<{ label: string | number; value: number | string }>;
  acc_CardOptions: Array<{ label: string | number; value: number | string }>;
  getCutPettyCashExpensesData?: GetCutPettyCashExpensesAPIResponse;
  handleSave: () => void;
  handleDateChange?: (index: number, date: Date | null, fieldName: string) => void;
  transactionDetails?: TransactionDetailsType;
  handleValidation?: () => void;
  handleAddCard?: () => void;
  handleDeleteCard?: (index: number) => void;
  handleInputChange?: (index: number, fieldName: string, value: string | number | null) => void;
}

export interface CutPettyCashExpenseItem {
  balance: number;
  acc_Card_Name: string | null;
}

export interface CutPettyCashExpensesData {
  data: CutPettyCashExpenseItem[];
  paginationMetadata: PaginationType;
  success: boolean;
  message: string;
}
export interface GetCutPettyCashExpensesAPIResponse {
  success: boolean;
  message: string;
  data: CutPettyCashExpensesData;
}
export interface CashExpenseItem {
  bank_card: number;
  date_Aut: string;
  supp_Num: number;
  invoice_Number: number;
  desc_Aut: string;
  project_No: number;
  service_Type: number;
  acc_Card: number;
  debit: number;
  service_Subject: string;
  run_Number: number;
}

export interface insertCutPettyCashExpenseParamType {
  systemYear: number;
  institutionCode: number;
  cashExpenses: CashExpenseItem[];
}

export interface InsertCutPettyCashExpensesAPIResponse {
  success: boolean;
  message: string;
  data: boolean;
}

export interface GetAccCardByServiceTypeApiResponse {
  success: boolean;
  message: string;
  data: {
    service_Subject: number;
    service_Type: number;
  };
}

export interface TransactionDetailsType {
  date_Aut?: string | Date;
  supp?: number | null | null;
  desc_aut: string;
  run_number: number | null;
  supp_number: number | null;
  debit: string | number;
  name: string;
  invoice_number: number | null;
  acc_card_name: string;
  balance: string | number | null;
}
export interface GetServiceTypeByAccCardApiResponse {
  success: boolean;
  message: string;
  data: {
    service_Subject: number;
    acc_Card: number;
    accCardName: string;
  };
}
