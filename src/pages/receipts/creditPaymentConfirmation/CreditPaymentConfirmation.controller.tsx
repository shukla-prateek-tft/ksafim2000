// MCFL-0712
import CreditPaymentConfirmationUI from './CreditPaymentConfirmation.render';
import { BackToPageButton, SaveButton,DetailButton } from '@/components/commonButtons';
import classes from './CreditPaymentConfirmation.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const CreditPaymentConfirmation = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton/>
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={()=>{}} title="MCFL-0712">
      <CreditPaymentConfirmationUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CreditPaymentConfirmation;
