import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CorrectionOfStudentCharges.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  BackToPageButton,
  AddButton,
  Button,
  CancelButton,
  OtherDetailButton,
  DetailButton,
  SaveButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { DatePicker } from '@/ui/DatePicker';
import { REGEX } from '@/constants/appConstant';

const data = [
  {
    L_Invoice_Number: '112',
    vineCode: 'VC001'
  }
];
interface PayerLocatorProps {}

const CorrectionOfStudentChargesUI: React.FC<PayerLocatorProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <span>{t('L_0609_DESC')}</span>
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
        <Button size="md" title={t('L_MULTIPLY')} />
        <CancelButton />
        <AddButton />
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
        screenNumber="MCFW-0609"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_MCFW0609')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <div className={classes.rangeItem}>
                <Input type='number' maxLength={10} label={t('L_STUDENT')} orientation="horizontal"  />
                <Input pattern={REGEX.allCharacter}  maxLength={24} orientation="horizontal"/>
                <Input pattern={REGEX.allCharacter}  maxLength={20} orientation="horizontal"/>
              </div>

              <Select tabIndex={0}  options={[]} label={t('L_SERVICE_TYPE')} orientation="horizontal" />
              <Select tabIndex={0}  options={[]} label={t('L_ACC_ACT_TYPE')} orientation="horizontal" />
              <DatePicker label={t('L_VALUE_DATE')} orientation="horizontal" />
              <Input type='text' maxLength={3} label={t('L_COMMENT')} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <DatePicker label={t('L_DATE')} orientation="horizontal" />
              <Input label={t('L_ACC_NO')} orientation="horizontal" />
              <Input type='text' maxLength={15} label={t('L_REFERENCE')} orientation="horizontal" />
              <DatePicker label={t('L_PAY_DATE')} orientation="horizontal" />
            </div>
          </div>
        </Card>
        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListofGefenColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'L_Invoice_Number':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'vineCode':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
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

export default CorrectionOfStudentChargesUI;
