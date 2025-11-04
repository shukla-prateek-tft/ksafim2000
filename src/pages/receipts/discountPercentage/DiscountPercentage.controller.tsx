// MCFS-0622
import DiscountPercentageUI from './DiscountPercentage.render';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './DiscountPercentage.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
import { DiscountPercentageDataType } from './types';
const DiscountPercentage = () => {
  const [discountData, setDiscountData] = useState({});
  const onChange = (id: keyof DiscountPercentageDataType, value: string) => setDiscountData({ 
    ...discountData,
    [id]: value  
  })
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-0622">
      <DiscountPercentageUI 
        renderActionItems={renderActionItems} 
        onChange={onChange}
        discountData={discountData}
      />
    </DialogBox>
  );
};

export default DiscountPercentage;
