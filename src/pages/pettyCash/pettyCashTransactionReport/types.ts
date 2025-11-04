import { PaginationType } from '../type';
export type SortDirection = 'Asc' | 'Desc';

export interface ReportBody607 {
  date_Aut?: string;
  desc_Aut?: string;
  name?: string;
  supp_Number?: number;
  invoice_Number?: string;
  card_Acc?: string;
  type_Service?: string;
  subject_Service?: string;
  credit?: number;
  debit?: number;
  balance?: number;
  user_Name?: string;
  update_Date?: string;
  is_Temp?: boolean;
}

export interface Report607Data {
  queryHeader: string;
  report607QueryDto: ReportBody607[];
  total: number;
  total_Temp: number;
  total_Sum: number;
  total_Temp_Sum: number;
}

export interface Report607APIResponse {
  success: boolean;
  message: string;
  data: Report607Data;
}

export interface GetReport607DetailsFilterType {
  F_Date: string;
  T_Date: string;
  Is_Select_Act: boolean;
  AccCard: number;
  Temp_1: boolean;
  Temp_0: boolean;
  Page: number;
  Size: number;
  SortColumn: string | keyof ReportBody607[];
  SortType: string;
  SystemYear: number | null;
  Institution: number | null;
}

export interface PettyCashTransactionReportProps {
  data: Report607Data;
  handleApiSorting: (key: keyof ReportBody607, direction: SortDirection) => void;
  handlePagination?: (page: number) => void;
  pagination?: PaginationType;
  handleChangeFilters: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  printedBy: string;
  filters: Partial<GetReport607DetailsFilterType>;
  handleCleanFilters: () => void;
  handleDateChange: (date: Date | string | null, id: string) => void;
}
