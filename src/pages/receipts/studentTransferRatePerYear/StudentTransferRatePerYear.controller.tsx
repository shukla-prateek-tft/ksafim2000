//MCBS-1355
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import StudentTransferRatePerYearUI from './StudentTransferRatePerYear.render';
import classes from './StudentTransferRatePerYear.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const StudentTransferRatePerYear  =  ({ isOpen, onClose }: any) =>  {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton/>
        <DetailButton/>
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox onClose={onClose} isOpen={isOpen} title="MCBS-1355">
      <StudentTransferRatePerYearUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default StudentTransferRatePerYear;
