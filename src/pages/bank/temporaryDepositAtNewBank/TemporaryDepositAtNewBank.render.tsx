import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './TemporaryDepositAtNewBank.module.scss';
import { Table } from '@/ui/Table';

import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Button } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { BankDepositColumns } from './components';

const data = [
  {
    check: true,
    vineCode: 'VC001',
    codeDescription: 'Code 001 Description',
    accountant: 'John Doe',
    appSecond: 'Jane Smith',
    list: 'List Item A',
    errorDescription: 'No error'
  }
];
interface TemporaryDepositAtNewBankUIProps {
  renderActionItems: () => JSX.Element;
  customRowRender: (key: string, row: any, index: number) => JSX.Element | undefined;
}

const TemporaryDepositAtNewBankUI: React.FC<TemporaryDepositAtNewBankUIProps> = ({
  renderActionItems,
  customRowRender
}) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <Footer
      // handlePaginationChange={handlePagination}
      // pagination={pagination}
      />
    );
  };

  return (
    <>
      <ScreenLayout
        screenName={t('L_LOCATE_BY')}
        screenNumber="0630"
        renderFooter={<BottomBar />}
        renderHeader={renderActionItems()}
      >
        <Card hideOnPrint>
          <div className={classes.mainContainer}>
            <Input
              size="md"
              type="text"
              maxLength={7}
              label={t('L_RECEIPT_NUM')}
              orientation="horizontal"
            />
            <Input
              size="md"
              type="text"
              maxLength={16}
              label={t('L_CHECK_NUM')}
              orientation="horizontal"
            />
            <Input
              size="md"
              type="amount"
              maxLength={11}
              label={t('L_MONEY_AMNT')}
              orientation="horizontal"
            />
            <Button size="md" title={t('L_RETRIEVE_BTN')} />
            <Button size="md" title={t('L_CLEAN')} />
          </div>

          <Table columns={BankDepositColumns()} data={data} customRowRenderer={customRowRender} />

          <div className={classes.conatiner}>
            <Input type="text" />
            <div className={classes.actionContainer}>
              <Input orientation="horizontal" type="amount" maxLength={11} label={t('L_TOTAL')} disabled />
              <Input type="number" maxLength={4} disabled />
            </div>
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default TemporaryDepositAtNewBankUI;
