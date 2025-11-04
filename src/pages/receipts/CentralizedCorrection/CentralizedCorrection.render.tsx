import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './CentralizedCorrection.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionColumn } from './component';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Button } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { attachMultipleClasses } from '@/Languages';
import { ListBox } from '@/ui/ListBox';
import { FaCheck, FaQuestion, FaRegHandPointLeft, FaSearch } from 'react-icons/fa';
import { MdOutlineLocalPrintshop } from 'react-icons/md';
const data = [
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
  },
  {
    catalog_no: 'INV-003',
    discription: '2025-06-09',
    codeDescription: 'Ref003',
    date: '150.75',
    check: true
  },
  {
    catalog_no: 'INV-004',
    discription: '2025-06-10',
    codeDescription: 'Ref004',
    date: '900.00',
    check: false
  }
];
interface CentralizedCorrectionProps {
  renderActionItems: () => JSX.Element;
  customRowRender: (key: string, row: any, index: number) => React.ReactNode;
}

const CentralizedCorrectionUI: React.FC<CentralizedCorrectionProps> = ({
  renderActionItems,
  customRowRender
}) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <Footer
      // handlePaginationChange={handlePagination}
      // pagination={pagination}
      />
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <Button variant="outline" scale="warning" renderIcon={<FaQuestion />} />
        <Button variant="outline" scale="base" renderIcon={<FaRegHandPointLeft />} />

        <Button variant="outline" scale="base" renderIcon={<FaSearch />} />
        <Button scale="success" renderIcon={<FaCheck />} />

        <Button variant="outline" scale="base" renderIcon={<MdOutlineLocalPrintshop />} />
        <Button title={t('L_MCSR0137')} />
        <Button title={t('L_STUDENT_CHARGE')} />
        <Button title={t('L_MOVEMENT_BY_BALANCE')} />
        <Button title={t('L_FIXED')} />
        <Button title={t('L_CANCEL_ACTION')} />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('L_LOCATE_BY')}
        screenNumber="1319"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_LOCATE_BY')}>
          <div className={classes.mainContainer}>
            <div className={attachMultipleClasses(classes.childDiv, classes.firstDivChildWidth)}>
              <div className={attachMultipleClasses(classes.flex, classes.spaceBetween)}>
                <Input
                  label={t('L_SERVICE_TYPE')}
                  orientation="horizontal"
                  size="lg"
                  tabIndex={1}
                />
                <Input label={t('L_ACC_CARD')} orientation="horizontal" size="lg" tabIndex={2} />
              </div>
              <div className={attachMultipleClasses(classes.flex, classes.spaceBetween)}>
                <div className={classes.flex}>
                  <Select
                    label={t('L_CLASS_FROM')}
                    options={[
                      { label: 'Standard', value: '1' },
                      { label: 'Reduced', value: '2' },
                      { label: 'Zero', value: '3' },
                      { label: 'Exempt', value: '4' }
                    ]}
                    placeholder=""
                    id="vat_type"
                    // variant="borderless"
                    size="sm"
                    orientation="horizontal"
                    tabIndex={5}
                  />
                  <Input
                    orientation="horizontal"
                    size="sm"
                    type="number"
                    maxLength={2}
                    tabIndex={6}
                  />
                </div>

                <div className={classes.flex}>
                  <Select
                    label={t('L_TO')}
                    options={[
                      { label: 'Standard', value: '1' },
                      { label: 'Reduced', value: '2' },
                      { label: 'Zero', value: '3' },
                      { label: 'Exempt', value: '4' }
                    ]}
                    placeholder=""
                    id="vat_type"
                    // variant="borderless"
                    orientation="horizontal"
                    size="sm"
                    tabIndex={7}
                  />
                  <Input
                    orientation="horizontal"
                    size="sm"
                    type="number"
                    maxLength={2}
                    tabIndex={8}
                  />
                </div>
                <Input
                  orientation="horizontal"
                  type="checkbox"
                  label={t('L_WITH_LEAVING')}
                  checked={true}
                  size="sm"
                  tabIndex={9}
                />
              </div>
              {/* <RangeSelector
                fromLabel={t('L_BALANCE_AMOUNT')}
                toLabel={t('L_TO')}
                labelOrientation="horizontal"
                size="lg"
              /> */}
              <div className={classes.flex}>
                <Input
                  label={t('L_BALANCE_AMOUNT')}
                  orientation="horizontal"
                  type="amount"
                  maxLength={11}
                  onChange={() => {}}
                  onBlur={() => {}}
                  tabIndex={11}
                />
                <Input
                  label={t('L_TO')}
                  orientation="horizontal"
                  type="amount"
                  maxLength={11}
                  onChange={() => {}}
                  onBlur={() => {}}
                  tabIndex={12}
                />
              </div>
            </div>

            <div className={attachMultipleClasses(classes.childDiv, classes.secondDivChildWidth)}>
              <Input
                orientation="horizontal"
                type="checkbox"
                label={t('L_BILLING_CORRECTION')}
                checked={true}
                tabIndex={3}
              />
              <span>{t('L_1319_NOTE')}</span>

              <ListBox
                label={t('L_AMENDMENT')}
                options={[]}
                selectedValues={[]}
                onChange={() => {}}
              />
            </div>

            <div className={attachMultipleClasses(classes.childDiv, classes.flexLeft)}>
              <Button title={t('L_SEARCH')} tabIndex={4} />
              <Button title={t('L_CLEAN')} tabIndex={10} />
            </div>
          </div>
        </Card>
        <Card>
          <div className={classes.flex}>
            <Select
              label={t('L_TO_COMMAND')}
              orientation="horizontal"
              options={[
                { label: 'Standard', value: '1' },
                { label: 'Reduced', value: '2' },
                { label: 'Zero', value: '3' },
                { label: 'Exempt', value: '4' }
              ]}
              tabIndex={13}
            />
            <div className={classes.flex}>
              <Input
                label={t('L_STUDY_GROUP')}
                orientation="horizontal"
                type="number"
                maxLength={18}
                tabIndex={14}
              />
              <Input type="text" disabled />
            </div>
            <span>{t('L_INDIVIDUAL_AMOUNT')}</span>
          </div>
        </Card>
        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={CentralizedCorrectionColumn()}
              data={data}
              customRowRenderer={customRowRender}
            />
          </div>
          <div className={classes.bottomContainer}>
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('L_SIGN_ALLS')}
              checked={true}
              size="fullWidth"
              tabIndex={22}
            />
            <Input
              type="number"
              aria-required="true"
              maxLength={4}
              id="inv_Desc_Aut"
              label={t('L_STUDENTS_COUNT')}
              orientation="horizontal"
              tabIndex={23}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default CentralizedCorrectionUI;
