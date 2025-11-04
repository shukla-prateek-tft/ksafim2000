//MCFR-1409
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { Input } from '@/ui/Input';
import React, { useEffect, useState } from 'react';
import { ServiceFn } from '../type';
import classes from './PrintParentDetailsReport.module.scss';
import PrintParentDetailsReportUI from './PrintParentDetailsReport.render';
import {
  PaymentDetailsDto,
  PaymentDetailsReportByStudentResponse,
  PrintParentDetailsReportFilterDto
} from './type';

const PrintParentDetailsReport: React.FC = () => {
  const { user } = useAuth();
  const [filters, setFilters] = useState<PrintParentDetailsReportFilterDto>({
    F_Class_Code: 1,
    F_Class_Num: 1,
    T_Class_Code: 1,
    T_Class_Num: 1,
    No_Id_Par: false,
    Double_Pay: null,
    No_Pay: null,
    Page: 1,
    Size: 10,
    SortColumn: '',
    SortType: '',
    SystemYear: user?.instiYear,
    Institution: user?.instiCode
  });
  const {
    state: { data: PaymentDetailsReportByStudentData },
    callService: GetPaymentDetailsReportByStudent,
    error: PaymentDetailsReportByStudentError,
    isError: isPaymentDetailsReportByStudentError
  }: any = useApiQuery<PaymentDetailsReportByStudentResponse>(
    adminServices.student.GetPaymentDetailsReportByStudent as ServiceFn
  );

  useEffect(() => {
    GetPaymentDetailsReportByStudent(filters);
  }, []);

  const handleSearch = () => {
    GetPaymentDetailsReportByStudent(filters);
  };

  const handleSorting = (key: string, direction: string) => {
    const params = {
      ...filters,
      SortColumn: key,
      SortType: direction
    };
    GetPaymentDetailsReportByStudent(params);
  };

  const renderParentStudentRows = (
    father: React.ReactNode,
    student: React.ReactNode,
    mother: React.ReactNode
  ) => (
    <div className={classes['details-container']}>
      <div>{father ?? '\u00A0'}</div>
      <div>{student ?? '\u00A0'}</div>
      <div>{mother ?? '\u00A0'}</div>
    </div>
  );

  const customRowRender = (key: string, row: PaymentDetailsDto, index: number) => {
    switch (key) {
      case 'Num':
        return renderParentStudentRows(null, index + 1, null);
      case 'PAY':
        return renderParentStudentRows(
          <Input type="checkbox" checked={row['fatherPaySchool'] === true} />,
          null,
          <Input type="checkbox" checked={row['motherPaySchool'] === true} />
        );
      case 'ID_PARENT':
        return renderParentStudentRows(row['fatherId'], null, row['motherId']);
      case 'NAME_PARENT':
        return renderParentStudentRows(
          `${row['fatherFamilyName'] || ''} ${row['fatherPrivateName'] || ''}`.trim() || null,
          null,
          `${row['motherFamilyName'] || ''} ${row['motherPrivateName'] || ''}`.trim() || null
        );
      case 'PHONE_PARENT':
        return renderParentStudentRows(
          `${row['fatherPhonePrefix'] || ''} ${row['fatherPhone'] || ''}`.trim() || null,
          null,
          `${row['motherPhonePrefix'] || ''} ${row['motherPhone'] || ''}`.trim() || null
        );
      case 'MISPAR_NAYAD_PARENT':
        return renderParentStudentRows(
          `${row['fatherKidometNayad1'] || ''} ${row['fatherMisparNayad1'] || ''}`.trim() || null,
          null,
          `${row['motherKidometNayad1'] || ''} ${row['motherMisparNayad1'] || ''}`.trim() || null
        );
      case 'EMAIL_PARENT':
        return renderParentStudentRows(row['fatherEmail'], null, row['motherEmail']);
      case 'STUD_ID':
        return renderParentStudentRows(null, row['studentId'], null);
      case 'STUD_NAME':
        return renderParentStudentRows(
          null,
          `${row['studentFamilyName'] || ''} ${row['studentPrivateName'] || ''}`.trim() || null,
          null
        );
      case 'CITY':
        return renderParentStudentRows(null, row['studentCityName'], null);
      case 'CLASS':
        return renderParentStudentRows(
          null,
          `${row['studentClassName'] || ''} ${row['studentClassNum'] || ''}`.trim() || null,
          null
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (isPaymentDetailsReportByStudentError && PaymentDetailsReportByStudentError) {
      console.error(PaymentDetailsReportByStudentError);
    }
  }, [isPaymentDetailsReportByStudentError, PaymentDetailsReportByStudentError]);

  return (
    <PrintParentDetailsReportUI
      data={PaymentDetailsReportByStudentData?.data}
      customRowRender={customRowRender}
      filters={filters}
      setFilters={setFilters}
      handleSearch={handleSearch}
      handleSort={handleSorting}
    />
  );
};

export default PrintParentDetailsReport;
