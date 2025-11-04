// MCBS-1162
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import CalculationCollectionAmountUI from './CalculationCollectionAmount.render';
import classes from './CalculationCollectionAmount.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const CalculationCollectionAmount = () => {
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
    <DialogBox isOpen onClose={()=>{}} title="MCBS-1162">
      <CalculationCollectionAmountUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CalculationCollectionAmount;
