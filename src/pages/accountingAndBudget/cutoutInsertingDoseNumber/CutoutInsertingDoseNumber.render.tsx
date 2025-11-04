import classes from './CutoutInsertingDoseNumber.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { CutoutInsertingDoseNumberUIProps } from './types';

const CutoutInsertingDoseNumberUI = ({ 
  renderActionItems,
  number,
  setNumber 
}: CutoutInsertingDoseNumberUIProps) => {
  const { t } = useTranslation('common');

  return (
    <div className={classes.mainContainer}>
      <fieldset>
        <legend className={classes.legend}>{t('T_MCFS1276_TITLE')}</legend>
        <Input orientation="horizontal" label={t('L_SET_NUMBER')} size="md" type='number' maxLength={6} value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default CutoutInsertingDoseNumberUI;
