import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import { GetClosingCashByPayWayAndInstitutionType, GetReport0695DetailsParamsType, PostClosingCashType } from './types';

export const CashServices = {
  getClosingCash: ({
    SystemYear,
    Institution
  }: GetClosingCashByPayWayAndInstitutionType): UseApiQueryOptionsType => {
    return {
      url: `GetClosingCashByPaywayAndInstitution?${buildQueryParams({
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  insertClosingCashService: (
    payload: PostClosingCashType
  ): UseApiQueryOptionsType<PostClosingCashType> => {
    return {
      url: `ClosingCash`,
      method: 'POST',
      data: payload
    };
  },
  getReport0695Details: ({
      BankCard,
      Page,
      Size,
      SortColumn,
      SortType,
      SystemYear,
      Institution
    }: GetReport0695DetailsParamsType): UseApiQueryOptionsType => {
      return {
        url: `cash/GetReport0695Details/?${buildQueryParams({
          BankCard,
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
