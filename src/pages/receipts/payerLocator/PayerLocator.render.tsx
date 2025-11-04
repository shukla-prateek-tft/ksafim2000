import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './PayerLocator.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { BackToPageButton, Button, SaveButton, SearchButton } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { GroupRadio } from '@/ui/GroupRadio';
import { Select } from '@/ui/Select';
import { PayerLocatorProps } from './types';
import { getInputPattern } from '@/utils/commonHelper';
import { REGEX } from '@/constants/appConstant';

const PayerLocatorUI: React.FC<PayerLocatorProps> = ({
  filters,
  handleChangeFilter,
  data,
  studyYearOptions,
  handleShow,
  handleClear,
  classCodeData = []
}) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <span>{t('L_REMARK')} : </span>
          <span>{t('L_621_DESC')}</span>
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
        <Button onClick={() => {}} title={t('L_SPECIAL_PAYER')} />
        <SearchButton />
        <SaveButton />
        <BackToPageButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('')}
        screenNumber="0621"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFL0621')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <GroupRadio
                name="PayerType"
                selectedValue={String(filters.PayerType)}
                onChange={value => handleChangeFilter({ PayerType: Number(value) })}
                orientation="vertical"
                labelOrientation="horizontal"
                options={[
                  { label: t('V_PARENT'), value: '1' },
                  { label: t('V_TEACHER'), value: '2' },
                  { label: t('V_CITY'), value: '4' },
                  { label: t('V_OTHER'), value: '5' }
                ]}
                tabIndex={0}
              />
            </div>
            <div className={classes.innerContainer}>
              <Input
                label={t('L_ID_CITY_CODE')}
                orientation="horizontal"
                name="Id"
                value={filters.Id}
                onChange={e => handleChangeFilter({ Id: Number(e.target.value) })}
                type="number"
                pattern={getInputPattern(20)}
              />
              <div className={classes.blankSpace}></div>
              <Input
                label={t('L_LASTNAME_CITY')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={12}
              />
              <Select
                options={studyYearOptions}
                value={filters.StudyYear}
                id="StudyYear"
                onChange={e => handleChangeFilter({ StudyYear: Number(e.target.value) })}
                label={t('L_STUDY_YEAR')}
                orientation="horizontal"
                tabIndex={0}
              />
            </div>

            <div className={classes.innerContainer}>
              <Input type="checkbox" label={t('L_RECEPT_ASHRAIT')} orientation="horizontal" />
              <div className={classes.blankSpace}></div>
              <Input
                label={t('L_PRIVATE_NAME')}
                onChange={e => handleChangeFilter({ PrivateName: e.target.value })}
                pattern={REGEX.allCharacter}
                maxLength={12}
                value={filters.PrivateName}
                orientation="horizontal"
              />
              <div className={classes.rangeItem}>
                <Select
                  options={classCodeData?.map(item => ({
                    label: item.desc_Aut,
                    value: item.code
                  }))}
                  onChange={e => handleChangeFilter({ ClassCode: Number(e.target.value) })}
                  label={t('L_CLASS_CODE')}
                  value={filters?.ClassCode}
                  name="Class_Code"
                  orientation="horizontal"
                  size="lg"
                  tabIndex={0}
                />
                <Input
                  orientation="horizontal"
                  value={filters?.ClassNum || ''}
                  onChange={e => handleChangeFilter({ ClassNum: Number(e.target.value) })}
                  type="number"
                  pattern={getInputPattern(2)}
                />
              </div>
            </div>

            <div className={classes.innerContainerLast}>
              <Input type="checkbox" label={t('L_GIFT_RECEPT')} orientation="horizontal" />
              <Input type="checkbox" label={t('L_DEBIT_CERTIF')} orientation="horizontal" />
              <div className={classes.rangeItem}>
                <Button size="md" title={t('L_SEARCH')} onClick={handleShow} />
                <Button size="md" title={t('U_CLEAR')} onClick={handleClear} />
              </div>
            </div>
          </div>
        </Card>
        <Card title={t('L_SELECTED_ROW')}>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListofGefenColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'Id':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={20}
                          // variant="borderless"
                          size="fullWidth"
                        />
                      </div>
                    );
                  case 'Name':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          // type="text"
                          pattern={REGEX.allCharacter}
                          id="catalog_no"
                          maxLength={30}
                          // variant="borderless"
                          size="fullWidth"
                        />
                      </div>
                    );
                  case 'Students':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          // variant="borderless"
                          size="fullWidth"
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

export default PayerLocatorUI;
