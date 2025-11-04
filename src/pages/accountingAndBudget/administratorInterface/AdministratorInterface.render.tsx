import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './AdministratorInterface.module.scss';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { DetailButton, OtherDetailButton, SaveButton } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { REGEX } from '@/constants/appConstant';
import { DatePicker } from '@/ui/DatePicker';

interface ReceiptDetailsQueryProps {}

const AdministratorInterfaceUI: React.FC<ReceiptDetailsQueryProps> = () => {
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
        <SaveButton />
        <OtherDetailButton />
        <DetailButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1388')}
        screenNumber="1346"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFW1346')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input
                size="fullWidth"
                label={t('L_ID')}
                orientation="horizontal"
                type="number"
                maxLength={10}
              />
              <Input
                size="fullWidth"
                label={t('L_FAMILY_NAME')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={24}
              />
              <DatePicker size="fullWidth" label={t('L_BIRTH_DATE')} orientation="horizontal" />
            </div>

            <div className={classes.innerContainer}>
              <Input
                size="fullWidth"
                label={t('L_STUDY_YEAR')}
                orientation="horizontal"
                type="number"
                maxLength={4}
              />
              <Input
                size="fullWidth"
                label={t('L_PRIVATE_NAME')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={20}
              />
              <Select
                size="fullWidth"
                label={t('L_NEWCOME_COUNTR')}
                options={[]}
                orientation="horizontal"
                tabIndex={0}
              />
            </div>

            <div className={classes.innerContainer}>
              <Input
                size="fullWidth"
                label={t('L_INSTI_CODE')}
                orientation="horizontal"
                type="number"
              />
              <Input
                size="fullWidth"
                label={t('L_FAMILY_NAME2')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={24}
              />
              <DatePicker size="fullWidth" label={t('L_NEWCOME_DATE')} orientation="horizontal" />
            </div>

            <div className={classes.innerContainer}>
              <Input
                size="fullWidth"
                label={t('L_TEXT_INPUT_MCFW1346')}
                orientation="horizontal"
                type="number"
                maxLength={10}
              />
              <Input
                size="fullWidth"
                label={t('L_PRIVATE_NAME2')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={20}
              />
              <DatePicker size="fullWidth" label={t('L_TABLE_MCFR1362')} orientation="horizontal" />
            </div>

            <div className={classes.innerContainer}>
              <Select
                size="fullWidth"
                label={t('L_RELATE_TYPE')}
                options={[]}
                orientation="horizontal"
                tabIndex={0}
              />
              <Select
                size="fullWidth"
                label={t('L_SEX')}
                options={[]}
                orientation="horizontal"
                tabIndex={0}
              />
              <DatePicker size="fullWidth" label={t('L_DATE_FINISH')} orientation="horizontal" />
            </div>

            <div className={classes.innerContainer}>
              <Input orientation="horizontal" type="checkbox" label={t('L_PAY_SCHOOL')} />
              <Input
                orientation="horizontal"
                type="number"
                maxLength={2}
                label={t('L_TEXT_INPUT2_MCFW1346')}
              />
              <Input orientation="horizontal" type="checkbox" label={t('L_TEXT_INPUT3_MCFW1346')} />
            </div>
          </div>
        </Card>

        <Card title={t('L_LABEL_TEXT_MCFW1346')}>
          <div className={classes.mainContainerSecond}>
            <div className={classes.innerContainerSecond}>
              <div className={classes.flex}>
                <Input
                  size="fullWidth"
                  label={t('L_CITY')}
                  orientation="horizontal"
                  type="number"
                  maxLength={5}
                />
                <Input disabled size="fullWidth" orientation="horizontal" />
              </div>

              <div className={classes.flex}>
                <Input
                  isLabel={true}
                  size="fullWidth"
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={20}
                />
                <Input size="fullWidth" orientation="horizontal" />
                <Input
                  size="sm"
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={5}
                />
                <Input
                  size="sm"
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={6}
                />
                <Input size="sm" orientation="horizontal" type="number" maxLength={4} />
              </div>

              <div className={classes.flex}>
                <div className={classes.flex}>
                  <Input
                    size="fullWidth"
                    label={t('L_STREET')}
                    orientation="horizontal"
                    pattern={REGEX.allCharacter}
                    maxLength={20}
                  />
                  <Input
                    disabled
                    size="fullWidth"
                    orientation="horizontal"
                    type="number"
                    maxLength={4}
                  />
                </div>
                <Input
                  size="fullWidth"
                  label={t('L_BUILD_NUM')}
                  orientation="horizontal"
                  type="number"
                  maxLength={4}
                />
                <Input
                  size="fullWidth"
                  label={t('L_ENTRANCE')}
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={6}
                />
                <Input
                  size="fullWidth"
                  label={t('L_FLAT')}
                  orientation="horizontal"
                  type="number"
                  maxLength={4}
                />
              </div>

              <Input
                size="fullWidth"
                isLabel={true}
                orientation="horizontal"
                type="number"
                maxLength={7}
              />
              <Input
                size="fullWidth"
                label={t('L_ZIP')}
                orientation="horizontal"
                type="number"
                maxLength={7}
              />
              <div className={classes.flex}>
                <Input
                  size="fullWidth"
                  label={t('L_PHONE')}
                  orientation="horizontal"
                  type="number"
                  maxLength={10}
                />
                <Input
                  disabled
                  size="fullWidth"
                  orientation="horizontal"
                  label={t('L_MOBILE_PHONE')}
                  pattern={REGEX.allCharacter}
                  maxLength={5}
                />
              </div>
              <Input
                size="fullWidth"
                label={t('L_MAIL')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={60}
              />
            </div>

            <div className={classes.innerContainerSecond}>
              <div className={classes.flex}>
                <Input
                  size="fullWidth"
                  label={t('L_CITY')}
                  orientation="horizontal"
                  type="number"
                  maxLength={5}
                />
                <Input disabled size="fullWidth" orientation="horizontal" />
                <Input type="number" maxLength={5} />
              </div>

              <div className={classes.flex}>
                <Input
                  size="fullWidth"
                  label={t('L_STREET')}
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={20}
                />
                <Input
                  size="fullWidth"
                  label={t('L_BUILD_NUM')}
                  orientation="horizontal"
                  type="number"
                  maxLength={4}
                />
                <Input
                  size="fullWidth"
                  label={t('L_ENTRANCE')}
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={6}
                />
                <Input
                  size="fullWidth"
                  label={t('L_FLAT')}
                  orientation="horizontal"
                  type="number"
                  maxLength={4}
                />
              </div>

              <div className={classes.flex}>
                <Input
                  size="fullWidth"
                  label={t('L_ZIP')}
                  orientation="horizontal"
                  type="number"
                  maxLength={7}
                />
                <Input
                  size="fullWidth"
                  label={t('L_NEYBERHOOD')}
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={20}
                />
              </div>
              <div className={classes.flex}>
                <Input
                  size="fullWidth"
                  label={t('L_PHONE')}
                  orientation="horizontal"
                  type="number"
                  maxLength={10}
                />
                <Input pattern={REGEX.allCharacter} maxLength={5} />
                <Input
                  size="fullWidth"
                  label={t('L_MOBILE_PHONE')}
                  orientation="horizontal"
                  type="number"
                  maxLength={10}
                />
                <Input pattern={REGEX.allCharacter} maxLength={5} />
              </div>

              <Input
                size="fullWidth"
                label={t('L_MAIL')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={60}
              />

              <div className={classes.flex}>
                <Input
                  size="fullWidth"
                  label={t('L_TEXT_INPUT4_MCFW1346')}
                  orientation="horizontal"
                  pattern={REGEX.allCharacter}
                  maxLength={25}
                />
                <Input
                  size="fullWidth"
                  label={t('L_MAIL_NUM')}
                  orientation="horizontal"
                  type="number"
                  maxLength={10}
                />
              </div>
            </div>
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default AdministratorInterfaceUI;
