import { buildQueryParams, safeDateISO } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import {
  AddEnteredInvoicesType,
  CheckStudentExistTypes,
  CheckSupplierExistTypes,
  GetAccCardsParamsType,
  GetAccountCardListDetailsParamsType,
  GetAccountingSystemParamsType,
  GetBackDetailsListParamsType,
  GetCpDetailsListParamsType,
  GetExistingInvoiceParamsType,
  GetFileReceptionFeedBackParamsType,
  GetGefenCardsAndCodesParamsType,
  GetInvoiceBySupplierIdParamsType,
  GetInvoiceDetailsParamsType,
  GetInvoiceDisplayParamsType,
  GetInvoiceExpenseForPrintParamsType,
  GetInvoiceFileParamsType,
  GetInvoiceForPrintParamsTypes,
  GetInvoiceReportACCCardParmsTypes,
  GetInvoiceReportListByACCCardParamsType,
  GetListOfInvoicesParamsType,
  GetListofOpenInvoicesType,
  getOpenInvoicesReportForParamsType,
  GetPaymentInvoiceListParamsTypes,
  GetRecentInvoicesListParamsType,
  GetScannedInvoiceTransmissionHistoryParamsType,
  GetServiceTypesParamsTypes,
  GetSupplierInvoicesParamsTypes,
  InsertInvoiceDetailsServiceParamsType,
  InsertInvoiceDetailsServicesType,
  InsertInvoiceExpensesDetailsParamsType,
  InsertSupplierDataServicesType,
  PaginationParamsType,
  RecentInvoiceHistoryType,
  RemoveInvoiceFileType,
  SendingInvoicePdfFileType,
  UpdateExistingInvoiceDetailsType,
  UpdateInvoiceFileStatusParamsTypes,
  UpdateInvoicesForMinistryOfEducationType,
  UploadInvoiceServiceParamsType,
  UploadOpenSuppilerType
} from './types';
import { CheckInvoiceParams, GetStudentCountParams } from '@/pages/invoiceDivisionByLayers/type';


export const InvoicesService = {
  getListofInvoices: ({
    FromDate = '',
    ToDate = '',
    FromInvoice = '',
    ToInvoice = '',
    FromNum = '',
    ToNum = '',
    FromOrder = '',
    ToOrder = '',
    SuppNum = '',
    FromPayment = '',
    ToPayment = '',
    CurrentYear = false,
    IsGafen = false,
    FromCodeGefen = '',
    ToCodeGefen = '',
    BudgetType = '',
    InvoiceStatus = '',
    ActNo = '',
    SortColumn = '',
    SortType = 'Asc',
    SystemYear = '',
    Institution = '',
    Page = 1,
    Size = 11
  }: GetListOfInvoicesParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceListWithFilterAndMetaInfo?${buildQueryParams({
        FromDate,
        ToDate,
        FromInvoice,
        ToInvoice,
        FromNum,
        ToNum,
        FromOrder,
        ToOrder,
        SuppNum,
        FromPayment,
        ToPayment,
        CurrentYear,
        IsGafen,
        FromCodeGefen,
        ToCodeGefen,
        BudgetType,
        InvoiceStatus,
        ActNo,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        Page,
        Size
      })}`,
      method: 'GET'
    };
  },
  getAddInvoices: ({ page = 1, limit = 2 }: PaginationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },
  getInvoiceBySupplierId: ({
    Supp_Num = ''
  }: GetInvoiceBySupplierIdParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/GetInvoiceBySupplierId?${buildQueryParams({ Supp_Num })}`,
      method: 'POST'
    };
  },
  insertInvoiceDetailsService: (
    payload: InsertInvoiceDetailsServiceParamsType
  ): UseApiQueryOptionsType<InsertInvoiceDetailsServiceParamsType> => {
    return {
      url: `Invoice/InsertInvoiceDetails`,
      method: 'POST',
      data: payload
    };
  },
  insertInvoiceExpensesDetails: (
    payload: InsertInvoiceExpensesDetailsParamsType
  ): UseApiQueryOptionsType<InsertInvoiceExpensesDetailsParamsType> => {
    return {
      url: `Invoice/InsertInvoiceExpenseDetails`,
      method: 'POST',
      data: payload
    };
  },

  uploadInvoiceService: (
    payload: UploadInvoiceServiceParamsType
  ): UseApiQueryOptionsType<UploadInvoiceServiceParamsType> => {
    return {
      url: `/Invoice/UploadInvoiceFile`,
      method: 'POST',
      data: payload,
      headers: { 'Content-Type': 'multipart/form-data' }
    };
  },
  getInvoiceFile: ({ actNo = '' }: GetInvoiceFileParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceFileDetailsList?${buildQueryParams({ actNo })}`,
      method: 'GET'
    };
  },

  addEnteredInvoices: (
    payload: AddEnteredInvoicesType
  ): UseApiQueryOptionsType<AddEnteredInvoicesType> => {
    return {
      url: `Invoice/InsertInvoiceDetails0695`,
      method: 'POST',
      data: payload
    };
  },

  getChangeInvoicesDetails: ({
    page = 1,
    limit = 2
  }: PaginationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },
  getGefnInvoice: ({ page = 1, limit = 2 }: PaginationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },
  getScannedInvoiceTransmissionHistory: ({
    Supp_Num = 1,
    Invoice_Number = 2,
    Page = '',
    Size = '',
    SortColumn = '',
    SortType = ''
  }: GetScannedInvoiceTransmissionHistoryParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceHistory?${buildQueryParams({
        Supp_Num,
        Invoice_Number,
        Page,
        Size,
        SortColumn,
        SortType
      })}`,
      method: 'GET'
    };
  },
  getFileReceptionFeedBack: ({
    SystemYear = '',
    Institution = ''
  }: GetFileReceptionFeedBackParamsType): UseApiQueryOptionsType => {
    return {
      url: `/Invoice/InvoiceMunicipal?SystemYear=${SystemYear}&InstitutionCode=${Institution}`,
      method: 'GET'
    };
  },
  getReceiveScannedInvoices: ({
    SystemYear = '',
    Institution = ''
  }: GetFileReceptionFeedBackParamsType): UseApiQueryOptionsType => {
    return {
      url: `/Invoice/InvoiceMunicipalPdfs?SystemYear=${SystemYear}&InstitutionCode=${Institution}`,
      method: 'GET'
    };
  },
  getChangeInvoiceType: ({ page = 1, limit = 2 }: PaginationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },
  getEnterInvoices: ({ page = 1, limit = 2 }: PaginationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },
  getInvoiceDisplay: ({
    Supp_Num = '',
    SystemYear = '',
    Institution = ''
  }: GetInvoiceDisplayParamsType): UseApiQueryOptionsType => {
    return {
      url: `/Supplier/SupplierInvoices?${buildQueryParams({
        Supp_Num,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  getAccountCardList: ({ page = 1, limit = 2 }: PaginationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },

  getSupplierData: ({
    SystemYear,
    Institution,
    Supp_Num
  }: GetInvoiceDisplayParamsType): UseApiQueryOptionsType => {
    return {
      url: `Supplier/SupplierById?${buildQueryParams({
        SystemYear,
        Institution,
        Supp_Num
      })}`,
      method: 'GET'
    };
  },
  insertSupplierDataServices: (
    payload: InsertSupplierDataServicesType
  ): UseApiQueryOptionsType<InsertSupplierDataServicesType> => {
    return {
      url: `Supplier/SupplierDetails`,
      method: 'PUT',
      data: payload
    };
  },
  getInvoiceDetails: ({
    SystemYear,
    InstitutionCode,
    ActNo,
    AccCardId,
    ServiceTypeId
  }: GetInvoiceDetailsParamsType): UseApiQueryOptionsType => {
    return {
      url: `/Invoice/NonGefenInvoiceByActNo?${buildQueryParams({
        SystemYear,
        InstitutionCode,
        ActNo,
        AccCardId,
        ServiceTypeId
      })}`,
      method: 'GET'
    };
  },
  insertInvoiceDetailsServices: (
    payload: InsertInvoiceDetailsServicesType
  ): UseApiQueryOptionsType<InsertInvoiceDetailsServicesType> => {
    return {
      url: `/Invoice/NonGefenInvoiceByActNum`,
      method: 'POST',
      data: payload
    };
  },
  recentInvoiceHistory: ({
    Page = 1,
    Size = 10,
    SortColumn = '',
    SortType = '',
    SystemYear = '',
    Institution = ''
  }: RecentInvoiceHistoryType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/RecentInvoiceHistory?${buildQueryParams({
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
  exportInvoicesData: (): UseApiQueryOptionsType => {
    return {
      url: `Invoice/generate-invoice`,
      method: 'POST'
    };
  },
  //This API is not using anywhere
  updateMultipleInvoices: (data: any): UseApiQueryOptionsType => {
    return {
      url: `Invoice/bulk-update`,
      method: 'PUT',
      data
    };
  },
  //This API is not using anywhere
  updateInvoice: (id: string, data: any): UseApiQueryOptionsType => {
    return {
      url: `Invoice/${id}`,
      method: 'PUT',
      data
    };
  },
  //This API is not using anywhere
  deleteInvoice: (id: any): UseApiQueryOptionsType => {
    return {
      url: `Invoice/${id}`,
      method: 'DELETE'
    };
  },
  removeInvoiceFile: ({
    ImgId,
    SystemYear,
    InstitutionCode
  }: RemoveInvoiceFileType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/RemoveInvoiceFile?${buildQueryParams({
        ImgId,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'POST'
    };
  },
  UploadOpenSuppiler: (
    payload: UploadOpenSuppilerType
  ): UseApiQueryOptionsType<UploadOpenSuppilerType> => {
    return {
      url: `Supplier`,
      method: 'POST',
      data: payload
    };
  },
  checkSupplierExist: ({ suppNum, id }: CheckSupplierExistTypes): UseApiQueryOptionsType => {
    return {
      url: `Supplier/CheckSupplierExists?suppNum=${suppNum}&suppField=${id}`,
      method: 'GET'
    };
  },
  checkStudentExist: ({
    Student = '',
    SuppNum = '',
    SystemYear = '',
    InstitutionCode = ''
  }: CheckStudentExistTypes): UseApiQueryOptionsType => {
    return {
      url: `Invoice/CheckStudentExists?${buildQueryParams({
        Student,
        SuppNum,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  getDocumentList: ({ page = 1, limit = 2 }: PaginationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },
  getExtendSupplierValidityList: ({
    page = 1,
    limit = 2
  }: PaginationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice?Page=${page}&Size=${limit}`,
      method: 'GET'
    };
  },
 
  getRecentInvoicesList: ({
    ActNos = [],
    institutionCode = '',
    year = ''
  }: GetRecentInvoicesListParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceListForPayment`,
      data: {
        InvoiceList: ActNos,
        InstitutionCode: institutionCode,
        Year: year
      },
      method: 'POST'
    };
  },
  getExistingInvoice: ({
    ActNo = '',
    Student = '',
    ServiceType = '',
    ServiceSubject = '',
    AccCard = '',
    SystemYear = '',
    InstitutionCode = ''
  }: GetExistingInvoiceParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/ExistingInvoiceDetails?${buildQueryParams({
        ActNo,
        Student,
        ServiceType,
        ServiceSubject,
        AccCard,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  updateExistingInvoiceDetails: (
    data: UpdateExistingInvoiceDetailsType
  ): UseApiQueryOptionsType<UpdateExistingInvoiceDetailsType> => {
    return {
      url: `Invoice`,
      method: 'PUT',
      data
    };
  },
  getInvoiceForPrint: ({
    ActNo = '',
    SystemYear = '',
    InstitutionCode = ''
  }: GetInvoiceForPrintParamsTypes): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceDetails?${buildQueryParams({
        ActNo,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  getInvoiceExpenseForPrint: ({
    PayActNo = '',
    ActNo = '',
    SystemYear = '',
    InstitutionCode = ''
  }: GetInvoiceExpenseForPrintParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceExpenseDetails?${buildQueryParams({
        PayActNo,
        ActNo,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  getInvoiceExpenseByPayActNo: ({
    PayActNo = '',
    SystemYear = '',
    ActNo = '',
    InstitutionCode = ''
  }: GetInvoiceExpenseForPrintParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/ExpenseInvoiceDetailsByActNo?${buildQueryParams({
        PayActNo,
        ActNo,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  getSupplierInvoices: ({
    Acc_Card = '',
    SystemYear = '',
    InstitutionCode = ''
  }: GetSupplierInvoicesParamsTypes): UseApiQueryOptionsType => {
    return {
      url: `Supplier/SupplierReport?${buildQueryParams({
        Acc_Card,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  updateInvoicesForMinistryOfEducation: (
    payload: UpdateInvoicesForMinistryOfEducationType
  ): UseApiQueryOptionsType<UpdateInvoicesForMinistryOfEducationType> => {
    return {
      url: `Invoice/SendingInvoiceToMOE`,
      method: 'POST',
      data: payload
    };
  },

  getInvoiceReportACCCard: ({
    FromDate = '',
    ToDate = '',
    SuppNum = '',
    AccCard = '',
    ToAccCard = '',
    AccCard2 = '',
    ToAccCard2 = '',
    AccCard3 = '',
    ToAccCard3 = '',
    SugTaktziv = '',
    Hinuh = '',
    NotZero = false,
    SystemYear = '',
    InstitutionCode = ''
  }: GetInvoiceReportACCCardParmsTypes): UseApiQueryOptionsType => {
    return {
      url: `Invoice/AccCardsMCFS1367?${buildQueryParams({
        FromDate: safeDateISO(FromDate),
        ToDate: safeDateISO(ToDate),
        SuppNum,
        AccCard,
        ToAccCard,
        AccCard2,
        ToAccCard2,
        AccCard3,
        ToAccCard3,
        SugTaktziv,
        Hinuh,
        NotZero,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  getAllInvoiceReportACCCard: ({
    FromDate = '',
    ToDate = '',
    SuppNum = '',
    AccCard = '',
    ToAccCard = '',
    AccCard2 = '',
    ToAccCard2 = '',
    AccCard3 = '',
    ToAccCard3 = '',
    SugTaktziv = '',
    Hinuh = '',
    NotZero = false,
    SystemYear = '',
    InstitutionCode = ''
  }: GetInvoiceReportACCCardParmsTypes): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceDetailsForPdfMCFR1367?${buildQueryParams({
        FromDate: safeDateISO(FromDate),
        ToDate: safeDateISO(ToDate),
        SuppNum,
        AccCard,
        ToAccCard,
        AccCard2,
        ToAccCard2,
        AccCard3,
        ToAccCard3,
        SugTaktziv,
        Hinuh,
        NotZero,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  getInvoiceReportListByACCCard: ({
    AccCard = '',
    SuppNum = '',
    SugTaktziv = '',
    FromDate = '',
    ToDate = '',
    SystemYear = '',
    InstitutionCode = ''
  }: GetInvoiceReportListByACCCardParamsType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceDetailsForAccCardMCFS1367?${buildQueryParams({
        FromDate: safeDateISO(FromDate),
        ToDate: safeDateISO(ToDate),
        SuppNum,
        AccCard,
        SugTaktziv,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  updateInvoiceFileStatus: ({
    ActNo = '',
    InvoiceNumber = '',
    SystemYear = '',
    InstitutionCode = ''
  }: UpdateInvoiceFileStatusParamsTypes): UseApiQueryOptionsType => {
    return {
      url: `Invoice/InvoiceFileStatus?${buildQueryParams({
        ActNo,
        InvoiceNumber,
        InstitutionCode,
        SystemYear
      })}`,
      method: 'PUT'
    };
  },
  sendingInvoicePdfFile: (
    payload: SendingInvoicePdfFileType
  ): UseApiQueryOptionsType<SendingInvoicePdfFileType> => {
    return {
      url: `Invoice/SendingInvoicePdfFile`,
      method: 'POST',
      data: payload
    };
  },

  getPaymentInvoiceList: ({
    actNo,
    payWay,
    outcome,
    student,
    SuppNum,
    payDate,
    suppOrder,
    ssec,
    vat,
    taxDedect,
    splitInsti,
    splitCard,
    splitPercent,
    actStatus,
    cancelActNo,
    cancelDate,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: GetPaymentInvoiceListParamsTypes): UseApiQueryOptionsType => {
    return {
      url: `Invoice/ExpenseInvoiceListWithFilterAndMetaInfo?${buildQueryParams({
        actNo,
        payWay,
        outcome,
        student,
        SuppNum,
        payDate,
        suppOrder,
        ssec,
        vat,
        taxDedect,
        splitInsti,
        splitCard,
        splitPercent,
        actStatus,
        cancelActNo,
        cancelDate,
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
  getAccountingSystem: ({
    SystemYear,
    Institution
  }: GetAccountingSystemParamsType): UseApiQueryOptionsType => {
    return {
      url: `AccountingSystem?${buildQueryParams({
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  //This Screen cancelled by the client
  insertAccountingSystemServices: (payload: any): UseApiQueryOptionsType => {
    return {
      url: `AccountingSystem/AccountingSystemDetails`,
      method: 'PUT',
      data: payload
    };
  },

  GetListofOpenInvoices: ({
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution,
    FromDate,
    ToDate,
    FromInvoice,
    ToInvoice,
    FromNum,
    ToNum,
    FromOrder,
    ToOrder,
    SuppNum,
    FromPayment,
    ToPayment,
    CurrentYear
  }: GetListofOpenInvoicesType): UseApiQueryOptionsType => {
    return {
      url: `Invoice/GetListofOpenInvoices?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        FromDate,
        ToDate,
        FromInvoice,
        ToInvoice,
        FromNum,
        ToNum,
        FromOrder,
        ToOrder,
        SuppNum,
        FromPayment,
        ToPayment,
        CurrentYear
      })}`,
      method: 'GET'
    };
  },
  checkInvoiceNumberFor1396: ({
    InvoiceNumber,
    SuppNumber,
    KalendarYear,
    SystemYear,
    InstitutionCode
  }: CheckInvoiceParams): UseApiQueryOptionsType => ({
    url: `Invoice/CheckInvoiceNumberFor1396?${buildQueryParams({ InvoiceNumber, SuppNumber, KalendarYear, SystemYear, InstitutionCode })}`,
    method: 'GET'
  }),
  getStudentCountFor1396: ({
    FromClass,
    ToClass,
    FromNum,
    ToNum,
    SystemYear,
    InstitutionCode
  }: GetStudentCountParams): UseApiQueryOptionsType => ({
    url: `Invoice/GetStudentCountFor1396?${buildQueryParams({ FromClass, ToClass, FromNum, ToNum, SystemYear, InstitutionCode })}`,
    method: 'GET'
  }),
  getOpenInvoicesReportFor1371: ({
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution,
  }: getOpenInvoicesReportForParamsType): UseApiQueryOptionsType => {
    return {
      url: `/Invoice/GetOpenInvoicesReportFor1371?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
      })}`,
      method: 'GET'
    };
  },
};
