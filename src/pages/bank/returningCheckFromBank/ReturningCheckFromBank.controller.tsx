// MCFW-0624
import React from 'react';
import {
  BackToPageButton,
  DetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import ReturningCheckFromBankUI from './ReturningCheckFromBank.render';
import classes from './ReturningCheckFromBank.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const ReturningCheckFromBank = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <SearchButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen={true} title="MCFW-0624" onClose={() => {}}>
      <ReturningCheckFromBankUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ReturningCheckFromBank;
