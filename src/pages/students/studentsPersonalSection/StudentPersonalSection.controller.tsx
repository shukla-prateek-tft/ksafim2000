//MCFS-0582
import React from "react"
import { DialogBox } from '@/ui/DialogBox';
import StudentPersonalSectionUI from './StudentPersonalSection.render';
import classes from './StudentPersonalSection.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';

const StudentPersonalSection = ({ isOpen, onClose }:any) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFS0582">
      <StudentPersonalSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default StudentPersonalSection;
