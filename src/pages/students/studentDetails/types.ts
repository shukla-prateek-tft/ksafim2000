export interface PaginationMetadata {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface topGrid {
  // Top Grid
  student_Id: number | string;
  student_Family_Name: string;
  student_Private_Name: string;
  sex: number;
  semel_Mosad: number;
  birth_Date: Date;
  class_Code: number;
  class_Num: number;
  left_Date: Date;
  code_Zakaut_Lschar_Limud?: string;
  code_Status_Rishum_Ta?: string;
  status_Rishum?: string;
  class_Family_Name?: string;
  class_Private_Name?: string;
  city_Code?: string | number;
  cityName?: string;
  street?: string;
  build_Num?: string;
  zip?: number;
  phonePrefix?: string;
  phone?: string | number;
  email_1?: string;
  alfa_Choice_1?: string;
  country: string;
  studentStatus?: string;
  pay_Way?: string;
  insti?: string;
  alt_Birth_Date: Date;
  e_Mail?: string;
}

export interface ParentsDetails {
  fatherRelateType?: number;
  fatherId?: number;
  fatherFamilyName?: string;
  fatherPrivateName?: string;
  fatherTaarichLeda?: string;
  fatherCityCode?: number;
  fatherCityName?: string;
  fatherStreet?: string;
  fatherBuildNum?: string;
  fatherPhone?: number | string;
  fatherPhonePrefix?: string;
  fatherMisparNayad1?: number | string;
  fatherKidometNayad1?: string;
  fatherEmail?: string;
  fatherCity?: number | string;
  fatherPaySchool?: string |number;

  motherRelateType?: number;
  motherId?: number;
  motherFamilyName?: string;
  motherPrivateName?: string;
  motherTaarichLeda?: string;
  motherCityCode?: number;
  motherCityName?: string;
  motherStreet?: string;
  motherBuildNum?: string;
  motherPhone?: number | string;
  motherPhonePrefix?: string;
  motherMisparNayad1?: number | string;
  motherKidometNayad1?: string;
  motherEmail?: string;
  motherCity?: number;
  motherPaySchool?: number;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface LearnigCenters {
  study_Year: number;
  study_Group: number;
  desc_Aut: string;
  start_Date: string;
  finish_Date: string;
  taarich_Idkun_Reshuma: string;
  is_Mazevet: boolean;
  charge: string;
  total_Sum: string;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface StudentData {
  topGrid: topGrid;
  parentsGrid: ParentsDetails[];
  studentExtraInfoGrid: LearnigCenters[];
}

export interface StudentDataWrapper {
  data: StudentData;
  paginationMetadata: PaginationMetadata;
  success: boolean;
  message: string;
}

export interface GetStudentDetailsResponseType {
  success: boolean;
  message: string;
  data: StudentDataWrapper;
  metaInfo: boolean;
}

export interface StudentDetailsProps {
  screenName: string;
}
