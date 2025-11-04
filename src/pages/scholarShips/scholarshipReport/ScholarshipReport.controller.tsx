// MCFS-1282
import React from 'react';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import ScholarshipReportUI from './ScholarshipReport.render';
import classes from './ScholarshipReport.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const ScholarshipReport =  ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton/>
        <DetailButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox title="MCFS-1282" onClose={onClose} isOpen={isOpen}>
      <ScholarshipReportUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ScholarshipReport;
