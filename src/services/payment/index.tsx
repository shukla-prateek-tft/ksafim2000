import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import {
  GetBearingMovementReportParamsType,
  getClosingChecksAgainstInvoicesType,
  getDetailsToCancelPaymentOrderType,
  getPaymentMethods,
  getPaymentToSupplierParamsType,
  getPayWayByPaywayId,
  getReceiptBookCutOutReportParamsType,
  getPettyCashDeposit0602Type,
  getReport607DetailsType,
  StudentLocatorFilterDto,
  CancelPaymentVoucherPayloadType,
  GetUpdateCheckInPaymentDetailsParamsType,
  GetFilterScreenMCFL0621ParamsType,
  ValidateCheqCardValueChangeParamsType,
  GetStudyGroupsParamsType,
  GetPaymentVoucherDetailsParamsType,
  UpdateCheckNumAndPaymentDatePayloadType,
  ValidateNewCheckNumValueChangeParamsType,
  ValidateNewPaymentDateValueChangeParamsType,
  ValidateOnClickSuppOrderParamsType,
  PerformPettyCashDeposit0602Payload
} from './types';
import { API_ROUTES } from '@/constants/appConstant';
import {
  getBankTransferFormReportParamsType,
  getParentDetailsReportParamsType
} from '@/pages/bankTransferFormReport/type';

export const PaymentsService = {
  getPaymentToSupplier: ({
    Supp_Num = '',
    SystemYear = '',
    Institution = ''
  }: getPaymentToSupplierParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/PaymentToSupplierById?${buildQueryParams({
        Supp_Num,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },

  getPayWayDetailbyId: ({
    paywayId,
    institutionCode
  }: getPayWayByPaywayId): UseApiQueryOptionsType => {
    return {
      url: `Payment/payway/${paywayId}/${institutionCode}`,
      method: 'GET'
    };
  },

  getDetailsToCancelPaymentOrder: ({
    Supp_Num,
    Expense_Num,
    Bank_Card,
    SystemYear,
    Institution,
    Page,
    Size,
    SortColumn,
    SortType
  }: getDetailsToCancelPaymentOrderType): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetExpenseVoucherDetails?${buildQueryParams({
        Supp_Num,
        SystemYear,
        Institution,
        Bank_Card,
        Expense_Num,
        Page,
        Size,
        SortColumn,
        SortType
      })}`
    };
  },
  GetPaymentMethods: ({
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: getPaymentMethods): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetPaymentMethods/?${buildQueryParams({
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

  getPaymentVoucherDetails: ({
    Act_No,
    Check_Num,
    Payment_Date,
    Outcome,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: GetPaymentVoucherDetailsParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetPaymentVoucherDetails/?${buildQueryParams({
        Act_No,
        Check_Num,
        Payment_Date,
        Outcome,
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
  GetIncomeTaxFile: (): UseApiQueryOptionsType => {
    return {
      url: `Payment/IncomeTaxFile_1216`,
      method: 'GET'
    };
  },
  getReceiptBookCutOutReport: ({
    Bank_Deposit,
    Act_Status,
    PayWay,
    BankNo,
    BankAccount,
    Return_Status,
    F_Date,
    T_Date,
    Check_Num,
    Act_No,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: getReceiptBookCutOutReportParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetMCFRReport0613?${buildQueryParams({
        Bank_Deposit,
        Act_Status,
        PayWay,
        BankNo,
        BankAccount,
        Return_Status,
        F_Date,
        T_Date,
        Check_Num,
        Act_No,
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
  GetClosingChecksAgainstInvoices: ({
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution,
    SuppNum,
    ShowInvoice
  }: getClosingChecksAgainstInvoicesType): UseApiQueryOptionsType => {
    return {
      url: `Payment/ClosingChecksAgainstInvoices/?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        SuppNum,
        ShowInvoice
      })}`,
      method: 'GET'
    };
  },
  getPettyCashDeposit0602: ({
    SystemYear = '',
    InstitutionCode = ''
  }: getPettyCashDeposit0602Type): UseApiQueryOptionsType => {
    return {
      url: `Payment/PettyCashDeposit0602?${buildQueryParams({
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  getReport607Details: ({
    F_Date,
    T_Date,
    Is_Select_Act,
    AccCard,
    Temp_1,
    Temp_0,
    Page,
    Size,
    SortColumn = '',
    SortType = '',
    SystemYear,
    Institution
  }: getReport607DetailsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetReport607Details?${buildQueryParams({
        F_Date,
        T_Date,
        Is_Select_Act,
        AccCard,
        Temp_1,
        Temp_0,
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

  GetBearingMovementReport: ({
    Act_Nos,
    Mesav_Supp_Num,
    Mesav_Send_Date,
    Mesav_Payment_Date,
    Mesav_Supp_Ref,
    Mesav_Status,
    Page,
    Size,
    Institution,
    SystemYear,
    SortColumn,
    SortType
  }: GetBearingMovementReportParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetMCFRReport1359/?${buildQueryParams({
        Act_Nos,
        Mesav_Supp_Num,
        Mesav_Send_Date,
        Mesav_Payment_Date,
        Mesav_Supp_Ref,
        Mesav_Status,
        Page,
        Size,
        Institution,
        SystemYear,
        SortColumn,
        SortType
      })}`,
      method: 'GET'
    };
  },

  GETClassAtInsti_1220: ({
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: getPaymentMethods): UseApiQueryOptionsType => {
    return {
      url: `Payment/ClassAtInsti_1220/?${buildQueryParams({
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

  GetBankTransferFormReport1308: ({
    Act_No,
    Pay_Way,
    F_Date,
    T_Date,
    F_Rel_Date,
    T_Rel_Date,
    SuppNum,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: getBankTransferFormReportParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/BankTransferFormReport1308?${buildQueryParams({
        Act_No,
        Pay_Way,
        F_Date,
        T_Date,
        F_Rel_Date,
        T_Rel_Date,
        SuppNum,
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
  GetParentDetailReport: ({
    Page,
    Size,
    SortColumn,
    SortType,
    f_class_code,
    t_class_code,
    f_class_num,
    t_class_num,
    SystemYear,
    Institution
  }: getParentDetailsReportParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/parentDetailReport?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        f_class_code,
        t_class_code,
        f_class_num,
        t_class_num
      })}`,
      method: 'GET'
    };
  },
  GetStudentLocator0005: ({
    SortColumn,
    SortType,
    Page,
    Size,
    Class_Code,
    Family_Name,
    Private_Name,
    Class_Num,
    Institution,
    SystemYear
  }: StudentLocatorFilterDto): UseApiQueryOptionsType => {
    return {
      url: `Payment/StudentLocator0005?${buildQueryParams({
        SortColumn,
        SortType,
        Page,
        Size,
        Class_Code,
        Family_Name,
        Private_Name,
        Class_Num,
        Institution,
        SystemYear
      })}`
    };
  },

  getPaymentDetails: ({
    Supp_Num,
    Expense_Num,
    Bank_Card,
    SystemYear,
    Institution,
    Page,
    Size,
    SortColumn,
    SortType
  }: getDetailsToCancelPaymentOrderType): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetPaymentDetails?${buildQueryParams({
        Supp_Num,
        Expense_Num,
        Bank_Card,
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

  getExpenseDetailsInvoices: ({
    Supp_Num,
    Expense_Num,
    Bank_Card,
    SystemYear,
    Institution,
    Page,
    Size,
    SortColumn,
    SortType
  }: getDetailsToCancelPaymentOrderType): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetExpenseDetailsInvoices?${buildQueryParams({
        Supp_Num,
        Expense_Num,
        Bank_Card,
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

  CancelPaymentVoucher: (
    payload: CancelPaymentVoucherPayloadType
  ): UseApiQueryOptionsType<CancelPaymentVoucherPayloadType> => {
    return {
      url: `Payment/CancelPaymentVoucher`,
      method: 'POST',
      data: payload
    };
  },
  getUpdateCheckInPaymentDetails: ({
    From_Pay_Date,
    To_Pay_Date,
    From_Check_Num,
    FromInvoice,
    To_Check_Num,
    Supp_Num,
    From_Act_No,
    To_Act_No,
    Curr_Year,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: GetUpdateCheckInPaymentDetailsParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/GetUpdateCheckInPaymentDetails?${buildQueryParams({
        From_Pay_Date,
        To_Pay_Date,
        From_Check_Num,
        FromInvoice,
        To_Check_Num,
        Supp_Num,
        From_Act_No,
        To_Act_No,
        Curr_Year,
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

  ValidateNewCheckNumValueChange: ({
    New_Check_Num,
    Insti,
    Bank,
    Bank_Account
  }: ValidateNewCheckNumValueChangeParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/ValidateNewCheckNumValueChange?${buildQueryParams({
        New_Check_Num,
        Insti,
        Bank,
        Bank_Account
      })}`,
      method: 'GET'
    };
  },
  getFilterScreenMCFL0621: ({
    PayerType,
    FamilyName,
    PrivateName,
    Id,
    ClassCode,
    ClassNum,
    StudyYear,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: GetFilterScreenMCFL0621ParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/FilterScreenMCFL0621?${buildQueryParams({
        PayerType,
        FamilyName,
        PrivateName,
        Id,
        ClassCode,
        ClassNum,
        StudyYear,
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
  ValidateCheqCardValueChange: ({
    Pay_Way,
    SystemYear,
    InstitutionCode
  }: ValidateCheqCardValueChangeParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/ValidateCheqCardValueChange?${buildQueryParams({
        Pay_Way,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },

  ValidateNewPaymentDateValueChange: ({
    New_Payment_Date,
    SystemYear,
    InstitutionCode
  }: ValidateNewPaymentDateValueChangeParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/ValidateNewPaymentDateValueChange?${buildQueryParams({
        New_Payment_Date,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },

  ValidateOnClickSuppOrder: ({
    Payment_Date,
    SystemYear,
    InstitutionCode
  }: ValidateOnClickSuppOrderParamsType): UseApiQueryOptionsType => {
    return {
      url: `Payment/ValidateOnClickSuppOrder?${buildQueryParams({
        Payment_Date,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },

  UpdateCheckNumAndPaymentDate: (
    payload: UpdateCheckNumAndPaymentDatePayloadType
  ): UseApiQueryOptionsType<UpdateCheckNumAndPaymentDatePayloadType> => {
    return {
      url: `Payment/UpdateCheckNumAndPaymentDate`,
      method: 'POST',
      data: payload
    };
  },

  PerformPettyCashDeposit0602: (
    payload: PerformPettyCashDeposit0602Payload
  ): UseApiQueryOptionsType<PerformPettyCashDeposit0602Payload> => {
    return {
      url: `Payment/PerformPettyCashDeposit0602`,
      method: 'POST',
      data: payload
    };
  }
};
