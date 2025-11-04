// MCFS-0759
import React from 'react';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import CollectionStatusSectionForSubjectInStudentUI from './CollectionStatusSectionForSubjectInStudent.render';
import classes from './CollectionStatusSectionForSubjectInStudent.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const CollectionStatusSectionForSubjectInStudent = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={()=>{}} title="MCFS0759">
      <CollectionStatusSectionForSubjectInStudentUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CollectionStatusSectionForSubjectInStudent;
