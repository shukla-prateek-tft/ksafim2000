// MCFW-0619

import React, { useEffect, useState } from 'react';
import ClosePettyCashUI from './ClosePettyCash.render';
import classes from './ClosePettyCash.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
import { GlobalLoader } from '@/components';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { showToastErrors } from '@/utils/commonHelper';
import { toast } from 'react-toastify';
import {
  ClosePettyCashFilterType,
  ClosePettyCashProps,
  GetClosingCashAPIResponse,
  InsertClosingCashApiResponse,
  InsertClosingCashServiceParamsType
} from './types';
import { GetPaywayResponse, PaywayDataType } from '../suppliers/paymentSupplierOutcome/type';

export const defaultFilterValues: Partial<ClosePettyCashFilterType> = {
  Act_No: '',
  Pay_Date: '',
  Oposit_Card: '',
  Bank_Card: '',
  Desc_Aut: '',
  Pay_Way: '',
  Payment_Date: '',
  Income: 0
};

const ClosePettyCash = ({ isOpen, onClose }: ClosePettyCashProps) => {
  const { user } = useAuth();
  const [filters, setFilters] = useState<Partial<ClosePettyCashFilterType>>({
    ...defaultFilterValues
  });

  //Get Closing Cash
  const {
    state: {
      loading: getClosingCashLoading,
      isError: isGetClosingCashError,
      error: getClosingCashError,
      isSuccess: isGetClosingCashSuccess,
      data: getClosingCashData
    },
    callService: getClosingCashService
  } = useApiQuery<GetClosingCashAPIResponse>(adminServices.cash.getClosingCash as ServiceFn);

  useEffect(() => {
    if (isGetClosingCashError && getClosingCashError) {
      showToastErrors(getClosingCashError);
    }
    if (isGetClosingCashSuccess && getClosingCashData) {
      toast.success(getClosingCashData?.message);
    }
  }, [isGetClosingCashError, getClosingCashError, isGetClosingCashSuccess, getClosingCashData]);

  useEffect(() => {
    const dummyData = {
      SystemYear: 2025,
      Institution: 244111
      // SystemYear: user?.instiYear,
      // Institution: user?.instiCode
    };

    getClosingCashService(dummyData);
  }, []);

  //Insert ClosingCash Service
  const {
    state: {
      loading: insertClosingCashLoading,
      isSuccess: isInsertClosingCashSuccess,
      data: insertClosingCashResponse,
      isError: isInsertClosingCashError,
      error: insertClosingCashError
    },
    callService: insertClosingCashService,
    resetServiceState: resetInsertClosingCashState
  } = useApiQuery<InsertClosingCashApiResponse, InsertClosingCashServiceParamsType>(
    adminServices.cash.insertClosingCashService as ServiceFn<InsertClosingCashServiceParamsType>
  );

  useEffect(() => {
    if (isInsertClosingCashSuccess && insertClosingCashResponse) {
      toast.success(insertClosingCashResponse?.message, { autoClose: 1200 });
    }
    if (isInsertClosingCashError && insertClosingCashError) {
      showToastErrors(insertClosingCashError?.message);
      resetInsertClosingCashState();
    }
  }, [
    insertClosingCashResponse,
    insertClosingCashError,
    isInsertClosingCashError,
    isInsertClosingCashSuccess
  ]);

  //get-payway-data-service
  const {
    state: { data: paywayResponse },
    callService: getPaywayService
  } = useApiQuery<GetPaywayResponse>(adminServices.mapping.getPayway as ServiceFn);

  const paywayData = Array.isArray(paywayResponse?.data)
    ? paywayResponse.data.map((item: PaywayDataType) => ({
        value: item.pay_Way,
        label: item.pay_Way_Desc
      }))
    : [];

  useEffect(() => {
    getPaywayService();
  }, []);

  const handleSave = () => {
    const finalPayload = {
      systemYear: user?.instiYear,
      institutionCode: user?.instiCode,
      income: 100,
      paywayId: 120,
      paymentDate: '2025-08-27',
      bandCard: 101,
      oppositeCard: '907362722'
    };

    insertClosingCashService(finalPayload);
  };

  const handleChangeFilters = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value } = event.target as HTMLInputElement;

    const updatedFilters = { ...filters, [id]: value };
    setFilters(updatedFilters);
  };

  const handleDateChange = (date: Date | string | null, id: string) => {
    const dateValue = date instanceof Date ? date.toISOString() : date;
    const updatedFilters = { ...filters, [id]: dateValue };
    setFilters(updatedFilters);
  };

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton onClick={() => {}} tabIndex={9} />
        <DetailButton onClick={() => {}} tabIndex={10} />
        <SaveButton onClick={handleSave} tabIndex={11} />
      </div>
    );
  };
  return (
    <DialogBox isOpen={true} onClose={onClose} title="MCFW0619">
      <GlobalLoader showOnFullScreen loading={getClosingCashLoading || insertClosingCashLoading} />
      <ClosePettyCashUI
        renderActionItems={renderActionItems}
        paywayData={paywayData}
        handleDateChange={handleDateChange}
        handleChangeFilters={handleChangeFilters}
        filters={filters as ClosePettyCashFilterType}
      />
    </DialogBox>
  );
};

export default ClosePettyCash;
