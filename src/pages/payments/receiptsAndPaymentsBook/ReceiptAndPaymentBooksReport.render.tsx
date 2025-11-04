import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ReceiptAndPaymentBooksReportColumn } from './Components';
import { useTranslation } from 'react-i18next';
import classes from './ReceiptAndPaymentBooksReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel,
  Button
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { GroupRadio } from '@/ui/GroupRadio';
import { Select } from '@/ui/Select';
import { Input } from '@/ui/Input';
import { DatePicker } from '@/ui/DatePicker';
import { ReceiptAndPaymentBooksReportProps } from './type';
import { getFormatedDate } from '@/utils/commonHelper';
import { REGEX } from '@/constants/appConstant';
const ReceiptAndPaymentBooksReportUI = ({
  data,
  filters,
  onChangeFilter,
  onRetrieve,
  onClear,
  customRowRender,
  paywayData = []
}: ReceiptAndPaymentBooksReportProps) => {
  const { t } = useTranslation('common');
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Card hideOnPrint>
        <div className={classes.container}>
          <div className={classes.col1}>
            <div className={classes.groupContainer}>
              <GroupRadio
                options={[
                  { label: t('V_CREDIT'), value: 1 },
                  { label: t('V_DEBIT'), value: 2 }
                ]}
                name="group1"
                selectedValue={filters?.Bank_Deposit || 0}
                onChange={(value: number) => onChangeFilter?.({ Bank_Deposit: value })}
                orientation="horizontal"
                labelOrientation="horizontal"
              />
            </div>
            <Select
              label={t('L_PAY_WAY')}
              value={filters?.PayWay ?? 1234}
              options={paywayData}
              orientation="horizontal"
              placeholder="PAY WAY"
              size="md"
              onChange={e => onChangeFilter?.({ PayWay: Number(e.target.value) })}
              tabIndex={0}
            />
            <Input // BANK
              label={t('L_BANK')}
              value={filters?.BankNo ?? ''}
              onChange={e =>
                onChangeFilter?.({ BankNo: e.target.value ? Number(e.target.value) : null })
              }
              orientation="horizontal"
              size="md"
              type='number'
              maxLength={5}
            />

            <Input // BANK_ACCOUNT
              label={t('L_ACCOUNT_NUMBER')}
              value={filters?.BankAccount ?? ''}
              onChange={e =>
                onChangeFilter?.({ BankAccount: e.target.value ? Number(e.target.value) : null })
              }
              orientation="horizontal"
              size="md"
              type='number'
              maxLength={9}
            />

            <Input // CHECK_NUM
              label={t('L_CHECK_NUMBER')}
              value={filters?.Check_Num ?? ''}
              onChange={e =>
                onChangeFilter?.({ Check_Num: e.target.value ? Number(e.target.value) : null })
              }
              orientation="horizontal"
              size="md"
              pattern={REGEX.allCharacter}
              maxLength={16}
            />

            <Input // ACT_NO
              label={t('L_RECIEPT_OUTCOM')}
              value={filters?.Act_No ?? ''}
              onChange={e => onChangeFilter?.({ Act_No: e.target.value })}
              orientation="horizontal"
              size="md"
              pattern={REGEX.allCharacter}
              maxLength={7}
            />

            <DatePicker
              selectedDate={filters?.F_Date ?? ''}
              label={t('L_Payment_Date')}
              variant="outlined"
              onChange={date => onChangeFilter?.({ F_Date: (date as string) || '' })}
              orientation="horizontal"
              size="md"
              isTypeISO
            />
          </div>
          <div className={classes.col2}>
            <div className={classes.emptyData}></div>
            <Input // RETURN_STATUS
              type="checkbox"
              label={t('L_RETURNED_CHECK')}
              checked={Number(filters.Return_Status || 0) === 1}
              onChange={e => onChangeFilter?.({ Return_Status: e.target.checked ? 1 : 0 })}
              orientation="horizontal"
              size="md"
            />

            <div className={classes.emptyData2}></div>
            <DatePicker
              selectedDate={filters?.T_Date ?? ''}
              label={t('L_TO')}
              variant="outlined"
              onChange={date => onChangeFilter?.({ T_Date: (date as string) || '' })}
              orientation="horizontal"
              size="md"
              isTypeISO
            />
          </div>
          <div className={classes.col3}>
            <div className={classes.emptyData}></div>
            <div className={classes.buttonsContainer}>
              <Button title={t('L_SEARCH')} onClick={onRetrieve} />
              <Button title={t('U_CLEAR')} onClick={onClear} />
            </div>
          </div>
        </div>
      </Card>
      <ReportPrint
        renderActionItem={
          <div className={classes.renderItem}>
            <BackToPageButton />
            <DetailButton />
            <PrintButton onClick={handlePrint} />
            <SearchButton />
            <PrintExcel />
          </div>
        }
        header={
          <ReportHeader hiddenOnRender
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
                <ReportCells label={t('L_PAGE')} value={'1'} />
              </>
            }
            center={<>{<div>1370 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>}</>}
          />
        }
        footer={
          <ReportFooter
            left={
              <>
                <ReportCells label={t('L_TOTAL')} value={String(data?.total ?? 1)} />
                <ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />
              </>
            }
            right={
              <>
                <div>{t('L_DBLCLK_TO_COPY')}</div>
                <ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />
              </>
            }
          />
        }
      >
        <Table
          height="50vh"
          data={data?.reportData}
          columns={ReceiptAndPaymentBooksReportColumn()}
          customRowRenderer={customRowRender}
        />
      </ReportPrint>
    </>
  );
};

export default ReceiptAndPaymentBooksReportUI;
