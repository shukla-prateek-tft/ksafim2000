import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './DepositFromCredit.module.scss';
import { Table } from '@/ui/Table';
import { ListOfDonationReceiptsColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  DetailButton,
  SaveButton,
  SearchButton,
  PrintExcel,
  Button
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';

const data = [
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  },
  {
    catalog_no: 'INV-002',
    discription: '2025-06-05',
    codeDescription: 'Ref002',
    date: '2500.50',
    check: false
  },
  {
    catalog_no: 'INV-003',
    discription: '2025-06-09',
    codeDescription: 'Ref003',
    date: '150.75',
    check: true
  },
  {
    catalog_no: 'INV-004',
    discription: '2025-06-10',
    codeDescription: 'Ref004',
    date: '900.00',
    check: false
  }
];

interface BearingSuppliersProps {}

const DepositFromCreditUI: React.FC<BearingSuppliersProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <div className={classes.flex}>
            <span>{t('L_TOTAL')}</span>
            <div className={classes.disabledBox}>{''}</div>
            <div className={classes.disabledBox}>{''}</div>
          </div>
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
        <DetailButton />
        <SaveButton />
        <PrintExcel />
        <Button title={t('L_DEPOSIT_TMP')} />
        <SearchButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('')}
        screenNumber="0644"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              tableHeaderClassName={classes.tableHeader}
              columns={ListOfDonationReceiptsColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'catalog_no':
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
                  case 'discription':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="discription"
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
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'date':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="date"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'catalog_no2':
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
                  case 'discription2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="discription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'codeDescription2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'date1':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="date"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );

                  case 'date2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="date"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );

                  case 'check':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" />
                      </div>
                    );
                  case 'check2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" />
                      </div>
                    );
                  case 'check3':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" />
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

export default DepositFromCreditUI;
