import React from 'react';
import { ReportCells, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ExpenseVoucherWithItemsColumn, ExpenseVoucherWithItemsSecondColumn } from './components';
import { useTranslation } from 'react-i18next';
import classes from './ExpenseVoucherWithItems.module.scss';

interface ExpenseVoucherWithItemsProps {
  data: any[];
}

const ExpenseVoucherWithItems: React.FC<ExpenseVoucherWithItemsProps> = ({ data }) => {
  const { t } = useTranslation('common');

  return (
    <ReportPrint>
      <div className={classes.header1}>
        <ReportCells label={t('L_INST_FULLNAME')} />
        <ReportCells label={t('L_INSTI_CODE')} value={t('L_INSTI_CODE')} />
      </div>

      <div className={classes.header2}>
        <div className={classes.left}>
          <ReportCells label={`${t('L_CITY_NAME')} ${t('L_STREET')} ${t('L_BUILD_NUM')}`} />
        </div>
        <div className={classes.right}>
          <ReportCells label={t('L_PHONE')} value={t('L_PHONE')} />
          <ReportCells label={t('L_FAX')} value={t('L_FAX')} />
        </div>
      </div>

      <div className={classes.header3}>
        <div className={classes.left}>
          <ReportCells label={t('L_DATE')} value={t('L_PAY_DATE')} />
          <ReportCells label={t('L_STUDY_YEAR')} value={t('HEBREW_YEAR')} />
        </div>
        <div className={classes.leftCenter}>{t('L_EXPENSE')}</div>
        <div className={classes.rightCenter}>{t('L_ACT_NO1')}</div>
        <div className={classes.right}>
          <ReportCells label={t('ORIGINAL_NAME')} />
          <ReportCells label={t('V_DELETED')} />
        </div>
      </div>

      <div className={classes.header4}>
        <ReportCells label={t('CONTACT_MAN_NAME')} />
        <div className={classes.left}>
          <ReportCells label={t('SUPP_NAME')} />
          <ReportCells label={t('L_SUPP_NUM')} value={t('SUPP_NAME')} />
        </div>
        <ReportCells label={`${t('L_STREET')} ${t('L_BUILD_NUM')}`} />
        <ReportCells label={t('L_CITY_NAME')} />
      </div>

      <div className={classes.header5}>
        <ReportCells label={t('L_DESC')} />
        <ReportCells label={t('L_DOCUMENT')} />
      </div>

      <Table data={data} columns={ExpenseVoucherWithItemsColumn()} height="200px" />
      <div className={classes.center}></div>

      <Table data={data} columns={ExpenseVoucherWithItemsSecondColumn()} height="200px" />

      <div className={classes.bottom1}>
        <div className={classes.left}>
          <ReportCells label={t('L_TAX_DEDUCT')} value={t('L_TAX_DEDUCT')} />
          <ReportCells label={t('L_VAT')} value={t('L_VAT')} />
          <ReportCells label={t('L_SSEC')} value={t('L_SSEC')} />
          <ReportCells label={t('L_TOTAL')} value={t('L_TOTAL')} />
        </div>
        <div className={classes.right}>
          <ReportCells label={t('L_MONEY_AMNT')} />
          <ReportCells label={t('L_SET_NUMBER')} value={t('L_SET_NUMBER')} />
        </div>
      </div>
      <ReportCells label={t('L_SIGNIT')} value={t('RETURNED')} />
      <ReportCells label={t('L_SIGN_PARENTS')} />
    </ReportPrint>
  );
};

export default ExpenseVoucherWithItems;
