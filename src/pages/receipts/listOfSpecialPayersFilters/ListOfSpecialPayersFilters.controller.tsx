// MCFS-0598
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import ListOfSpecialPayersFiltersUI from './ListOfSpecialPayersFilters.render';
import classes from './ListOfSpecialPayersFilters.module.scss';
import { DialogBox } from '@/ui/DialogBox';

type DialogCommonPropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const ListOfSpecialPayersFilters = ({ isOpen, onClose }: DialogCommonPropsType) => {
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
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFS-0598">
      <ListOfSpecialPayersFiltersUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ListOfSpecialPayersFilters;
