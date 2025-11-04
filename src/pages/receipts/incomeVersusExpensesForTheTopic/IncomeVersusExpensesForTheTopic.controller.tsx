// MCFS-1176
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import IncomeVersusExpensesForTheTopicUI from './IncomeVersusExpensesForTheTopic.render';
import classes from './IncomeVersusExpensesForTheTopic.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const IncomeVersusExpensesForTheTopic = ({ isOpen, onClose }: any) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFS-1176">
      <IncomeVersusExpensesForTheTopicUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default IncomeVersusExpensesForTheTopic;
