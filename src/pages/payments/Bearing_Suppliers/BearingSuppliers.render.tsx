import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './BearingSuppliers.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './Components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  BackToPageButton,
  Button,
  DetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { BiSend } from 'react-icons/bi';
import { Select } from '@/ui/Select';
import { DatePicker } from '@/ui/DatePicker';
import { getLengthPattern } from '@/utils/commonHelper';
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
interface Supplier {
  Mesav_Supp_Num: string;
  Mesav_Send_Date: string | null;
  Payment_Date: string | null;
  Mesav_Supp_Ref: string | null;
  Canceled: string | null;
  Mesav_Status: string;
  Total_Supp: number;
  Total_Sum: number;
}

interface BearingSuppliersUIProps {
  suppliers: Supplier[];
}

const BearingSuppliersUI: React.FC<BearingSuppliersUIProps> = ({ suppliers }) => {
  const { t } = useTranslation('common');
  const [paymentDate, setPaymentDate] = useState(new Date());

  const handleDateChange = (e: Date) => {
    setPaymentDate(e);
  };

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <Input
            type="amount"
            pattern={getLengthPattern(10)}
            aria-required="true"
            maxLength={11}
            id="inv_Desc_Aut"
            label={t('L_Bank_Balance')}
            orientation="horizontal"
          />
          <DatePicker
            aria-required="true"
            onChange={() => {}}
            selectedDate={new Date()}
            id="inv_Desc_Aut"
            label={t('L_As_of_Date')}
            orientation="horizontal"
          />
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
        <BackToPageButton />
        <DetailButton />
        <SearchButton />
        <SaveButton />
        <AddButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('')}
        screenNumber="1350"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_Vendor_Tax_Number')}>
          <div className={classes.mainContainer}>
            <Input label={t('L_Tax_Number')} size="lg" disabled orientation="horizontal" />
            <DatePicker
              selectedDate={paymentDate}
              onChange={handleDateChange}
              label={t('L_Payment_Date')}
              size="lg"
              orientation="horizontal"
            />
            <Button size="md" title={t('L_SEARCH')} />
          </div>
        </Card>
        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListofGefenColumn()}
              data={suppliers}
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
                  case 'codeDescription':
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
                  case 'accountant':
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
                  case 'appSecond':
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
                  case 'list':
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
                  case 'errorDescription':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Select
                          label=" "
                          options={[
                            { label: 'Standard', value: '1' },
                            { label: 'Reduced', value: '2' },
                            { label: 'Zero', value: '3' },
                            { label: 'Exempt', value: '4' }
                          ]}
                          placeholder=""
                          id="vat_type"
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'check':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Button
                          onClick={() => {}}
                          variant="link"
                          renderIcon={<BiSend size={18} />}
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

export default BearingSuppliersUI;
