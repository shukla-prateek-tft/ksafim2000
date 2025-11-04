//MCFS-0600
import React from "react";
import ListOfSuppliersFiltersUI from './ListOfSuppliersFilters.render';
import classes from './ListOfSuppliersFilters.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
const ListOfSuppliersFilters = ({ isOpen, onClose }: any) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose}>
      <ListOfSuppliersFiltersUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ListOfSuppliersFilters;
