import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import {
  CheckDuplicateParams,
  GetAccCardByServiceType,
  GetAccCardsParams,
  GetAccCardsParamsType,
  GetAccountCardListDetailsparamsType,
  GetBackDetailsListParamsType,
  GetClassCodeParamsType,
  GetCpDetailsListParamsType,
  getCutPettyCashExpensesType,
  GetGefenCardsAndCodesParamsType,
  GetServiceTypeByAccCardType,
  getServiceTypeListsType,
  GetServiceTypesParamsTypes,
  GetStudyGroupsParamsType,
  getSupplierBankType,
  GetSupplierDetailsType,
  GetSupplierTypeParams
} from './types';
import { insertCutPettyCashExpenseParamType } from '@/pages/pettyCashExpenses/types';

export const MappingService = {
  
  getAccActType: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetAccActType`,
      method: 'GET'
    };
  },
  getAccCards: ({
    DescAut = '',
    Page = '',
    Size = '',
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = ''
  }: GetAccCardsParamsType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetAccCards?${buildQueryParams({
        DescAut,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getServiceTypes: ({
    DescAut = '',
    Page = '',
    Size = '',
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = ''
  }: GetServiceTypesParamsTypes): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetServiceTypes?${buildQueryParams({
        DescAut,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getInvoiceTypeNo: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetTypeNo`,
      method: 'GET'
    };
  },
  getInvoiceVatType: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetVatType`,
      method: 'GET'
    };
  },
  getFindCardsAndCodesList: ({
    Page = 1,
    Size = 10,
    BudgetType = '',
    DescAut = '',
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = '',
    RemarkAut = '',
    DescAccCard = '',
    ShortDescAut = '',
    InvoiceNumber = ''
  }: GetGefenCardsAndCodesParamsType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetGefenCodes?${buildQueryParams({
        Page,
        Size,
        BudgetType,
        DescAut,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        RemarkAut,
        DescAccCard,
        ShortDescAut,
        InvoiceNumber
      })}`,
      method: 'GET'
    };
  },
  getCpDetailsList: ({
    Page = 1,
    Size = 10,
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = '',
    City_Name = '',
    City_Code = null
  }: GetCpDetailsListParamsType): UseApiQueryOptionsType => {
    return {
      url: `/Mapping/GetCityDetailsList?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        City_Name,
        City_Code
      })}`,
      method: 'GET'
    };
  },
  getAccountCardListDetails: ({
    Page = 1,
    Size = 10,
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = '',
    Desc_Aut = '',
    Acc_Card,
    Sort_Code
  }: GetAccountCardListDetailsparamsType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetAccCardDetails?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        Desc_Aut,
        Acc_Card,
        Sort_Code
      })}`,
      method: 'GET'
    };
  },
  getBackDetailsList: ({
    Page = 1,
    Size = 10,
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = '',
    Bank_Name = '',
    Bank
  }: GetBackDetailsListParamsType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetBankDetailsList?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        Bank_Name,
        Bank
      })}`,
      method: 'GET'
    };
  },
  getSelectorType: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetSupplierTypeList`,
      method: 'GET'
    };
  },
  getBudgetType: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetBudgetType`,
      method: 'GET'
    };
  },
  getInvoiceStatus: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/gettransmittype`,
      method: 'GET'
    };
  },
  getActStatusType: (): UseApiQueryOptionsType => {
    return {
      url: `/Mapping/GetActStatusType`,
      method: 'GET'
    };
  },

  getSupplierBanks: ({
    Page = 1,
    Size = 5,
    Desc_Aut = '',
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = ''
  }: getSupplierBankType): UseApiQueryOptionsType => {
    return {
      url: `/Mapping/GetBankList?${buildQueryParams({
        Desc_Aut,
        SystemYear,
        Institution,
        Page,
        Size,
        SortColumn,
        SortType
      })}`,
      method: 'GET'
    };
  },
  checkDuplicateCheckNumber: ({ checkNo = '' }: CheckDuplicateParams): UseApiQueryOptionsType => {
    return {
      url: `/Mapping/CheckDuplicateCheckNo?${buildQueryParams({ checkNo })}`,
      method: 'GET'
    };
  },

  getSupplierTypeList: ({ isAllType }: GetSupplierTypeParams): UseApiQueryOptionsType => ({
    url: `Mapping/GetSupplierTypeList?${buildQueryParams({ isALlType: isAllType })}`,
    method: 'GET'
  }),
  getAccActTypes: (): UseApiQueryOptionsType => ({
    url: `Mapping/GetAccActType`,
    method: 'GET'
  }),
  getServiceTypeList: (): UseApiQueryOptionsType => ({
    url: `Mapping/GetServiceTypeList`,
    method: 'GET'
  }),
  getAccCardsOfSupplier: ({
    serviceType,
    page,
    size
  }: GetAccCardsParams): UseApiQueryOptionsType => ({
    url: `Mapping/GetAccCards?${buildQueryParams({ serviceType, pageNumber: page, pageSize: size })}`,
    method: 'GET'
  }),
  getClassList: (): UseApiQueryOptionsType => ({
    url: `Mapping/GetClassList`,
    method: 'GET'
  }),
  getHebrewYearList: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetHebrewYearList`,
      method: 'GET'
    };
  },
  getServiceTypeLists: ({
    Page,
    Size,
    SortColumn = '',
    SortType = '',
    SystemYear,
    Institution
  }: getServiceTypeListsType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetServiceTypeList?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getGetProjectNoLists: ({
    Page,
    Size,
    SortColumn = '',
    SortType = '',
    SystemYear,
    Institution
  }: getServiceTypeListsType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetProjectNoList?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getPayway: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/getpaywaytype`,
      method: 'GET'
    };
  },
  getClassCode: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetClassCode`,
      method: 'GET'
    };
  },
  getCutPettyCashExpenses: ({
    Bank_Card_Number,
    Page,
    Size,
    SortColumn = '',
    SortType = '',
    SystemYear,
    Institution
  }: getCutPettyCashExpensesType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetCutPettyCashExpenses?${buildQueryParams({
        Bank_Card_Number,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getStudyYear: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetStudyYear`,
      method: 'GET'
    };
  },
  getUserRoles: (): UseApiQueryOptionsType => ({
    url: `Mapping/GetUserJobList`,
    method: 'GET'
  }),

  getSchoolJobs: (): UseApiQueryOptionsType => ({
    url: `Mapping/GetSchoolJobList`,
    method: 'GET'
  }),
  getVerificationQuestions: (): UseApiQueryOptionsType => ({
    url: `Mapping/GetQuestionTypeList`,
    method: 'GET'
  }),
  getWindowList: ({
    WindowNumber = '',
    Page = 1,
    Size = 10,
    SortColumn = '',
    SortType = '',
    SystemYear,
    Institution
  }: {
    WindowNumber?: string;
    Page?: number;
    Size?: number;
    SortColumn?: string;
    SortType?: string;
    SystemYear?: number;
    Institution?: number;
  }): UseApiQueryOptionsType => ({
    url: `Mapping/GetWindowList?${buildQueryParams({
      WindowNumber,
      Page,
      Size,
      SortColumn,
      SortType,
      SystemYear,
      Institution
    })}`,
    method: 'GET'
  }),

  getQuestionTypeList: (): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetQuestionTypeList`,
      method: 'GET'
    };
  },

  GetClassCode: ({
    Desc_Aut,
    SystemYear,
    Institution
  }: GetClassCodeParamsType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetClassCode?${buildQueryParams({
        Desc_Aut,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },

  insertCutPettyCashExpenseSerivce: (
    payload: insertCutPettyCashExpenseParamType
  ): UseApiQueryOptionsType<insertCutPettyCashExpenseParamType> => {
    return {
      url: `Mapping/InsertCutPettyCashExpenses`,
      method: 'POST',
      data: payload
    };
  },
  getAccCardByServiceType: ({
    Service_Type,
    Project_No,
    SystemYear,
    Institution
  }: GetAccCardByServiceType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetAccCardByServiceType?${buildQueryParams({
        Service_Type,
        Project_No,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getServiceTypeByAccCard: ({
    Acc_Card,
    Project_No,
    Page = 1,
    Size = 10,
    SortColumn = '',
    SortType = '',
    SystemYear,
    Institution
  }: GetServiceTypeByAccCardType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetServiceTypeByAccCard?${buildQueryParams({
        Acc_Card,
        Project_No,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getSupplierDetails: ({
    supp_name,
    supp_num
  }: GetSupplierDetailsType): UseApiQueryOptionsType => {
    return {
      url: `Mapping/GetSupplierDetails?${buildQueryParams({
        supp_name,
        supp_num
      })}`,
      method: 'GET'
    };
  },
  GetSuppTypeDropdownList: (): UseApiQueryOptionsType => {
    return {
      url: `Supplier/GetSuppTypeDropdownList`,
      method: 'GET'
    };
  },
};
