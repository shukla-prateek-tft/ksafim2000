import classes from './GoneForAYear.module.scss';
import { BottomToolBar } from '@/components';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';

const GoneForAYearUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <Card>
        <div className={classes.mainContainer}>
          <Input
            orientation="horizontal"
            label={t('L_FINANCE_YEAR')}
            type="number"
            maxLength={4}
            tabIndex={1}
          />
          <Input
            type="checkbox"
            orientation="horizontal"
            label={t('T_MCFR1286')}
            checked={true}
            tabIndex={2}
          />
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default GoneForAYearUI;
