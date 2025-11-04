import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ListOfCollectionProgram.module.scss';
import { Table } from '@/ui/Table';
import { ListOfCollectionProgramColumns } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { BsExclamationOctagonFill } from 'react-icons/bs';

import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';

import { Select } from '@/ui/Select';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { REGEX } from '@/constants/appConstant';
import {  CollectionProgramResponseType } from './types';

import { GreenButton } from '../suppliers/paymentSupplierOutcome/components';
const data: Array<Record<string, string | boolean>> = [
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

interface ListOfCollectionProgramProps {
  renderActionItems: () => JSX.Element;
  renderHeaderItems: () => JSX.Element;
  listOfCollectionProgramData?: CollectionProgramResponseType;
}

const ListOfCollectionProgram: React.FC<ListOfCollectionProgramProps> = ({
  renderActionItems,
  renderHeaderItems,
  listOfCollectionProgramData
}) => {
  const { t } = useTranslation('common');
  const { data } = listOfCollectionProgramData || {};
  const {
    year_Aut,
    jewish_Year,
    system_Year,
    from_Date,
    to_Date,
    comment,
    comment2,
    s_mess,
    grid
  } = data || {};

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <p>{t('L_MCFW0675_BOTTOM_DESCRIPTION1')}</p>
          <p>{t('L_MCFW0675_BOTTOM_DESCRIPTION2')}</p>
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
        screenName={t('T_MCFW0675')}
        screenNumber="0675"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFW0675')} renderHeaderItems={renderHeaderItems()}>
          <div className={classes.columnContainer}>
            <div>{comment}</div>
            <div>{comment2}</div>
            <div className={classes.rowContainer}>
              <BsExclamationOctagonFill size="36px" color="red" />

              <div className={classes.messContainer}>{t('L_S_MESS')}</div>
              <div className={classes.rowContainer}>
                <Input
                  label={t('L_STUDY_YEAR')}
                  value={year_Aut}
                  type="number"
                  maxLength={4}
                  tabIndex={1}
                />
                <Input disabled isLabel value={jewish_Year} type="text" maxLength={5} />
                <Input
                  label={t('L_FINANCE_YEAR')}
                  value={system_Year}
                  type="number"
                  maxLength={4}
                  tabIndex={2}
                />
                <DatePickerComponent
                  selectedDate={from_Date || new Date()}
                  onChange={() => {}}
                  placeholder=" "
                  id="L_DATE"
                  size="fullWidth"
                  label={t('L_FROM_DATE')}
                  tabIndex={3}
                />
                <DatePickerComponent
                  selectedDate={to_Date || new Date()}
                  onChange={() => {}}
                  placeholder=" "
                  id="L_DATE"
                  size="fullWidth"
                  label={t('L_TO_DATE')}
                  tabIndex={4}
                />
              </div>
            </div>
          </div>
          <div className={classes.InvoiceTable}>
            <Table
              columns={ListOfCollectionProgramColumns()}
              data={grid?.data || []}
              customRowRenderer={(key, row) => {
                switch (key) {
                  case 'study_Group_Kizuz':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input value={row?.study_Group_Kizuz} />
                      </div>
                    );
                  case 'charge':
                    return (
                      <div className={classes.rowContainer}>
                        <Input value={row?.charge} />;
                        <GreenButton />
                      </div>
                    );
                  case 'desc_Aut':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.desc_Aut}
                          id="catalog_no"
                          size="fullWidth"
                          maxLength={16}
                          pattern={REGEX.allCharacter}
                          tabIndex={5}
                        />
                      </div>
                    );
                  case 'full_Name':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          value={row?.full_Name}
                          id="discription"
                          maxLength={30}
                          size="fullWidth"
                          pattern={REGEX.allCharacter}
                          tabIndex={6}
                        />
                      </div>
                    );
                  case 'tot_Sum':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          size="fullWidth"
                          value={row?.tot_Sum}
                          type="amount"
                          min={0}
                          maxLength={11}
                          onChange={() => {}}
                          onBlur={() => {}}
                          tabIndex={7}
                        />
                      </div>
                    );

                  case 'auto_Set':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          checked={Boolean(row?.auto_Set)}
                          type="checkbox"
                          id="catalog_no"
                          size="fullWidth"
                          tabIndex={9}
                        />
                      </div>
                    );
                  case 'from_Grade':
                    return (
                      <div className={classes.rowContainer}>
                        <Input
                          value={row?.from_Grade}
                          size="sm"
                          type="number"
                          tabIndex={10}
                          maxLength={2}
                        />
                        <Input
                          value={row?.from_Class}
                          maxLength={2}
                          type="number"
                          size="sm"
                          tabIndex={11}
                        />
                      </div>
                    );
                  case 'to_Grade':
                    return (
                      <div className={classes.rowContainer}>
                        <Input
                          value={row?.to_Grade}
                          maxLength={2}
                          type="number"
                          size="sm"
                          tabIndex={12}
                        />
                        <Input
                          value={row?.to_Class}
                          maxLength={2}
                          size="sm"
                          type="number"
                          tabIndex={13}
                        />
                      </div>
                    );
                  case 'studyGroup':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.studyGroup}
                          id="text"
                          maxLength={18}
                          size="fullWidth"
                          type="number"
                          tabIndex={14}
                        />
                      </div>
                    );
                  case 'group_Name':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.group_Name}
                          type="text"
                          id="text"
                          size="fullWidth"
                          disabled
                          tabIndex={15}
                        />
                      </div>
                    );

                  case 'payTypeMinipay':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Select
                          options={[
                            { label: 'Standard', value: '1' },
                            { label: 'Reduced', value: '2' },
                            { label: 'Zero', value: '3' },
                            { label: 'Exempt', value: '4' }
                          ]}
                          value={row?.payTypeMinipay}
                          placeholder=""
                          id="vat_type"
                          size="fullWidth"
                          orientation="horizontal"
                          tabIndex={16}
                        />
                      </div>
                    );
                  default:
                    return (row as Record<string, string | boolean>)[key];
                }
              }}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default ListOfCollectionProgram;
