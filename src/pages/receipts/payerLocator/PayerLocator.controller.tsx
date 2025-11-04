//MCFL-0621
import React from 'react';
import { useEffect, useState } from 'react';
import PayerLocatorUI from './PayerLocator.render';
import { GlobalLoader } from '@/components';
import { ServiceFn, SortDirection } from '../type';
import { useApiQuery, useAuth } from '@/hooks';
import { GetFilterScreenMCFL0621ParamsType } from '@/services/payment/types';
import { adminServices } from '@/services';
import { StudyYearResponse } from './types';
import { GetClassCodeResponseType } from '../locatingStudents/types';

const defaultFilterValues = {
  PayerType: 1,
  FamilyName: '',
  PrivateName: '',
  Id: undefined,
  ClassCode: undefined,
  ClassNum: undefined,
  StudyYear: undefined,
  Page: 1,
  Size: 15,
  SortColumn: '',
  SortType: SortDirection.Asc,
  SystemYear: '',
  Institution: ''
};

const PayerLocator = () => {
  const [filters, setFilters] = useState<GetFilterScreenMCFL0621ParamsType>(defaultFilterValues);

  const { user } = useAuth();

  const apiparams = {
    ...filters,
    SystemYear: Number(user?.instiYear),
    Institution: Number(user?.instiCode)
  };

  //get filters data api
  const {
    state: {
      loading: isGetFilterScreenMCFL0621Loading,
      data: getFilterScreenMCFL0621Response,
      isSuccess: isGetFilterScreenMCFL0621Success,
      isError: isGetFilterScreenMCFL0621Error,
      error: getFilterScreenMCFL0621Error
    },
    callService: getFilterScreenMCFL0621Service
  } = useApiQuery<any>(adminServices.payments.getFilterScreenMCFL0621 as ServiceFn);

  //get study year List api
  const {
    state: { data: getStudyYearResponse },
    callService: getStudyYearService
  } = useApiQuery<StudyYearResponse>(adminServices.mapping.getStudyYear as ServiceFn);

   const {
      state: { data: getClassCodeResponse },
      callService: getClassCodeService
    } = useApiQuery<GetClassCodeResponseType>(adminServices.mapping.getClassCode as ServiceFn);

  useEffect(() => {
    getStudyYearService();
    getClassCodeService();
  }, []);

  const handleChangeFilter = (newValue: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newValue }));
  };
  const handleShow = () => {
    getFilterScreenMCFL0621Service(apiparams);
  };
  const handleClear = () => {
    setFilters(defaultFilterValues);
  };

  const studyYearOptions =
    getStudyYearResponse?.data.map(item => ({
      label: item.jewish_Year, 
      value: item.year_Aut 
    })) || [];

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <PayerLocatorUI
        filters={filters}
        handleChangeFilter={handleChangeFilter}
        data={getFilterScreenMCFL0621Response?.data || []}
        studyYearOptions={studyYearOptions}
        handleShow={handleShow}
        handleClear={handleClear}
        classCodeData={getClassCodeResponse?.data}
      />
    </>
  );
};

export default PayerLocator;
