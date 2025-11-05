import { getPaymentSuppilerListParamsType } from "@/services/supplier/types";
import { Supplier } from "../paymentSuppliersList/components/extendedSupplierValidity/type";

export interface SupplierData {
  supp_Num: string;
  supp_Name?: string;
  supp_Vat_Num?: string;
  supp_Num_Dealer?: string;
  if_Hsb_Open?: boolean;
  inv_Confirm?: boolean;
  [key: string]: any;
}

export interface PaginationType {
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  pagenumber?:number
}

export interface PaymentSupplierResponse {
  data: SupplierData[];
  metaInfo?: PaginationType;
}

export interface SupplierSelectionProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSupplierForPayment: (supplier: Supplier) => void;
  headerTitle?: string;
}

export interface SupplierSelectionUIProps {
  data?: PaymentSupplierResponse | null;
  handlePagination: (page: number) => void;
  handleSorting: (columnId: string) => void;
  handleChangeFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShow: () => void;
  filters: getPaymentSuppilerListParamsType;
  handleSelectRow: (supplier: SupplierData) => void;
  selectedSupplier: SupplierData | null;
  renderActionItems: () => JSX.Element;
  onSave: () => void;
}