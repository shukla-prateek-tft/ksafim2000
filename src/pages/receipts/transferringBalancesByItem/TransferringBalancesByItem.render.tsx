import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './TransferringBalancesByItem.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionColumn } from './component';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  AddButton,
  Button,
  CancelButton,
  OtherDetailButton,
  DetailButton,
  SaveButton,
  SearchButton,
  BackToPageButton
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';

import clsx from 'clsx';
import { Select } from '@/ui/Select';
import { GrErase } from 'react-icons/gr';
import { REGEX } from '@/constants/appConstant';

const data2 = [
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  },
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  },
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  }
];
interface ReceivingReceiptsProps {}

const TransferringBalancesByItemUI: React.FC<ReceivingReceiptsProps> = () => {
  const { t } = useTranslation('common');
  const hidden = true;

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <div className={classes.flex}>
            <Input
              type="checkbox"
              label={t('L_SIGN_ALLS')}
              orientation="horizontal"
              tabIndex={30}
            />
            <Input
              type="number"
              maxLength={4}
              id="L_TOTAL"
              label={t('L_STUDENTS_COUNT')}
              orientation="horizontal"
              tabIndex={31}
            />
          </div>
          <div className={classes.bottomFlex}>
            <Input
              type="amount"
              maxLength={11}
              id="L_TOTAL"
              label={t('L_TOTAL')}
              orientation="horizontal"
              disabled
              size="sm"
            />
            <Input
              type="amount"
              maxLength={11}
              id="inv_Desc_Aut"
              orientation="horizontal"
              disabled
              size="sm"
            />
            <Input
              type="amount"
              maxLength={11}
              id="inv_Desc_Aut"
              orientation="horizontal"
              disabled
              size="sm"
            />
            <Input
              type="amount"
              maxLength={11}
              id="inv_Desc_Aut"
              orientation="horizontal"
              disabled
              size="sm"
            />
            <Input
              type="amount"
              maxLength={11}
              id="inv_Desc_Aut"
              orientation="horizontal"
              disabled
              size="sm"
            />
            <Input
              type="amount"
              maxLength={11}
              id="inv_Desc_Aut"
              orientation="horizontal"
              disabled
              size="sm"
            />
            <Input
              type="amount"
              maxLength={11}
              id="inv_Desc_Aut"
              orientation="horizontal"
              disabled
              size="sm"
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
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton />
        <CancelButton />
        <SearchButton />
      </div>
    );
  };
  const ButtonHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <Button size="md" title={t('T_MCFR1376')} />
        <Button size="md" title={t('L_CREDIT_TO_ITEM_BY_DEBT_BALANCE')} />
        <Button size="md" title={t('L_CREDIT_TO_ITEM')} />
        <Button size="md" title={t('L_SUM_DISTRIB')} />
        <Button size="md" title={t('T_MCFL0005')} />
        <Button size="md" title={t('L_MONEY_SIT1')} />
        <Button size="md" title={t('L_BETWEEN_ITEMS_BY_DEBT_BALANCE')} />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('MCFW-1374')}
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card renderHeaderItems={<ButtonHeader />} title={t('L_LOCATING_A_SECTION_TO_TRANSFER')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Select
                size="md"
                orientation="horizontal"
                label={t('L_FROM_YEAR')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={1}
              />
              <Input size="md" label={t('L_SERVICE_TYPE')} orientation="horizontal" tabIndex={5} />
              <Select
                size="md"
                orientation="horizontal"
                label={t('L_ACC_ACT_TYPE')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={7}
              />
              <div className={classes.itemsContainer}>
                <div className={classes.flex}>
                  <Select
                    size="md"
                    orientation="horizontal"
                    label={t('L_CLASS_FROM')}
                    options={[
                      { label: 'dsd', value: 'dsdsd' },
                      { label: 'dsd', value: 'dsdsd' }
                    ]}
                    tabIndex={8}
                  />
                  <Input type="number" maxLength={2} orientation="horizontal" tabIndex={9} />
                </div>
                <div className={classes.flex}>
                  <Select
                    size="md"
                    orientation="horizontal"
                    label={t('L_TO')}
                    options={[
                      { label: 'dsd', value: 'dsdsd' },
                      { label: 'dsd', value: 'dsdsd' }
                    ]}
                    tabIndex={10}
                  />
                  <Input type="number" maxLength={2} orientation="horizontal" tabIndex={11} />
                </div>
              </div>
            </div>
            <div className={classes.innerContainer}>
              <Input size="md" label={t('L_ACC_CARD1')} orientation="horizontal" tabIndex={2} />
              <div className={classes.rangeItem}>
                <Input
                  type="number"
                  maxLength={18}
                  size="md"
                  label={t('L_STUDY_GROUP2')}
                  orientation="horizontal"
                  tabIndex={6}
                />
                <Input size="md" disabled />
              </div>
            </div>
            <div className={clsx(classes.innerContainer, classes.flex)}>
              <span>{t('L_SHOWING_CREDIT_BALANCE')}</span>
              <div className={classes.flex}>
                <Button size="md" title={t('L_SEARCH')} tabIndex={3} />
                <Button renderIcon={<GrErase />} tabIndex={4} />
              </div>
            </div>
          </div>
        </Card>
        <Card title={t('L_PAR_CREDIT')}>
          <div className={classes.secondContainer}>
            <div>
              <div className={classes.flex}>
                <Input
                  label={t('L_FROM_YEAR')}
                  orientation="horizontal"
                  disabled
                  size="fullWidth"
                  maxLength={10}
                  pattern={REGEX.allCharacter}
                />
                {!hidden && (
                  <Input
                    type="number"
                    maxLength={4}
                    label={t('')}
                    orientation="horizontal"
                    disabled
                    size="sm"
                  />
                )}
              </div>
              <Input label={t('L_SERVICE_TYPE')} orientation="horizontal" size="md" tabIndex={12} />
              <Select
                orientation="horizontal"
                label={t('L_ACC_ACT_TYPE')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                size="md"
                tabIndex={14}
              />
            </div>
            <div>
              <Input orientation="horizontal" label={t('L_ACC_CARD1')} size="md" tabIndex={13} />
              <div className={classes.flex}>
                <Input
                  label={t('L_STUDY_GROUP2')}
                  orientation="horizontal"
                  size="fullWidth"
                  type="number"
                  maxLength={18}
                  tabIndex={15}
                />
                <Input disabled />
              </div>
            </div>
            <div>
              <Input
                type="checkbox"
                label={t('L_BROWSING_CREDIT')}
                orientation="horizontal"
                tabIndex={16}
              />
              <Input
                type="checkbox"
                label={t('L_DEBT_BALANCE')}
                orientation="horizontal"
                tabIndex={17}
              />
            </div>
            <div className={classes.flexEnd}>
              {!hidden && (
                <Input size="sm" label={t('L_SUM_DISTRIB1')} orientation="vertical" readOnly />
              )}
            </div>
          </div>
        </Card>
        <Table
          columns={CentralizedCorrectionColumn()}
          data={data2}
          customRowRenderer={(key, row, index) => {
            switch (key) {
              case 'CHECK':
                return (
                  <div className={classes.ListofGefenCell}>
                    <Input type="checkbox" checked={row.check} tabIndex={18} />
                  </div>
                );
              case 'LEFT_DATE2':
                return (
                  <div className={classes.ListofGefenCell}>
                    <Input
                      label=" "
                      type="number"
                      id="codeDescription"
                      maxLength={10}
                      variant="borderless"
                      tabIndex={19}
                    />
                  </div>
                );
              case 'STUDENT_ID':
                return (
                  <div className={classes.ListofGefenCell2}>
                    <Input
                      label=" "
                      type="text"
                      id="catalog_no"
                      maxLength={20}
                      variant="borderless"
                      pattern={REGEX.allCharacter}
                      tabIndex={20}
                    />
                    <Input
                      label=" "
                      type="text"
                      id="catalog_no"
                      maxLength={12}
                      variant="borderless"
                      pattern={REGEX.allCharacter}
                      tabIndex={21}
                    />
                  </div>
                );
              case 'FAMILY_NAME':
                return (
                  <div className={classes.ListofGefenCell2}>
                    <Input
                      label=" "
                      type="text"
                      id="catalog_no"
                      maxLength={20}
                      variant="borderless"
                      pattern={REGEX.allCharacter}
                      tabIndex={22}
                    />
                    <Input
                      label=" "
                      type="number"
                      id="catalog_no"
                      maxLength={2}
                      variant="borderless"
                      tabIndex={23}
                    />
                  </div>
                );
              case 'FAMILY_NAME2':
                return (
                  <div className={classes.ListofGefenCell}>
                    <Input
                      label=" "
                      type="amount"
                      id="catalog_no"
                      maxLength={11}
                      variant="borderless"
                      onChange={() => {}}
                      onBlur={() => {}}
                      tabIndex={24}
                    />
                  </div>
                );
              case 'ASS_CO':
                return (
                  <div className={classes.ListofGefenCell}>
                    <Input
                      label=" "
                      type="amount"
                      id="codeDescription"
                      maxLength={11}
                      variant="borderless"
                      onChange={() => {}}
                      onBlur={() => {}}
                      tabIndex={25}
                    />
                  </div>
                );
              case 'LEFT_DATE':
                return (
                  <div className={classes.ListofGefenCell}>
                    <Input
                      label=" "
                      type="amount"
                      id="codeDescription"
                      maxLength={11}
                      variant="borderless"
                      onChange={() => {}}
                      onBlur={() => {}}
                      tabIndex={26}
                    />
                  </div>
                );
              case 'FAMILY_NAME3':
                return (
                  <div className={classes.ListofGefenCell}>
                    <Input
                      label=" "
                      type="amount"
                      id="catalog_no"
                      maxLength={11}
                      variant="borderless"
                      onChange={() => {}}
                      onBlur={() => {}}
                      tabIndex={27}
                    />
                  </div>
                );
              case 'ASS_CO2':
                return (
                  <div className={classes.ListofGefenCell}>
                    <Input
                      label=" "
                      type="amount"
                      id="codeDescription"
                      maxLength={11}
                      variant="borderless"
                      onChange={() => {}}
                      onBlur={() => {}}
                      tabIndex={28}
                    />
                  </div>
                );
              case 'LEFT_DATE21':
                return (
                  <div className={classes.ListofGefenCell}>
                    <Input
                      label=" "
                      type="amount"
                      id="codeDescription"
                      maxLength={11}
                      variant="borderless"
                      onChange={() => {}}
                      onBlur={() => {}}
                      readOnly
                    />
                  </div>
                );
              case 'LEFT_DATE3':
                return (
                  <div className={classes.ListofGefenCell}>
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
                  </div>
                );
              default:
                return (row as Record<string, any>)[key];
            }
          }}
        />
        <p>{t('this is the hebru txt')} </p>
      </ScreenLayout>
    </>
  );
};

export default TransferringBalancesByItemUI;
