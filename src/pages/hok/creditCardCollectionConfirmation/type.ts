import { SortDirection } from '@/pages/type';

export type CreditCardCollectionConfirmationColumnKey =
  | 'id'
  | 'familyName'
  | 'paymentDate'
  | 'creditAccount'
  | 'validDate'
  | 'paymentSum'
  | 'confirmationNum'
  | 'statusDesc'
  | 'token'
  | 'payApproved'
  | 'toPay';

export interface CreditCardCollectionConfirmationRow {
  id: number | string;
  familyName: string;
  privateName?: string | null;
  paymentDate: string | null;
  creditAccount: string | null;
  validDate: string | null;
  paymentSum: number | string | null;
  confirmationNum: string | null;
  statusDesc: string | null;
  token: string | null;
  payApproved: boolean;
  toPay: boolean;
  [key: string]: string | number | boolean | null | undefined;
}

export interface CreditCardCollectionConfirmationMetaInfo {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GetCreditCardCollectionConfirmationResponse {
  success: boolean;
  message: string;
  data: CreditCardCollectionConfirmationRow[];
  metaInfo?: CreditCardCollectionConfirmationMetaInfo;
}

export interface CreditCardCollectionConfirmationProps {
  data?: CreditCardCollectionConfirmationRow[];
  pagination?: CreditCardCollectionConfirmationMetaInfo;
  handlePaginationChange?: (page: number) => void;
  handleSort?: (key: keyof CreditCardCollectionConfirmationRow, direction: SortDirection) => void;
}

export interface CreditCardCollectionConfirmationProps {}