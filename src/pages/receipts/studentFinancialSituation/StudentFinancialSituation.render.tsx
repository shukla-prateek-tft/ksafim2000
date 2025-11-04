import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { StudentFinancialSituationColumn, StudentFinancialTotalColumn } from './components';
import { useTranslation } from 'react-i18next';
import { attachMultipleClasses, getFormatedDate } from '@/utils/commonHelper';
import classes from './StudentFinancialSituation.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
const StudentFinancialSituationUI = ({ data }: any) => {
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
          <div>
            <span>{t('L_MCSR0137_BOTTOM_DESCRIPTION')}</span>
          </div>
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={t('L_ON')} value={'1'} />
              <ReportCells label={t('L_PAGE')} value={'1'} />
            </>
          }
          right={
            <>
              <ReportCells label={t('L_DATE')} value={'227017'} />
            </>
          }
          center={
            <>
              <div>1370 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
            </>
          }
        />
      }
      footer={
        <ReportFooter
          left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
          right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />}
        />
      }
    >
      <div className={classes.otherHeader}>
        <div className={attachMultipleClasses(classes.common)}>
          <Input
            label={t('L_ID')}
            orientation="horizontal"
            size="md"
            type="number"
            maxLength={10}
          />
          <div className={classes.inputAlign}>
            <Input
              label={t('L_NAME')}
              orientation="horizontal"
              size="md"
              pattern={REGEX.allCharacter}
              maxLength={24}
            />
            <Input orientation="horizontal" size="sm" pattern={REGEX.allCharacter} maxLength={20} />
          </div>
          <div className={classes.inputAlign}>
            <Input
              label={t('L_CLASS_CODE')}
              orientation="horizontal"
              size="md"
              pattern={REGEX.allCharacter}
              maxLength={20}
            />
            <Input size="sm" type="number" maxLength={2} />
          </div>
        </div>
      </div>
      <div className={classes.tableContainer}>
        <div className={classes.mainTable}>
          <Table height="40vh" data={data} columns={StudentFinancialSituationColumn()} />
        </div>
        <div className={classes.totalTable}>
          <Table height="40vh" data={data} columns={StudentFinancialTotalColumn()} />
        </div>
      </div>
      <div className={classes.footer}>
        <Input
          label={t('L_MCSR0137_BOTTOM_LABEL1')}
          orientation="horizontal"
          size="md"
          type="amount"
          maxLength={11}
          onChange={() => {}}
          onBlur={() => {}}
        />
        <Input
          label={t('L_MCSR0137_BOTTOM_LABEL2')}
          orientation="horizontal"
          size="md"
          type="amount"
          maxLength={11}
          onChange={() => {}}
          onBlur={() => {}}
        />
        <Input
          label={t('L_MCSR0137_BOTTOM_LABEL3')}
          orientation="horizontal"
          size="md"
          type="amount"
          maxLength={11}
          onChange={() => {}}
          onBlur={() => {}}
        />
      </div>
    </ReportPrint>
  );
};

export default StudentFinancialSituationUI;
