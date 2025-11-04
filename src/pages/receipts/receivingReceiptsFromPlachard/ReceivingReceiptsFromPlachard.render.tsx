import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ReceivingReceiptsFromPlachard.module.scss';
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
import { Flex } from '@/components';
import { TextArea } from '@/ui/TextArea';
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

const ReceivingReceiptsFromPlachardUI: React.FC<CancelingAPaymentOrderProps> = () => {
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
        screenNumber="1295"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_OUTCOME_DETAIL')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input type='text' maxLength={7} label={t('L_DOCUMENT')} orientation="horizontal" />
              <Input  label={t('L_EMAIL_SEND')} orientation="horizontal" type="checkbox" />
              <DatePicker selectedDate={new Date()}   onChange={() => {}} label={t('L_PAY_DATE')} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.rangeItem}>
                <Input type='number' maxLength={10} label={t('L_PAYER')} orientation="horizontal" />
                <Input disabled />
              </div>
              <Input  pattern={REGEX.allCharacter} maxLength={60} label={t('L_MAIL')} orientation="horizontal" />
              <Input label={t('L_PAYER_ACC')} orientation="horizontal" />
              <Input label={t('L_WITH_LEAVING')} orientation="horizontal" type="checkbox" />
            </div>
            <div className={classes.innerContainer}>
              <Flex gap="10px">
                <Input label={t('L_BANK_ACC')} orientation="horizontal" />
                <Select
                tabIndex={0} 
                  orientation="horizontal"
                  options={[
                    { label: 'dsd', value: 'dsdsd' },
                    { label: 'dsd', value: 'dsdsd' }
                  ]}
                />
              </Flex>

              <Input pattern={REGEX.allCharacter} maxLength={60} label={t('L_MAIL_ADD')} orientation="horizontal" />
              <div className={classes.marginLeft}>
                <TextArea   orientation="horizontal" label={t('L_REMARK')} />
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

export default ReceivingReceiptsFromPlachardUI;
