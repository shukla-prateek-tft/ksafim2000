import React from 'react';
import classes from './StudentDetails.module.scss';
import { Table } from '@/ui/Table';

import { BottomToolBar, DatePickerComponent } from '@/components';
import { useTranslation } from 'react-i18next';
import { ParentDetailsColumn, LearningCentersColumn } from './components';
import { BiSend } from 'react-icons/bi';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { Select } from '@/ui/Select';
import { REGEX } from '@/constants/appConstant';
import { CustomRowRenderType } from '../type';
import { LearnigCenters, ParentsDetails, StudentDataWrapper } from './types';
import { DatePicker } from '@/ui/DatePicker';

interface StudentDetailsUIProps {
  renderActionItems: () => JSX.Element | null;
  customRowRenderForParentDetails: CustomRowRenderType<ParentsDetails>;
  customRowRenderForLearningCenters: CustomRowRenderType<LearnigCenters>;
  studentDetailsData: StudentDataWrapper;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
const StudentDetailsUI = ({
  renderActionItems,
  customRowRenderForParentDetails,
  customRowRenderForLearningCenters,
  studentDetailsData,
  currentPage,
  setCurrentPage
}: StudentDetailsUIProps) => {
  const { t } = useTranslation('common');

  const { data } = studentDetailsData || {};
  const { topGrid, parentsGrid, studentExtraInfoGrid } = data || {};

  const {
    student_Id,
    student_Family_Name,
    student_Private_Name,
    sex,
    semel_Mosad,
    birth_Date,
    class_Code,
    class_Num,
    left_Date,
    code_Zakaut_Lschar_Limud,
    code_Status_Rishum_Ta,
    status_Rishum,
    class_Family_Name,
    class_Private_Name,
    city_Code,
    cityName,
    street,
    build_Num,
    zip,
    phonePrefix,
    phone,
    email_1,
    alfa_Choice_1,
    country,
    studentStatus,
    pay_Way,
    insti,
    alt_Birth_Date,
    e_Mail
  } = topGrid || {};

  const BottomBar = () => {
    return (
      <BottomToolBar
        pagination={{
          pageSize: 10,
          pageNumber: currentPage,
          totalPages: 5,
          totalCount: 50,
          hasPreviousPage: false,
          hasNextPage: true
        }}
        showPagination={true}
        handlePaginationChange={page => setCurrentPage(page)}
      />
    );
  };

  const TopBar = () => {
    return <div className={classes.headerButtons}>{renderActionItems()}</div>;
  };

  return (
    <ScreenLayout screenNumber="MCFW-0582" renderFooter={<BottomBar />} renderHeader={<TopBar />}>
      <div className={classes.mainContainer}>
        <Card title={t('T_MCFW0582')}>
          <div className={classes.topContainer}>
            <div className={classes.formCol}>
              <Input
                label={t('L_MCFW0582_ID')}
                orientation="horizontal"
                size="fullWidth"
                type="number"
                maxLength={10}
                value={student_Id}
              />
              <DatePickerComponent
                className={classes.dateInput}
                label={t('L_BIRTH_DATE')}
                labelClassName={classes.label}
                selectedDate={birth_Date}
              />
              <div className={classes.colItem}>
                <Input
                  label={t('L_CITY')}
                  orientation="horizontal"
                  size="fullWidth"
                  type="number"
                  maxLength={5}
                  value={city_Code}
                />
                <Input
                  disabled
                  orientation="horizontal"
                  size="fullWidth"
                  pattern={REGEX.allCharacter}
                  maxLength={20}
                  value={cityName}
                />
              </div>
              <div className={classes.colItem}>
                <Input
                  label={t('L_PHONE')}
                  orientation="horizontal"
                  type="number"
                  maxLength={10}
                  value={phone}
                />
                <Input
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={5}
                  value={phonePrefix}
                />
              </div>
              <Select
                label={t('L_COUNTRY_UP')}
                options={[{ label: country, value: country }]}
                orientation="horizontal"
                size="fullWidth"
                value={country}
              />
            </div>
            <div className={classes.formCol}>
              <Input
                label={t('L_FAMILY_NAME')}
                orientation="horizontal"
                size="fullWidth"
                pattern={REGEX.allCharacter}
                maxLength={24}
                value={student_Family_Name}
              />
              <div className={classes.colItem}>
                <Select
                  label={t('L_S_CLASS_CODE')}
                  value={class_Code}
                  options={[]}
                  orientation="horizontal"
                />
                <Input
                  size="sm"
                  orientation="horizontal"
                  value={class_Num}
                  type="number"
                  maxLength={2}
                />
              </div>
              <Input
                label={t('L_STREET')}
                orientation="horizontal"
                size="fullWidth"
                value={street}
                pattern={REGEX.allCharacter}
                maxLength={17}
              />
              <Input
                label={t('L_MAIL')}
                orientation="horizontal"
                size="fullWidth"
                pattern={REGEX.allCharacter}
                maxLength={60}
                value={email_1}
              />
              <Select
                label={t('L_REGISTER_STAGE')}
                options={[]}
                orientation="horizontal"
                size="fullWidth"
                value={studentStatus}
              />
            </div>
            <div className={classes.formCol}>
              <Input
                label={t('L_PRIVATE_NAME')}
                orientation="horizontal"
                size="fullWidth"
                value={student_Private_Name}
                pattern={REGEX.allCharacter}
                maxLength={20}
              />
              <DatePickerComponent
                className={classes.dateInput}
                label={t('L_LEFT_DATE')}
                labelClassName={classes.label}
                selectedDate={left_Date}
              />
              <Input
                label={t('L_BUILD_NUM')}
                orientation="horizontal"
                size="fullWidth"
                pattern={REGEX.allCharacter}
                maxLength={5}
                value={build_Num}
              />

              <Select
                label={t('L_PAY_WAY')}
                options={[]}
                orientation="horizontal"
                size="fullWidth"
                value={pay_Way}
              />
            </div>
            <div className={classes.formCol}>
              <Input value={sex} label={t('L_SEX')} orientation="horizontal" size="fullWidth" />
              <Select
                label={t('L_ZAKAUT')}
                options={[]}
                orientation="horizontal"
                size="fullWidth"
                value={code_Zakaut_Lschar_Limud}
              />
              <Input
                label={t('L_ZIP')}
                orientation="horizontal"
                size="fullWidth"
                type="number"
                maxLength={7}
                value={zip}
              />
              <Input
                label={t('L_CHOICE1')}
                orientation="horizontal"
                size="fullWidth"
                pattern={REGEX.allCharacter}
                maxLength={20}
                value={alfa_Choice_1}
              />
              <div className={classes.colItem2}>
                <Input orientation="horizontal" value={insti} />
                <DatePicker
                  onChange={() => {}}
                  orientation="horizontal"
                  selectedDate={alt_Birth_Date}
                />
                <Input
                  orientation="horizontal"
                  value={e_Mail}
                  pattern={REGEX.allCharacter}
                  maxLength={50}
                />
              </div>
            </div>
            <div className={classes.formCol}>
              <div className={classes.colItem}>
                <Input label={t('L_INSTI_CODE')} orientation="horizontal" value={semel_Mosad} />
                <Button variant="link" renderIcon={<BiSend size={12} color="green" />} />
              </div>
              <div className={classes.colItem}>
                <Input
                  label={t('L_MCFW0582_CODE')}
                  orientation="horizontal"
                  type="number"
                  maxLength={2}
                  value={code_Status_Rishum_Ta}
                />
                <Input
                  disabled
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={13}
                  value={status_Rishum}
                />
                <Input
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={24}
                  value={class_Family_Name}
                />
                <Input
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={20}
                  value={class_Private_Name}
                />
              </div>
            </div>
          </div>
        </Card>
        <Card title={t('L_PARENT_DETAIL')}>
          <Table
            customRowRenderer={customRowRenderForParentDetails}
            data={parentsGrid || []}
            columns={ParentDetailsColumn()}
            height="400px"
          />
        </Card>

        <Card title={t('L_MCFW0582_TABLE2_HEADER')}>
          <Table
            customRowRenderer={customRowRenderForLearningCenters}
            data={studentExtraInfoGrid || []}
            columns={LearningCentersColumn()}
            height="400px"
          />
        </Card>
      </div>
    </ScreenLayout>
  );
};

export default StudentDetailsUI;
