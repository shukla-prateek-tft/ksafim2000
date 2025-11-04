// MCFS0653
import React from 'react';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';;
import classes from './CollectionConfirmationFromTheBank.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import CollectionConfirmationFromTheBankUI from './CollectionConfirmationFromTheBank.render';

const CollectionConfirmationFromTheBank = ({ isOpen, onClose }: any) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFS-0653">
      <CollectionConfirmationFromTheBankUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default CollectionConfirmationFromTheBank;
