import React from 'react';

import { Flex } from '@/ui/Flex/Flex';
import classes from './userAndPermissionManagement.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/commonButtons';
import { Select } from '@/ui/Select';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { UserAndPermissionManagementUIProps } from './types';
import { REGEX } from '@/constants/appConstant';
import { attachMultipleClasses, getInputPattern } from '@/utils/commonHelper';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { ScreenLayout } from '@/ui/Layout';

const UserAndPermissionManagementUI = ({
  renderActionItems,
  permissions,
  rolesDropDown,
  schoolJobs,
  username,
  onUsernameChange,
  onUsernameBlur,
  checkingUser,
  newPassword,
  validPassword,
  onValidPasswordChange,
  onValidPasswordBlur,
  onResetPassword,
  onNewPasswordChange,
  onNewPasswordBlur

}: UserAndPermissionManagementUIProps) => {
  const { t } = useTranslation('common');

  const dummyOptions = [{ label: 'test parteek', value: 'heello' }];
  const roles = rolesDropDown?.map(r => ({ label: r.caseValue, value: r.caseId }));
  const schoolJobsDrop = schoolJobs?.map(r => ({ label: r.caseValue, value: r.caseId }));

  return (
    <ScreenLayout
      screenNumber="MCFW-0612"
      renderHeader={<BottomToolBar renderActionItems={renderActionItems} showPagination={false} />}
      >
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
              value={username}
              onChange={(e:any)=>onUsernameChange((e?.target?.value?? '').toString())}
              onBlur={onUsernameBlur}
              disabled={checkingUser}
              size='md'
            />
            <Flex>
              <Input
                orientation="horizontal"
                type="checkbox"
                label={t('L_ACTIVE_OFF')}
                tabIndex={3}
                size='lg'
              />
              <Input
                orientation="horizontal"
                type="checkbox"
                label={t('L_ACTIVE_OFF')}
                tabIndex={4}
                size='lg'
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
              size='lg'
            />
            <Input
              orientation="horizontal"
              label={t('L_FAMILY_NAME')}
              pattern={REGEX.allCharacter}
              maxLength={24}
              tabIndex={5}
              size='lg'
            />
            <Input
              orientation="horizontal"
              label={t('L_PRIVATE_NAME')}
              pattern={REGEX.allCharacter}
              maxLength={20}
              tabIndex={6}
              size='lg'
            />
          </div>
        </div>
        <div className={classes.mainTopContainer}>
          <div className={classes.topInnerLeftContainer}>
            <div className={classes.buttonAlignerBox}>
              <Input
               id="valid-password-input"
                orientation="horizontal"
                label={t('L_NEW_PASSWORD')}
               // type='password'
                pattern={REGEX.allCharacter}
                maxLength={20}
                tabIndex={7}
                value={validPassword}
                onChange={(e)=>{onValidPasswordChange((e?.target?.value?? '').toString())}}
                onBlur={onValidPasswordBlur}
                size='md'
              />
              <Button
                scale="primary"
                variant="outline"
                title={t('L_RESET_PASSWORD')}
                onClick={onResetPassword}
                tabIndex={8}
              />
            </div>
            <div className={classes.buttonAlignerBox}>
              <Input
               id="new-password-input"
                orientation="horizontal"
                label={t('L_PASSWORD_VERIFICATION')}
                value={newPassword}
                pattern={REGEX.allCharacter}
                maxLength={20}
                tabIndex={10}
                 onChange={(e:any) => onNewPasswordChange((e?.target?.value ?? '').toString())}
                 onBlur={onNewPasswordBlur}
                 size='md'
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
              size='lg'
            />
            <Input
              orientation="horizontal"
              type="telephone"
              label={t('L_PHONE2')}
              pattern={getInputPattern(10)}
              tabIndex={11}
              size='lg'
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
                size="md"
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
              size='md'
            />
          </div>
          <div className={classes.topInnerRightContainer}>
            <Input orientation="horizontal" label={t('L_MAIL')} type="email" tabIndex={14} size='lg'/>
          </div>
        </div>
        <div className={classes.mainTopContainer}>
          <div className={classes.topInnerLeftContainer}>
            <Input orientation="horizontal" label={t('L_LAST_IN')} tabIndex={16} size='md'/>
          </div>
          <div className={classes.topInnerRightContainer}>
            <Select
              orientation="horizontal"
              options={schoolJobsDrop}
              label={t('L_SCHOOL_JOB')}
              tabIndex={17}
              size='lg'
            />
          </div>
        </div>
        <div className={classes.mainTopContainer}>
          {/* <div className={classes.alignerContainer}> */}
          <div className={classes.topInnerLeftContainer}>
            <Select
              orientation="horizontal"
              options={roles}
              label={t('L_JOB_PRINCIPAL')}
              tabIndex={18}
              size='md' 
              disabled
            />
          </div>
          
          {/* <div className={attachMultipleClasses(classes.topInnerRightContainer,classes.checkBoxAligner)}> */}
          <div className={classes.topInnerRightContainer}>
          <Input
            orientation="horizontal"
            type="checkbox"
            label={t('L_FIRST_CONFIRM')}
            tabIndex={19}
            size='fullWidth'
          />
          </div>
          {/* </div> */}
        </div>
        {/* <div className={attachMultipleClasses(classes.mainTopContainer,classes.bottomAlignerContainer)}> */}
        <div className={classes.mainTopContainer}>
          <div className={classes.topInnerLeftContainer}>
            <div style={{display:'flex',gap:'10px'}}>
            <Select
              orientation="horizontal"
              options={dummyOptions}
              label={t('L_QUESTION_2')}
              tabIndex={20}
              size='lg'
              
            />
            <Input orientation="horizontal" tabIndex={21} size='lg'/>
            </div>
          </div>
          <div className={classes.topInnerRightContainer}>
          <Input
            orientation="horizontal"
            type="checkbox"
            label={t('L_TWO_CONFIRM')}
            tabIndex={22}
            size='sm'
          />
          </div>
        </div>
        {/* <div className={attachMultipleClasses(classes.mainTopContainer,classes.bottomAlignerContainer)}> */}
        <div className={classes.mainTopContainer}>
          <div className={classes.topInnerLeftContainer}>
            <div style={{display:'flex',gap:'10px'}}>
            <Select orientation="horizontal" options={dummyOptions} label={' '} tabIndex={23} size='lg'/>
            <Input orientation="horizontal" tabIndex={24} size='lg' />
            </div>
          </div>
          <div className={classes.topInnerRightContainer}>
          <Input
            orientation="horizontal"
            type="checkbox"
            label={t('L_INV_CONFIRM')}
            tabIndex={25}
            size='sm'
          />
          </div>
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
                    <Input orientation="horizontal" tabIndex={26} size='lg'/>
                  </div>
                  <div className={classes.cells}>
                    <Input orientation="horizontal" tabIndex={27} size='lg' />
                  </div>
                  <div className={classes.cells}>
                    <Input orientation="horizontal" type="checkbox" label={t('L_NO_WIN_RUN')} size='lg' />
                    <Input orientation="horizontal" type="checkbox" label={t('L_APPROVED')} size='lg'/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
       
        
      </fieldset>
    </div>
    </ScreenLayout>
  );
};

export default UserAndPermissionManagementUI;
