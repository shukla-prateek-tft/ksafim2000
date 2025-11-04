// MCFW-0712
import React from 'react';
import { SaveButton } from '@/components/commonButtons';
import CreditPaymentSectionUI from './CreditPaymentSection.render';
import classes from './CreditPaymentSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const CreditPaymentSection = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} title="MCFW-0712" onClose={onClose}>
      <CreditPaymentSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CreditPaymentSection;
