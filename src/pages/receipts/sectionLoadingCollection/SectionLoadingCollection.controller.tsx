// MCBS-1161
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import SectionLoadingCollectionUI from './SectionLoadingCollection.render';
import classes from './SectionLoadingCollection.module.scss';
import { DialogBox } from '@/ui/DialogBox';

const SectionLoadingCollection = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <SaveButton />
        <DetailButton />
        <BackToPageButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCBS-1161">
      <SectionLoadingCollectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default SectionLoadingCollection;
