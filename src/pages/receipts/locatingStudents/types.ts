import { CustomRowRenderType, SortConfig } from '../type';

interface LocatingStudentResponseDto {
  Student_Id: number | null; 
  Family_Name: string | null;
  Private_Name: string | null;
  Class_Code: string | null;
  Class_Num: number | null;
}
export interface CodeDescDto {
  code: number;
  desc_Aut: string;
}
export interface StudentLocatorFilterDto {
Page: number;
  Size: number;
  SortColumn: string;
  SortType: string;
  Family_Name: string | null;
  Private_Name: string | null;
  Class_Code:string | null;
  Class_Num: string | null;
  Institution?: string | number | null | undefined;
  SystemYear?: string | number | null | undefined;
}

export interface LocatingStudentsProps {
  renderActionItems: () => JSX.Element;
  studentData: LocatingStudentResponseDto[];
  customRowRender: CustomRowRenderType<any>;
  classCodeData?: CodeDescDto[];
  handleSearch: () => void;
  filters: StudentLocatorFilterDto;
  setFilters: React.Dispatch<React.SetStateAction<StudentLocatorFilterDto>>;
  handleSort:(key:string,direction:string)=>void;
  handlePagination :(page:number)=>void;
}
export interface GetLocatingStudentResponse {
  success: boolean;
  message: string;
  data: LocatingStudentResponseDto[];
}
export interface GetClassCodeResponseType {
  success: boolean;
  message: string;
  data: CodeDescDto[];
}
