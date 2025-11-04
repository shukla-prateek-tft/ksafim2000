// MCFS-1179
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import CancellingBankTransferUI from './CancellingBankTransfer.render';
import classes from './CancellingBankTransfer.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const CancellingBankTransfer = ({ isOpen, onClose }: any) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFS-1179">
      <CancellingBankTransferUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CancellingBankTransfer;
