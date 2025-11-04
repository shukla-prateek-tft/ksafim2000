import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './LocatingHouseholds.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './Components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Button, SaveButton, SearchButton } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
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
interface LocatingHouseholdsProps {}

const LocatingHouseholdsUI: React.FC<LocatingHouseholdsProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div>{t('L_BOTTOM_TEXT')}</div>
        <div>{t('L_BOTTOM_TEXT2')}</div>
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
        <SearchButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('')}
        screenNumber="0012"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_LOCATE_BY')}>
          <div className={classes.mainContainer}>
            <Input size='md' label={t('L_FAMILY_NAME')}  orientation="horizontal" pattern={REGEX.allCharacter} maxLength={12}/>
            <Input size='md' label={t('L_PRIVATE_NAME')}  orientation="horizontal" pattern={REGEX.allCharacter} maxLength={12}/>
            <Button size="md" title={t('L_SEARCH')} />
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
                          type="number"
                          id="catalog_no"
                          maxLength={10}
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
                          pattern={REGEX.allCharacter}
                          id="catalog_no"
                          maxLength={24}
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
                          pattern={REGEX.allCharacter}
                          id="catalog_no"
                          maxLength={20}
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
                          pattern={REGEX.allCharacter}
                          id="catalog_no"
                          maxLength={20}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'L_Invoice_Number2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          pattern={REGEX.allCharacter}
                          id="catalog_no"
                          maxLength={5}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'vineCode2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          pattern={REGEX.allCharacter}
                          id="catalog_no"
                          maxLength={20}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'codeDescription2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={10}
                          variant="borderless"
                        />
                        <Input
                          label=" "
                          type="text"
                          pattern={REGEX.allCharacter}
                          id="catalog_no"
                          maxLength={5}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'accountant2':
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
                  case 'accountant3':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          pattern={REGEX.allCharacter}
                          id="catalog_no"
                          maxLength={60}
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

export default LocatingHouseholdsUI;
