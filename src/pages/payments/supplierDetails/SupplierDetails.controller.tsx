// MCFW-1215
import React from "react"
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './SupplierDetails.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import SupplierDetailsUI from './SupplierDetails.render';

const SupplierDetails = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox onClose={onClose} isOpen={isOpen} title="MCFW-1215">
      <SupplierDetailsUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default SupplierDetails;
