import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import {
  AccCardValidationParams,
  CheckDuplicateParams,
  CheckSupplierBankAccountParams,
  GetLaunchBearingSupplier1349ParamsType,
  GetListOfSuppliers0597Params,
  GetParamsDetailsByNameParams,
  getPaymentListParamsType,
  getPaymentSuppilerListParamsType,
  GetPaymentSuppliersParams,
  getSupplierApprovalDataParamsType,
  getSupplierBankType,
  getSupplierReport0597ParamsType,
  getSuppliersDetails0649ParamsType
} from './types';
import { GetAccCardsParams, GetSupplierTypeParams } from '@/pages/invoiceDivisionByLayers/type';

export const SupplierServices = {

  getPaymentSuppilerList: ({
    Supp_Num = '',
    Page = 1,
    Size = 6,
    Supp_Name = '',
    Supp_Vat_Num = '',
    Supp_Num_Dealer = '',
    If_Hsb_Open = false,
    Inv_Confirm = false,
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = ''
  }: getPaymentSuppilerListParamsType): UseApiQueryOptionsType => {
    return {
      url: `Supplier?${buildQueryParams({
        Supp_Num,
        Page,
        Size,
        Supp_Name,
        Supp_Vat_Num,
        Supp_Num_Dealer,
        If_Hsb_Open,
        Inv_Confirm,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getPaymentList: ({
    Supp_Num = '',
    Inv_Confirm,
    SystemYear = '',
    Institution = ''
  }: getPaymentListParamsType): UseApiQueryOptionsType => {
    return {
      url: `Supplier/SupplierInvoices?${buildQueryParams({
        Supp_Num,
        Inv_Confirm,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getPaymentSuppilers: ({
    page = 1,
    limit = 2
  }: GetPaymentSuppliersParams): UseApiQueryOptionsType => {
    return {
      url: `Supplier?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },
  updateMultiplePaymentSupplierList: (data: any): UseApiQueryOptionsType => {
    return {
      url: `Supplier/bulk-update`,
      method: 'PUT',
      data
    };
  },
  updatePaymentSupplierValidity: (data: any): UseApiQueryOptionsType => {
    return {
      url: `Supplier`,
      method: 'PATCH',
      data
    };
  },

  getParamsDetailsByName: ({
    paramName = ''
  }: GetParamsDetailsByNameParams): UseApiQueryOptionsType => {
    return {
      url: `Global/ParamByName?${buildQueryParams({ paramName })}`,
      method: 'GET'
    };
  },
  getSuppliersDetailsMcfr0649: ({
    FromDate = '',
    ToDate = '',
    FromNum = '',
    ToNum = '',
    FromCheck = '',
    ToCheck = '',
    FromInvoiceNumber = '',
    ToInvoiceNumber = '',
    SuppNum = '',
    CurrYear = false,
    NoOrder = false,
    Cancelled = false,
    OrderNum = '',
    AccNo = '',
    ParentId = '',
    TypeNo = '',
    Page = 1,
    Size = 1000,
    SortColumn = '',
    SortType = 'Asc',
    SystemYear = '',
    Institution = ''
  }: getSuppliersDetails0649ParamsType): UseApiQueryOptionsType => {
    return {
      url: `Supplier/SupplierDetails0649?${buildQueryParams({
        FromDate,
        ToDate,
        FromNum,
        ToNum,
        FromCheck,
        ToCheck,
        FromInvoiceNumber,
        ToInvoiceNumber,
        SuppNum,
        CurrYear,
        NoOrder,
        Cancelled,
        OrderNum,
        AccNo,
        ParentId,
        TypeNo,
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
  checkSupplierBankAccount: ({
    BankNo = '',
    AccountNo = '',
    SystemYear = '',
    InstitutionCode = ''
  }: CheckSupplierBankAccountParams): UseApiQueryOptionsType => {
    return {
      url: `Invoice/VerifyBankAccountNumber?${buildQueryParams({
        BankNo,
        AccountNo,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  getSuppliersNumberData: ({
    Masav_Supp_Num = '',
    PaymentDate = '',
    Page = '',
    Size = '',
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = ''
  }: GetListOfSuppliers0597Params): UseApiQueryOptionsType => {
    return {
      url: `Supplier/getSuppliersNumberData?${buildQueryParams({
        Masav_Supp_Num,
        PaymentDate,
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

  getSupplierReport0597: ({
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution,
    Xversion
  }: getSupplierReport0597ParamsType): UseApiQueryOptionsType => {
    return {
      url: `Supplier/GetReportFor0597?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        Xversion
      })}`,
      method: 'GET'
    };
  },
  getReceiptBookCutOutReport: ({}: any): UseApiQueryOptionsType => {
    return {
      url: `Invoice/GetMCFRReport0613`,
      method: 'GET'
    };
  },
  getLaunchBearingSupplier1349: ({
    Mesav_Num,
    Mesav_Date,
    Mesav_Sup_Ref,
    Payment_Date,
    Mesav_Status,
    Send_Mail,
    G_Return,
    Date_Aut,
    To_Date,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution,
    Xversion,
  }: GetLaunchBearingSupplier1349ParamsType): UseApiQueryOptionsType => {
    return {
      url: `Supplier/LaunchBearingSupplier1349?${buildQueryParams({
        Mesav_Num,
        Mesav_Date,
        Mesav_Sup_Ref,
        Payment_Date,
        Mesav_Status,
        Send_Mail,
        G_Return,
        Date_Aut,
        To_Date,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        Xversion,
      })}`,
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
  getAccCards: ({ serviceType, page, size }: GetAccCardsParams): UseApiQueryOptionsType => ({
    url: `Mapping/GetAccCards?${buildQueryParams({ serviceType, pageNumber: page, pageSize: size })}`,
    method: 'GET'
  }),
  getClassList: (): UseApiQueryOptionsType => ({
    url: `Mapping/GetClassList`,
    method: 'GET'
  }),

    getListOfSuppliers0597: ({
      Page,
      Size,
      SortColumn,
      SortType,
    }: GetListOfSuppliers0597Params): UseApiQueryOptionsType => {
      return {
        url: `/Supplier/GetListofSuppliers0597?${buildQueryParams({
          Page,
          Size,
          SortColumn,
          SortType
        })}`,
        method: 'GET'
      };
    },
     validationOnValueChangeAccCard: ({
      Supp_Num,
      Acc_Card,
      New_Row,
      Supp_Num_Dealer
    }: AccCardValidationParams): UseApiQueryOptionsType => ({
      url: `/Supplier/ValidationOnValueChangeAccCard?${buildQueryParams({
        Supp_Num,
        Acc_Card,
        New_Row,
        Supp_Num_Dealer

      })}`,
      method: 'GET'
    }),
     validationOnValueChangeSuppNumDealer: ({
      Supp_Num,
      Acc_Card,
      New_Row,
      Supp_Num_Dealer
    }: AccCardValidationParams): UseApiQueryOptionsType => ({
      url: `/Supplier/ValidationOnValueChangeSuppNumDealer?${buildQueryParams({
        Supp_Num,
        Acc_Card,
        New_Row,
        Supp_Num_Dealer
      })}`,
      method: 'GET'
    }),
  getSupplierApprovalData: ({
    Supp_Status,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: getSupplierApprovalDataParamsType): UseApiQueryOptionsType => {
    return {
      url: `/Supplier/GetSupplierApprovalData?${buildQueryParams({
        Supp_Status,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  }
};
