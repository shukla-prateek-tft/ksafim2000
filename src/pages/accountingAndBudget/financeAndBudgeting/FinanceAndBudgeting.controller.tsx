// MCBS - 1164
import { SaveButton, DetailButton } from '@/components/commonButtons';
import FinanceAndBudgetingUI from './FinanceAndBudgeting.render';
import classes from './FinanceAndBudgeting.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
import { FinanceAndBudgetingFilterType } from './types';
const FinanceAndBudgeting = () => {
  const [filter, setFilter] = useState<Partial<FinanceAndBudgetingFilterType>>({});
  
  const onChange = (id: keyof FinanceAndBudgetingFilterType, value: string | number | Date | null) => {
    setFilter({ ...filter, [id]: value })
  }

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <SaveButton />
        <DetailButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen title="MCBS-1164" onClose={() => {}}>
      <FinanceAndBudgetingUI 
        renderActionItems={renderActionItems} 
        filter={filter}
        onChange={onChange}
      />
    </DialogBox>
  );
};

export default FinanceAndBudgeting;
