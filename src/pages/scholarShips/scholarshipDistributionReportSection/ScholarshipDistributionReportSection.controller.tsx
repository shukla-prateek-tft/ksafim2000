// MCFS-1332
import React from 'react'
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import ScholarshipDistributionReportSectionUI from './ScholarshipDistributionReportSection.render';
import classes from './ScholarshipDistributionReportSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const ScholarshipDistributionReportSection = () => {
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
    <DialogBox isOpen onClose={()=>{}} title="MCFS-1332">
      <ScholarshipDistributionReportSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ScholarshipDistributionReportSection;
