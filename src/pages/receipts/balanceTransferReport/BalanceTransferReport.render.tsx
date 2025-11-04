import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { BalanceTransferReportColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './BalanceTransferReport.module.scss';
import {
  BackToPageButton,
  Button,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { Card } from '@/ui/Card';
import { GroupRadio } from '@/ui/GroupRadio';
import { RangeSelector } from '@/ui/DateRangePicker';
import { REGEX } from '@/constants/appConstant';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';

interface BalanceTransferReportProps {
  data: Array<Record<string, string>>;
}

const BalanceTransferReportUI = ({ data}: BalanceTransferReportProps) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      header={
        <>
          <Card hideOnPrint title={t('L_MOVE_REST')}>
            <div className={classes.topMainConatiner}>
              <div className={classes.itemContainer}>
                <GroupRadio
                  inversed
                  size="sm"
                  orientation="horizontal"
                  labelOrientation="horizontal"
                  options={[
                    { label: t('L_MCFR_1359_OPTION_1'), value: 1 },
                    { label: t('L_MCFR_1359_OPTION_2'), value: 2 }
                  ]}
                  name={''}
                  selectedValue={0}
                  onChange={function (value: number): void {
                    throw new Error('Function not implemented.');
                  }}
                />
                <RangeSelector
                  size="sm"
                  labelOrientation="horizontal"
                  fromLabel={t('L_FROM_YEAR')}
                  toLabel={t('L_FOR_YEAR')}
                />
              </div>
              <div className={classes.itemContainer}>
                <div className={classes.rowContainer}>
                  <Input size="sm" orientation="horizontal" label={t('L_BATCH_NUM')} tabIndex={1} type='number' maxLength={5}/>
                  <Input
                    size="sm"
                    type="checkbox"
                    orientation="horizontal"
                    label={t('L_MONTH_BEGIN')}
                     tabIndex={2}
                  />
                </div>
                <div>
                  <RangeSelector
                    labelOrientation="horizontal"
                    toLabel={t('L_MONTH_BEGIN')}
                    size="sm"
                    fromLabel={t('L_TO')}
                  />
                </div>
                <div className={classes.rowContainer}>
                  <Input size="sm" orientation="horizontal" label={t('L_MCFR1359_NO_JOURNAL')}  tabIndex={3}  type='number' maxLength={10}/>
                  <Input size="sm" disabled tabIndex={4}/>
                  <Input size="sm" disabled tabIndex={5}/>
                </div>
              </div>
              <div className={classes.buttonContainer}>
                <Button title={t('L_SEARCH')}  tabIndex={6}></Button>{' '}
                <Button variant="outline" title={t('U_CLEAR')}  tabIndex={7}></Button>
              </div>
            </div>
          </Card>
          <ReportHeader
            hiddenOnRender
            left={
              <>
                <ReportCells value={t('SYSTEM_NAME')} />
                <div className={classes.headerInputs}>
                  <ReportCells value={t('L_DATE')} />
                  <ReportCells value={getFormatedDate()} />
                  <ReportCells value={t('L_PAGE')} />
                  <ReportCells value={'10'} />
                </div>
              </>
            }
            right={<ReportCells value={t('MONIC_NAME')} />}
            center={
              <>
                <div>REPORT NAME</div>
              </>
            }
          />
        </>
      }
      footer={
        <ReportFooter
          left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
          right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />}
        />
      }
      renderActionItem={
        <div className={classes.actionsItems}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton />
          <SearchButton />
          <PrintExcel />
          <Button> {t('L_MCFR1379_ACTION_BTN_TXT')} </Button>
        </div>
      }
    >
      <div className={classes.mainContainer}>
      <div className={classes.topInputs}>
        <Input  size='sm' type="checkbox" orientation="horizontal"  tabIndex={8}/>
        <Input size='fullWidth' orientation="horizontal" tabIndex={9} type='text' maxLength={6} pattern={REGEX.allCharacter}/>
        <Input size='fullWidth' orientation="horizontal" tabIndex={10} type='text' maxLength={6} pattern={REGEX.allCharacter}/>
      </div>
      <div className={classes.parentInput}>
        <div className={classes.inputItems}>
          <Input label={t('L_BATCH_NUM')} orientation="horizontal" tabIndex={11} maxLength={15} pattern={REGEX.allCharacter} />
          <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                id="L_DATE"
                size="fullWidth"
                orientation="horizontal"
                label={t('L_EXECUTE_DATE')}
              />
          <Input label={t('L_SET_NUMBER')} orientation="horizontal" tabIndex={13} type='number' maxLength={10}/>
          <Input label={t('L_TEMP')} type="checkbox" orientation="horizontal" tabIndex={14}/>
        </div>
        <div className={classes.secondItems}>
          <Input  size='fullWidth' orientation="horizontal" tabIndex={15} type='number' maxLength={3}/>
          <Input  size='fullWidth' orientation="horizontal" tabIndex={16} type='text' maxLength={6} pattern={REGEX.allCharacter} />
          <Input  size='fullWidth'  orientation="horizontal" tabIndex={17}/>
        </div>
      </div>
      </div>
      <Table height="25vh" data={data} columns={BalanceTransferReportColumns()}/>
      <div className={classes.bottomContainer}>
        <Input
          aria-required="true"
          maxLength={10}
          type='number'
          id=""
          label={t('L_SUM_STUDENT')}
          orientation="horizontal"
        />
        <Input
          aria-required="true"
          maxLength={10}
          id=""
          label={t('L_TOTAL_AMOUNT')}
          orientation="horizontal"
          type='amount'
        />
      </div>
    </ReportPrint>
  );
};

export default BalanceTransferReportUI;
