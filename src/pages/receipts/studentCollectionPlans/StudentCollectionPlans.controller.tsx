// MCSS-0107
import { DialogBox } from '@/ui/DialogBox';
import StudentCollectionPlansUI from './StudentCollectionPlans.render';
import classes from './StudentCollectionPlans.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';

const StudentCollectionPlans = ({ isOpen, onClose }: any) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCSS0107">
      <StudentCollectionPlansUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default StudentCollectionPlans;
