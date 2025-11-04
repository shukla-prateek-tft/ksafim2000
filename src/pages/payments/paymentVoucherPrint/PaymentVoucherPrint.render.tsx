import React from 'react';
import { ReportCells, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { useTranslation } from 'react-i18next';
import classes from './PaymentVoucherPrint.module.scss';
import {
  PaymentVoucherPrintFirstColumn,
  PaymentVoucherPrintSecondColumn,
  PaymentVoucherPrintThirdColumn
} from './components';
import { Input } from '@/ui/Input';

interface PaymentVoucherPrintProps {
  data: any[];
}

const PaymentVoucherPrintUI = ({ data }: PaymentVoucherPrintProps) => {
  const { t } = useTranslation('common');
  const handlePrint = () => {
    window.print();
  };
  return (
    <ReportPrint>
      <div className={classes.header1}>
        <ReportCells label={t('L_INST_FULLNAME')} />
        <ReportCells label={t('L_INSTI_CODE')} value={t('L_INSTI_CODE')} />
      </div>
      <div className={classes.header2}>
        <ReportCells value={`${t('L_CITY_NAME')}-${t('L_STREET')}-${t('L_BUILD_NUM')}`} />
        <Input
          orientation="horizontal"
          size="md"
          type="number"
          maxLength={7}
          label={t('L_PHONE')}
          value={`${t('L_PHONE')}`}
        />
        <Input
          orientation="horizontal"
          size="md"
          type="number"
          maxLength={7}
          label={t('L_FAX')}
          value={t('L_FAX')}
        />
      </div>

      <div className={classes.header3}>
        <div className={classes.part1Header3}>
          <ReportCells label={t('L_DATE')} value={t('L_PAY_DATE')} />
          <ReportCells label={t('L_STUDY_YEAR')} value={t('HEBRW')} />
        </div>
        <div className={classes.part2Header3}>{t('REPORT_NAME')}</div>
        <div className={classes.part3Header3}>{t('ACT_NO')}</div>
        <div className={classes.part4Header3}>
          <ReportCells label={t('L_ORIGINAL')} />
          <ReportCells label={t('L_RETURN')} />
        </div>
      </div>

      <div className={classes.header4}>
        <div className={classes.leftHeader4}>
          <ReportCells label={t('CONTACT')} />
          <ReportCells label={t('SUPP_NAME')} />
          <ReportCells label={t('STREET')} />
          <ReportCells label={t('CITY')} />
        </div>
        <div className={classes.rightHeader4}>
          <Input
            orientation="horizontal"
            size="md"
            maxLength={10}
            type="number"
            label={t('L_SUPP_NUM')}
            value={t('L_SUPP_NO')}
          />
        </div>
      </div>

      <div className={classes.header5}>
        <div className={classes.leftHeader5}>
          <ReportCells label={t('L_DESC')} />
        </div>
        <div className={classes.rightHeader5}>
          <Input
            orientation="horizontal"
            size="md"
            maxLength={10}
            type="number"
            label={t('L_DOCUMENT')}
            value={t('L_DOCUMENT')}
          />
        </div>
      </div>

      <Table data={data} columns={PaymentVoucherPrintFirstColumn()} height="200px" />

      <div className={classes.total}>
        <Input
          orientation="horizontal"
          size="md"
          maxLength={11}
          type="amount"
          label={t('L_TOTAL')}
          value={t('L_MONEY_AMNT')}
        />
      </div>

      <Table data={data} columns={PaymentVoucherPrintSecondColumn()} height="200px" />

      <Table data={data} columns={PaymentVoucherPrintThirdColumn()} height="200px" />

      <div className={classes.bottom1}>
        <div className={classes.leftBottom1}>
          <Input
            orientation="horizontal"
            size="md"
            maxLength={11}
            type="amount"
            label={t('L_TAX_DEDUCT')}
            value={t('L_TAX_DEDUCT')}
          />
          <Input
            orientation="horizontal"
            size="md"
            maxLength={11}
            type="amount"
            label={t('L_VAT')}
            value={t('L_VAT')}
          />
          <Input
            orientation="horizontal"
            size="md"
            maxLength={11}
            type="amount"
            label={t('L_SSEC')}
            value={t('L_SSEC')}
          />
        </div>
        <div className={classes.rightBottom1}>
          <Input
            orientation="horizontal"
            size="md"
            type="amount"
            maxLength={13}
            label={t('L_TOTAL')}
          />
        </div>
      </div>

      <div className={classes.bottom2}>
        <div className={classes.leftTextContent2}>{t('L_SIGNIT')}</div>
        <div className={classes.rightTextContent2}>
          <Input
            orientation="horizontal"
            size="md"
            type="number"
            maxLength={6}
            label={t('L_SET_NUMBER')}
            value={t('L_SET_NUMBER')}
          />
          <Input
            orientation="horizontal"
            size="md"
            maxLength={40}
            label={t('L_STOCK_NUM')}
            value={t('L_SET_REFFERANCE')}
          />
        </div>
      </div>

      <div className={classes.lastContent}>
        <div className={classes.leftTextContent3}>
          <ReportCells label={t('PAYMENT_SIGN')} />
          <ReportCells label={t('ORDER_LINE')} />
        </div>
        <div>
          <ReportCells label={t('RETURNED')} />
        </div>
      </div>
    </ReportPrint>
  );
};

export default PaymentVoucherPrintUI;
