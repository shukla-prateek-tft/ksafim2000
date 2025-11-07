import classes from './CancellingBankTransfer.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
const CancellingBankTransferUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const hidden = false;
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')} : ${t('T_MCFW1179')}`}</legend>
        <div className={classes.itemsContainer}>
          <Input
            type="number"
            maxLength={6}
            orientation="horizontal"
            label={t('L_RECEIPT')}
            size="md"
          />
          {!hidden && (
            <Input type="checkbox" orientation="horizontal" label={t('L_ALL')} size="md" />
          )}
        </div>
        <Select
          orientation="horizontal"
          label={t('L_PAY_WAY')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          size="md"
        />
        <div className={classes.itemsContainer}>
          <Input
            type="number"
            maxLength={5}
            orientation="horizontal"
            label={t('L_BANK')}
            size="md"
          />
          <Input orientation="horizontal" disabled size="sm" />
          <Input maxLength={7} orientation="horizontal" size="sm" />
        </div>
        <Input
          type="number"
          maxLength={9}
          orientation="horizontal"
          label={t('L_BANK_ACCOUNT')}
          size="md"
        />
        <Input maxLength={16} orientation="horizontal" label={t('L_CHECK_NUM')} size="md" />
        <Input
          type="amount"
          maxLength={11}
          orientation="horizontal"
          label={t('L_MONEY_AMNT')}
          size="md"
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="text"
          fromLabel={t('L_Payment_Date')}
          toLabel={t('L_TO')}
          size="md"
        />
        <Input type="checkbox" orientation="horizontal" label={t('L_GIFT_RECEPT')} size="md" />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CancellingBankTransferUI;
