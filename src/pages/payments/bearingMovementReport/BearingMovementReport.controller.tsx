// MCFR-1359
import { useEffect } from 'react';
import BearingMovementReportUI from './BearingMovementReport.render';
import { showToastErrors } from '@/utils/commonHelper';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { GetBearingMovementReportParamsType, GetMCFRReport1359Response } from './types';
import { GlobalLoader } from '@/components';

const BearingMovementReport = () => {
  const { user } = useAuth();
  const {
    state: {
      data: bearingMovementReportResponse,
      loading: isBearingMovementReportLoading,
      isError: isBearingMovementReportError,
      error: bearingMovementReportError
    },
    callService: getStudyGroups
  } = useApiQuery<GetMCFRReport1359Response>(
    adminServices.payments.GetBearingMovementReport as ServiceFn
  );

  useEffect(() => {
    const params: GetBearingMovementReportParamsType = {
      Act_Nos: ['123456'], // replace with actual act numbers
      Mesav_Supp_Num: 13255, // replace with actual supplier number
      Mesav_Send_Date: '2025-08-14', // replace with actual date
      Mesav_Payment_Date: '2025-08-14', // replace with actual date
      Mesav_Supp_Ref: 123456, // replace with actual supplier reference
      Mesav_Status: 1, // replace with actual status
      Page: 1, // Default page number
      Size: 10, // Default size per page
      SortColumn: '',
      SortType: '',
      SystemYear: Number(user?.instiYear),
      Institution: Number(user?.instiCode)
    };

    getStudyGroups(params);
  }, [user?.instiCode, user?.instiYear]);

  useEffect(() => {
    if (isBearingMovementReportError && bearingMovementReportError) {
      showToastErrors(bearingMovementReportError);
    }
  }, [isBearingMovementReportError, bearingMovementReportError]);

  return (
    <div>
      <GlobalLoader loading={isBearingMovementReportLoading} />
      <BearingMovementReportUI bearingMovementReportData={bearingMovementReportResponse?.data} />
    </div>
  );
};

export default BearingMovementReport;
