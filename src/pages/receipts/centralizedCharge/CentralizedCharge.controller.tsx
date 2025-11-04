// MCFS-1319
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import CentralizedChargeUI from './CentralizedCharge.render';
import classes from './CentralizedCharge.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const CentralizedCharge = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS - 1319">
      <CentralizedChargeUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CentralizedCharge;
