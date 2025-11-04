// MCFS-1235
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import CutCardUI from './CutCard.render';
import classes from './CutCard.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
import { CutCardFilterType } from './types';
const CutCard = () => {
  const [filter, setFilter] = useState<Partial<CutCardFilterType>>({});

  const onChange = (id: keyof CutCardFilterType, value: Date | number | string | undefined | Record<string, string>) => {
    setFilter({ ...filter, [id]: value });
  };

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
    <DialogBox isOpen title="MCFS-1235" onClose={() => {}}>
      <CutCardUI 
        renderActionItems={renderActionItems} 
        filter={filter}
        onChange={onChange}
      />
    </DialogBox>
  );
};

export default CutCard;
