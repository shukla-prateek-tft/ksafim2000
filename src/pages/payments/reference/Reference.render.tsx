import { BottomToolBar } from '@/ui/BottomToolBar';
import classes from './Reference.module.scss';

import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';

const CutoutEnteringConcentrationNumberUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_TOPBTN1')}</legend>
        <Input
          type="number"
          tabIndex={1}
          size="md"
          orientation="horizontal"
          label={t('L_CHECK_NO1')}
          maxLength={10}
        />
      </fieldset>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default CutoutEnteringConcentrationNumberUI;
