import React from 'react';
import { ReportCells, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { DepositFormColumns } from './components';
import { useTranslation } from 'react-i18next';
import classes from './DepositForm.module.scss';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
import { DatePicker } from '@/ui/DatePicker';

interface DepositFormProps {
  data: Array<Record<string, string>>;
}

const DepositFormUI = ({ data }: DepositFormProps) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      header={
        <ReportHeader
          left={
            <>
              <Input type="text" label={t('L_INSTI_CODE')} orientation="horizontal" />
              <div className={classes.headerInputs}>
                <Input type="number" label={t('L_PHONE')} orientation="horizontal" maxLength={7}/>
                <Input type="number" label={t('L_FAX')} orientation="horizontal" maxLength={7}/>
              </div>
            </>
          }
          right={
            <>
              <ReportCells value={t('INST_FULLNAME')} />
              <div className={classes.headerInputs}>
                <ReportCells value={t('CITY_NAME')} />
                <ReportCells value={t('STREET')} />
                <ReportCells value={t('BUILDING')} />
              </div>
            </>
          }
          center={
            <div className={classes.headerInputs}>
              <div className={classes.headerInputs}>
                <ReportCells value={t('REPORT NAME')} />
                <ReportCells value={t('DEPOSIT_NUM')} />
              </div>
              <ReportCells value={t('DEPOSIT TYPE')} />
            </div>
          }
        />
      }
      footer={
        <>
          <div>{t('L_MCFR0685_BOTTOM_DESC')}</div>
          <ReportCells value={t('SET_NUMBER')} />
        </>
      }
    >
      <div className={classes.centerHeading}>
        <div>
          <Input label={t('L_BANK_BRANCH')} orientation="horizontal" type='number' maxLength={5}/>
          <Input label={t('L_BANK_ACCOUNT')} orientation="horizontal" type='number' maxLength={9}/>
          <Input label={t('L_BANK_DEPOSIT')} orientation="horizontal" type='number' maxLength={5}/>
          <Input label={t('L_BANK_NAME')} orientation="horizontal" pattern={REGEX.allCharacter} maxLength={60}/>
          <Input label={t('L_CONCENTRATION')} orientation="horizontal" type='number' maxLength={8}/>
        </div>
        <div>
          <div className={classes.headerInputs}>
            <ReportCells label={t('')} value={'FEE'} />
            <ReportCells label={t('')} value={'FEE_AMOUNT'} />
          </div>
          <DatePicker label={t('L_DATE')} value={'YEAR'} orientation="horizontal" />
        </div>
      </div>
      <Table height="40vh" data={data} columns={DepositFormColumns()} />
    </ReportPrint>
  );
};

export default DepositFormUI;
