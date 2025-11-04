export interface GetBearingMovementReportParamsType {
  Act_Nos?: [string];
  Mesav_Supp_Num?: number;
  Mesav_Send_Date?: string;
  Mesav_Payment_Date?: string;
  Mesav_Supp_Ref?: number;
  Mesav_Status?: number;
  Page?: number;
  Size?: number;
  Institution: number;
  SystemYear: number;
  SortColumn?: string;
  SortType?: string;
}

export type BearingMovementReport = {
  supp_id: number | null;
  supp_name: string | null;
  bank: number | null;
  bank_account: number | null;
  desc_aut: string | null;
  outcome: number | null;
  signature?: string | null;
  [key: string]: string | number | null | undefined;
};

export interface GetMCFRReport1359Response {
  success: boolean;
  message: string;
  data: BearingMovementReport[];
}

export interface BearingMovementReportUIprops {
  bearingMovementReportData: BearingMovementReport[];
}