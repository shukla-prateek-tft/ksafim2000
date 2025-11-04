// MCFS-0621
import PayerLocatorPopupUI from './PayerLocatorPopup.render';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './PayerLocatorPopup.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useState } from 'react';
const PayerLocatorPopup = () => {
  const [percentage, setPercentage] = useState<number | null>(null);
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen title="MCFS-0621" onClose={() => {}}>
      <PayerLocatorPopupUI 
        renderActionItems={renderActionItems} 
        percentage={percentage}
        setPercentage={setPercentage}
      />
    </DialogBox>
  );
};

export default PayerLocatorPopup;
