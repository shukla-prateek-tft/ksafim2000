import classes from './CentralizedCharge.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CentralizedChargeUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const [inputSum, setInputSum] = useState<number | string>('');

  return (
    <div className={classes.mainContainer}>
      <Card>
        <div className={classes.mainContainer}>
          <div className={classes.flex}>
            <Input
              value={inputSum}
              onChange={e => setInputSum(e.target.value)}
              type="amount"
              size='md'
              maxLength={11}
              orientation="horizontal"
              label={t('L_SUM_AUT')}
            />
          </div>
        </div>

        <div className={classes.innerContainer}>
          <p>{t('L_HEARA')}</p>
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CentralizedChargeUI;
