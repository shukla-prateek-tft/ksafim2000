// MCBS-1165

import { DialogBox } from '@/ui/DialogBox';
import StudentBalanceTransferSectionUI from './StudentBalanceTransferSection.render';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import classes from './StudentBalanceTransferSection.module.scss';

const StudentBalanceTransferSection = () => {
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
    <DialogBox isOpen onClose={() => {}} title="MCBS-1165">
      <StudentBalanceTransferSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default StudentBalanceTransferSection;
