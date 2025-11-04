//MCFR-1278
import React from 'react';
import { useApiQuery, useAuth } from '@/hooks';
import ParentDetailsReportByStudentsUI from './ParentDetailsReportByStudents.render';
import { adminServices } from '@/services';
import { CustomRowRenderType, ServiceFn } from '../type';
import { getParentDetailsReportParamsType } from '../bankTransferFormReport/type';
import { useEffect } from 'react';
import { GetParentDetailsReportResponse } from './types';
import { Input } from '@/ui/Input';
import { Flex } from '@/ui/Flex/Flex';
const ParentDetailsReportByStudents = () => {
  const { user } = useAuth();
  const {
    state: {
      data: bankTransferFormReportResponse,
      error: bankTransferFormReportError,
      isError: isBankTransferFormReportError
    },
    callService: getBankTransferFormReportService
  }: any = useApiQuery<GetParentDetailsReportResponse>(
    adminServices.payments.GetParentDetailReport as ServiceFn
  );
  useEffect(() => {
    const params: getParentDetailsReportParamsType = {
      Page: 1,
      Size: 10,
      SortColumn: '',
      SortType: '',
      f_class_code: null,
      t_class_code: null,
      f_class_num: null,
      t_class_num: null,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    };
    getBankTransferFormReportService(params);
  }, []);
  const DisplayItems = (value1: string, value2: string) => {
    return (
      <Flex gap={5} flexDirection="row">
        <Flex>{value1 || ' '}</Flex>|<Flex>{value2 || ' '}</Flex>
      </Flex>
    );
  };
  const customRowRender: CustomRowRenderType<any> = (key, row, index = 0) => {
    switch (key) {
      case 'index':
        return index + 1;
      case 'Student_Family_Name':
        return DisplayItems(row['Student_Family_Name'] || '', row['Student_Private_Name'] || '');
      case 'Father_Family_Name':
        return DisplayItems(row['Father_Family_Name'], row['Father_Private_Name']);
      case 'Father_Phone':
        return DisplayItems(row['Father_Phone_prefix'], row['Father_Phone']);
      case 'Father_Mispar_Nayad1':
        return DisplayItems(row['Father_Mispar_Nayad1'], row['Father_Kidomet_Nayad1']);
      case 'Pay':
        return <Input type="checkbox" checked={row['Pay']} />;
      case 'Mother_Family_Name':
        return DisplayItems(row['Mother_Family_Name'], row['Mother_Private_Name']);

      case 'Mother_Phone':
        return DisplayItems(row['Mother_Phone_prefix'], row['Mother_Phone']);

      case 'Mother_Mispar_Nayad1':
        return DisplayItems(row['Mother_Mispar_Nayad1'], row['Mother_Kidomet_Nayad1']);
    }
  };
  useEffect(() => {
    if (isBankTransferFormReportError && bankTransferFormReportError) {
      console.error(bankTransferFormReportError);
    }
  }, [isBankTransferFormReportError, bankTransferFormReportError]);

  return (
    <ParentDetailsReportByStudentsUI
      data={bankTransferFormReportResponse?.data}
      customRowRender={customRowRender}
    />
  );
};

export default ParentDetailsReportByStudents;
