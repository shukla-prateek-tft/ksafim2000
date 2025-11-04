import React from 'react';
import { ReportCells, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import {
  RegularReceiptAReturnedCheckFromABankColumn,
  RegularReceiptAReturnedCheckFromABankSecondColumn
} from './components';
import { useTranslation } from 'react-i18next';
import classes from './RegularReceiptAReturnedCheckFromABank.module.scss';

interface RegularReceiptAReturnedCheckFromABankProps {
  data: any[];
}

const RegularReceiptAReturnedCheckFromABank: React.FC<
  RegularReceiptAReturnedCheckFromABankProps
> = ({ data }) => {
  const { t } = useTranslation('common');

  return (
    <ReportPrint>
      <ReportCells label={t('Header1')} />
      <ReportCells label={t('Header2')} />
      <div className={classes.header1}>
        <ReportCells label={t('L_INST_FULLNAME')} />
        <ReportCells label={t('L_PHONE')} value={`${t('L_PHONE')}-${t('L_PHONE_PREFIX')}`} />
        <ReportCells
          label={t('L_ADDRESS')}
          value={`${t('L_CITY_NAME')}-${t('L_STREET')}-${t('L_BUILD_NUM')}`}
        />
      </div>
      <div className={classes.header2}>
        <ReportCells label={`${t('L_MCFR0624_INITIAL_VALUE')} ${t('L_INSTI_CODE')}`} />
        <ReportCells label={t('L_FAX')} value={`${t('L_FAX')}-${t('L_FAX')}`} />
        <ReportCells label={t('L_MAIL')} value={t('L_MAIL')} />
      </div>

      <div className={classes.header3}>
        <div className={classes.part1Header3}>
          <ReportCells label={t('L_RECIET_DATE')} />
          <ReportCells label={t('L_STUDY_YEAR')} value={t('L_STUDY_YEAR')} />
        </div>
        <div className={classes.part2Header3}>{t('REPORT_NAME')}</div>
        <div className={classes.part3Header3}>{t('L_RECIET_NUM')}</div>
        <div className={classes.part3Header3}>{t('L_REFUND')}</div>
        <div className={classes.part4Header3}>
          <ReportCells label={t('L_ORIGINAL')} />
          <ReportCells label={t('L_WORK_NUMB')} value={t('L_WORK_NUMB')} />
        </div>
      </div>

      <div className={classes.header4}>
        <div className={classes.leftHeader4}>
          <ReportCells label={t('L_MCFR0624_PARENT')} value={t('L_ID')} />
          <ReportCells label={t('L_MCFR0624_PARENT_NAME')} value={t('L_NAME')} />
        </div>
        <div className={classes.rightHeader4}>
          <ReportCells label={t('STUDENT_NAME')} />
        </div>
      </div>

      <div className={classes.header5}>
        <div className={classes.leftHeader5}>
          <ReportCells
            label={t('L_ADDRESS')}
            value={`${t('L_CITY_NAME')}-${t('L_BUILD_NUM')}-${t('L_STREET')}`}
          />
        </div>
        <div className={classes.rightHeader5}>
          <ReportCells label={t('L_ZIP')} value={t('L_ZIP')} />
          <ReportCells label={t('L_TELEPHONE')} value={`${t('L_TELEPHONE')}-${t('L_TELEPHONE')}`} />
        </div>
      </div>

      <div className={classes.header6}>
        <div className={classes.leftHeader6}>
          <ReportCells label={t('L_MAIL')} value={t('L_MAIL')} />
        </div>
        <div className={classes.rightHeader6}>
          <ReportCells label={t('L_MAIL_ADD')} value={t('L_MAIL_ADD')} />
        </div>
      </div>

      <Table data={data} columns={RegularReceiptAReturnedCheckFromABankColumn()} height="200px" />

      <div className={classes.center1}>
        <div className={classes.leftCenter1}>
          <ReportCells label={t('done_by')} />
        </div>
        <div className={classes.rightCenter1}>
          <ReportCells label={t('L_TOTAL')} value={t('L_TOTAL')} />
        </div>
      </div>
      <ReportCells label={t('L_RECIVED_FOR')} />

      <div className={classes.center2}>
        <div className={classes.leftCenter2}>
          <ReportCells label={t('L_DESC')} />
        </div>
        <div className={classes.rightCenter2}>
          <ReportCells label={t('RETURN')} />
        </div>
      </div>

      <Table
        data={data}
        columns={RegularReceiptAReturnedCheckFromABankSecondColumn()}
        customRowRenderer={(key, row) => {
          switch (key) {
            case 'code3':
              return (
                <div className={classes.rowContainer}>
                  <div>{t('CL')}</div>
                  <div>{t('CL')}</div>
                </div>
              );
          }
        }}
        height="200px"
      />

      <div className={classes.bottom1}>
        <div className={classes.leftBottom1}>
          <ReportCells label={`${t('L_CREDIT_TYPE')} ${t('L_CREDIT_TYPE')}`} />
        </div>
        <div className={classes.rightBottom1}>
          <ReportCells label={t('L_TOTAL')} value={t('1')} />
        </div>
      </div>

      <div className={classes.bottom2}>
        <div className={classes.leftBottom2}>
          <ReportCells label={t('L_CANCEL_ACT')} value={t('L_CANCEL_ACT')} />
        </div>
        <div className={classes.rightBottom2}>
          <ReportCells label={t('L_CANCEL_DATE')} value={t('L_DATE')} />
        </div>
      </div>

      <div className={classes.bottom3}>
        <div className={classes.leftBottom3}>
          <ReportCells label={t('L_BALANCE_DEBIT')} value={t('1')} />
        </div>
        <div className={classes.rightBottom3}>
          <ReportCells label={t('L_DIS_TO_PARENT')} value={t('L_DIS_TO_PARENT')} />
        </div>
      </div>
      <ReportCells label={t('USER_NAME')} />

      <div className={classes.textContent}>
        <div className={classes.leftTextContent}>{t('L_NAME')}</div>
        <div className={classes.rightTextContent}>{t('L_SIGNATURE')}</div>
      </div>

      <div className={classes.textContent2}>
        <div className={classes.leftTextContent2}>{t('L_RECEIPT_FOOTER')}</div>
        <div className={classes.rightTextContent2}>
          <ReportCells label={t('L_SET_NUMBER')} value={t('L_SET_NUMBER')} />
        </div>
      </div>

      <div className={classes.textContent3}>
        <ReportCells label={t('COMP_DOC_MES')} />
        <ReportCells label={t('PRINT_MES')} />
      </div>
    </ReportPrint>
  );
};

export default RegularReceiptAReturnedCheckFromABank;
