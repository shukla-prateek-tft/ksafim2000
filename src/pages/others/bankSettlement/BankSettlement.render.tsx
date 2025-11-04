import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './BankSettlement.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionColumn, CentralizedCorrectionColumn2 } from './Column';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  Button,
  DetailButton,
  OtherDetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { GroupRadio } from '@/ui/GroupRadio';
import { DatePicker } from '@/ui/DatePicker';

const data2 = [
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  }
];
interface BankSettlementProps {}

const BankSettlementUI: React.FC<BankSettlementProps> = () => {
  const { t } = useTranslation('common');
  const hidden = true;

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <div className={classes.innerBottomContainer}>
            <div className={classes.innerBottomBox}>
              <Input
                label={t('L_SIGN_ALLS')}
                orientation="horizontal"
                type="checkbox"
                tabIndex={20}
              />
              <Button size="md" title={t('L_MCFW0627_BUTTON')} tabIndex={21} />
            </div>
            <div className={classes.innerBottomBox}>
              <Input
                label={t('L_CANCEL_INFO')}
                orientation="horizontal"
                type="checkbox"
                tabIndex={22}
              />
              <Button size="md" title={t('L_MCFW0627_BUTTON')} tabIndex={23} />
            </div>
          </div>
          <div className={classes.innerBottomContainer}>
            <div className={classes.innerFirstInputs}>
              <Input label={t('L_MCFW0627_INPUT')} type="number" maxLength={5} tabIndex={24} />
              <div className={classes.amountInput}>
                <Input
                  type="amount"
                  maxLength={11}
                  onChange={() => {}}
                  onBlur={() => {}}
                  tabIndex={25}
                />
              </div>
            </div>
            <Input
              label={t('L_INC_VALUE')}
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
              tabIndex={26}
            />
            <div className={classes.innerFirstInputs}>
              <Input label={t('L_MCFW0627_INPUT2')} type="number" maxLength={5} tabIndex={27} />
              <div className={classes.amountInput}>
                <Input
                  type="amount"
                  maxLength={11}
                  onChange={() => {}}
                  onBlur={() => {}}
                  tabIndex={28}
                />
              </div>
            </div>
          </div>
        </div>
        <span>{t('L_MCFW0627_BOTTOM_TEXT')}</span>
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
        <DetailButton />
        <OtherDetailButton />
        <Button size="md" title={t('L_CANCEL_MATCH')} />
        <Button size="md" title={t('L_MARK_REFERENCE')} />
        <Button size="md" title={t('L_AUTO_MATCH')} />
        <SearchButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1388')}
        screenNumber="0627"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_OUTCOME_DETAIL')}>
          <div className={classes.outerContainer}>
            <Input label={t('L_BANK_ACC')} orientation="horizontal" size="lg" tabIndex={1} />
          </div>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainerSecond}>
              <GroupRadio
                onChange={() => {}}
                title={t('L_GROUP_RADIO_LABEL_MCFW0627')}
                orientation="horizontal"
                options={[
                  { label: t('V_UNMERGE_ONLY'), value: 'dsdsd' },
                  { label: t('V_ALL'), value: 'dsdsd' },
                  { label: t('L_KALEND_YEAR'), value: 'dsdsd' },
                  { label: t('L_KALEND_YEAR'), value: 'dsdsd' }
                ]}
                name={''}
                selectedValue={''}
                size="sm"
                tabIndex={2}
              />
              <div className={classes.innerBox}>
                <Input label={t('L_MERGE')} type="number" maxLength={5} tabIndex={3} />
                <DatePicker
                  selectedDate={''}
                  onChange={() => {}}
                  label={t('L_VALUE_DATE')}
                  tabIndex={4}
                />
                <Input label={t('L_Reference')} type="number" maxLength={16} tabIndex={5} />
                <Input
                  label={t('L_SUM')}
                  type="amount"
                  maxLength={11}
                  onChange={() => {}}
                  onBlur={() => {}}
                  tabIndex={6}
                />
              </div>
            </div>
            <div className={classes.innerContainer}>
              {!hidden && <Select options={[]} />}
              <Button size="md" title={t('L_SEARCH')} tabIndex={7} />
            </div>
          </div>
        </Card>

        <Card>
          <div className={classes.titleContainer}>
            <span>{t('L_BOOKS')}</span>
            <span>{t('L_BANK_ONLY')}</span>
          </div>
          <div className={classes.addInvoiceTable}>
            <Table
              tableHeaderClassName={classes.tableHeader}
              columns={CentralizedCorrectionColumn()}
              data={data2}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'LEFT_DATE2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="checkbox"
                          id="codeDescription"
                          maxLength={16}
                          tabIndex={8}
                        />
                      </div>
                    );
                  case 'STUDENT_ID':
                    return (
                      <div>
                        <Input label=" " type="number" id="catalog_no" maxLength={5} tabIndex={9} />
                        <Input label=" " id="catalog_no" disabled />
                      </div>
                    );
                  case 'FAMILY_NAME':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePicker
                          label=" "
                          id="catalog_no"
                          selectedDate={''}
                          onChange={() => {}}
                          tabIndex={10}
                        />
                      </div>
                    );
                  case 'FAMILY_NAME2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={16}
                          tabIndex={11}
                        />
                      </div>
                    );
                  case 'ASS_CO':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="codeDescription"
                          maxLength={1}
                          tabIndex={12}
                        />
                        <Input
                          label=" "
                          type="amount"
                          id="codeDescription"
                          maxLength={11}
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={13}
                        />
                      </div>
                    );

                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />

            <Table
              tableHeaderClassName={classes.tableHeader}
              columns={CentralizedCorrectionColumn2()}
              data={data2}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'LEFT_DATE2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input label=" " type="checkbox" id="codeDescription" tabIndex={14} />
                      </div>
                    );
                  case 'STUDENT_ID':
                    return (
                      <div>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={6}
                          tabIndex={15}
                        />
                        <Input label=" " id="catalog_no" maxLength={40} disabled />
                      </div>
                    );
                  case 'FAMILY_NAME':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <DatePicker
                          label=" "
                          id="catalog_no"
                          selectedDate={''}
                          onChange={() => {}}
                          tabIndex={16}
                        />
                      </div>
                    );
                  case 'FAMILY_NAME2':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={10}
                          tabIndex={17}
                        />
                      </div>
                    );
                  case 'ASS_CO':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="codeDescription"
                          maxLength={1}
                          tabIndex={18}
                        />
                        <Input
                          label=" "
                          type="amount"
                          id="codeDescription"
                          maxLength={11}
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={19}
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

export default BankSettlementUI;
