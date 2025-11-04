import classes from './LogCommandSection.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';

const LogCommandSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <Input orientation="horizontal" label={t('L_FINANCE_YEAR')} type='number' maxLength={4}/>
        <div className={classes.inputAligner}>
          <Input type="checkbox" orientation="horizontal" label={t('L_STORNO_COMMAND')} />
          <Input orientation="horizontal" label={t('L_MCFS0628_INPUTLABEL1')} type='number' maxLength={6}/>
        </div>
        <p className={classes.bottomText}>{t('L_MCFS0628_DESC')}</p>
      </fieldset>
      <BottomToolBar pagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default LogCommandSectionUI;
