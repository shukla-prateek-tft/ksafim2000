// MCFW-1390
import { BackToPageButton, DetailButton, SaveButton, Button } from '@/components/commonButtons';
import CreateSmsUI from './CreateSms.render';
import classes from './CreateSms.module.scss';
import { useTranslation } from 'react-i18next';

const CreateSms = () => {
  const { t } = useTranslation('common');
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <Button title={t('L_SHOW_SMS')} />
      </div>
    );
  };
  return <CreateSmsUI renderActionItems={renderActionItems} />;
};

export default CreateSms;
