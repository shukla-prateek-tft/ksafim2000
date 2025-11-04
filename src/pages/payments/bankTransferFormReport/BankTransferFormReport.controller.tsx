//MCFR-1308
import { useApiQuery, useAuth } from '@/hooks';
import BankTransferFormReportUI from './BankTransferFormReport.render';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { GetBankTransferFormReportResponseInterface } from './type';
import { useEffect, useState } from 'react';
import { showToastErrors, buildQueryParams, dowloadHelpDocument } from '@/utils/commonHelper';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { exportData } from '@/hooks/api';
import classes from './BankTransferFormReport.module.scss';
import { useNavigate } from 'react-router-dom';

const BankTransferFormReport = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    state: {
      data: bankTransferFormReportResponse,
      error: bankTransferFormReportError,
      isError: isBankTransferFormReportError
    },
    callService: getBankTransferFormReportService
  }: GetBankTransferFormReportResponseInterface = useApiQuery(
    adminServices.payments.GetBankTransferFormReport1308 as ServiceFn
  );

  const [filters, setFilters] = useState({
    Act_No: '',
    Pay_Way: 12 ,
    F_Date: '',
    T_Date: '',
    F_Rel_Date: '',
    T_Rel_Date: '',
    SuppNum: 49848179,
  });

  const apiQueries = {
    Act_No: filters.Act_No,
    Pay_Way: Number(filters.Pay_Way || 12),
    F_Date: filters.F_Date || '',
    T_Date: filters.T_Date || '',
    F_Rel_Date: filters.F_Rel_Date || '',
    T_Rel_Date: filters.T_Rel_Date || '',
    SuppNum: Number(filters.SuppNum) || 49848179,
    Page: 1,
    Size: 50,
    SortColumn: '',
    SortType: 'Asc',
    SystemYear: Number(user?.instiYear),
    Institution: Number(user?.instiCode)
  };

  useEffect(() => {
    getBankTransferFormReportService(apiQueries);
  }, []);

  useEffect(() => {
    if (isBankTransferFormReportError && bankTransferFormReportError) {
      showToastErrors(bankTransferFormReportError);
    }
  }, [isBankTransferFormReportError, bankTransferFormReportError]);

  const handlePrint = () => {
    window.print();
  };
  const handleBackToPage = () => {
    navigate(-1);
  }
  const handleDowloadExcel = () => {
    const queryString = buildQueryParams(apiQueries);
    exportData(
      `ExportData/export/excel/mcfr1308?${queryString}`,
      user?.token,
      null,
      `MCFR1308_${user?.instiCode}.xlsx`,
      'GET'
    );
  };

  const handleRetrieve = () => {
    getBankTransferFormReportService(apiQueries);
  };

  const handleChangeFilter = (patch: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...patch }));
  };

  const handleClear = () => {
    setFilters({
      Act_No: '',
      Pay_Way: 12,
      F_Date: '',
      T_Date: '',
      F_Rel_Date: '',
      T_Rel_Date: '',
      SuppNum: 49848179
    });
  };

  const renderActionItems = () => {
    return (
      <div className={classes.actionItem}>
        <BackToPageButton onClick={handleBackToPage} />
        <DetailButton onClick={dowloadHelpDocument}/>
        <PrintButton onClick={handlePrint} />
        <PrintExcel onClick={handleDowloadExcel} />
        <SearchButton />
      </div>
    );
  };

  return (
    <BankTransferFormReportUI
      data={bankTransferFormReportResponse?.data}
      renderActionItems={renderActionItems}
      filters={filters}
      onChangeFilter={handleChangeFilter}
      onRetrieve={handleRetrieve}
      onClear={handleClear}
    />
  );
};

export default BankTransferFormReport;
