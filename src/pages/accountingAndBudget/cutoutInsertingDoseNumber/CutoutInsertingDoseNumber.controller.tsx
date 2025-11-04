// MCFS-1276
import CutoutInsertingDoseNumberUI from './CutoutInsertingDoseNumber.render';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import classes from './CutoutInsertingDoseNumber.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';

const CutoutInsertingDoseNumber = () => {
  const [number, setNumber] = useState<number | ''>('');
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
    <DialogBox isOpen onClose={() => {}} title="MCFS-1276">
      <CutoutInsertingDoseNumberUI 
       renderActionItems={renderActionItems}
       number={number}
       setNumber={setNumber} 
      />
    </DialogBox>
  );
};

export default CutoutInsertingDoseNumber;
