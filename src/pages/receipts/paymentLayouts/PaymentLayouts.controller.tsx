// MCFS-0712
import PaymentLayoutsUI from './PaymentLayouts.render';
import { BackToPageButton, SaveButton, DetailButton } from '@/components/commonButtons';
import classes from './PaymentLayouts.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const PaymentLayouts = ({ isOpen, onClose }: any) => {
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
    <DialogBox title="MCFS-0712" onClose={onClose} isOpen={isOpen}>
      <PaymentLayoutsUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default PaymentLayouts;
