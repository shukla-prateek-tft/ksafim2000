import { CustomRowRenderType } from "../type";

export interface GetStudyGroupsParamsType {
  Page?: number;
  Size?: number;
  Include_Finished?: boolean;
  Group_Num: number;
  Group_Name: string;
  Institution: number;
  SystemYear: number;
  SortColumn?: string;
  SortType?: string;
}

export interface StudyGroup {
  study_Group: string;
  desc_Aut: string;
  taarich_Sium_Kvutsa: string;
  taarich_Hatchala_Kvutsa: string;
  is_MazeVet: number;
  [key: string]: string | number | boolean | Date | undefined;
}

export interface PaginationMetadata {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ApiInnerData {
  data: StudyGroup[];
  paginationMetadata: PaginationMetadata;
  success: boolean;
  message: string | null;
}

export interface GetStudyGroupResponse {
  success: boolean;
  message: string;
  data: ApiInnerData;
}

export interface StudyGroupsUIProps {
  renderActionItems: () => JSX.Element | null;
  customRowRender?: CustomRowRenderType<StudyGroup>;
  studyGroupsData?: ApiInnerData;
}

export interface StudyGroup {
  studyGroup: number | string;
  descAut: string;
  isMazevet: boolean;
  taarichHatchalaKvutsa: Date | string;
  taarichSiumKvutsa: Date | string;
}

export interface insertStudyGroupsParamType {
  systemYear?: number | string;
  institutionCode?: number | string;
  studyGroupList?: StudyGroup[];
}
