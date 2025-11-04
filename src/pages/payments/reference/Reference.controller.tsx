// MCFS-1349
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import CutoutEnteringConcentrationNumberUI from './Reference.render';
import classes from './Reference.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const Reference = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <SaveButton />
        <BackToPageButton />
      </div>
    );
  };

  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-1349">
      <CutoutEnteringConcentrationNumberUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default Reference;
