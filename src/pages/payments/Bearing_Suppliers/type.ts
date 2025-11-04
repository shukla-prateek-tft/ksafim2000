export interface Supplier {
  Mesav_Supp_Num: string;
  Mesav_Send_Date: string | null;
  Payment_Date: string | null;
  Mesav_Supp_Ref: string | null;
  Canceled: string | null;
  Mesav_Status: string;
  Total_Supp: number;
  Total_Sum: number;
}

export interface GetSuppliersNumberDataResponse {
  data: Supplier[];
  totalCount: number;
}

export interface GetSuppliersNumberDataParams {
  Masav_Supp_Num: string;
  Payment_Date: Date;
  Page: string;
  Size: string;
  SortColumn: string;
  SortType: string;
  SystemYear: string;
  Institution: string;
}
