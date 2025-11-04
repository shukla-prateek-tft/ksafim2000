import { ReportCells, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { IncomeTaxSuppliersReportColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate, getInputPattern } from '@/utils/commonHelper';
import classes from './StudentReports.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel,
  Button
} from '@/components/commonButtons';
import { Flex } from '@/components';
import { Input } from '@/ui/Input';
import { Card } from '@/ui/Card';
import { DatePicker } from '@/ui/DatePicker';
import { Select } from '@/ui/Select';
const StudentReportsUI = ({ data }: any) => {
  const { t } = useTranslation('common');

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <Card title={t('T_MCFR1362')} hideOnPrint>
        <div className={classes.container}>
          <div className={classes.col1}>
            <div className={classes.groupContainer}>
              <Input label={t('L_STUDY_GROUP')} value={''} orientation="horizontal" size="md" />
              <Input
                value={'GROUP_NAME'}
                onChange={() => {}}
                orientation="horizontal"
                size="md"
                disabled
              />
            </div>
            <Select
              label={t('L_F_CLASS_CODE')}
              tabIndex={0}
              onChange={() => {}}
              value={''}
              placeholder={t('print')}
              options={[
                { label: 'A', value: '1' },
                { label: 'B', value: '1' }
              ]}
              orientation="horizontal"
            />
            <DatePicker
              selectedDate={''}
              label={t('L_FROM_CLASS_NUM')}
              variant="outlined"
              onChange={() => {}}
              orientation="horizontal"
              isTypeISO
            />
          </div>
          <div className={classes.col2}>
            <div className={classes.emptyData}></div>

            <Select
              label={t('L_TO')}
              onChange={() => {}}
              tabIndex={0}
              value={''}
              placeholder={t('print')}
              options={[
                { label: 'A', value: '1' },
                { label: 'B', value: '1' }
              ]}
              orientation="horizontal"
            />
            <DatePicker
              selectedDate={''}
              label={t('L_TO')}
              variant="outlined"
              onChange={() => {}}
              orientation="horizontal"
              isTypeISO
            />
          </div>
          <div className={classes.col3}>
            <div className={classes.emptyData}></div>
            <Input type="checkbox" label={t('L_WITH_LEAVING')} orientation="horizontal" />
            <Input
              type="checkbox"
              label={t('L_MCFR1362_CHECKBOX2')}
              orientation="horizontal"
            />{' '}
          </div>
          <div className={classes.col4}>
            <div className={classes.emptyData}></div>
            <div className={classes.buttonsContainer}>
              <Button title={t('L_RETRIEVE_BTN')} onClick={() => {}} />
              <Button title={t('U_CLEAR')} onClick={() => {}} />
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
          <ReportHeader
            hiddenOnRender
            left={
              <>
                <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
                <ReportCells label={t('L_ON')} value={'1'} />
                <ReportCells label={t('L_PAGE')} value={'1'} />
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
                <div>1370 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
                <div>1370 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
                <Flex justifyContent="space-between">
                  <Input
                    type="number"
                    maxLength={18}
                    pattern={getInputPattern(18)}
                    label={t('L_STUDY_GROUP')}
                    orientation="horizontal"
                    name="studyGroup"
                  />
                  <Input
                    type="text"
                    maxLength={150}
                    label={t('L_GROUP_NAME')}
                    orientation="horizontal"
                  />
                  <Input
                    type="number"
                    maxLength={5}
                    pattern={getInputPattern(5)}
                    label={t('L_GROUP_TOTAL')}
                    orientation="horizontal"
                    name="groupTotal"
                  />
                  <div>{t('L_DEPARTURE_DATE_EXISTS')}</div>
                </Flex>
              </>
            }
          />
        }
        footer={
          <Flex gap="10px" alignItems="center" justifyContent="flex-end">
            <Input type="amount" name="amount1" orientation="horizontal" />
            <Input type="amount" name="amount2" orientation="horizontal" />
            <Input type="amount" name="amount3" orientation="horizontal" />
            <div>{t('L_TOTAL')}</div>
          </Flex>
        }
      >
        <Table data={data} columns={IncomeTaxSuppliersReportColumn()} />
      </ReportPrint>
    </>
  );
};

export default StudentReportsUI;
