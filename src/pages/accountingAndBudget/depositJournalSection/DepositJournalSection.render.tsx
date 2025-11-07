import classes from './DepositJournalSection.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { Card } from '@/ui/Card';

const DepositJournalSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const hidden = true;
  return (
    <div className={classes.mainContainer}>
      <Card title={`${t('L_QUERY')}: ${t('T_MCFR0685')}`}>
        <Input type="checkbox" orientation="horizontal" label={t('L_TO_DEPOSIT')} tabIndex={1} />
        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          fromLabel={t('L_DEPOSIT_NUM')}
          toLabel={t('L_TO')}
          maxLength={5}
          tabIndex={2}
        />
        <div className={classes.bankAccountContainer}>
          <Input
            type="text"
            orientation="horizontal"
            label={t('L_BANK_ACC')}
            size="md"
            tabIndex={3}
          />

          {!hidden && (
            <Select
              orientation="horizontal"
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />
          )}
        </div>
        <div className={classes.itemContainer}>
          <Input
            orientation="horizontal"
            label={t('L_BANK_DEPOSIT')}
            size="md"
            type="number"
            maxLength={6}
            tabIndex={4}
          />
          <Input
            type="checkbox"
            orientation="horizontal"
            label={t('L_RETURNED_CHECK')}
            tabIndex={5}
          />
        </div>

        <RangeSelector
          labelOrientation="horizontal"
          fromLabel={t('L_DEPOSIT_DATE')}
          toLabel={t('L_TO')}
          tabIndex={6}
        />
        <RangeSelector
          labelOrientation="horizontal"
          fromLabel={t('L_PAYMENT_DATE')}
          toLabel={t('L_TO')}
          tabIndex={7}
        />

        <Select
          orientation="horizontal"
          label={t('L_PAY_WAY')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          size="md"
          tabIndex={8}
        />

        <div className={classes.itemContainer}>
          <Input
            type="checkbox"
            orientation="horizontal"
            label={t('L_CANCELLED_DEPOSIT')}
            tabIndex={9}
          />
          <Input
            type="checkbox"
            orientation="horizontal"
            label={t('L_INCLUDE_BANK')}
            tabIndex={10}
          />
        </div>
        <div className={classes.itemContainer}>
          <Input
            type="checkbox"
            orientation="horizontal"
            label={t('L_CURRENT_YEAR')}
            tabIndex={11}
          />
          <Input
            type="checkbox"
            orientation="horizontal"
            label={t('L_TEMP_DEPOSIT')}
            tabIndex={12}
          />
          <Input type="checkbox" orientation="horizontal" label={t('L_DEPOS_POST')} tabIndex={13} />
        </div>
      </Card>

      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default DepositJournalSectionUI;
