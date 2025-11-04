import React from 'react';
import classes from './ChangeOfCreditCardDetails.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { Footer } from '@/ui/Footer';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';

const ChangeOfCreditCardDetailsUI = () => {
  const { t } = useTranslation('common');

  const TopHeader = () => {
    return (
      <>
        <div className={classes.topHeaderContainer}>
          <BackToPageButton />
          <DetailButton />
          <SaveButton />
        </div>
      </>
    );
  };

  const BottomBar = () => {
    return (
      <>
        <Footer />
      </>
    );
  };

  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFR0607')}
        screenNumber="MCFW1264"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card>
          <div className={classes.topHeaderContainer}>
            <Input orientation="horizontal" label={t('L_ID')} size="fullWidth" />
            <Input orientation="horizontal" size="fullWidth" />
            <Input orientation="horizontal" size="fullWidth" />
          </div>
        </Card>
        <Card>
          <Input orientation="horizontal" label={t('L_CREDIT_NO')} size="lg" />
        </Card>
        <Card>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input orientation="horizontal" label={t('L_DATE')} size="fullWidth" />
              <Input orientation="horizontal" label={t('L_BANK')} size="fullWidth" />
              <Input orientation="horizontal" label={t('L_BANK_ACCOUNT')} size="fullWidth" />
              <Input orientation="horizontal" label={t('L_MONEY_AMNT')} size="fullWidth" />
              <Input orientation="horizontal" label={t('L_VALID_DATE')} size="fullWidth" />
            </div>
            <div className={classes.innerContainer}>
              <Input orientation="horizontal" label={t('L_NEW_VALUE')} size="fullWidth" />
              <Input orientation="horizontal" label={t('L_NEW_VALUE')} size="fullWidth" />
              <Input orientation="horizontal" label={t('L_NEW_VALUE')} size="fullWidth" />
              <Input orientation="horizontal" label={t('L_NEW_VALUE')} size="fullWidth" />
              <Input orientation="horizontal" label={t('L_NEW_VALUE')} size="fullWidth" />
            </div>
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default ChangeOfCreditCardDetailsUI;
