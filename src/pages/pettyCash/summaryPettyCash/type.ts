export interface Report695QueryDto {
  title: string;
  credit_Sum: number;
  debit_Sum: number;
  total_Sum: number;
}

export interface DataPayload {
  queryHeader: string;
  report695QueryDto: Report695QueryDto[];
}

export interface SmallCashRegisterSummaryResponse {
  success: boolean;
  message: string;
  data: DataPayload;
}