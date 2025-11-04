// MCFW-1336
import React from 'react';
import UpdatingStandingOrderDetailsUI from './UpdatingStandingOrderDetails.render';
import { BackToPageButton, SaveButton, DetailButton, OtherDetailButton } from '@/components/commonButtons';
import classes from './UpdatingStandingOrderDetails.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const UpdatingStandingOrderDetails = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton/>
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen={!isOpen} onClose={onClose} title="MCFW-1336">
      <UpdatingStandingOrderDetailsUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default UpdatingStandingOrderDetails;
