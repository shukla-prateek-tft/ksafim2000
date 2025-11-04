import classes from './UpdateJournalEntry.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';

const UpdateJournalEntryUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_UPDATE_JOURNAL_COMMAND')}</legend>
        <Input
          orientation="horizontal"
          label={t('L_OLD_VALUE')}
          size="fullWidth"
          disabled
          maxLength={40}
        />
        <Input orientation="horizontal" label={t('L_NEW_VALUE')} size="fullWidth" maxLength={40} />
        <Input orientation="horizontal" type="text" label={t('L_NEW_VALUE')} size="md" />
      </fieldset>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default UpdateJournalEntryUI;
