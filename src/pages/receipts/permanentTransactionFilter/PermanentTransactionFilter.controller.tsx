// MCFS-0668
import { DialogBox } from '@/ui/DialogBox';
import classes from './PermanentTransactionFilter.module.scss';
import PermanentTransactionFilterUI from './PermanentTransactionFilter.render';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';

const PermanentTransactionFilter = () => {
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
    <DialogBox isOpen={true} onClose={() => {}} title="MCFS-0668">
      <PermanentTransactionFilterUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default PermanentTransactionFilter;
