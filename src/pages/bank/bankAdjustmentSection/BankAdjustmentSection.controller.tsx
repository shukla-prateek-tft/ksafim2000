// MCFS-1183
import React from 'react'
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import BankAdjustmentSectionUI from './BankAdjustmentSection.render';
import classes from './BankAdjustmentSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const BankAdjustmentSection = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS - 1183">
      <BankAdjustmentSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default BankAdjustmentSection;
