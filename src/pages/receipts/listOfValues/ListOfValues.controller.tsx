// GP_SERVICE_LOV
import { DialogBox } from '@/ui/DialogBox';
import classes from './ListOfValues.module.scss';

import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import ListOfValuesUI from './ListOfValues.render';

const ListOfValues = ({ isOpen, onClose }: any) => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="GP_SERVICE_LOV">
      <ListOfValuesUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ListOfValues;
