import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './WebsiteCollectionDates.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './Components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';
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
interface WebsiteCollectionDatesProps {}

const WebsiteCollectionDatesUI: React.FC<WebsiteCollectionDatesProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div>{t('L_PEILUT')}</div>
        <Footer />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <SearchButton />
        <AddButton />
        <CancelButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('topHeader')}
        screenNumber="1324"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card>
          <div className={classes.mainContainer}>
            <div>{t('T_MCFW1324')}</div>
            <div>{t('L_DISPLAY_ONLY')}</div>
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
                          id="L_Invoice_Number"
                          maxLength={16}
                          variant="borderless"
                          type="number"
                          pattern={getInputPattern(4)}
                          size="fullWidth"
                          tabIndex={1}
                        />
                      </div>
                    );
                  case 'vineCode':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          id="catalog_no"
                          maxLength={16}
                          type="number"
                          pattern={getInputPattern(4)}
                          variant="borderless"
                          size="fullWidth"
                          tabIndex={2}
                        />
                      </div>
                    );
                  case 'codeDescription':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePickerComponent
                          selectedDate={new Date()}
                          onChange={() => {}}
                          placeholder=" "
                          id="codeDescription"
                          size="fullWidth"
                          variant="borderless"
                          tabIndex={3}
                        />
                      </div>
                    );
                  case 'accountant':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePickerComponent
                          selectedDate={new Date()}
                          onChange={() => {}}
                          placeholder=" "
                          id="accountant"
                          size="fullWidth"
                          variant="borderless"
                          tabIndex={4}
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

export default WebsiteCollectionDatesUI;
