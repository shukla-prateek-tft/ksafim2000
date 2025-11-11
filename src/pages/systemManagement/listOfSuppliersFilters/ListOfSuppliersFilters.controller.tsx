//MCFS-0600
import React from "react";
import ListOfSuppliersFiltersUI from './ListOfSuppliersFilters.render';
import classes from './ListOfSuppliersFilters.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
import { useAuth } from "@/hooks";
const ListOfSuppliersFilters = ({ isOpen, onClose }: any) => {
  const {toggleFlags}=useAuth()
  
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton onClick={ onClose} />
        <DetailButton />
        <SaveButton onClick={()=>{
          console.log('hdgfjsdhgfsghd');
          
 toggleFlags({
        showValidationError: true,
        errorData: {
          title: ('instiYearWaringMessage'),
          dialogTitle:('confirm_Title'),
          confirmText: ('yesText'),
          cancelText: ('cancelText'),
          type: 'success',
          showCancelButton: false
        }
      });
        }}/>
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
