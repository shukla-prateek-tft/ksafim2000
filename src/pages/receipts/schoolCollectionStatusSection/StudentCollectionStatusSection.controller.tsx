// MCFS-0707
import { DialogBox } from '@/ui/DialogBox';
import StudentCollectionStatusSectionUI from './StudentCollectionStatusSection.render';
import classes from './StudentCollectionStatusSection.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';

const StudentCollectionStatusSection = () => {
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
    <DialogBox isOpen={false} onClose={() => {}} title="MCFS0707">
      <StudentCollectionStatusSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default StudentCollectionStatusSection;
