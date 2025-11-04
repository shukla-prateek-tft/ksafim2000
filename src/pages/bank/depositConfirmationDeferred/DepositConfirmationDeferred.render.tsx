import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './DepositConfirmationDeferred.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { SaveButton, DetailButton } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';

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
interface DepositConfirmationDeferredProps {}

const DepositConfirmationDeferredUI: React.FC<DepositConfirmationDeferredProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.flex}>
          <Input label={t('L_TOTAL')} disabled orientation="horizontal" />
          <Input disabled orientation="horizontal" />
        </div>
        <Footer
        // handlePaginationChange={handlePagination}
        // pagination={pagination}
        />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <SaveButton />
        <DetailButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('topHeader')}
        screenNumber="1224"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFW0622')}>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListofGefenColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'L_Invoice_Number':
                    return (
                      <Input
                        label=" "
                        type="text"
                        id="L_Invoice_Number"
                        maxLength={12}
                        variant="borderless"
                        size="fullWidth"
                        pattern={REGEX.allCharacter}
                      />
                    );
                  case 'vineCode':
                    return (
                      <Input
                        label=" "
                        type="text"
                        id="catalog_no"
                        maxLength={7}
                        variant="borderless"
                        size="fullWidth"
                        pattern={REGEX.allCharacter}
                      />
                    );
                  case 'codeDescription':
                    return (
                      <DatePickerComponent
                        selectedDate={new Date()}
                        onChange={() => {}}
                        placeholder=" "
                        id="L_DATE"
                        size="fullWidth"
                        variant="borderless"
                      />
                    );
                  case 'accountant':
                    return (
                      <Input
                        label=" "
                        type="number"
                        id="catalog_no"
                        maxLength={5}
                        variant="borderless"
                        size="fullWidth"
                      />
                    );
                  case 'L_Invoice_Number2':
                    return (
                      <Input
                        label=" "
                        type="number"
                        id="catalog_no"
                        maxLength={9}
                        variant="borderless"
                        size="fullWidth"
                      />
                    );
                  case 'vineCode2':
                    return (
                      <Input
                        label=" "
                        type="text"
                        id="catalog_no"
                        maxLength={16}
                        variant="borderless"
                        size="fullWidth"
                      />
                    );
                  case 'codeDescription2':
                    return (
                      <Input
                        label=" "
                        size="fullWidth"
                        variant="borderless" //amount
                        // value={}
                        type="amount"
                        min={0}
                        maxLength={11}
                        onChange={() => {}}
                        onBlur={() => {}}
                      />
                    );
                  case 'accountant2':
                    return (
                      <Input
                        label=" "
                        type="checkbox"
                        id="catalog_no"
                        maxLength={16}
                        variant="borderless"
                      />
                    );
                  case 'accountant3':
                    return (
                      <Input
                        label=" "
                        type="checkbox"
                        id="catalog_no"
                        maxLength={16}
                        variant="borderless"
                      />
                    );
                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default DepositConfirmationDeferredUI;
