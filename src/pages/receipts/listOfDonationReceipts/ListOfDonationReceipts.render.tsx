import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ListOfDonationReceipts.module.scss';
import { Table } from '@/ui/Table';
import { ListOfDonationReceiptsColumn } from './component';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { BackToPageButton, DetailButton, SaveButton, SearchButton } from '@/components/commonButtons';


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

interface BearingSuppliersProps {

}

const ListOfDonationReceiptsUI: React.FC<BearingSuppliersProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <span>{t('L_NOT_MAIL')}</span>
          <div className={classes.flex}>
              <Input
                label={t('L_TOTAL')}
                orientation='horizontal'
                type="amount"
                maxLength={10}
                size='fullWidth'
              />
              <Input
                type="number"
                maxLength={4}
                size='fullWidth'
              />
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
        <BackToPageButton tabIndex={1}/>
        <SearchButton tabIndex={2}/>
        <SaveButton tabIndex={3}/>
        <DetailButton tabIndex={4}/>
        <span>{t('L_NOT_MAIL')}</span>
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('')}
        screenNumber="1323"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListOfDonationReceiptsColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'catalog_no':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=""
                          type="number"
                          id="catalog_no"
                          maxLength={10}
                          size='fullWidth'
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
                          maxLength={21}
                          pattern={REGEX.allCharacter}
                          size='fullWidth'
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
                          maxLength={7}
                          pattern={REGEX.allCharacter}
                          size='fullWidth'
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
                          maxLength={12}
                          pattern={REGEX.allCharacter}
                          size='fullWidth'
                        />
                      </div>
                    );
                  case 'catalog_no2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePickerComponent
                          selectedDate={new Date()}
                          onChange={() => {}}
                          placeholder=" "
                          id="L_DATE"
                          size="fullWidth"
                          orientation="vertical"
                        />
                      </div>
                    );
                  case 'discription2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="discription"
                          maxLength={5}
                          size='fullWidth'
                        />
                      </div>
                    );
                  case 'codeDescription2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="codeDescription"
                          maxLength={9}
                          size='fullWidth'
                        />
                      </div>
                    );
                  case 'date1':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="date"
                          maxLength={16}
                          size='fullWidth'
                        />
                      </div>
                    );

                  case 'date2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="amount"
                          id="date"
                          maxLength={10}
                          size='fullWidth'
                        />
                      </div>
                    );

                  case 'check':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" orientation="horizontal" checked={row.check} />
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

export default ListOfDonationReceiptsUI;
