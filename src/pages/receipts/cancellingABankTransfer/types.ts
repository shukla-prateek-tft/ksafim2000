export interface CancellingABankTransferFilterType {
  pay_Way?: number;
  payment_Date?: Date;
  return_Status?: number;
  check_Num?: number;
  income?: number;
  bank?: number;
  bank_Account?: number;
  receipt?: string;
  systemYear?: number;
  details?: string;
  payer?: number;
  acc_Act_Type?: string;
}

export interface GridRowType {
  student: number;
  sum_Aut: number;
  acc_Card: number;
  service_Type: number;
  income_Sum: number;
  private_Name: string | null;
  family_Name: string | null;
  acc_Act_Type: number;
  service_Subject: number;
}
export interface PaginationMetadata {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface getCancellingBankTransferListResponseData {
  data: CancellingABankTransferCommandType[];
  paginationMetadata: PaginationMetadata;
  success: boolean;
  message: string | null;
}

export interface getCancellingBankTransferListResponse {
  success: boolean;
  message: string;
  data: getCancellingBankTransferListResponseData;
  metaInfo: boolean;
}

export interface CancellingABankTransferUIProps {
  getCancellingBankTransferListResponseData: getCancellingBankTransferListResponseData;
  renderActionItems: () => JSX.Element;
  filter: CancellingABankTransferFilterType;
  handlePagination?: (page: number) => void;
  pagination: boolean;
  onFilterChange: (
    id: keyof CancellingABankTransferFilterType,
    value: string | number | Date | undefined
  ) => void;
  gridData: GridRowType[];
  onGridChange: (
    rowIndex: number,
    key: keyof GridRowType,
    value: GridRowType[keyof GridRowType]
  ) => void;
}

export interface PerformCancelBankTransferResponse {
  success: boolean;
  message: string;
  data: {
    message: string;
  };
  metainfo: boolean;
}
