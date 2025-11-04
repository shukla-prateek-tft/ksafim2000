import { Input } from '@/ui/Input';
import classes from './CreatingIncomeTaxFile.module.scss';
import { useTranslation } from 'react-i18next';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { CreatingIncomeTaxFileUIProps } from './types';
import { getLengthPattern } from '@/utils/commonHelper';

const CreatingIncomeTaxFileUI = ({
  renderActionItems,
  data,
  loading
}: CreatingIncomeTaxFileUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend>{t('L_MCFW1216_HEADER')}</legend>
        <Input
          type="number"
          maxLength={10}
          pattern={getLengthPattern(10)}
          label={t('L_SUPP_TOTAL')}
          orientation="horizontal"
          size="md"
          className={classes.input}
          value={data}
          tabIndex={1}
        />
      </fieldset>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default CreatingIncomeTaxFileUI;
