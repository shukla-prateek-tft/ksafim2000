// MCFS-1418
import FixedAmountCancellationUI from './FixedAmountCancellation.render';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './FixedAmountCancellation.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
const FixedAmountCancellation = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={()=>{}} title="MCFS-1418">
      <FixedAmountCancellationUI 
        renderActionItems={renderActionItems} 
        amount={amount} 
        setAmount={setAmount}
      />
    </DialogBox>
  );
};

export default FixedAmountCancellation;
