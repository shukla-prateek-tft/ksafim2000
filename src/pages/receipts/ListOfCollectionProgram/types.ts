// Pagination info
export interface PaginationMetadata {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface GridItem {
  charge: number;
  desc_Aut: string;
  full_Name: string;
  auto_Set: number;
  from_Grade: number;
  from_Class: number;
  to_Grade: number;
  to_Class: number;
  studyGroup: string; // originally nullable
  payTypeMinipay: string; // originally nullable
  major: string; // originally nullable
  num_Choice1: string; // originally nullable
  tot_Sum: number;
  group_Name: string; // originally nullable
  study_Group_Kizuz: string;
  [key: string]: string | number | boolean | Date | undefined;
}

// Grid section
export interface Grid {
  data: GridItem[];
  paginationMetadata: PaginationMetadata;
  success: boolean;
  message: string;
}

// Data section
export interface CollectionProgramData {
  year_Aut: string;
  jewish_Year: string;
  system_Year: string;
  from_Date: Date | string;
  to_Date: Date | string;
  comment: string;
  comment2: string;
  s_mess: string;
  grid: Grid;
}

// Full response
export interface CollectionProgramResponseType {
  success: boolean;
  message: string;
  data: CollectionProgramData;
  metaInfo: boolean;
}

export interface SelectedDateType {
  from_date: Date | string | null | undefined;
  to_date: Date | string | null | undefined;
}
