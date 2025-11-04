import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import {
  GetCancellingBankTransferListPayloadType,
  getCollectProgramListParamsType,
  getScholarshipCancellationParamsType,
  performScholarshipCancellationPayloadType,
  PerformCancelBankTransferPayloadType
} from './types';

export const ReceiptService = {
  getScholarshipCancellation: ({
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution,
    Act_No
  }: getScholarshipCancellationParamsType): UseApiQueryOptionsType => {
    return {
      url: `Receipt/GetScholarshipCancellation?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
        Act_No
      })}`,
      method: 'GET'
    };
  },

  performScholarshipCancellation: (
    payload: performScholarshipCancellationPayloadType
  ): UseApiQueryOptionsType<performScholarshipCancellationPayloadType> => {
    return {
      url: `Receipt/PerformScholarshipCancellation`,
      method: 'POST',
      data: payload
    };
  },

  getListOfCollectionProgram: ({
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: getCollectProgramListParamsType): UseApiQueryOptionsType => {
    return {
      url: `Receipt/GetCollectionProgramList?${buildQueryParams({
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },

  PerformCancelBankTransfer: (
    payload: PerformCancelBankTransferPayloadType
  ): UseApiQueryOptionsType<PerformCancelBankTransferPayloadType> => {
    return {
      url: `Receipt/PerformCancelBankTransfer`,
      method: 'POST',
      data: payload
    };
  },

  getCancellingBankTransferList: (
    payload: GetCancellingBankTransferListPayloadType
  ): UseApiQueryOptionsType<GetCancellingBankTransferListPayloadType> => {
    return {
      url: `Receipt/GetCancellingBankTransferList`,
      method: 'GET',
      data: payload
    };
  }
};
