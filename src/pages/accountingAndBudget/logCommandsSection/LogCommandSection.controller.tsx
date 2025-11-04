// MCFS-0628
import LogCommandSectionUI from './LogCommandSection.render';
import { BackToPageButton, Button, DetailButton, SaveButton } from '@/components/commonButtons';
import classes from './LogCommandSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
const LogCommandSection = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
        <div className={classes.button}>
          <Button>button</Button>
        </div>
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-0628">
      <LogCommandSectionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default LogCommandSection;
