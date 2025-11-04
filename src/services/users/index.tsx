import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import { GetUserListWithQuestionAndScreenType } from './types';

export const UsersServices = {
  getUserListWithQuestionAndScreen: ({
    UserName,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution,
  }: GetUserListWithQuestionAndScreenType): UseApiQueryOptionsType => {
    return {
      url: `/Users/GetUserListWithQuestionAndScreen?${buildQueryParams({
        UserName,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  }
};
