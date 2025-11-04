// MCFL-0628
import { BackToPageButton, Button, SaveButton } from '@/components/commonButtons';
import GoneForAYearUI from './GoneForAYear.render';
import classes from './GoneForAYear.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useTranslation } from 'react-i18next';

const GoneForAYear = () => {
  const { t } = useTranslation('common');
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
        <Button size="md" title={t('L_COPY_ACTION')} />
        <Button size="md" title={t('L_STORNO_COMMAND')} />
      </div>
    );
  };
  return (
    <DialogBox isOpen title="MCFL-0628">
      <GoneForAYearUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default GoneForAYear;
