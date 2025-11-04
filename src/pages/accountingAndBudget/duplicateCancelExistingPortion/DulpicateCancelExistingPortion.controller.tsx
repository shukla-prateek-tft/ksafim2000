// MCFW-1276
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import DulpicateCancelExistingPortionUI from './DulpicateCancelExistingPortion.render';
import classes from './DulpicateCancelExistingPortion.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
import { DulpicateCancelExistingPortionFilterType } from './types';
const DulpicateCancelExistingPortion = () => {
  const [filter, setFilter] = useState<Partial<DulpicateCancelExistingPortionFilterType>>({});

  const onChange = (id: string, value: string | number | Date | null) => {
    setFilter({ ...filter, [id]: value });
  }

  const onRangeSelect = (newValue: Record<string, string>) => {
    setFilter({ ...filter, ...newValue });
  }

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };

  return (
    <DialogBox isOpen onClose={() => {}} title="MCFW-1276">
      <DulpicateCancelExistingPortionUI 
        renderActionItems={renderActionItems}
        onChange={onChange}
        filter={filter}
        onRangeSelect={onRangeSelect}
      />
    </DialogBox>
  );
};

export default DulpicateCancelExistingPortion;
