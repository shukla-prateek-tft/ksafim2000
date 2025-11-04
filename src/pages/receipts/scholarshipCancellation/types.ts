export interface GetScholarshipCancellationResponse {
  success: boolean;
  message: string;
  data: {
    header: string | null;
    incomeGrid: string | null;
    tot_1: string | null;
    outcomeGrid: string | null;
    tot_2: string | null;
  };
  metaInfo: boolean;
}