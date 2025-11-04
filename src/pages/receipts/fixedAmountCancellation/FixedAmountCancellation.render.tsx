import classes from './FixedAmountCancellation.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { FixedAmountCancellationUIProps } from './types';
const FixedAmountCancellationUI = ({ 
  renderActionItems,
  amount,
  setAmount 
}: FixedAmountCancellationUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <Input orientation="horizontal" label={t('L_EIS02_H5') + ':'} type='amount' maxLength={9} value={amount || ""} onChange={(e) => setAmount(e.target.value)} />
      </fieldset>
      <BottomToolBar  showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default FixedAmountCancellationUI;
