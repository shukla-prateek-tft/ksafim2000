// MCFS-0686
import React from 'react'
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import BankReconciliationSectionUI from './BankReconciliationSection.render';
import classes from './BankReconciliationSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const BankReconciliationSection = () => {
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
    <DialogBox isOpen onClose={()=>{}} title="MCFS-0686">
      <BankReconciliationSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default BankReconciliationSection;
