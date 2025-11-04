// MCFS-0654
import React from 'react';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import CollectingStatusForSubjectAndStudentUI from './CollectingStatusForSubjectAndStudent.render';
import classes from './CollectingStatusForSubjectAndStudent.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const CollectingStatusForSubjectAndStudent = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-0654">
      <CollectingStatusForSubjectAndStudentUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CollectingStatusForSubjectAndStudent;
