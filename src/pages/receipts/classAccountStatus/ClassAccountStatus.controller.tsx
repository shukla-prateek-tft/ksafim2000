// MCFS-0646
import React from 'react';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import ClassAccountStatusUI from './ClassAccountStatus.render';
import classes from './ClassAccountStatus.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const ClassAccountStatus = () => {
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
    <DialogBox isOpen onClose={() => {}} title="MCFS-0646">
      <ClassAccountStatusUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ClassAccountStatus;
