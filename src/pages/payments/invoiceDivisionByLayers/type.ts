import type { PaginationType } from '@/pages/type';

export interface MappingResponse<T> {
  success: boolean;
  message: string;
  data: T;
  metaInfo?: PaginationType;
}
export type RowData = {
  id: number;
  serviceType: number | string;
  accCard: number | string;
  classFrom: number | string;
  classTo: number | string;
  [key: string]: string | number | undefined;
};

export interface SupplierTypeOption {
  caseId: number;
  caseValue: string;
}
export interface AccActTypeOption {
  code: number;
  desc_Aut: string;
}
export interface ServiceTypeOption {
  service_Type: number;
  desc_Aut: string;
}
export interface ClassListOption {
  caseId: number;
  caseValue: string;
}
export interface InvoiceAccCardOption {
  accCard: number;
  descAut: string | null;
  accCardHinuh: number;
}

export interface InvoiceTypeOption {
  code: number;
  text: string;
}

export interface InvoiceRow {
  id: string;
  serviceType?: number;
  accCard?: number;
  classFrom?: number;
  classTo?: number;
  fromNum?: number;
  toNum?: number;
  studentCount?: number;
  sum?: number;
}

export interface InvoiceScreenState {
  supplierType?: SupplierTypeOption;
  accActType?: AccActTypeOption;
  invoiceType?: InvoiceTypeOption;
  invoiceNum: string;
  invoiceDate: string; 
  description: string;
  invoiceSum?: number;
  rows: InvoiceRow[];
}

// -------- API param/response types --------
export interface GetSupplierTypeParams {
  isAllType: boolean;
}
export interface GetAccCardsParams {
  serviceType: number;
  page: number;
  size: number;
}

export interface CheckInvoiceParams {
  InvoiceNumber: string;
  SuppNumber: string;
  KalendarYear?: string;
  SystemYear: number;
  InstitutionCode: number;
}

export interface CheckInvoiceResponse {
  success: boolean;
  message: string;
  data: boolean;
}

export interface GetStudentCountParams {
  FromClass: number;
  ToClass: number;
  FromNum: number;
  ToNum: number;
  SystemYear: number;
  InstitutionCode: number;
}

export interface BuildDetailItem {
  serviceType: string;
  accCard: string;
  sum: number;
}

export interface BuildResult {
  code: -1 | 1;
  selectItems: Record<string, unknown>;
  selectDetails: Array<Record<string, unknown>>;
}

export interface InvoiceDivisionByLayersUIProps {
  state: InvoiceScreenState;
  supplierTypes: SupplierTypeOption[];
  accActTypes: AccActTypeOption[];
  serviceTypes: ServiceTypeOption[];
  accCards: InvoiceAccCardOption[];
  classOptions: ClassListOption[];
  invoiceTypeEnabled: boolean;
  invoiceTypeOptions: InvoiceTypeOption[];
  onChangeHeader: <K extends keyof InvoiceScreenState>(
    key: K,
    value: InvoiceScreenState[K]
  ) => void;
  onChangeRow: (id: string, patch: Partial<InvoiceRow>) => void;
  onServiceTypeChange: (id: string, serviceType?: number) => void;
  onValidateInvoice: () => void;
  onCalculateAmounts: () => void;
  onTransferData: () => void;
  pagination?: PaginationType;
}
