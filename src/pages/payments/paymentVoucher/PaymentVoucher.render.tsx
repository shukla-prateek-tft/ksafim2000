import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
import { PaymentVoucherFirstColumn, PaymentVoucherSecondColumn } from './components';
import { Input } from '@/ui/Input';
import classes from './PaymentVoucher.module.scss';

const data1 = [
  {
    code1: 'INVOICE',
    code2: 'ACTION',
    code3: 'DATE',
    code4: 'ORDER',
    code5: 'DESC_AUT',
    code6: 'SERVICE_NAME',
    code7: 'ACC_CARD_NAME',
    code8: 'OUTCOME'
  }
];
const data2 = [
  {
    code1: 'INVOICE',
    code2: 'ACTION',
    code3: 'DATE',
    code4: 'ORDER',
    code5: 'DESC_AUT',
    code6: 'SERVICE_NAME'
  }
];
const PaymentVoucherUI = () => {
  const { t } = useTranslation('common');

  return (
    <ReportPrint
      centerScroll={false}
      header={
        <ReportHeader
          left={
            <>
              <ReportCells value={t('L_INST_FULLNAME')} />
              <div className={classes.insititute}>
                <ReportCells value={t('L_CITY_NAME')} />
                <ReportCells value={t('L_STREET')} />
                <ReportCells value={t('L_BUILD_NUM')} />
              </div>
              <ReportCells label={t('L_DATE')} value={'PAY_DATE'} />
              <ReportCells label={t('L_STUDY_YEAR')} value={'L_STUDY_YEAR'} />

              <ReportCells value="CONTACT_M" />
              <ReportCells value="SUPP_NAME" />
              <div className={classes.insititute}>
                <ReportCells value="STREET" />
                <ReportCells value="BUILDING" />
              </div>
              <ReportCells value="CITY_NAME" />
              <ReportCells value="DESC_AUT" />
            </>
          }
          right={
            <>
              <ReportCells label={t('L_INSTI_CODE')} value={'INST_CODE'} />
              <div className={classes.insititute}>
                <div>
                  <span>{t('L_PHONE')}</span>
                  <span>{'PHONE_NUMBER'}</span>
                </div>
                <div>
                  <span>{t('L_PHONE')}</span>
                  <span>{'FAX_NUMBER'}</span>
                </div>
              </div>
              <ReportCells value="ORIGINAL_NAME" />
              <ReportCells value="RETURN_NAME" />
              <ReportCells label={t('L_SUPP_NUM')} value={'SUPPLIER'} />
              <ReportCells label={t('L_MAIL')} value={'MAIL'} />
            </>
          }
          center={
            <>
              <span>REPORT_NAME ACT_NO</span>
            </>
          }
        />
      }
      footer={
        <ReportFooter
          left={
            <>
              <ReportCells label={t('L_TAX_DEDUCT')} value={'TAX_DETECT'} />
              <ReportCells label={t('L_VAT')} value={'VAT'} />
              <ReportCells label={t('L_SSEC')} value={'SSEC'} />
              <ReportCells label={t('L_SIGNIT')} value={'RETURNED'} />
              <ReportCells value="PAYMENT_SIGN" />
              <ReportCells value="ORDER_LINE" />
            </>
          }
          right={
            <>
              <ReportCells label={t('L_TOTAL')} value={'AMOUNT_AUT'} />
              <ReportCells label={t('L_TOTAL_INVOICES')} value={'NO_GEFEN'} />
              <ReportCells label={t('L_TOT_GEF_INV')} value={'GEFEN_AMOUNT'} />
              <ReportCells label={t('L_SET_NUMBER')} value={'L_SET_NUMBER'} />
              <ReportCells label={t('L_STOCK_NUM')} value={'REFERENCE'} />
            </>
          }
        />
      }
    >
      <Table height="45vh" columns={PaymentVoucherFirstColumn()} data={data1} />
      <Input label={t('L_TOTAL')} size="md" value={'TOT_1'} orientation="horizontal" />
      <Table columns={PaymentVoucherSecondColumn()} data={data2} />
    </ReportPrint>
  );
};

export default PaymentVoucherUI;
