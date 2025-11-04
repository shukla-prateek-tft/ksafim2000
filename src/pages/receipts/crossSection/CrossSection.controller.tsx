// MCSS-0126
import React from 'react';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import CrossSectionUI from './CrossSection.render';
import classes from './CrossSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const CrossSection = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCSS-0126">
      <CrossSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CrossSection;
