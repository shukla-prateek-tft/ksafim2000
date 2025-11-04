import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NewBankStatements.module.scss';
import { Table } from '@/ui/Table';
import { ListOfDonationReceiptsColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  PrintExcel,
  SaveButton,
  SearchButton,
  BackToPageButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { DatePicker } from '@/ui/DatePicker';

interface BearingSuppliersProps {
  data: Array<Record<string, string>>;
}

const NewBankStatementsUI: React.FC<BearingSuppliersProps> = ({ data }: BearingSuppliersProps) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <Input
            type="checkbox"
            label={t('L_MARK_ALL_FOR_DELETION')}
            orientation="horizontal"
            tabIndex={20}
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
        <SearchButton />
        <Button size="lg" title={t('L_RECEIVING_BANK_STATEMENTS_FROM_A_FILE')} />
        <PrintExcel />
        <Button size="lg" title={t('L_BETWEEN_ITEMS_BY_DEBT_BALANCE')} />
        <CancelButton />
        <AddButton />
        <SaveButton />
        <OtherDetailButton />
        <DetailButton />
        <BackToPageButton />
        <div>{t('L_NOT_MAIL')}</div>
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('topHeader')}
        screenNumber="0626"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <div className={classes.topDropdown}>
          <Select
            label={t('L_BANK_ACC')}
            orientation="horizontal"
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={1}
          />
        </div>

        <Card>
          <div className={classes.addInvoiceTable}>
            <div className={classes.topTable}>
              <DatePicker selectedDate={''} onChange={() => {}} label={t('L_DATE')} tabIndex={2} />
              <DatePicker
                selectedDate={''}
                onChange={() => {}}
                label={t('L_VALUE_DATE')}
                tabIndex={3}
              />
              <Input type="number" maxLength={10} label={t('L_DOCUMENT')} tabIndex={4} />
              <Select
                label={t('L_BANK_OPERATION')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={5}
              />
              <Input
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                label={t('L_DEBIT')}
                tabIndex={6}
              />
              <Input
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                label={t('L_CREDIT')}
                tabIndex={7}
              />
              <Input type="number" maxLength={6} label={t('L_REST')} tabIndex={8} />
              <Button title={t('L_RETRIEVE_BTN')} size="fullWidth" tabIndex={9} />
              <Button title={t('U_CLEAR')} size="fullWidth" tabIndex={10} />
            </div>

            <Table
              columns={ListOfDonationReceiptsColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'code1':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePicker
                          selectedDate={''}
                          onChange={() => {}}
                          id="catalog_no"
                          variant="borderless"
                          tabIndex={11}
                        />
                      </div>
                    );
                  case 'code2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePicker
                          selectedDate={''}
                          onChange={() => {}}
                          id="discription"
                          variant="borderless"
                          tabIndex={12}
                        />
                      </div>
                    );
                  case 'code3':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="codeDescription"
                          maxLength={10}
                          variant="borderless"
                          tabIndex={13}
                        />
                      </div>
                    );
                  case 'code4':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Select
                          options={[
                            { label: 'dsd', value: 'dsdsd' },
                            { label: 'dsd', value: 'dsdsd' }
                          ]}
                          tabIndex={14}
                        />
                      </div>
                    );
                  case 'code5':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          id="date"
                          variant="borderless"
                          type="amount"
                          maxLength={11}
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={15}
                        />
                      </div>
                    );
                  case 'code6':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          id="catalog_no"
                          variant="borderless"
                          type="amount"
                          maxLength={11}
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={16}
                        />
                      </div>
                    );
                  case 'code7':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          id="discription"
                          variant="borderless"
                          type="amount"
                          maxLength={11}
                          onChange={() => {}}
                          onBlur={() => {}}
                          disabled
                        />
                      </div>
                    );
                  case 'code8':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="codeDescription"
                          maxLength={6}
                          variant="borderless"
                          tabIndex={17}
                        />
                      </div>
                    );
                  case 'code9':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Select
                          options={[
                            { label: '1', value: 'קליטה מקובץ' },
                            { label: '2', value: 'קליטה ידנית' }
                          ]}
                          tabIndex={18}
                        />
                      </div>
                    );

                  case 'code10':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="date"
                          maxLength={15}
                          variant="borderless"
                          disabled
                        />
                      </div>
                    );

                  case 'code11':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" checked={row.check} tabIndex={19} />
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

export default NewBankStatementsUI;
