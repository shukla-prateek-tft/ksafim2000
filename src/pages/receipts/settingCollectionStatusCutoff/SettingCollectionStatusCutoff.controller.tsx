// MCFS-0637
import { DialogBox } from '@/ui/DialogBox';
import SettingCollectionStatusCutoffUI from './SettingCollectionStatusCutoff.render';
import classes from './SettingCollectionStatusCutoff.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';

const SettingCollectionStatusCutoff = ({ isOpen, onClose }: any) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFS0637">
      <SettingCollectionStatusCutoffUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default SettingCollectionStatusCutoff;
