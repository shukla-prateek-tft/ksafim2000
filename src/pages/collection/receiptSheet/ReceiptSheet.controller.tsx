// MCFW-1417
import { AddButton, Button, DetailButton, OtherDetailButton, SaveButton,BackToPageButton } from '@/components/commonButtons';
import ReceiptSheetUI from './ReceiptSheet.render';
import classes from './ReceiptSheet.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useTranslation } from 'react-i18next';
const ReceiptSheet = ({ isOpen, onClose }: any) => {
  const { t } = useTranslation('common');
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton/>
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton />
        <Button size="md" title={t('L_RECEIPT_SHEET')} />
      </div>
    );
  };
  return (
    <DialogBox onClose={onClose} isOpen={isOpen} title="MCFW-1417">
      <ReceiptSheetUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ReceiptSheet;
