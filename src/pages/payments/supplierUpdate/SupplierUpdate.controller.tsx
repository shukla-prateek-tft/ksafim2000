// MCFW-1232
import React from 'react';
import { DetailButton, OtherDetailButton, SaveButton } from '@/components/commonButtons';
import SupplierUpdateUI from './SupplierUpdate.render';
import classes from './SupplierUpdate.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const SupplierUpdate = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <SaveButton />
        <OtherDetailButton/>
        <DetailButton/>
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} className={classes.dialogBox} title="MCFW-1232">
      <SupplierUpdateUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default SupplierUpdate;
