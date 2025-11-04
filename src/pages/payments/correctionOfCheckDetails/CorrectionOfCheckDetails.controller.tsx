// MCFW-0615
import React from 'react';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import CorrectionOfCheckDetailsUI from './CorrectionOfCheckDetails.render';
import classes from './CorrectionOfCheckDetails.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const CorrectionOfCheckDetails = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
        <DetailButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFW-0615">
      <CorrectionOfCheckDetailsUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CorrectionOfCheckDetails;
