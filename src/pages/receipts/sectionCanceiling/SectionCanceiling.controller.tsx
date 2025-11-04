// MCFS-1277
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import SectionCanceilingUI from './SectionCanceiling.render';
import classes from './SectionCanceiling.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const SectionCanceiling = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton onClick={() => {}} />
        <DetailButton onClick={() => {}} />
        <SaveButton onClick={() => {}} />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFS1277">
      <SectionCanceilingUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default SectionCanceiling;
