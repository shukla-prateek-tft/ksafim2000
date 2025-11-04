// MCSS-1415
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import SiblingReportSectionUI from './SiblingReportSection.render';
import classes from './SiblingReportSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const SiblingReportSection = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton tabIndex={7}/>
        <SaveButton tabIndex={8} />
      </div>
    );
  };
  return (
    <DialogBox isOpen title="MCSS-1415" onClose={()=>{}}>
      <SiblingReportSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default SiblingReportSection;
