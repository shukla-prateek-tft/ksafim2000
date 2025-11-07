import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CreditCard.module.scss';
import { Table } from '@/ui/Table';
import { ScholarshipSectionColumn, CentralizedCorrectionColumn } from './component';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  PrintExcel,
  SaveButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';

import { Flex } from '@/ui/Flex/Flex';
import { TextArea } from '@/ui/TextArea';
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
interface CancelingAPaymentOrderProps {}

const CreditCardUI: React.FC<CancelingAPaymentOrderProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div>{t('L_MOVE_TYPE')}</div>
        <div className={classes.bottomContainer}>
          <div className={classes.flex}>
            <Input
              label={t('L_TOTAL_DETH')}
              orientation="horizontal"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              tabIndex={32}
            />
            <Input
              label={t('L_TOTAL_DEDUCT')}
              orientation="horizontal"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              tabIndex={33}
            />
          </div>

          <div className={classes.flex}>
            <Input
              label={t('L_SIGNED')}
              orientation="horizontal"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              tabIndex={34}
            />
            <Input
              label={t('L_TOTAL')}
              orientation="horizontal"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              tabIndex={35}
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
        <Button size="md" title={t('L_COPY')} />
        <Button size="md" title={t('L_MAKE_DISCOUNT')} />
        <Button size="md" title={t('L_BOITOM_BTN_MCFW0621')} />
        <Button size="md" title={t('L_CREDIT_CONFIRM')} />
        <Button size="md" title={t('L_MAKE_DISCOUNT')} />
        <Button size="md" title={t('L_SHOW_CHILDS')} />
        <Button size="md" title={t('L_LEAVE_MARKED')} />
        <Button size="md" title={t('L_LOAD_CALC_STUD')} />
        <Button size="md" title={t('L_PB1')} />
        <Button size="md" title={t('L_PAYMENT_SPREAD')} />

        <PrintExcel />
        <CancelButton />
        <AddButton />
        <OtherDetailButton />
        <DetailButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1388')}
        screenNumber="1387"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_OUTCOME_DETAIL')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input
                label={t('L_DOCUMENT')}
                orientation="horizontal"
                maxLength={7}
                pattern={REGEX.allCharacter}
                tabIndex={1}
              />
              <Input
                label={t('L_EMAIL_SEND')}
                orientation="horizontal"
                type="checkbox"
                tabIndex={4}
              />
              <DatePicker
                selectedDate={''}
                onChange={() => {}}
                label={t('L_PAY_DATE')}
                orientation="horizontal"
                tabIndex={7}
              />
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.rangeItem}>
                <Input
                  type="number"
                  maxLength={10}
                  label={t('L_PAYER')}
                  orientation="horizontal"
                  tabIndex={2}
                />
                <Input maxLength={20} pattern={REGEX.allCharacter} disabled />
              </div>
              <Input
                maxLength={60}
                pattern={REGEX.allCharacter}
                label={t('L_MAIL')}
                orientation="horizontal"
                tabIndex={5}
              />
              <Input label={t('L_PAYER_ACC')} orientation="horizontal" tabIndex={8} />
              <Input
                label={t('L_WITH_LEAVING')}
                orientation="horizontal"
                type="checkbox"
                tabIndex={10}
              />
            </div>
            <div className={classes.innerContainer}>
              <Flex gap="10px">
                <Input label={t('L_BANK_ACC')} orientation="horizontal" tabIndex={3} />
              </Flex>

              <Input
                maxLength={60}
                pattern={REGEX.allCharacter}
                label={t('L_MAIL_ADD')}
                orientation="horizontal"
                tabIndex={6}
              />
              <div className={classes.marginLeft}>
                <TextArea
                  maxLength={100}
                  orientation="horizontal"
                  label={t('L_REMARK')}
                  tabIndex={9}
                />
              </div>
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
                          id="catalog_no"
                          maxLength={2}
                          variant="borderless"
                          tabIndex={11}
                        />
                      </div>
                    );
                  case 'vineCode':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={3}
                          variant="borderless"
                          tabIndex={12}
                        />
                        <Input label=" " id="catalog_no" variant="borderless" disabled />
                      </div>
                    );
                  case 'codeDescription':
                    return (
                      <div>
                        <DatePicker
                          selectedDate={''}
                          onChange={() => {}}
                          label=" "
                          id="catalog_no"
                          variant="borderless"
                          tabIndex={13}
                        />
                      </div>
                    );
                  case 'accountant':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                          pattern={REGEX.allCharacter}
                          tabIndex={14}
                        />
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={7}
                          variant="borderless"
                          disabled
                          pattern={REGEX.allCharacter}
                        />
                      </div>
                    );
                  case 'list':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={4}
                          variant="borderless"
                          tabIndex={15}
                        />
                      </div>
                    );
                  case 'codeDescription2':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={5}
                          variant="borderless"
                          tabIndex={16}
                        />
                        <Input
                          label=" "
                          id="catalog_no"
                          maxLength={12}
                          variant="borderless"
                          pattern={REGEX.allCharacter}
                          disabled
                        />
                      </div>
                    );
                  case 'accountant2':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={1}
                          variant="borderless"
                          tabIndex={17}
                        />
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={7}
                          variant="borderless"
                          disabled
                        />
                      </div>
                    );
                  case 'appSecond2':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={19}
                          variant="borderless"
                          pattern={REGEX.allCharacter}
                          tabIndex={18}
                        />
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={2}
                          variant="borderless"
                          tabIndex={19}
                        />
                      </div>
                    );
                  case 'list2':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="amount"
                          id="catalog_no"
                          maxLength={11}
                          variant="borderless"
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={20}
                        />
                      </div>
                    );
                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
          </div>
          <div className={classes.flexEnd}>
            <Input
              label={t('L_PAY_DATE')}
              orientation="horizontal"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              tabIndex={21}
            />
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
                      <div className={classes.ListofGefenCell}>
                        <Input type="checkbox" checked={row.check} />
                      </div>
                    );
                  case 'LEFT_DATE2':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="codeDescription"
                          maxLength={10}
                          variant="borderless"
                          tabIndex={22}
                        />
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={30}
                          variant="borderless"
                          pattern={REGEX.allCharacter}
                          tabIndex={23}
                        />
                      </div>
                    );
                  case 'STUDENT_ID':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={2}
                          variant="borderless"
                          tabIndex={24}
                        />
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={6}
                          variant="borderless"
                          tabIndex={25}
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
                          tabIndex={26}
                        />
                        <Flex gap="2px">
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={24}
                            variant="borderless"
                            disabled
                            pattern={REGEX.allCharacter}
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={20}
                            variant="borderless"
                            disabled
                            pattern={REGEX.allCharacter}
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={20}
                            variant="borderless"
                            disabled
                            pattern={REGEX.allCharacter}
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
                          tabIndex={27}
                        />
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                          tabIndex={28}
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
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={29}
                        />
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={2}
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
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={30}
                        />

                        <Input
                          label=" "
                          type="amount"
                          id="catalog_no"
                          maxLength={11}
                          variant="borderless"
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={31}
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

export default CreditCardUI;
