// MCFS-0664
import React from 'react';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import CashRegisterReportSectionUI from './CashRegisterReportSection.render';
import classes from './CashRegisterReportSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const CashRegisterReportSection = () => {
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
    <DialogBox isOpen onClose={() => {}} title="MCFS-0664">
      <CashRegisterReportSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CashRegisterReportSection;
