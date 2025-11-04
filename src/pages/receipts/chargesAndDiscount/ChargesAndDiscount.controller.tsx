// MCSQ-0695
import ChargesAndDiscountUI from './ChargesAndDiscount.render';
import { DialogBox } from '@/ui/DialogBox';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './ChargesAndDiscount.module.scss';

const ChargesAndDiscount = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCSQ0695">
      <ChargesAndDiscountUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ChargesAndDiscount;
