
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
