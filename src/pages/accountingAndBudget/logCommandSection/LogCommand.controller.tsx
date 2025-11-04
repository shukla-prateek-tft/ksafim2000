// MCFS-0605
import { SaveButton, DetailButton, BackToPageButton } from '@/components/commonButtons';
import LogCommandUI from './LogCommand.render';
import classes from './LogCommand.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
import { LogCommandFilterType } from './types';

const LogCommand = () => {
  const [filter, setFilter]= useState<Partial<LogCommandFilterType>>({});

  const onChange = (id: keyof LogCommandFilterType, value: string | Date | number | undefined) => {
    setFilter({ ...filter, [id]: value })
  }

  const onRangeChange = (value: Record<string, string>) => {
    setFilter({
      ...filter,
      ...value
    })
  }

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <SaveButton />
        <DetailButton />
        <BackToPageButton />
      </div>
    );
  };

  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-0605">
      <LogCommandUI 
        renderActionItems={renderActionItems} 
        filter={filter}
        onChange={onChange}
        onRangeChange={onRangeChange}
      />
    </DialogBox>
  );
};

export default LogCommand;
