import classes from './GoToScreen.module.scss';
import { useTranslation } from 'react-i18next';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';
const GoToScreenUI = ({ renderActionItems, screenNumber, setScreenNumber }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_TO_SCREEN')}</legend>
        <div className={classes.inputContainer}>
          <Input
            value={screenNumber}
            onChange={e => setScreenNumber(e.target.value)}
            type="number"
            pattern={getInputPattern(4)}
            orientation="horizontal"
            size="sm"
          />
          <Input orientation="horizontal" disabled size="md" />
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default GoToScreenUI;
