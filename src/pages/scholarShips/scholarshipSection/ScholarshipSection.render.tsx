import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ScholarshipSection.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionColumn, ScholarshipSectionColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  Button,
  CancelButton,
  DetailButton,
  SaveButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';

import { Flex } from '@/ui/Flex/Flex';
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
  },
  {
    catalog_no: 'INV-002',
    discription: '2025-06-05',
    codeDescription: 'Ref002',
    date: '2500.50',
    check: false
  }
];
interface ScholarshipSectionProps {}

const ScholarshipSectionUI: React.FC<ScholarshipSectionProps> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <span>{t('L_0639_DESC')}</span>
          <div className={classes.flex}>
            <Input
              aria-required="true"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              id="inv_Desc_Aut"
              label={t('L_SIGNED')}
              orientation="horizontal"
            />
            <Input
              aria-required="true"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              id="L_TOTAL"
              label={t('L_TOTAL')}
              orientation="horizontal"
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
        <Button size="md" title={t('L_SHOW_CHILDREN')} />
        <Button size="md" title={t('L_CLAIM_CLAUSES_OF_RIGHT')} />
        <Button size="md" title={t('L_LOAD_AND_CALCULATE')} />
        <Button size="md" title={t('L_BALANCE2')} />
        <Button size="md" title={t('L_LOAD_AMOUNT')} />
        <Button size="md" title={t('L_REMAINING_MARKED')} />

        <CancelButton />
        <AddButton />
        <SaveButton />
        <DetailButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        // screenName={t('T_MCFW0639')}
        screenNumber="0639"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFW0639')}>
          <div className={classes.mainContainer}>
            <div className={classes.childDiv}>
              <Input
                label={t('L_DOCUMENT')}
                disabled
                orientation="horizontal"
                size="lg"
                pattern={REGEX.allCharacter}
                maxLength={7}
              />
              <Select
                label={t('L_ACC_ACT_TYPE')}
                options={[
                  { label: 'Standard', value: '1' },
                  { label: 'Reduced', value: '2' },
                  { label: 'Zero', value: '3' },
                  { label: 'Exempt', value: '4' }
                ]}
                placeholder=""
                id="vat_type"
                orientation="horizontal"
                size="lg"
                tabIndex={0}
              />
            </div>
            <div className={classes.childDiv}>
              <div className={classes.flex}>
                <Input
                  label={t('L_SCHOLARSHIP')}
                  orientation="horizontal"
                  size="lg"
                  type="number"
                  maxLength={10}
                />
                <Input
                  disabled
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={20}
                />
              </div>
              <Input label={t('L_OPOSIT_CARD')} disabled orientation="horizontal" size="lg" />
            </div>
            <div className={classes.childDiv}>
              <DatePicker label={t('L_PAY_DATE')} orientation="horizontal" size="lg" />
              <Input
                label={t('L_REMARK')}
                orientation="horizontal"
                size="lg"
                pattern={REGEX.allCharacter}
                maxLength={100}
              />
            </div>
          </div>
        </Card>
        <Card title={t('L_FROM_STUDENT')}>
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

                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
            <Flex justifyContent="end">
              <Input className={classes.inputShort} disabled orientation="horizontal" />
            </Flex>
          </div>
        </Card>
        <Card title={t('L_FOR_STUDENT')}>
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
                  case 'STUDENT_ID':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Flex gap="1px">
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
                        </Flex>
                      </div>
                    );
                  case 'FAMILY_NAME':
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
                  case 'FAMILY_NAME2':
                    return (
                      <Input
                        label=" "
                        type="text"
                        id="catalog_no"
                        maxLength={16}
                        variant="borderless"
                      />
                    );
                  case 'ASS_CO':
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
                  case 'LEFT_DATE':
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

export default ScholarshipSectionUI;
