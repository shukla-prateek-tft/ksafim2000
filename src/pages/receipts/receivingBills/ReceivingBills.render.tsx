import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ReceivingBills.module.scss';
import { Table } from '@/ui/Table';
import { ScholarshipSectionColumn, CentralizedCorrectionColumn } from './components';
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
import { BiSend } from 'react-icons/bi';
import { DatePicker } from '@/ui/DatePicker';
import { REGEX } from '@/constants/appConstant';

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

const ReceivingBillsUI: React.FC<CancelingAPaymentOrderProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div>{t('L_MOVE_TYPE')}</div>
        <div className={classes.bottomContainer}>
          <div className={classes.flex}>
            <Input label={t('L_TOTAL_DETH')} orientation="horizontal" />
            <Input label={t('L_TOTAL_DEDUCT')} orientation="horizontal" />
          </div>

          <div className={classes.flex}>
            <Input label={t('L_SIGNED')} orientation="horizontal" />
            <Input label={t('L_TOTAL')} orientation="horizontal" />
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
          <Button size="md" title={t('L_BOITOM_BTN_MCFW0621')} />
          <Button size="md" title={t('L_PB6')} />
          <Button size="md" title={t('L_RECEPT_ASHRAIT')} />
          <Button size="md" title={t('L_CREDIT_CONFIRM')} />
          <Button size="md" title={t('L_MAKE_DISCOUNT')} />
          <Button size="md" title={t('L_PERCENT_DISC')} />
          <Button size="md" title={t('L_LEAVE_MARKED')} />
          <Button size="md" title={t('L_MAKE_DISCOUNT')} />
          <Button size="md" title={t('L_SHOW_CHILDS')} />
          <Button size="md" title={t('L_LOAD_CALC_STUD')} />
          <Button size="md" title={t('L_COPY')} />
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
        screenNumber="0621"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Flex gap="10px">
                <Select tabIndex={0}  label={t('L_BANK_ACC')} options={[]} orientation="horizontal" />
                <Select tabIndex={0}  options={[]} orientation="horizontal" />
              </Flex>
              <Input pattern={REGEX.allCharacter} maxLength={60} label={t('L_MAIL_ADD')} orientation="horizontal" />
              <Input pattern={REGEX.allCharacter} maxLength={100} label={t('L_REMARK')} orientation="horizontal" />
              <Select tabIndex={0}  label={t('L_PROJECT')} options={[]} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.rangeItem}>
                <Input type='number' maxLength={10} label={t('L_PAYER')} orientation="horizontal" />
                <Input disabled />
                <Button renderIcon={<BiSend size={12} color="green" />} variant="outline" />
              </div>
              <Select tabIndex={0}  label={t('L_MAIL')} options={[]} orientation="horizontal" />
              <Select tabIndex={0}  label={t('L_PAYER_ACC')} options={[]} orientation="horizontal" />
              <Input label={t('L_WITH_LEAVING')} orientation="horizontal" type="checkbox" />
            </div>
            <div className={classes.innerContainer}>
              <Input type='text' maxLength={7} label={t('L_DOCUMENT')} orientation="horizontal" />
              <Input label={t('L_EMAIL_SEND')} orientation="horizontal" type="checkbox" />
              <DatePicker  onChange={() => {}} label={t('L_PAY_DATE')} orientation="horizontal" />
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
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'vineCode':
                    return (
                      <div>
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
                          disabled
                        />
                      </div>
                    );
                  case 'codeDescription':
                    return (
                      <div>
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
                  case 'accountant':
                    return (
                      <div>
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
                          disabled
                        />
                      </div>
                    );
                  case 'appSecond':
                    return (
                      <div>
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
                          disabled
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
                  case 'codeDescription2':
                    return (
                      <div>
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
                          disabled
                        />
                      </div>
                    );
                  case 'accountant2':
                    return (
                      <div>
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
                  case 'list2':
                    return (
                      <div>
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
                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
          </div>
          <div className={classes.flexEnd}>
            <Input label={t('L_PAY_DATE')} orientation="horizontal" />
          </div>
        </Card>
        <Card title={t('L_PAYED_FOR')}>
          <div className={classes.addInvoiceTable}>
            <Table
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
                          type="text"
                          id="codeDescription"
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
                  case 'STUDENT_ID':
                    return (
                      <div>
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
                  case 'FAMILY_NAME':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                        <Flex gap="2px">
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                            disabled
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                            disabled
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
                            variant="borderless"
                            disabled
                          />
                          <Input
                            label=" "
                            type="text"
                            id="catalog_no"
                            maxLength={16}
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
                  case 'ASS_CO':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
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
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
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

export default ReceivingBillsUI;
