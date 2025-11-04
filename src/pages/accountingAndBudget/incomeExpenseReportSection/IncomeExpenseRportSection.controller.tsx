// MCFS-1425
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import IncomeExpenseRportSectionUI from './IncomeExpenseRportSection.render';
import classes from './IncomeExpenseRportSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const IncomeExpenseRportSection = () => {
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
    <DialogBox isOpen onClose={()=>{}} title="MCFS-1425">
      <IncomeExpenseRportSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default IncomeExpenseRportSection;
