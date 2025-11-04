import classes from './PayerLocatorPopup.module.scss';
import { useTranslation } from 'react-i18next';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Card } from '@/ui/Card';
import { PayerLocatorPopupUIProps } from './types';
const PayerLocatorPopupUI = ({ 
  renderActionItems,
  percentage,
  setPercentage 
}: PayerLocatorPopupUIProps) => {
  const { t } = useTranslation('common');

  const p_param = 'p';
  let label = '';
  if (p_param == 'p') {
    label = t('L_PERCENT');
  } else {
    label = t('L_SUM');
  }
  return (
    <div className={classes.mainContainer}>
      <Card>
        <Input type="number" maxLength={3} orientation="horizontal" label={label} value={percentage || ''} onChange={(e) => !isNaN(Number(e.target.value)) && setPercentage(Number(e.target.value))} />
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default PayerLocatorPopupUI;
