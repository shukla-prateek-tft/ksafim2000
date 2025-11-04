// MCFS-0671
import UpdateJournalEntryUI from './UpdateJournalEntry.render';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './UpdateJournalEntry.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const UpdateJournalEntry = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };

  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-1240">
      <UpdateJournalEntryUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default UpdateJournalEntry;
