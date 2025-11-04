// MCFS-1376
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import TransferSectionBetweenSectionsUI from './TransferSectionBetweenSections.render';
import classes from './TransferSectionBetweenSections.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const TransferSectionBetweenSections = () => {

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };

  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-1376">
      <TransferSectionBetweenSectionsUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default TransferSectionBetweenSections;
