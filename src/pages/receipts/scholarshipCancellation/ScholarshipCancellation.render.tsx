import React from 'react';
import classes from './ScholarshipCancellation.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { Table } from '@/ui/Table';
import { ForStudentColumns, FromStudentColumns } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { REGEX } from '@/constants/appConstant';
import { DatePicker } from '@/ui/DatePicker';
import { Card } from '@/ui/Card';

interface ScholarshipCancellationUIProps {
  renderActionItems: () => JSX.Element | null;
  fromStudentCustomRowRender?: (key: string, row: any, index: number) => React.ReactNode;
  forStudentCustomRowRender?: (key: string, row: any, index: number) => React.ReactNode;
}

const ScholarshipCancellationUI: React.FC<ScholarshipCancellationUIProps> = ({
  renderActionItems,
  fromStudentCustomRowRender,
  forStudentCustomRowRender
}) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      screenNumber="1277"
      screenName={t('T_MCFW1277')}
      renderFooter={<BottomToolBar renderActionItems={renderActionItems} />}
    >
      <div className={classes.mainContainer}>
        <Card>
          <div className={classes.mainContainer}>
            <div className={classes.itemsContainer}>
              <Input
                orientation="horizontal"
                label={t('L_RECEIPT')}
                size="md"
                maxLength={7}
                pattern={REGEX.allCharacter}
                tabIndex={1}
              />
              <Input
                type="number"
                maxLength={4}
                orientation="horizontal"
                label={t('L_SYSTEM_YEAR')}
                size="md"
                tabIndex={2}
              />
            </div>
            <div className={classes.itemsContainer}>
              <div className={classes.cell}>
                <Input
                  type="number"
                  maxLength={10}
                  orientation="horizontal"
                  label={t('L_SCHOLARSHIP')}
                  size="md"
                  tabIndex={3}
                />
                <Input maxLength={20} orientation="horizontal" size="md" tabIndex={4} />
              </div>
              <Select
                orientation="horizontal"
                label={t('L_ACC_ACT_TYPE')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                size="md"
                tabIndex={5}
              />
            </div>

            <div className={classes.itemsContainer}>
              <Input
                orientation="horizontal"
                label={t('L_DETAILS')}
                size="lg"
                maxLength={30}
                pattern={REGEX.allCharacter}
                disabled
              />
              <DatePicker
                selectedDate={''}
                orientation="horizontal"
                label={t('L_VALUE_DATE')}
                size="md"
                onChange={() => {}}
                isTypeISO
                tabIndex={6}
              />
            </div>
          </div>
        </Card>
        <Card title={`${t('L_FROM_STUDENT')}`}>
          <Table
            columns={FromStudentColumns()}
            data={[{}, {}]}
            customRowRenderer={fromStudentCustomRowRender}
          />
          <div className={classes.totalAmountBox}>
            <Input type="amount" maxLength={11} placeholder="TOT_2" tabIndex={13} />
          </div>
        </Card>
        <Card title={`${t('L_FOR_STUDENT')}`}>
          <Table
            columns={ForStudentColumns()}
            data={[{}, {}]}
            customRowRenderer={forStudentCustomRowRender}
          />
          <div className={classes.totalAmountBox}>
            <Input type="amount" maxLength={11} placeholder="TOT_1" tabIndex={20} />
          </div>
        </Card>
      </div>
    </ScreenLayout>
  );
};

export default ScholarshipCancellationUI;
