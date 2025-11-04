// MCFS-1185
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import ReturningReceiptFromCashRegisterUI from './ReturningReceiptFromCashRegister.render';
import classes from './ReturningReceiptFromCashRegister.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const ReturningReceiptFromCashRegister = ({ isOpen, onClose }: any) => {
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
    <DialogBox onClose={onClose} isOpen={isOpen} title="MCFS-1185">
      <ReturningReceiptFromCashRegisterUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ReturningReceiptFromCashRegister;
