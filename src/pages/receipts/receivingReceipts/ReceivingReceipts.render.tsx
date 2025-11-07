import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ReceivingReceipts.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionColumn, ScholarshipSectionColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import {
  AddButton,
  Button,
  CancelButton,
  OtherDetailButton,
  DetailButton,
  SaveButton,
  PrintExcel,
  BackToPageButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';

import { Flex } from '@/ui/Flex/Flex';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { BiSend } from 'react-icons/bi';
import { Select } from '@/ui/Select';
import { REGEX } from '@/constants/appConstant';
import { DatePicker } from '@/ui/DatePicker';

const data = [
  {
    L_Invoice_Number: 'No error',
    vineCode: 'VC001',
    codeDescription: 'Code 001 Description',
    accountant: 'John Doe',
    appSecond: 'Jane Smith',
    list: 'List Item A'
  }
];
const data2 = [
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  }
];
interface ReceivingReceiptsProps {}

const ReceivingReceiptsUI: React.FC<ReceivingReceiptsProps> = () => {
  const { t } = useTranslation('common');
  const hidden = true;

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <div className={classes.flex}>
            <Input
              aria-required="true"
              type="amount"
              maxLength={11}
              id="inv_Desc_Aut"
              label={t('L_TOTAL_DETH')}
              orientation="horizontal"
              tabIndex={32}
            />
            <Input
              aria-required="true"
              type="amount"
              maxLength={11}
              id="L_TOTAL"
              label={t('L_TOTAL_DEDUCT')}
              orientation="horizontal"
              tabIndex={33}
            />
          </div>
          <div className={classes.flex}>
            <Input
              aria-required="true"
              type="amount"
              maxLength={11}
              id="inv_Desc_Aut"
              label={t('L_SIGNED')}
              orientation="horizontal"
              tabIndex={34}
            />
            <Input
              aria-required="true"
              type="amount"
              maxLength={11}
              id="L_TOTAL"
              label={t('L_TOTAL')}
              orientation="horizontal"
              tabIndex={35}
            />
          </div>
        </div>

        <BottomToolBar
          pagination={{
            pageSize: 10,
            pageNumber: 1,
            totalPages: 5,
            totalCount: 50,
            hasPreviousPage: false,
            hasNextPage: true
          }}
          showPagination={true}
        />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <PrintExcel />
        <CancelButton />
        <AddButton />
        <OtherDetailButton />
        <DetailButton />
        <SaveButton />
        <BackToPageButton />
      </div>
    );
  };

  const TopCardHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <Button size="md" title={t('L_DISCOUNT_S')} />
        <Button size="md" title={t('L_PERCENT_DIS')} />
        <Button size="md" title={t('L_LEAVE_MARKED')} />
        <Button size="md" title={t('L_MAKE_DISCOUNT')} />
        <Button size="md" title={t('L_SHOW_CHILDS')} />
        <Button size="md" title={t('L_LOAD_CALC_STUD')} />
        <Button size="md" title={t('L_PAYMENT_SPREAD')} />
        <Button size="md" title={t('L_MCSR0138')} />
        <Button size="md" title={t('L_PERCENT_DISC')} />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('topHeader')}
        screenNumber="1381"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_DOCUMENT')} renderHeaderItems={<TopCardHeader />}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input
                maxLength={7}
                pattern={REGEX.allCharacter}
                label={t('L_DOCUMENT')}
                orientation="horizontal"
                disabled
                size="md"
              />
              <Input
                type="checkbox"
                label={t('L_EMAIL_SEND')}
                orientation="horizontal"
                tabIndex={3}
              />

              <DatePicker
                selectedDate={''}
                label={t('L_PAY_DATE')}
                placeholder=" "
                orientation="horizontal"
                size="md"
                onChange={() => {}}
                tabIndex={6}
              />
              {!hidden && (
                <Select
                  orientation="horizontal"
                  label={t('L_PROJECT')}
                  options={[
                    { label: 'dsd', value: 'dsdsd' },
                    { label: 'dsd', value: 'dsdsd' }
                  ]}
                  size="md"
                />
              )}
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.rangeItem}>
                <Input
                  type="number"
                  maxLength={10}
                  label={t('L_PAYER')}
                  orientation="horizontal"
                  tabIndex={1}
                />
                <Input maxLength={20} pattern={REGEX.allCharacter} disabled />
                <Button variant="link" renderIcon={<BiSend size={16} color="green" />} />
              </div>
              <Input
                label={t('L_MAIL')}
                orientation="horizontal"
                size="fullWidth"
                maxLength={60}
                pattern={REGEX.allCharacter}
                tabIndex={4}
              />
              <Input
                label={t('L_PAYER_ACC')}
                orientation="horizontal"
                size="fullWidth"
                tabIndex={7}
              />
              <Input
                type="checkbox"
                label={t('L_WITH_LEAVING')}
                orientation="horizontal"
                tabIndex={9}
              />
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.bankContent}>
                <Input label={t('L_BANK_ACC')} orientation="horizontal" tabIndex={2} />
                {!hidden && (
                  <Select
                    orientation="horizontal"
                    label={t('B')}
                    options={[
                      { label: 'dsd', value: 'dsdsd' },
                      { label: 'dsd', value: 'dsdsd' }
                    ]}
                  />
                )}
              </div>
              <Input
                label={t('L_MAIL_ADD')}
                orientation="horizontal"
                size="fullWidth"
                maxLength={60}
                pattern={REGEX.allCharacter}
                tabIndex={5}
              />
              <Input
                label={t('L_REMARK')}
                orientation="horizontal"
                size="fullWidth"
                maxLength={100}
                pattern={REGEX.allCharacter}
                tabIndex={8}
              />
            </div>
          </div>
        </Card>
        <Card title={t('L_RECIEPT_DETAIL')}>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ScholarshipSectionColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'L_Invoice_Number':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          maxLength={2}
                          variant="borderless"
                          tabIndex={10}
                        />
                      </div>
                    );
                  case 'vineCode':
                    return (
                      <div className={classes.ListofGefenCellCol}>
                        <Input
                          label=" "
                          type="number"
                          maxLength={2}
                          variant="borderless"
                          tabIndex={11}
                        />
                        {!hidden && (
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="filled"
                            disabled
                          />
                        )}
                      </div>
                    );
                  case 'codeDescription':
                    return (
                      <div className={classes.ListofGefenCellCol}>
                        <DatePicker
                          selectedDate={''}
                          placeholder=" "
                          orientation="horizontal"
                          size="md"
                          onChange={() => {}}
                          tabIndex={12}
                        />
                        {!hidden && (
                          <Input
                            label=" "
                            type="text"
                            maxLength={100}
                            pattern={REGEX.allCharacter}
                            variant="borderless"
                          />
                        )}
                      </div>
                    );
                  case 'accountant':
                    return (
                      <>
                        <div className={classes.ListofGefenCellCol}>
                          <Input
                            label=" "
                            type="text"
                            maxLength={16}
                            pattern={REGEX.allCharacter}
                            variant="borderless"
                            tabIndex={13}
                          />
                          <Input
                            label=" "
                            type="text"
                            maxLength={7}
                            pattern={REGEX.allCharacter}
                            variant="borderless"
                            tabIndex={14}
                          />
                        </div>
                      </>
                    );
                  case 'appSecond':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          maxLength={4}
                          variant="borderless"
                          tabIndex={15}
                        />
                      </div>
                    );
                  case 'list':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          maxLength={4}
                          variant="borderless"
                          tabIndex={16}
                        />
                      </div>
                    );
                  case 'codeDescription2':
                    return (
                      <div className={classes.ListofGefenCellCol}>
                        <Input
                          label=" "
                          type="number"
                          maxLength={5}
                          variant="borderless"
                          tabIndex={17}
                        />
                        <Input
                          label=" "
                          type="text"
                          maxLength={12}
                          pattern={REGEX.allCharacter}
                          variant="borderless"
                          disabled
                        />
                      </div>
                    );
                  case 'accountant2':
                    return (
                      <div className={classes.ListofGefenCellCol}>
                        <Input
                          label=" "
                          type="number"
                          maxLength={1}
                          variant="borderless"
                          tabIndex={18}
                        />
                        <Input
                          label=" "
                          type="number"
                          maxLength={7}
                          variant="borderless"
                          disabled
                        />
                      </div>
                    );
                  case 'appSecond2':
                    return (
                      <div className={classes.ListofGefenCellCol}>
                        <Input
                          label=" "
                          type="text"
                          maxLength={19}
                          pattern={REGEX.allCharacter}
                          variant="borderless"
                          tabIndex={19}
                        />
                        <Input
                          label=" "
                          type="number"
                          maxLength={2}
                          variant="borderless"
                          tabIndex={20}
                        />
                      </div>
                    );
                  case 'list2':
                    return (
                      <div className={classes.ListofGefenCellCol}>
                        <Input
                          label=" "
                          type="amount"
                          maxLength={11}
                          variant="borderless"
                          tabIndex={21}
                        />
                        {!hidden && (
                          <Input
                            label=" "
                            type="text"
                            maxLength={16}
                            pattern={REGEX.allCharacter}
                            variant="borderless"
                          />
                        )}
                      </div>
                    );
                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
            <Flex justifyContent="flex-end">
              <Input
                disabled
                orientation="horizontal"
                label={t('L_TOTAL')}
                type="amount"
                maxLength={11}
              />
            </Flex>
          </div>
        </Card>
        <Card title={t('L_PAYED_FOR')}>
          <div className={classes.addInvoiceTable}>
            <Table
              tableHeaderClassName={classes.tableHeader}
              columns={CentralizedCorrectionColumn()}
              data={data2}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'CHECK':
                    return (
                      <>
                        <div className={classes.ListofGefenCell}>
                          <Input type="checkbox" checked={row.check} tabIndex={22} />
                          <Input
                            label=" "
                            type="number"
                            id="codeDescription"
                            maxLength={10}
                            variant="borderless"
                            tabIndex={23}
                          />
                        </div>
                        <Input
                          label={t('L_DESC')}
                          type="text"
                          id="codeDescription"
                          maxLength={30}
                          pattern={REGEX.allCharacter}
                          orientation="horizontal"
                          variant="borderless"
                          tabIndex={24}
                        />
                      </>
                    );
                  case 'LEFT_DATE2':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="codeDescription"
                          maxLength={2}
                          variant="borderless"
                          tabIndex={25}
                        />
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={6}
                          variant="borderless"
                          tabIndex={26}
                        />
                      </div>
                    );

                  case 'FAMILY_NAME':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={6}
                          variant="borderless"
                          tabIndex={27}
                        />
                        <Flex gap="2px">
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={24}
                            pattern={REGEX.allCharacter}
                            variant="borderless"
                            disabled
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={20}
                            pattern={REGEX.allCharacter}
                            variant="borderless"
                            disabled
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={20}
                            pattern={REGEX.allCharacter}
                            variant="borderless"
                            disabled
                          />
                          <Input
                            label=" "
                            type="number"
                            id="catalog_no"
                            maxLength={2}
                            variant="borderless"
                            disabled
                          />
                        </Flex>
                      </div>
                    );
                  case 'FAMILY_NAME2':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={3}
                          variant="borderless"
                          tabIndex={28}
                        />
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                          tabIndex={29}
                        />
                      </div>
                    );
                  case 'ASS_CO':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="amount"
                          id="codeDescription"
                          maxLength={11}
                          variant="borderless"
                          tabIndex={30}
                        />
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={3}
                          variant="borderless"
                          disabled
                        />
                      </div>
                    );
                  case 'LEFT_DATE':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="amount"
                          id="codeDescription"
                          maxLength={11}
                          variant="borderless"
                          tabIndex={31}
                        />
                        <Input
                          label=" "
                          type="amount"
                          maxLength={11}
                          variant="borderless"
                          disabled
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

export default ReceivingReceiptsUI;
