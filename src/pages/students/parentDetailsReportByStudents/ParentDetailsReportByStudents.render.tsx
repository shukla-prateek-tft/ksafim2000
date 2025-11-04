import React from 'react';
import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ParentDetailsReportByStudentsColumn } from './components';
import { useTranslation } from 'react-i18next';
import { attachMultipleClasses, getFormatedDate } from '@/utils/commonHelper';
import classes from './ParentDetailsReportByStudents.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel,
  Button
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { useAuth } from '@/hooks';
import { Card } from '@/ui/Card';
import { Select } from '@/ui/Select';
const ParentDetailsReportByStudentsUI = ({ data, customRowRender }: any) => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <Card hideOnPrint title={t('T_MCFR1278')}>
        <div className={classes.container}>
          <div className={classes.col1}>
            <div className={classes.selectContainer}>
              <Select
                label={t('L_CLASS_FROM')}
                onChange={() => {}}
                value={''}
                placeholder={t('F_CLASS_CODE')}
                options={[
                  { label: 'A', value: '1' },
                  { label: 'B', value: '1' }
                ]}
                orientation="horizontal"
                size="lg"
                tabIndex={0}
              />
              <Input
                value={t('F_CLASS_NUM')}
                orientation="horizontal"
                type="number"
                maxLength={2}
              />
            </div>
            <Input
              type="checkbox"
              label={t('L_MCFR1278_CHECKBOX1')} // No_ID_PAR
              value={''}
              orientation="horizontal"
            />
          </div>
          <div className={classes.col2}>
            <div className={classes.selectContainer}>
              <Select
                label={t('L_TO')}
                onChange={() => {}}
                value={''}
                placeholder={t('T_CLASS_CODE')}
                options={[
                  { label: 'A', value: '1' },
                  { label: 'B', value: '1' }
                ]}
                orientation="horizontal"
                size="lg"
                tabIndex={0}
              />
              <Input value={'T_CLASS_NUM'} orientation="horizontal" type="number" maxLength={2} />
            </div>
          </div>
          <div className={classes.col3}>
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
              </>
            }
            right={
              <>
                <ReportCells label={t('L_DATE')} value={'227017'} />
              </>
            }
            center={
              <>
                <div>{data?.queryHeader}</div>
              </>
            }
          />
        }
        footer={
          <ReportFooter
            left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'} />}
            right={<ReportCells label={t('L_PRINTED_BY')} value={user?.userName} />}
          />
        }
      >
        <div className={classes.otherHeader}>
          <div className={attachMultipleClasses(classes.common, classes.one)}>{t('V_STUDENT')}</div>
          <div className={attachMultipleClasses(classes.common, classes.two)}>{t('V_MONTH11')}</div>
          <div className={attachMultipleClasses(classes.common, classes.three)}>
            {t('L_MOTHER')}
          </div>
        </div>
        <Table
          height="47vh"
          data={data}
          columns={ParentDetailsReportByStudentsColumn()}
          customRowRenderer={customRowRender}
        />
        <div className={classes.footer}>
          <Input
            size="md"
            value={data?.total_Stud}
            label={t('L_SUM_STUDENT')}
            disabled
            orientation="horizontal"
            type="number"
            maxLength={4}
          />
        </div>
      </ReportPrint>
    </>
  );
};

export default ParentDetailsReportByStudentsUI;
