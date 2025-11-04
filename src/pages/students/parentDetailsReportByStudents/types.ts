interface Report1278QueryDto {
  Student: number;
  Student_Family_Name: string;
  Student_Private_Name: string;
  Class_Num: number;
  Class_Name: string;
  Pay1: boolean;
  Father_Id: number;
  Father_Family_Name: string;
  Father_Private_Name: string;
  Father_Phone: number | null;
  Father_Phone_prefix: number | null;
  Father_Mispar_Nayad1: number | null;
  Father_Kidomet_Nayad1: string | null;
  Father_Email: string | null;
  Pay: boolean;
  Mother_Id: number;
  Mother_Family_Name: string;
  Mother_Private_Name: string;
  Mother_Phone: number | null;
  Mother_Phone_prefix: number | null;
  Mother_Mispar_Nayad1: number | null;
  Mother_Kidomet_Nayad1: string | null;
  Mother_Email: string | null;
}

interface ParentDetailResponseDto {
  QueryHeader: string;
  Total_Stud: number | null;
  Report1278QueryDto: Report1278QueryDto[];
}
export interface GetParentDetailsReportResponse {
  success: boolean;
  message: string;
  data: ParentDetailResponseDto[];
}
