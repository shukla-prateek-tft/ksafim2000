//MCFR-0695
import { useApiQuery, useAuth } from '@/hooks';
import SummaryPettyCashUI from './SummaryPettyCash.render';
import { adminServices } from '@/services';
import { ServiceFn, SortDirection } from '../type';
import { useEffect } from 'react';
import classes from './SummaryPettyCash.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel
} from '@/components/commonButtons';
import { Report695QueryDto, SmallCashRegisterSummaryResponse } from './type';
import { toast } from 'react-toastify';

const SummaryPettyCash = () => {
  const { user } = useAuth();
  const params = {
    BankCard: '32', // replace with real value
    Page: 1, // Default page number
    Size: 10, // Default size per page
    SortColumn: 'credit_Sum',
    SortType: 'Asc',
    SystemYear: Number(user?.instiYear),
    Institution: Number(user?.instiCode)
  };
  const {
    state: {
      data: smallCashRegisterSummaryResponse,
      error: smallCashRegisterSummaryError,
      isError: isSmallCashRegisterSummaryError
    },
    callService: getSmallCashRegisterSummaryService
  } = useApiQuery<SmallCashRegisterSummaryResponse>(
    adminServices.cash.getReport0695Details as ServiceFn
  );

  useEffect(() => {
    getSmallCashRegisterSummaryService({ ...params });
  }, []);

  useEffect(() => {
    if (smallCashRegisterSummaryError && isSmallCashRegisterSummaryError) {
      toast.error(smallCashRegisterSummaryError.message || '');
    }
  }, [isSmallCashRegisterSummaryError, smallCashRegisterSummaryError]);

  const handlePrint = () => {
    window.print();
  };

  const handleApiSorting = (columnId: keyof Report695QueryDto, direction: SortDirection) => {
    getSmallCashRegisterSummaryService({
      ...params,
      SortColumn: columnId,
      SortType: direction
    });
  };

  const renderActionItems = () => {
    return (
      <div className={classes.renderItem}>
        <BackToPageButton />
        <DetailButton />
        <PrintButton onClick={handlePrint} />
        <SearchButton />
        <PrintExcel />
      </div>
    );
  };

  return (
    <SummaryPettyCashUI
      data={smallCashRegisterSummaryResponse?.data || {}}
      renderActionItems={renderActionItems}
      handleApiSorting={handleApiSorting}
    />
  );
};

export default SummaryPettyCash;
