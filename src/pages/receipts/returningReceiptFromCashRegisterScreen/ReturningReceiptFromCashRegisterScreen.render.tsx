import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ReturningReceiptFromCashRegisterScreen.module.scss';
import { Table } from '@/ui/Table';
import { ReceiptCashRegisterPaymentColumns, ReceiptCashRegisterStudentsColumns } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import {
  BackToPageButton,
  DetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { getInputPattern } from '@/utils/commonHelper';

interface PaymentDataType {
  payway: string;
  paymentDate: string;
  checkNum: string;
  bank: string;
  bankAccount: string;
  income: string;
  [key: string]: string;
}

interface StudentDataType {
  student: string;
  familyName: string;
  privateName: string;
  serviceType: string;
  accNo: string;
  credit: string;
  [key: string]: string;
}

const paymentData: Array<PaymentDataType> = [
  {
    payway: 'Payway',
    paymentDate: '12/08/2023',
    checkNum: 'Check Num',
    bank: 'Custom Bank',
    bankAccount: '23456789',
    income: '21'
  }
];

const studentData: Array<StudentDataType> = [
  {
    student: 'student1',
    familyName: 'Family name',
    privateName: 'Private name',
    serviceType: 'Service type',
    accNo: 'Acc No',
    credit: 'credit'
  }
];

interface ReturningReceiptFromCashRegisterScreenProps {}

const ReturningReceiptFromCashRegisterScreen: React.FC<
  ReturningReceiptFromCashRegisterScreenProps
> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <span>{t('L_CONFIRM_SIGN')}</span>
          <Input label={t('L_SIGNATURE')} value={'Signature'} orientation="horizontal" />
        </div>

        <Footer />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <SearchButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1185')}
        screenNumber="1185"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_OUTCOME_DETAIL')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input
                label={t('L_SYSTEM_YEAR')}
                value={'Study Year'}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(4)}
              />
              <Select label={t('L_ACC_ACT_TYPE')} options={[]} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.columnContainer}>
                <Input
                  label={t('L_RECEIPT')}
                  size="sm"
                  value={'Act no'}
                  orientation="horizontal"
                  maxLength={7}
                />
                <div className={classes.rowContainer}>
                  <Input
                    label={t('L_PAYER')}
                    size="sm"
                    value={'ID'}
                    orientation="horizontal"
                    type="number"
                    pattern={getInputPattern(10)}
                  />
                  <Input
                    value={'Player name'}
                    size="sm"
                    orientation="horizontal"
                    type="text"
                    maxLength={20}
                  />
                </div>
                <Input
                  label={t('L_DETAILS')}
                  size="lg"
                  value={'Details'}
                  orientation="horizontal"
                  maxLength={30}
                />
              </div>
            </div>
            <div className={classes.innerContainer}>
              <Input orientation="horizontal" type="checkbox" />
            </div>
          </div>
        </Card>

        <div className={classes.addInvoiceTable}>
          <Table
            columns={ReceiptCashRegisterPaymentColumns()}
            data={paymentData}
            customRowRenderer={(key, row) => {
              switch (key) {
                case 'payway':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="codeDescription"
                      value={row[key]}
                      size="fullWidth"
                    />
                  );
                case 'paymentDate':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="codeDescription"
                      value={row[key]}
                      size="fullWidth"
                    />
                  );
                case 'checkNum':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="codeDescription"
                      value={row[key]}
                      maxLength={16}
                      size="fullWidth"
                    />
                  );
                case 'bank':
                  return (
                    <Input
                      label=" "
                      type="number"
                      id="codeDescription"
                      value={row[key]}
                      pattern={getInputPattern(5)}
                      size="fullWidth"
                    />
                  );
                case 'bankAccount':
                  return (
                    <Input
                      label=" "
                      type="number"
                      id="codeDescription"
                      value={row[key]}
                      pattern={getInputPattern(9)}
                      size="fullWidth"
                    />
                  );
                case 'income':
                  return (
                    <Input
                      label=" "
                      type="amount"
                      id="codeDescription"
                      value={row[key]}
                      maxLength={10}
                      size="fullWidth"
                    />
                  );
              }
            }}
          />
          <Input value={'Tot 2'} />
        </div>
        <div className={classes.addInvoiceTable}>
          <Table
            columns={ReceiptCashRegisterStudentsColumns()}
            data={studentData}
            customRowRenderer={(key, row) => {
              switch (key) {
                case 'student':
                  return (
                    <div className={classes.ListofGefenCell}>
                      <Input
                        label=" "
                        type="number"
                        id="codeDescription"
                        pattern={getInputPattern(10)}
                        size="fullWidth"
                        value={row.student}
                      />
                      <Input
                        label=" "
                        type="text"
                        id="codeDescription"
                        maxLength={24}
                        size="fullWidth"
                        value={row.familyName}
                      />
                      <Input
                        label=" "
                        type="text"
                        id="codeDescription"
                        maxLength={20}
                        size="fullWidth"
                        value={row.privateName}
                      />
                    </div>
                  );
                case 'serviceType':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="codeDescription"
                      maxLength={20}
                      size="fullWidth"
                      value={row.privateName}
                    />
                  );
                case 'accNo':
                  return (
                    <Input
                      label=" "
                      type="text"
                      id="codeDescription"
                      maxLength={20}
                      size="fullWidth"
                      value={row.privateName}
                    />
                  );
                case 'credit':
                  return (
                    <Input
                      label=" "
                      type="amount"
                      id="codeDescription"
                      value={row[key]}
                      maxLength={10}
                      size="fullWidth"
                    />
                  );
                default:
                  return (
                    <div className={classes.ListofGefenCell}>
                      <Input
                        label=" "
                        type="text"
                        id="codeDescription"
                        maxLength={16}
                        size="fullWidth"
                        value={row[key]}
                      />
                    </div>
                  );
              }
            }}
          />
          <Input value={'Tot 1'} />
        </div>
      </ScreenLayout>
    </>
  );
};

export default ReturningReceiptFromCashRegisterScreen;
