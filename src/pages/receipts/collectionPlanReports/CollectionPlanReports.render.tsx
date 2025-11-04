import React from 'react';
import { ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { CollectionPlanReportsColumns } from './components';
import { useTranslation } from 'react-i18next';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import classes from './CollectionPlanReports.module.scss';
import { ReportCells, ReportFooter, ReportHeader } from '@/components/printScreen';
import { Input } from '@/ui/Input';
import { Checkbox } from '@/components';
import { REGEX } from '@/constants/appConstant';
// import { Checkbox, Input } from '@/components';

const data = [
  {
    code1: 'TYPE_NAME',
    code2: 'SUBJECT_NAME',
    code3: 'CARD_NAME',
    code4: 'AMOUNT_DUE',
    code5: 'AMOUNT_PAID',
    code6: 'SUM_AMOUNT'
  }
];

const CollectionPlanReportsUI = () => {
  const { t } = useTranslation('common');

  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.actionItems}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton />
          <SearchButton />
          <PrintExcel />
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_PAGE')} value="PAGE_NUMBER" />
              <ReportCells label={t('L_HEB_DATE')} value="heb name" />
              <ReportCells label={t('L_DATE')} value={'10'} />
            </>
          }
          right={<></>}
          center={
            <>
              <div>MCFR-0646 {t('REPORT_NAME')} </div>
            </>
          }
        />
      }
      footer={
        <ReportFooter
          left={<ReportCells label={''} value={t('PRINT_TRAILER')} />}
          right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek & Mohit'} />}
        />
      }
    >
      <div className={classes.inputItems}>
        <div className={classes.firstInputItem}>
          <Input
            size="md"
            label={t('L_CHARGE')}
            orientation="horizontal"
            value={'CHARAC'}
            type="number"
            maxLength={3}
          />
          <Input
            size="md"
            label={t('L_DESC')}
            orientation="horizontal"
            value={'DESC'}
            pattern={REGEX.allCharacter}
            maxLength={16}
          />
          <Checkbox label={t('L_AUTO_SET')} checked={true} />
        </div>
        <div className={classes.nextInputItem}>
          <Checkbox label={t('L_OUTER_STUDENT')} checked={true} />
          <div>
            <Input
              size="md"
              label={t('L_FROM_CLASS')}
              orientation="horizontal"
              value={'TO DO '}
              pattern={REGEX.allCharacter}
              maxLength={20}
            />
            <Input size="sm" type="number" maxLength={2} />
          </div>
          <div>
            <Input
              size="md"
              label={t('L_TO_CLASS')}
              orientation="horizontal"
              value={'TO DO'}
              pattern={REGEX.allCharacter}
              maxLength={20}
            />
            <Input size="sm" type="number" maxLength={2} />
          </div>
          <Input
            size="md"
            label={t('L_MAJOR')}
            orientation="horizontal"
            value={'MAJOR_NAME'}
            pattern={REGEX.allCharacter}
            maxLength={40}
          />
        </div>
        <div className={classes.nextInputItem}>
          <Checkbox label={t('L_LONG_DAY')} checked={true} />
          <Checkbox label={t('L_TRANSPORT')} checked={true} />
          <Input
            size="md"
            label={t('L_STUDY_GROUP')}
            orientation="horizontal"
            value={'TO DO'}
            type="number"
            maxLength={18}
          />
          <Input
            size="md"
            label={t('L_ALFA_CHOICE1')}
            orientation="horizontal"
            value={'TO DO'}
            pattern={REGEX.allCharacter}
            maxLength={20}
          />
        </div>
      </div>
      <Table height="45vh" data={data} columns={CollectionPlanReportsColumns()} />
      <Input
        size="md"
        label={t('L_TOT')}
        orientation="horizontal"
        value={'TOT_1'}
        type="amount"
        maxLength={11}
        onChange={() => {}}
        onBlur={() => {}}
      />
    </ReportPrint>
  );
};

export default CollectionPlanReportsUI;
