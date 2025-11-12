//MCFR-0695
import { useApiQuery, useAuth } from '@/hooks';
import SummaryPettyCashUI from './SummaryPettyCash.render';
import { adminServices } from '@/services';
import { ServiceFn, SortDirection } from '../type';
import { useEffect, useState } from 'react';
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
import { useTranslation } from 'react-i18next';

const SummaryPettyCash = () => {
  const { user } = useAuth();
  const { t } = useTranslation('common');
  const [summaryData, setSummaryData] = useState([]);
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
    console.log("data reterive");
    
    reteriveData();
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

  // let $$form_id = 'mcfs0695';
  // let $bank_card$ = '32'; // from $$select_items find key "bank_card"
  // let $$s1 = 'asdsadn'; // frpm $$acc_no find key "$bank_card$"
  // let query_params_header = `${t('L_BANK_ACC')}: ${$$s1}`;
  // let $total$ = 0;
  // let title = t('L_MCFR0695_H1');

  const reteriveData = async () => {
    const $$form_id = 'mcfs0695';
    const $bank_card$ = '32'; // from $$select_items find key "bank_card"
    const $$s1 = 'asdsadn'; // from $$acc_no find key "$bank_card$"
    const query_params_header = `${t('L_BANK_ACC')}: ${$$s1}`;

    // Running totals
    let total = 0;
    let totCredit = 0;
    let totDebit = 0;

    // store results into this state via setSummaryData
    const summaryItems = [];

    // --- 1st occurrence ---
    let title = t('L_MCFR0695_H1');

    // TODO: replace the following with an API call that returns a number
    // Example:
    // const credit_sum = await api.getCreditSum({ bankCard: $bank_card$, ... });
    const credit_sum = 0; // placeholder for selectdb (sum(credit)) from "t711" ...
    const debit_sum = 0; // placeholder if needed in this block

    totCredit += credit_sum;
    total = total + credit_sum - debit_sum;

    summaryItems.push({
      title,
      credit_sum,
      debit_sum,
      total_sum: total
    });

    // --- 2nd occurrence ---
    title = t('L_MCFR0695_H2');

    // TODO: replace with actual API call
    const debit_sum_2 = 0; // selectdb (sum(debit)) ... (is_temp = 1 | 2)
    const credit_sum_2 = 0; // maybe zero here as in original

    totDebit += debit_sum_2;
    total = total + credit_sum_2 - debit_sum_2;

    summaryItems.push({
      title,
      credit_sum: credit_sum_2,
      debit_sum: debit_sum_2,
      total_sum: total
    });

    // --- 3rd occurrence ---
    title = t('L_MCFR0695_H3');

    // TODO: replace with actual API call
    const debit_sum_3 = 0; // selectdb (sum(debit)) ... (is_temp = 0)
    const credit_sum_3 = 0;

    totDebit += debit_sum_3;
    total = total + credit_sum_3 - debit_sum_3;

    summaryItems.push({
      title,
      credit_sum: credit_sum_3,
      debit_sum: debit_sum_3,
      total_sum: total
    });

    // --- 4th occurrence: Totals ---
    title = t('L_TOTAL');

    // use totals computed above
    const credit_sum_total = totCredit;
    const debit_sum_total = totDebit;

    // update the final running total (if required)
    total = total + credit_sum_total - debit_sum_total;

    summaryItems.push({
      title,
      credit_sum: credit_sum_total,
      debit_sum: debit_sum_total,
      total_sum: total
    });

    // finally, push to state once (avoids repeated setState calls)
    setSummaryData(prev => [...prev, ...summaryItems]);
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
      data={summaryData || []}
      renderActionItems={renderActionItems}
      handleApiSorting={handleApiSorting}
    />
  );
};

export default SummaryPettyCash;
