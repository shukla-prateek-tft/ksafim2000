import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { BankTransferFormReportColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './BankTransferFormReport.module.scss';
import { BankTranferFormReportProps } from './type';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { DatePicker } from '@/ui/DatePicker';

const BankTransferFormReport = ({
  data,
  renderActionItems,
  filters,
  onChangeFilter,
  onRetrieve,
  onClear
}: BankTranferFormReportProps) => {
  const { t } = useTranslation('common');
  const hidden = true;

  return (
    <>
      <Card hideOnPrint>
        <div className={classes.container}>
          <div className={classes.col1}>
            <Input
              label={t('L_PAY_WAY')}
              type='text'
              maxLength={60}
              value={'12'}
              orientation="horizontal"
              size="md"
              disabled
            />
            <Input
              label={t('L_PAYMENT')}
               type='text'
              maxLength={7}
              value={filters?.Act_No}
              onChange={e => onChangeFilter({ Act_No: e.target.value })}
              orientation="horizontal"
              size="md"
            />

            <DatePicker
              selectedDate={filters?.F_Date || ''}
              label={t('L_DATE_RELEVANT')}
              variant="outlined"
              onChange={(d: string) => onChangeFilter({ F_Date: d })}
              orientation="horizontal"
              size="md"
              isTypeISO
            />

            <DatePicker
              selectedDate={filters?.F_Rel_Date || ''}
              label={t('L_PAYMENT_DATE')}
              variant="outlined"
              onChange={(d: string) => onChangeFilter({ F_Rel_Date: d })}
              orientation="horizontal"
              size="md"
              isTypeISO
            />
            <div className={classes.supplierData}>
              <Input
                label={t('L_SUPP')}
                type='number'
                maxLength={10}
                value={String(filters?.SuppNum ?? '')}
                onChange={e =>
                  onChangeFilter({ SuppNum: e.target.value ? Number(e.target.value) : 0 })
                }
                orientation="horizontal"
                size="md"
              />
              <Input
              type='text'
              maxLength={30} 
              value={''} disabled />
            </div>
          </div>
          <div className={classes.col2}>
            <div className={classes.emptyData}></div>
            {hidden ? (
              <div className={classes.emptyData2}></div>
            ) : (
              <div className={classes.col2InputMargin}>
                <Input
                
                  value={String(filters?.Pay_Way)}
                  onChange={e =>
                    onChangeFilter({ Pay_Way: e.target.value ? Number(e.target.value) : 0 })
                  }
                  orientation="horizontal"
                />
              </div>
            )}
            <DatePicker
              selectedDate={filters?.T_Date || ''}
              label={t('L_TO')}
              variant="outlined"
              onChange={(d: string) => onChangeFilter({ T_Date: d })}
              orientation="horizontal"
              size="md"
              isTypeISO
            />
            <DatePicker
              selectedDate={filters?.T_Rel_Date || ''}
              label={t('L_TO')}
              variant="outlined"
              onChange={(d: string) => onChangeFilter({ T_Rel_Date: d })}
              orientation="horizontal"
              size="md"
              isTypeISO
            />
          </div>
          <div className={classes.col3}>
            <div className={classes.emptyData}></div>
            <div className={classes.buttonsContainer}>
              <Button title={t('L_RETRIEVE_BTN')} onClick={onRetrieve} />
              <Button title={t('U_CLEAR')} onClick={onClear} />
            </div>
          </div>
        </div>
      </Card>
      <ReportPrint
        renderActionItem={renderActionItems?.()}
        header={
          <ReportHeader
          hiddenOnRender
            left={
              <>
                <ReportCells label={''} value={'System Name'} />
                <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
                <ReportCells label={'HEB NAME'} value="heb name" />
                <ReportCells label={t('L_PAGE')} value={'10'} />
              </>
            }
            right={
              <>
                <ReportCells label={''} value={'Monic Name'} />
                <ReportCells label={''} value={'Report Date'} />
              </>
            }
          />
        }
        footer={
          <>
            <ReportFooter left={t('L_THANK_YOU_FOR_YOUR_CARE')} />
            <ReportFooter left={t('L_DATE')} />
            <ReportFooter left={t('L_MCFR1308_LAST_TEXT')} />
            <ReportFooter
              left={<ReportCells label={t('L_PRINTED_BY')} value={'abcdfg'} />}
              right={<ReportCells label={t('')} value={'PRINT_TRAILER'} />}
            />
          </>
        }
      >
        <div className={classes.middleContainer}>
          <div className={classes.rowContainer}>
            <span>{t('L_IN_HONOR_OF_BANK')}:</span>
            <div className={classes.columnContainer}>
              <div className={classes.rowContainer}>
                <ReportCells label={t('L_BANK_S')} value={data?.bank_Name} />
                <ReportCells label={t('L_BRANCH')} value={data?.branch} />
              </div>
              <div>{t('L_SUBJECT_BANK_TRANSFER_ORDER')}</div>
            </div>
          </div>
          <div className={classes.columnContainer}>
            <ReportCells
              label={`${t('L_WE_HERE_BY_INSTRUCT_YOU_TO_DEBIT_AC_NUM')}:`}
              value={data?.bank_Account}
            />
            <div>{t('L_AWARD_SUPPLIER_DETAILS')}:</div>
          </div>
        </div>
        <Table
          height="25vh"
          data={data?.bankTransferFormReport1308QueryDto}
          columns={BankTransferFormReportColumn()}
        />
      </ReportPrint>
    </>
  );
};

export default BankTransferFormReport;
