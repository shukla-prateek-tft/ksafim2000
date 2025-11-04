// MCFS-0685
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import DepositJournalSectionUI from './DepositJournalSection.render';
import classes from './DepositJournalSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const DepositJournalSection = () => {
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
    <DialogBox isOpen title="MCFS-0685">
      <DepositJournalSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default DepositJournalSection;
