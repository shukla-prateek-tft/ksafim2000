import { CustomRowRenderType } from "@/pages/type";
export interface InvoiceRow {
  id: string;  // This ID is not present in data and used only for checkbox rendering purpose
  [key: string]: string|boolean|null;
  act_No: string;
  student: string;
  date_Aut: string;
  order_Number: string | null;
  desc_Aut: string;
  outcome_Sum: string;
  is_Confirm: true | false | null;
  is_Confirm_Text: string | null;
  act_Status: "1" | "2" | "3" | "4";
  acc_act_type: string;
  acc_act_type_text: string;
  type_no: string | null;
  type_no_text: string | null;
  service_Type_Name: string;
  acc_Card_Name: string;
  service_subject_id: string;
  service_type_id: string;
  acc_card_id: string;
}
export interface TypeListType {
  value: number;
  label: string;
}

export interface SupplierType {
  supplierNo: string;
  supplierName: string;
}
export interface ColumnConfig<T> {
  key: keyof T;
  label?: string;
  width?: string | number;
  sortable?: boolean;
  header?: () => JSX.Element;
  cell?: (args: { row: { original: T } }) => JSX.Element;
}
export interface InvoiceDisplayUIProps {
  data: InvoiceRow[];
  column: ColumnConfig<InvoiceRow>[];
  totalAmount: number;
  selectedAmount: number;
  supplierData: SupplierType;
  onSelectSupplier: (supplier: { supp_Name?: string; supp_Num?: string }) => void;
  renderActionItems: () => JSX.Element;
  customRowRender: CustomRowRenderType<InvoiceRow & { id: string }>;
}
export interface ColumnsProps {
  onSelectAll: () => void;
  isSelectedAll: boolean;
}