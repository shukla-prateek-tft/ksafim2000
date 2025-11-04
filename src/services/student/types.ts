export interface GetPaymentDetailsReportByStudentParamsType {
  F_Class_Code: number;
  F_Class_Num: number;
  T_Class_Code: number;
  T_Class_Num: number;
  No_Id_Par: boolean;
  Double_Pay: boolean | null;
  No_Pay: boolean | null;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: string;
  SystemYear: number | string;
  Institution: number | string | null;
}

export interface GetStudentDetailsParamType {
  InstanceParent: string;
  AllStudents?: boolean;
  Student_Status?: string | number;
  Include_Status: number;
  Parent_Id?: number | string;
  Student_Id?: string;
  Study_Group?: string | number;
  Finished_Group?: string | number;
  Class_Code?: number | string;
  Class_Num?: number | string;
  To_Class_Code?: number | string;
  To_Class_Num?: number | string;
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: string;
  SystemYear: string;
  Institution: string;
}
