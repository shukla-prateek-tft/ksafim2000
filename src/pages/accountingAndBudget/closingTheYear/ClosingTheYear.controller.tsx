// MCFW-1373
import { BackToPageButton, PrintButton, PrintExcel,  } from '@/components/commonButtons';
import ClosingTheYearUI from './ClosingTheYear.render';
import classes from './ClosingTheYear.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const ClosingTheYear =  ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <PrintButton/>
        <PrintExcel/>
      </div>
    );
  };
  return (
    <DialogBox onClose={onClose} isOpen={isOpen} title="MCFW-1373">
      <ClosingTheYearUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ClosingTheYear;
