import { BottomToolBar } from '@/ui/BottomToolBar';
import classes from './CutoutEnteringConcentrationNumber.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';

const CutoutEnteringConcentrationNumberUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFS1240_TITLE')}</legend>
        <Input type='number' maxLength={8} size="md" orientation="horizontal" label={t('L_CONCENTRATION')} />
      </fieldset>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default CutoutEnteringConcentrationNumberUI;
