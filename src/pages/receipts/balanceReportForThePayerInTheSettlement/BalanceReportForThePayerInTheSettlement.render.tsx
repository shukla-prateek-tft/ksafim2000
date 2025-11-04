import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './BalanceReportForThePayerInTheSettlement.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { BalanceReportForThePayerInTheSettlementColumns } from './components/Columns';
import { Input } from '@/ui/Input';
import { Button } from '@/components';
import { REGEX } from '@/constants/appConstant';

interface BalanceReportForThePayerInTheSettlementProps {
  data: Array<Record<string, string>>;
}

const BalanceReportForThePayerInTheSettlementUI = ({
  data
}: BalanceReportForThePayerInTheSettlementProps) => {
  const { t } = useTranslation('common');
  const handlePrint = () => {
    window.print();
  };
  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.renderItem}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton onClick={handlePrint} />
          <SearchButton />
          <Button title={t('PB_1')} />
          <PrintExcel />
        </div>
      }
      header={
        <ReportHeader
          right={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          center={
            <>
              <div>{t('REPORT_NAME')}</div>
              <div>{t('QUERY_PARAMS')}</div>
            </>
          }
        />
      }
      footer={<ReportFooter right={<ReportCells label={t('L_PRINTED_BY')} value={'MOHIT'} />} />}
    >
      <div className={classes.mainContainer}>
        <div>
          <div className={classes.inputContainer}>
            <Input
              orientation="horizontal"
              label={t('L_ID')}
              id="text1"
              checked={false}
              onChange={() => {}}
              type="number"
              maxLength={10}
            />
            <Input
              orientation="horizontal"
              label={t('L_NAME')}
              id="text1"
              checked={false}
              onChange={() => {}}
              type="text"
              pattern={REGEX.allCharacter}
              maxLength={24}
            />
            <Input
              orientation="horizontal"
              id="text1"
              checked={false}
              onChange={() => {}}
              type="text"
              pattern={REGEX.allCharacter}
              maxLength={20}
            />
            <Input
              orientation="horizontal"
              label={t('L_ADDRESS')}
              id="text1"
              checked={false}
              onChange={() => {}}
              type="text"
              pattern={REGEX.allCharacter}
              maxLength={20}
            />
            <Input
              orientation="horizontal"
              id="text1"
              checked={false}
              onChange={() => {}}
              type="text"
              maxLength={17}
            />
            <Input
              orientation="horizontal"
              id="text1"
              checked={false}
              onChange={() => {}}
              type="text"
              maxLength={5}
            />
            <Input
              orientation="horizontal"
              label={t('L_PHONE')}
              id="text1"
              checked={false}
              onChange={() => {}}
              type="number"
              maxLength={10}
            />
            <Input
              orientation="horizontal"
              id="text1"
              checked={false}
              onChange={() => {}}
              type="text"
              pattern={REGEX.allCharacter}
              maxLength={5}
            />
          </div>
        </div>
        <Table data={data} columns={BalanceReportForThePayerInTheSettlementColumns()} />
        <div>
          <legend>{t('L_TOTAL')}</legend>
          <div className={classes.rowContainer}>
            <Input
              orientation="horizontal"
              label={t('L_TOTAL')}
              id="text1"
              checked={false}
              onChange={() => {}}
              type="amount"
              maxLength={11}
              onBlur={() => {}}
            />
            <Input
              orientation="horizontal"
              id="text1"
              checked={false}
              onChange={() => {}}
              type="amount"
              maxLength={11}
              onBlur={() => {}}
            />
            <Input
              orientation="horizontal"
              id="text1"
              checked={false}
              onChange={() => {}}
              type="amount"
              maxLength={11}
              onBlur={() => {}}
            />
          </div>
        </div>
      </div>
    </ReportPrint>
  );
};

export default BalanceReportForThePayerInTheSettlementUI;
