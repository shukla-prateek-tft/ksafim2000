// MCFS-0625
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import BankDepositCutOffUI from './BankDepositCutOff.render';
import classes from './BankDepositCutOff.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const BankDepositCutOff = () => {
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
    <DialogBox isOpen title="MCFS0625" onClose={()=>{}}>
      <BankDepositCutOffUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default BankDepositCutOff;
