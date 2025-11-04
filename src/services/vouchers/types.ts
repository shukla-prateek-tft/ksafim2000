interface DeleteExpenseVouchersPayload {
  institutionCode: number;
  year: number;
  expenseVoucherIds: any[];
}
interface NewExpenseVoucherListPayload {
  FromDate: string;
  ToDate: string;
  FromNum: string;
  ToNum: string;
  FromCheck: string;
  ToCheck: string;
  FromInvoiceNumber: string;
  ToInvoiceNumber: string;
  SuppNum: string;
  CurrYear: boolean;
  NoOrder: boolean;
  Cancelled: boolean;
  OrderNum: string;
  AccNo: string;
  ParentId: string;
  TypeNo: string;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: 'Asc' | 'Desc';
  SystemYear: string;
  Institution: string;
}

export type { DeleteExpenseVouchersPayload, NewExpenseVoucherListPayload };
