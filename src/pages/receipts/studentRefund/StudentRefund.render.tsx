import React from 'react';
import { ReportCells, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { StudentRefundColumn, StudentRefundSecondColumn } from './components';
import { useTranslation } from 'react-i18next';
import classes from './StudentRefund.module.scss';
import { Select } from '@/components';

interface StudentRefundProps {
  data: any[];
}

const StudentRefund: React.FC<StudentRefundProps> = ({ data }) => {
  const { t } = useTranslation('common');
  const selectItemData = [
    { label: t('extraBtn'), value: '1', disabled: true },
    { label: t('goToScreen'), value: '2', disabled: true },
    { label: t('changeYear'), value: '3', disabled: location.pathname !== '/' }
  ];

  return (
    <ReportPrint>
      <div className={classes.header1}>
        <ReportCells label={t('L_INST_FULLNAME')} />
        <ReportCells label={t('L_INSTI_CODE')} value={t('L_INSTI_CODE')} />
      </div>
      <div className={classes.header2}>
        <div className={classes.leftHeader2}>
          <ReportCells label={t('L_CITY_NAME')} />
          <ReportCells label={t('L_STREET')} />
          <ReportCells label={t('L_BUILD_NUM')} />
        </div>
        <div className={classes.rightHeader2}>
          <ReportCells label={t('L_PHONE')} value={t('L_PHONE')} />
          <ReportCells label={t('L_FAX')} value={t('L_FAX')} />
        </div>
      </div>
      <div className={classes.header3}>
        <div className={classes.part1Header3}>
          <ReportCells label={t('L_PAY_DATE')} />
          <ReportCells label={t('L_STUDY_YEAR')} value={t('L_STUDY_YEAR')} />
        </div>
        <div className={classes.part2Header3}>{t('T_MCFR0659')}</div>
        <div className={classes.part3Header3}>{t('TM_NUM')}</div>
        <div className={classes.part4Header3}>
          <ReportCells label={t('ORIGINAL_NAME')} />
          <ReportCells label={t('RETURN_NAME')} />
        </div>
      </div>
      <div className={classes.header4}>
        <ReportCells label={t('L_NAME')} />
        <ReportCells label={t('L_DESC')} />
      </div>
      <Table
        data={data}
        columns={StudentRefundColumn()}
        customRowRenderer={(key, row) => {
          switch (key) {
            case 'code1':
              return (
                <div className={classes.rowContainer}>
                  <div className={classes.student}>STUDENT</div>
                  <div className={classes.name}>NAME</div>
                </div>
              );

            case 'code2':
              return (
                <div className={classes.rowContainer}>
                  <Select
                    onChange={() => {}}
                    value={''}
                    placeholder={t('CL')}
                    className={classes.select}
                    options={selectItemData}
                    tabIndex={1}
                  />
                  <div className={classes.name}>{t('CL')}</div>
                </div>
              );
          }
        }}
        height="200px"
      />
      <div className={classes.l_total}>
        <ReportCells label={t('L_TOTAL')} value={t('1')} />
      </div>

      <Table data={data} columns={StudentRefundSecondColumn()} height="200px" />

      <div className={classes.setNumber}>
        <ReportCells label={t('L_SET_NUMBER')} value={t('L_SET_NUMBER')} />
        <ReportCells label={t('RETURNED')} />

        <ReportCells label={t('AMOUNT_ALL')} />
      </div>

      <div className={classes.textContent}>
        <div className={classes.leftText}>{t('L_MCFR0659_RECIEPT')}</div>
        <div className={classes.centerText}>{t('L_DATE')}</div>
        <div className={classes.rightText}>{t('L_MCFR0659_RECIEPT2')}</div>
      </div>

      <div>{t('L_SIGNIT')}</div>
    </ReportPrint>
  );
};

export default StudentRefund;
