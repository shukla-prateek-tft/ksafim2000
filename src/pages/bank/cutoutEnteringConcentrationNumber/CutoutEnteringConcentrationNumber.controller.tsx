// MCFS-1240
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import CutoutEnteringConcentrationNumberUI from './CutoutEnteringConcentrationNumber.render';
import classes from './CutoutEnteringConcentrationNumber.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const CutoutEnteringConcentrationNumber = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
        <DetailButton />
      </div>
    );
  };

  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS - 1240">
      <CutoutEnteringConcentrationNumberUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CutoutEnteringConcentrationNumber;
