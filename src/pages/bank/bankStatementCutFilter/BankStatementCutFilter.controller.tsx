// MCFS-0688
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import BankStatementCutFilterUI from './BankStatementCutFilter.render';
import classes from './BankStatementCutFilter.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const BankStatementCutFilter = () => {

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton  type='submit' />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-0688">
      <BankStatementCutFilterUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default BankStatementCutFilter;
