import { ReactNode } from "react";

export interface Supplier {
  supp_Special: number | null;
  supp_Off: number | null;
  supp_Num: number;
  supp_Name: string;
  supp_Type: number;
  tax_Deduct: number;
  deduct_Type: number;
  tax_Date: string;
  books_Aproved: boolean;
  acc_Card: number;
  desc_Aut: string;
  sort_Code: number;
  supp_Dif: number | null;
  supp_To_File: boolean;
  supp_To_Order: boolean;
  supp_Num_Dealer: string | null;
  main_To_Mas: number | null;
  supp_Vat_Num: string | null;
}
export interface ListOfSuppliers {
  success: boolean;
  message: string;
  data: Supplier[];
  metaInfo: {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  summaryData: {
    [key: string]: boolean;
  };
}
export interface AccCardValidationResponse {
  success: boolean;
  message: string | null;
  data: any;
}
export interface ListOfSuppliersUIProps {
  rowRender: (key: string, row: any, index: number) => React.ReactNode;
  renderActionItems: () => React.ReactNode;
  renderOtherActionButtons: () => React.ReactNode;
  data?: any[];
  pagination?: any;
  onPaginationChange?: (page: number) => void;
  handleSort?: (key: string, direction: string) => void;
}
