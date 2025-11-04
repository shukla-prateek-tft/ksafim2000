import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import { GetStudyGroupsParamsType, insertStudyGroupsParamType } from './types';

export const StudyService = {
  GetStudyGroups: ({
    Page,
    Size,
    Include_Finished,
    Group_Num,
    Group_Name,
    Institution,
    SystemYear,
    SortColumn,
    SortType
  }: GetStudyGroupsParamsType): UseApiQueryOptionsType => {
    return {
      url: `Study/GetStudyGroups/?${buildQueryParams({
        Page,
        Size,
        Include_Finished,
        Group_Num,
        Group_Name,
        Institution,
        SystemYear,
        SortColumn,
        SortType
      })}`,
      method: 'GET'
    };
  },
  insertStudyGroups: (
    payload: insertStudyGroupsParamType
  ): UseApiQueryOptionsType<insertStudyGroupsParamType> => {
    return {
      url: `Study/InsertStudyGroups`,
      method: 'GET', // May need to change to POST
      data: payload
    };
  }
};
