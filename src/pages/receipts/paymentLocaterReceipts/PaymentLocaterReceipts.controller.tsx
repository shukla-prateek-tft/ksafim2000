// MCFL-1381
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import PaymentLocaterReceiptsUI from './PaymentLocatorReceipts.render';
import classes from './PaymentLocatorReceipts.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';

const PaymentLocaterReceipts = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  const customRowRenderer = (key: string, row: any, index: number) => {
    switch (key) {
      case 'L_Invoice_Number':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              type="number"
              pattern={getInputPattern(20)}
              id="catalog_no"
              maxLength={16}
              variant="borderless"
            />
          </div>
        );
      case 'vineCode':
        return (
          <div className={classes.ListofGefenCell}>
            <Input label=" " type="text" id="catalog_no" maxLength={30} variant="borderless" />
          </div>
        );
      case 'codeDescription':
        return (
          <div className={classes.ListofGefenCell}>
            <Input label=" " type="text" id="catalog_no" maxLength={256} variant="borderless" />
          </div>
        );
      default:
        return (row as Record<string, any>)[key];
    }
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFL1381">
      <PaymentLocaterReceiptsUI
        renderActionItems={renderActionItems}
        customRowRenderer={customRowRenderer}
      />
    </DialogBox>
  );
};

export default PaymentLocaterReceipts;
