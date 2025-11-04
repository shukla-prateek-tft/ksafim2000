import { GefenCardAndCodeDataType } from '@/pages/findCardsAndCodes/types';
import { SortConfig, SortDirection } from '@/pages/type';


export interface InstitutionContext {
  SystemYear: string | number;
  Institution?: string | number;
  InstitutionCode?: string | number;
}

export interface PaginationParamsString {
  Page: string;
  Size: string;
}
export interface SortingParams {
  SortColumn: SortConfig;
  SortType: SortDirection;
}
export interface PaginationSortingParamsString extends PaginationParamsString, SortingParams {}

export interface GetAccCardsParamsType extends PaginationSortingParamsString, InstitutionContext {
  DescAut: string;
}

export interface GetServiceTypesParamsTypes
  extends PaginationSortingParamsString,
    InstitutionContext {
  DescAut: string;
}

export interface PaginationParams {
  Page: number;
  Size: number;
}

export interface GetGefenCardsAndCodesParamsType extends PaginationParams, InstitutionContext {
  BudgetType: string;
  DescAut: string;
  RemarkAut: string;
  DescAccCard: string;
  ShortDescAut: string;
  InvoiceNumber: string;
  SortColumn: keyof GefenCardAndCodeDataType | '';
  SortType: SortDirection | '';
}
export interface SortingParams {
  SortColumn: SortConfig;
  SortType: SortDirection;
}

export interface PaginationSortingParams extends PaginationParams, SortingParams {}
export interface PaginationSortingParamsString extends PaginationParamsString, SortingParams {}

export interface GetCpDetailsListParamsType extends PaginationSortingParams, InstitutionContext {
  City_Name: string;
  City_Code?: null;
}

export interface GetAccountCardListDetailsparamsType
  extends PaginationSortingParams,
    InstitutionContext {
  Desc_Aut: string;
  Acc_Card?: null;
  Sort_Code?: null;
}

export interface GetBackDetailsListParamsType extends PaginationSortingParams, InstitutionContext {
  Bank_Name: string;
  Bank?: string;
}

export interface getSupplierBankType {
  Desc_Aut: string;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: SortDirection;
  SystemYear: number | string;
  Institution: number | string;
}

export interface CheckDuplicateParams {
  checkNo?: string;
}
export interface GetSupplierTypeParams {
  isAllType: boolean;
}
export interface GetAccCardsParams {
  serviceType: number;
  page: number;
  size: number;
}

export interface getServiceTypeListsType {
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: string;
  SystemYear: number;
  Institution: number;
}
export interface getServiceTypeListsType {
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: string;
  SystemYear: number;
  Institution: number;
}
export interface getCutPettyCashExpensesType {
  Bank_Card_Number: number;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: string;
  SystemYear: number;
  Institution: number;
}

export interface GetClassCodeParamsType {
  Desc_Aut: string;
  SystemYear: number;
  Institution: number;
}

export interface GetAccCardByServiceType {
  Service_Type: number;
  Project_No: number;
  SystemYear: number;
  Institution: number;
}

export interface GetServiceTypeByAccCardType {
  Acc_Card: number;
  Project_No: number;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: string;
  SystemYear: number;
  Institution: number;
}

export interface GetSupplierDetailsType {
  supp_name: string;
  supp_num: string;
}
