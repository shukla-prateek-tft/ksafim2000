import classes from './BankDepositCutOff.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { GroupRadio } from '@/ui/GroupRadio';
import { Card } from '@/ui/Card';
const BankDepositCutOffUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <Card title={`${t('L_QUERY')}:${t('T_MCFW0625')}`}>
        <Select
          orientation="horizontal"
          label={`${t('L_PAY_WAY')}`}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          size="md"
        />
        <div className={classes.itemsContainer}>
          <Input
            type="number"
            maxLength={2}
            orientation="horizontal"
            label={t('L_BANK_CODE')}
            size="fullWidth"
          />
          <Input
            type="number"
            maxLength={8}
            orientation="horizontal"
            label={t('L_CONCENTRATION')}
            size="fullWidth"
          />
        </div>
        <Input
          orientation="horizontal"
          label={t('L_CHECK_NUM')}
          size="md"
          type="text"
          maxLength={16}
        />

        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_PAYMENT_DATE')}
          toLabel={t('L_TO')}
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_FROM_REL_DATE')}
          toLabel={t('L_TO')}
        />
        <div className={classes.itemsContainer}>
          <Input orientation="horizontal" label={t('L_ACC_DEBIT')} size="md" />
          <Select
            options={[{ label: 'label1', value: 'value1' }]}
            orientation="horizontal"
            size="sm"
          />
        </div>
        <div className={classes.itemsContainer}>
          <Input orientation="horizontal" label={t('L_ACC_DEBIT')} size="md" disabled />
          <Select
            options={[{ label: 'label1', value: 'value1' }]}
            orientation="horizontal"
            size="sm"
            disabled
          />
        </div>

        <Input type="checkbox" orientation="horizontal" label={t('L_CURRENT_YEAR')} />
        <div className={classes.groupContainer}>
          <GroupRadio
            title={t('L_CREDIT_ORDERS')}
            options={[
              { label: t('L_TRANSMIT'), value: 'sdfsdfsd' },
              { label: t('L_NOT_TRANSMIT'), value: 'sdfsdfsd' },
              { label: t('V_ALL'), value: 'sdfsdfsd' }
            ]}
            name={''}
            selectedValue={''}
            onChange={function (value: string | number): void {}}
            labelOrientation="horizontal"
            orientation="horizontal"
          />
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default BankDepositCutOffUI;
