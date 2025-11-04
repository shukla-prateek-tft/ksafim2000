//MCFS-0716
import React from 'react';
import { DialogBox } from '@/ui/DialogBox';
import StandingOrderDetailSectionUI from './StandingOrderDetailSection.render';
import classes from './StandingOrderDetailSection.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';

const StandingOrderDetailSection = () => {
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
    <DialogBox isOpen onClose={() => {}} title="MCFS-0716">
      <StandingOrderDetailSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default StandingOrderDetailSection;
