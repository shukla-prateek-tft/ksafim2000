// MCFL-0658
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import CompanyDetailsUI from './CompanyDetails.render';
import classes from './CompanyDetails.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const CompanyDetails = () => {
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
    <DialogBox isOpen onClose={() => {}} title="MCFL - 0658">
      <CompanyDetailsUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CompanyDetails;
