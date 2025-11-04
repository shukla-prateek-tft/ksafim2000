// MCBS-1322
import AnnualCollectionPlanTransferSectionUI from './AnnualCollectionPlanTransferSection.render';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import classes from './AnnualCollectionPlanTransferSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const AnnualCollectionPlanTransferSection = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton tabIndex={1} />
        <DetailButton tabIndex={2}/>
        <SaveButton tabIndex={3}/>
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={()=>{}} title="MCBS-1322">
      <AnnualCollectionPlanTransferSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default AnnualCollectionPlanTransferSection;
