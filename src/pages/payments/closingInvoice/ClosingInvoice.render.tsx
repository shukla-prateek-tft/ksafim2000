import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ClosingInvoice.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn, ListofGefenColumn2 } from './components';
import { ScreenLayout } from '@/ui/Layout';
import {
  BackToPageButton,
  Button,
  DetailButton,
  OtherDetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Flex } from '@/components';
import { BottomToolBar } from '@/ui/BottomToolBar';
import {
  ClosingInvoiceProps
} from './types';

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

const ClosingInvoiceUI: React.FC<ClosingInvoiceProps> = ({
  data,
  customRowRendererOfClosingCheckInvoiceLpOpen,
  customRowRendererOfClosingCheckInvoiceLpHbnOpen
}) => {
  const { t } = useTranslation('common');

  const {
    closingCheckInvoicesLpOpen = [],
    closingCheckInvoicesLpOpen_Total = 0,
    closingCheckInvoicesLpHbnOpen = [],
    closingCheckInvoicesLpHbnOpen_Total = 0,
    SuppNum = '',
    SuppName = ''
  } = data || {};

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <div className={classes.flex}>
            <Input aria-required="true" maxLength={30} id="inv_Desc_Aut" orientation="horizontal" />
            <Input aria-required="true" maxLength={30} id="inv_Desc_Aut" orientation="horizontal" />
          </div>
          <div className={classes.flex}>
            <Input aria-required="true" maxLength={30} id="inv_Desc_Aut" orientation="horizontal" />
            <Input type='number' aria-required="true" maxLength={30} id="inv_Desc_Aut" orientation="horizontal" />
          </div>
        </div>
        <BottomToolBar
          pagination={{
            pageSize: 10,
            pageNumber: 1,
            totalPages: 5,
            totalCount: 50,
            hasPreviousPage: false,
            hasNextPage: true
          }}
          showPagination={true}
        />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <Button size="md" title={t('L_CLOSING_OF_CHECKS')} />
        <SearchButton />
        <SaveButton />
        <OtherDetailButton />
        <DetailButton />
        <BackToPageButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('')}
        screenNumber="1214"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFW1214')}>
          <div className={classes.mainContainer}>
            <Input type='text' maxLength={40} label={t('L_SUPP_NAME')} disabled orientation="horizontal" value={SuppName} />
            <Input type='number' maxLength={10} label={t('L_SUPP_NUM')} disabled orientation="horizontal" value={SuppNum} />
          </div>
        </Card>
        <Card>
          <Flex justifyContent="space-around">
            <span>{t('L_INVOICES')}</span>
            <span>{t('L_CHEK')}</span>
          </Flex>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListofGefenColumn()}
              data={closingCheckInvoicesLpHbnOpen}
              customRowRenderer={customRowRendererOfClosingCheckInvoiceLpHbnOpen}
            />
            <Table
              columns={ListofGefenColumn2()}
              data={closingCheckInvoicesLpOpen}
              customRowRenderer={customRowRendererOfClosingCheckInvoiceLpOpen}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default ClosingInvoiceUI;
