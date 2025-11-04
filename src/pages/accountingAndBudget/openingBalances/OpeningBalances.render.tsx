import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './OpeningBalances.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './components/Column';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Button } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { BiSend } from 'react-icons/bi';
import { Select } from '@/ui/Select';
import { DatePickerComponent } from '@/components';
import { getInputPattern } from '@/utils/commonHelper';

const data: Array<Record<string, string | boolean>> = [
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
interface OpeningBalancesProps {
  renderActionItems: () => JSX.Element;
}

const OpeningBalancesUI: React.FC<OpeningBalancesProps> = ({ renderActionItems }) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <div className={classes.flex}>
            <span>{t('L_TEMP')}</span>
            <div className={classes.disabledBox}>{''}</div>
            <div className={classes.disabledBox}>{''}</div>
          </div>
          <div className={classes.flex}>
            <span>{t('L_PERMANENT')}</span>
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
    return <div className={classes.topHeaderContainer}>{renderActionItems()}</div>;
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFR0596')}
        screenNumber="0596"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card>
          <div className={classes.mainContainer}>{t('T_MCFR0596')}</div>
        </Card>
        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListofGefenColumn()}
              data={data}
              customRowRenderer={(key, row) => {
                switch (key) {
                  case 'L_Invoice_Number':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          pattern={getInputPattern(6)}
                          variant="borderless"
                          disabled
                        />
                      </div>
                    );
                  case 'Date1':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePickerComponent
                          //   selectedDate={}
                          //   onChange={()}
                          placeholder=" "
                          className="widthDatePicker"
                        />
                      </div>
                    );
                  case 'Date2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePickerComponent
                          //   selectedDate={}
                          //   onChange={()}
                          placeholder=" "
                          className="widthDatePicker"
                        />
                      </div>
                    );
                  case 'vineCode':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          pattern={getInputPattern(3)}
                          id="catalog_no"
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'codeDescription':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          pattern={getInputPattern(16)}
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
                          maxLength={100}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'appSecond':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" checked={row.check as boolean} />
                      </div>
                    );
                  case 'list':
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
                  case 'errorDescription':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'btnText':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="amount"
                          id="catalog_no"
                          maxLength={11}
                          variant="borderless"
                        />
                        <Input
                          label=" "
                          type="amount"
                          id="catalog_no"
                          maxLength={11}
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
                        <Button
                          onClick={() => {}}
                          variant="link"
                          renderIcon={<BiSend size={18} />}
                        />
                      </div>
                    );

                  default:
                    return (row as Record<string, string>)[key];
                }
              }}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default OpeningBalancesUI;
