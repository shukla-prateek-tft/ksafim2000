import { SortDirection } from '@/pages/type';

export type ApprovalOfOpenInvoicesSortKey = 'actNo' | 'studentNo' | 'dateAut' | 'outcomeSum';

export type ApprovalOfOpenInvoicesColumnKey =
  | 'actNo'
  | 'studentNo'
  | 'dateAut'
  | 'orderNum'
  | 'serviceTypeName'
  | 'accCardName'
  | 'outcomeSum'
  | 'suppName'
  | 'payActNo'
  | 'descAut';

export enum ApprovalOfOpenInvoicesColumnEnum {
  ActNo = 'actNo',
  StudentNo = 'studentNo',
  DateAut = 'dateAut',
  OrderNum = 'orderNum',
  ServiceTypeName = 'serviceTypeName',
  AccCardName = 'accCardName',
  OutcomeSum = 'outcomeSum',
  SuppName = 'suppName',
  PayActNo = 'payActNo',
  DescAut = 'descAut'
}

export interface OpenInvoicesMetaInfo {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface OpenInvoiceItem {
  actNo: string;
  studentNo: string;
  dateAut: string;
  orderNum: number | null;
  serviceTypeName: string;
  accCardName: string;
  outcomeSum: number;
  suppNum: string;
  suppName: string;
  payActNo: string | null;
  descAut: string;
  [key: string]: string | number | null;
}

export interface ApprovalOfOpenInvoicesProps {
  data: OpenInvoiceItem[];
  pagination?: OpenInvoicesMetaInfo;
  handlePaginationChange?: (page: number) => void;
  handleSort?: (key: ApprovalOfOpenInvoicesSortKey, direction: SortDirection) => void;
}

export interface GetListofOpenInvoicesResponse {
  success: boolean;
  message: string;
  data: OpenInvoiceItem[];
  metaInfo: OpenInvoicesMetaInfo;
}
