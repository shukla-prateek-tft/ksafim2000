// type.ts

export interface ParentDetailRow {
  NUM: string;
  PAY_SCHOOL: string;
  PARENT_ID: string;
  PARENT_NAME: string;
  PHONE_NUM: string;
  MOBILE_PHONE: string;
  PARENT_MAIL: string;
  STUDENT_ID: string;
  STUDENT_NAME: string;
  CITY: string;
  CLASS_CODE: string;
}

export type ParentDetailKey = keyof ParentDetailRow;

export type CustomRowRenderer = (
  key: ParentDetailKey,
  row: ParentDetailRow,
  index: number
) => React.ReactNode;

export interface PrintParentDetailsReportFilterDto {
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

export interface PrintParentDetailsReportUIProps {
  data: PaymentDetailsReportByStudentResponseDto;
  customRowRender?: CustomRowRenderer;
  filters: PrintParentDetailsReportFilterDto;
  setFilters: React.Dispatch<React.SetStateAction<PrintParentDetailsReportFilterDto>>;
  handleSearch: () => void;
  handleSort: (key: string, direction: string) => void;
}

// API types
export interface ParentDetailsApiResponse {
  success: boolean;
  data: ParentDetailRow[];
  message?: string;
}

export interface PaymentDetailsReportByStudentResponse {
  success: boolean;
  data: PaymentDetailsReportByStudentResponseDto;
  message?: string;
  metaInfo: boolean;
}

export interface PaymentDetailsDto {
  seqNum: number;
  studentId: number;
  studentFamilyName: string;
  studentPrivateName: string;
  studentCityName: string;
  studentClassName: string;
  studentClassNum: number;
  fatherPaySchool: boolean;
  fatherId: number;
  fatherFamilyName: string;
  fatherPrivateName: string;
  fatherPhone: number | null;
  fatherPhonePrefix: string | null;
  fatherMisparNayad1: number | null;
  fatherKidometNayad1: string | null;
  fatherEmail: string | null;
  motherPaySchool: boolean;
  motherId: number;
  motherFamilyName: string;
  motherPrivateName: string;
  motherPhone: number | null;
  motherPhonePrefix: string | null;
  motherMisparNayad1: number | null;
  motherKidometNayad1: string | null;
  motherEmail: string | null;
}

export interface PaymentDetailsReportByStudentResponseDto {
  query_Params: any;
  paymentDetails: PaymentDetailsDto[];
  tot_Stud: number;
  total_Stud: number;
}
