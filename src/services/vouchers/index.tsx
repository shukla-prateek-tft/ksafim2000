import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import { DeleteExpenseVouchersPayload, NewExpenseVoucherListPayload } from './types';

export const VouchersService = {
  getListExpenseVouchers: ({
    Acc_No = '',
    SystemYear = '',
    InstitutionCode = ''
  }): UseApiQueryOptionsType => {
    return {
      url: `ExpenseVoucher?${buildQueryParams({
        Acc_No,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  },
  updateVoucher: (id: string, data: any): UseApiQueryOptionsType => {
    return {
      url: `Voucher/${id}`,
      method: 'PUT',
      data
    };
  },
  deleteExpenseVouchers: (payload: DeleteExpenseVouchersPayload): UseApiQueryOptionsType => {
    return {
      url: `ExpenseVoucher/delete`,
      method: 'PUT',
      data: payload
    };
  },
  updateMultipleVouchers: (data: any): UseApiQueryOptionsType => {
    return {
      url: `Voucher/bulk-update`,
      method: 'PUT',
      data
    };
  },
  addRowVoucher: (data: any): UseApiQueryOptionsType => {
    return {
      url: `Voucher`,
      method: 'POST',
      data
    };
  },
  getNewExpenseVoucher: ({
    FromDate,
    ToDate,
    SuppNum,
    ToNum,
    FromNum,
    FromInvoiceNumber,
    ToInvoiceNumber,
    TypeNo,
    OrderNum,
    Cancelled,
    NoOrder,
    SortColumn,
    SortType,
    SystemYear,
    Institution,
    Page,
    CurrYear,
    Size
  }: NewExpenseVoucherListPayload): UseApiQueryOptionsType => {
    return {
      url: `Supplier/supplier-510-report?${buildQueryParams({
        From_Date: FromDate,
        To_Date: ToDate,
        From_Num: FromNum,
        To_Num: ToNum,
        Supp_Num: SuppNum,
        Curr_Year: CurrYear,
        No_Order: NoOrder,
        Order_Num: OrderNum,
        From_Invoice: FromInvoiceNumber,
        To_Invoice: ToInvoiceNumber,
        Canceled: Cancelled,
        Type: TypeNo,
        Page: Page,
        Size: Size,
        SortColumn: SortColumn,
        SortType: SortType,
        SystemYear: SystemYear,
        Institution: Institution
      })}`,
      method: 'GET'
    };
  },
  validateCancelExpenseVoucher: ({
    Acc_No = '',
    SystemYear = '',
    InstitutionCode = ''
  }): UseApiQueryOptionsType => {
    return {
      url: `ExpenseVoucher/ValidateCancelExpenseVoucher?${buildQueryParams({
        Acc_No,
        SystemYear,
        InstitutionCode
      })}`,
      method: 'GET'
    };
  }
};
