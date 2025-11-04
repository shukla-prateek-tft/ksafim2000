import React from 'react';
import { Flex } from '@/components';
import classes from './userAndPermissionManagement.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/commonButtons';
import { Select } from '@/ui/Select';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { UserAndPermissionManagementUIProps } from './types';
import { REGEX } from '@/constants/appConstant';
import { getInputPattern } from '@/utils/commonHelper';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';

const UserAndPermissionManagementUI = ({
  renderActionItems,
  permissions,
  rolesDropDown,
  schoolJobs
}: UserAndPermissionManagementUIProps) => {
  const { t } = useTranslation('common');

  const dummyOptions = [{ label: 'test parteek', value: 'heello' }];
  const roles = rolesDropDown?.map(r => ({ label: r.caseValue, value: r.caseId }));
  const schoolJobsDrop = schoolJobs?.map(r => ({ label: r.caseValue, value: r.caseId }));

  return (
    <div className={classes.container}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW0603')}</legend>
        <div className={classes.mainTopContainer}>
          <div className={classes.topInnerLeftContainer}>
            <Input
              orientation="horizontal"
              label={t('L_USER_NAME')}
              pattern={REGEX.allCharacter}
              maxLength={15}
              tabIndex={1}
            />
            <Flex>
              <Input
                orientation="horizontal"
                type="checkbox"
                label={t('L_ACTIVE_OFF')}
                tabIndex={3}
              />
              <Input
                orientation="horizontal"
                type="checkbox"
                label={t('L_ACTIVE_OFF')}
                tabIndex={4}
              />
            </Flex>
          </div>
          <div className={classes.topInnerRightContainer}>
            <Input
              orientation="horizontal"
              label={t('L_IDEN')}
              type="number"
              pattern={getInputPattern(10)}
              tabIndex={2}
            />
            <Input
              orientation="horizontal"
              label={t('L_FAMILY_NAME')}
              pattern={REGEX.allCharacter}
              maxLength={24}
              tabIndex={5}
            />
            <Input
              orientation="horizontal"
              label={t('L_PRIVATE_NAME')}
              pattern={REGEX.allCharacter}
              maxLength={20}
              tabIndex={6}
            />
          </div>
        </div>
        <div className={classes.mainTopContainer}>
          <div className={classes.topInnerLeftContainer}>
            <div className={classes.buttonAlignerBox}>
              <Input
                orientation="horizontal"
                label={t('L_NEW_PASSWORD')}
                pattern={REGEX.allCharacter}
                maxLength={20}
                tabIndex={7}
              />
              <Button
                scale="primary"
                variant="outline"
                title={t('L_RESET_PASSWORD')}
                tabIndex={8}
              />
            </div>
            <div className={classes.buttonAlignerBox}>
              <Input
                orientation="horizontal"
                label={t('L_PASSWORD_VERIFICATION')}
                pattern={REGEX.allCharacter}
                maxLength={20}
                tabIndex={10}
              />
            </div>
          </div>
          <div className={classes.topInnerRightContainer}>
            <Input
              orientation="horizontal"
              type="telephone"
              label={t('L_PHONE1')}
              pattern={getInputPattern(10)}
              tabIndex={9}
            />
            <Input
              orientation="horizontal"
              type="telephone"
              label={t('L_PHONE2')}
              pattern={getInputPattern(10)}
              tabIndex={11}
            />
          </div>
        </div>
        <div className={classes.mainTopContainer}>
          <div className={classes.topInnerLeftContainer}>
            <div className={classes.buttonAlignerBox}>
              <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                id="L_DATE"
                size="fullWidth"
                orientation="horizontal"
                label={t('L_LAST_CHANGE')}
                tabIndex={12}
              />
              <Button scale="primary" variant="outline" title={t('L_PASSWORD')} tabIndex={13} />
            </div>
            <Input
              orientation="horizontal"
              label={t('L_PREV_PASSWORD')}
              pattern={REGEX.allCharacter}
              maxLength={200}
              tabIndex={15}
            />
          </div>
          <div className={classes.topInnerRightContainer}>
            <Input orientation="horizontal" label={t('L_MAIL')} type="email" tabIndex={14} />
          </div>
        </div>
        <div className={classes.mainTopContainer}>
          <div className={classes.topInnerLeftContainer}>
            <Input orientation="horizontal" label={t('L_LAST_IN')} tabIndex={16} />
          </div>
          <div className={classes.topInnerRightContainer}>
            <Select
              orientation="horizontal"
              options={schoolJobsDrop}
              label={t('L_SCHOOL_JOB')}
              tabIndex={17}
            />
          </div>
        </div>
        <div className={classes.mainTopContainer}>
          <div className={classes.alignerContainer}>
            <Select
              orientation="horizontal"
              options={roles}
              label={t('L_JOB_PRINCIPAL')}
              tabIndex={18}
            />
          </div>
          <Input
            orientation="horizontal"
            type="checkbox"
            label={t('L_FIRST_CONFIRM')}
            tabIndex={19}
          />
        </div>
        <div className={classes.mainTopContainer}>
          <div className={classes.alignerContainer}>
            <Select
              orientation="horizontal"
              options={dummyOptions}
              label={t('L_QUESTION_2')}
              tabIndex={20}
            />
            <Input orientation="horizontal" tabIndex={21} />
          </div>
          <Input
            orientation="horizontal"
            type="checkbox"
            label={t('L_TWO_CONFIRM')}
            tabIndex={22}
          />
        </div>
        <div className={classes.mainTopContainer}>
          <div className={classes.alignerContainer}>
            <Select orientation="horizontal" options={dummyOptions} label={' '} tabIndex={23} />
            <Input orientation="horizontal" tabIndex={24} />
          </div>
          <Input
            orientation="horizontal"
            type="checkbox"
            label={t('L_INV_CONFIRM')}
            tabIndex={25}
          />
        </div>
        <div className={classes.mainBottomContainer}>
          <label className={classes.legend}>{t('L_SCREEN_TO_USER')}</label>
          <div className={classes.tableItem}>
            <div className={classes.headerItem}>
              <div className={classes.cells}>{t('L_FORM_NO')}</div>
              <div className={classes.cells}>{t('L_DESC')}</div>
              <div className={classes.cells}>{t('L_YES_NO_APPR')}</div>
            </div>
            {permissions?.map(elem => {
              return (
                <div className={classes.bodyItem}>
                  <div className={classes.cells}>
                    <Input orientation="horizontal" tabIndex={26} />
                  </div>
                  <div className={classes.cells}>
                    <Input orientation="horizontal" tabIndex={27} />
                  </div>
                  <div className={classes.cells}>
                    <Input orientation="horizontal" type="checkbox" label={t('L_NO_WIN_RUN')} />
                    <Input orientation="horizontal" type="checkbox" label={t('L_APPROVED')} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
      </fieldset>
    </div>
  );
};

export default UserAndPermissionManagementUI;
