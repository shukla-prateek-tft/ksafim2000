// MCFS-0640
import { DialogBox } from '@/ui/DialogBox';
import ReturningReceiptCashRegisterUI from './ReturningReceiptCashRegister.render';
import classes from './ReturningReceiptCashRegister.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';

const ReturningReceiptCashRegister = ({ isOpen, onClose }: any) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose}  title="MCFS0640">
      <ReturningReceiptCashRegisterUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ReturningReceiptCashRegister;
