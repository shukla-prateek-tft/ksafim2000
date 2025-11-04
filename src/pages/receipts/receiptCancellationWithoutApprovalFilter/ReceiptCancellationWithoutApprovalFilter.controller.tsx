// MCFS-1380
import ReceiptCancellationWithoutApprovalFilterUI from './ReceiptCancellationWithoutApprovalFilter.render';
import classes from './ReceiptCancellationWithoutApprovalFilter.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
const ReceiptCancellationWithoutApprovalFilter = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-1380">
      <ReceiptCancellationWithoutApprovalFilterUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ReceiptCancellationWithoutApprovalFilter;
