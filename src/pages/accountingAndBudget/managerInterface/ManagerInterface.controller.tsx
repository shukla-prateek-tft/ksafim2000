// MCFW-1345
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import ManagerInterfaceUI from './ManagerInterface.render';
import classes from './ManagerInterface.module.scss';
const ManagerInterface = () => {
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
      <ManagerInterfaceUI renderActionItems={renderActionItems} />
  );
};

export default ManagerInterface;
