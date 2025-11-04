// MCFW-1299
import React from 'react';
import { BackToPageButton, Button, SaveButton } from '@/components/commonButtons';
import BankAdjustmentUI from './BankAdjustment.render';
import classes from './BankAdjustment.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useTranslation } from 'react-i18next';
const BankAdjustment = () => {
  const { t } = useTranslation('common');
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <Button title={t('L_CANCEL_MATCH')} />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen title="MCFW-1299" onClose={() => {}} >
      <BankAdjustmentUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default BankAdjustment;
