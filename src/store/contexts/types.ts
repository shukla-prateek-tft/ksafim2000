import { ExpenseVoucherListFiltersType, GetListOfInvoicesParamsType, GetListOfInvoicesReportsParamsType } from "@/services/Invoices/types";

export interface AuthContextWrapperProps {
  children: JSX.Element;
}

export interface RemoveDataBaseResponseType {
  success: boolean;
  message: string;
  data: true;
};

export interface UserDetailType {
  token?: string;
  instiYear: string | null;
  currentInstiYear: string | null;
  instiCode: string | null;
  userName: string;
  instiName: string;
  hebrewYear: string;
  database: string;
  kalendarYear: string;
  schoolType: string;
  schoolPhoneNumber: string;
  schoolEmail: string;
  accountYearTo:string;
  accountYear:string;
}

export interface DefaultFlagErrorData {
  message: string;
  dialogTitle: string;
  confirmText: string;
  cancelText: string;
  closeCallback: () => void;
  confirmCallback: () => void;
  type: 'error' | 'warning' | 'info' | 'success';
  className: string;
  title: string;
  icon: React.ReactNode | (() => JSX.Element) | null;
  showCancelButton: boolean;
};

export interface DefaultFlagsType {
  showChooseDataBase: boolean;
  showAdminInterfaceLogin: boolean;
  configChangeHeader: boolean;
  showValidationError: boolean;
  isKalendarYear: boolean;
  showListOfInvoiceFilter: boolean;
  showReportFilter: boolean;
  listOfInvoicesFilter: GetListOfInvoicesParamsType;
  reportListFilters: GetListOfInvoicesReportsParamsType;
  expenseVoucherFilters: Partial<ExpenseVoucherListFiltersType>;
  showExpenseVoucherFilters: boolean;
  goToScreen: boolean;
  SuppNum: string;
  errorData: Partial<DefaultFlagErrorData>;
};