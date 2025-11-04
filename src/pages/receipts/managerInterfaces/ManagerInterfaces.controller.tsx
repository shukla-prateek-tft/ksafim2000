// MCFW-1338
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
import classes from './ManagerInterfaces.module.scss';
import ManagerInterfacesUI from './ManagerInterfaces.render';

const ManagerInterfaces = () => {
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
    <DialogBox isOpen onClose={() => {}} title={'MCFW-1338'}>
      <ManagerInterfacesUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ManagerInterfaces;
