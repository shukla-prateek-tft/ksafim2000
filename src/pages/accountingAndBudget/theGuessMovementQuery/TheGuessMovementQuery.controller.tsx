//MCFR-0671
import { DialogBox } from '@/ui/DialogBox';
import {
  BackToPageButton,
  SaveButton,
  AddButton,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SearchButton
} from '@/components/commonButtons';
import classes from './TheGuessMovementQuery.module.scss';
import TheGuessMovementQueryUI from './TheGuessMovementQuery.render';



const TheGuessMovementQuery = () => {

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SearchButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFR0671">
      <TheGuessMovementQueryUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default TheGuessMovementQuery;
