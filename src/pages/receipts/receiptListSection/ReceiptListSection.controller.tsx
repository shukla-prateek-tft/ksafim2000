// MCFS-0687
import React from 'react';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import ReceiptListSectionUI from './ReceiptListSection.render';
import classes from './ReceiptListSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const ReceiptListSection = () => {
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
    <DialogBox isOpen onClose={() => {}} title="MCFS-0687">
      <ReceiptListSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ReceiptListSection;
