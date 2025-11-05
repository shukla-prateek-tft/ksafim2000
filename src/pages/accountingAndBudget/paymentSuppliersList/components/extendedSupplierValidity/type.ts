import { PaginationType } from '@/pages/type';
import { SupplierType } from '@/store/slices/paymentSupplier/types';

export interface Supplier extends SupplierType {
  tax_Date_New?: string;
  tax_date?: string;
}

export interface SupplierSelectionState {
  flag: boolean;
  index: number | null;
}
interface UpdatePaymentSupplierData {
  listOfSupplier: Supplier[];
  userName: string;
}
export interface UpdatePaymentSupplierValidityResponse {
  success: boolean;
  message: string;
  data: UpdatePaymentSupplierData;
}

export interface SupplierResponse {
  success: boolean;
  message: string;
  data: Supplier[];
  metaInfo: PaginationType;
}
