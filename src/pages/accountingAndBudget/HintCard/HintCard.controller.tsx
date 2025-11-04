// MCFS-0681
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import HintCardUI from './HintCard.render';
import { DialogBox } from '@/ui/DialogBox';

import classes from './HintCard.module.scss';
import { useState } from 'react';
import { HintCardFilterType } from './types';
const HintCard = () => {
  const [filter, setFilter] = useState<Partial<HintCardFilterType>>({});

  const onChange = (id: keyof HintCardFilterType, value: Date | number | string | undefined | Record<string, string>) => {
    setFilter({ ...filter, [id]: value });
  }

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton onClick={() => {}} />
        <DetailButton onClick={() => {}} />
        <SaveButton onClick={() => {}} />
      </div>
    );
  };
  return (
    <DialogBox onClose={() => {}} isOpen title="MCFS-0688">
      <HintCardUI 
        renderActionItems={renderActionItems} 
        filter={filter}
        onChange={onChange}
      />
    </DialogBox>
  );
};

export default HintCard;
