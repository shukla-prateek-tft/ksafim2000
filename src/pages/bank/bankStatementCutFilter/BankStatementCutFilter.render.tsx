import classes from './BankStatementCutFilter.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Controller, useForm } from 'react-hook-form';
import { BankStatementCutFilterType } from './types';

const BankStatementCutFilterUI = ({ renderActionItems }: any) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<BankStatementCutFilterType>();
  const { t } = useTranslation('common');

  const onSubmit = (data: BankStatementCutFilterType) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.mainContainer}>
        <fieldset className={classes.fieldSet}>
          <legend className={classes.legend}>{`${t('L_QUERY')} : ${t('T_MCFR0688')}`}</legend>

          {/* Select with validation */}
          <Controller
            name="bankAcc"
            control={control}
            rules={{ required: `${t('L_BANK_ACC')}  ${t('L_REQUIRED')}` }}
            render={({ field }) => (
              <Select
                size="md"
                orientation="horizontal"
                label={t('L_BANK_ACC')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                value={field.value}
                onChange={field.onChange}
                error={errors.bankAcc?.message}
              />
            )}
          />

          <Controller
            name="merge"
            control={control}
            rules={{ required: `${t('L_VALUE_DATE')} ${t('L_REQUIRED')}` }}
            render={({ field }) => (
              <Input
                size="md"
                orientation="horizontal"
                label={t('L_MERGE')}
                value={field.value}
                onChange={field.onChange}
                error={errors.merge?.message}
                type='number'
                maxLength={6}
              />
            )}
          />

          <Controller
            name="valueDate"
            control={control}
            rules={{ required: `${t('L_VALUE_DATE')} ${t('L_REQUIRED')}` }}
            render={({ field }) => (
              <RangeSelector
                size="md"
                labelOrientation="horizontal"
                type="date"
                fromLabel={t('L_VALUE_DATE')}
                toLabel={t('L_TO')}
                toId='to'
                fromId='from'
                toValue={field.value?.to}
                fromValue={field.value?.from}
                onChange={field.onChange}
                fromError={errors.valueDate?.message}
                toError={errors.valueDate?.message}
              />
            )}
          />

          <Controller
            name="document"
            control={control}
            rules={{ required: `${t('L_VALUE_DATE')} ${t('L_REQUIRED')}` }}
            render={({ field }) => (
              <Input
                size="md"
                orientation="horizontal"
                label={t('L_DOCUMENT')}
                value={field.value}
                onChange={field.onChange}
                error={errors.document?.message}
                type='number'
                maxLength={10}
              />
            )}
          />

          {/* Credit / Debit range */}
          <Controller
            name="creditDebit"
            control={control}
            rules={{ required: `${t('L_CREDIT_SUM')} ${t('L_REQUIRED') }`}}
            render={({ field }) => (
              <RangeSelector
                size="md"
                labelOrientation="horizontal"
                type="amount"
                fromLabel={t('L_CREDIT_SUM')}
                toLabel={t('L_DEBIT_SUM')}
                onChange={field.onChange}
                fromError={errors.creditDebit?.message}
                toError={errors.creditDebit?.message}
                maxLength={9}
                toId='to'
                fromId='from'
                toValue={field.value?.to}
                fromValue={field.value?.from}
              />
            )}
          />
        </fieldset>

        <BottomToolBar pagination={false} renderActionItems={renderActionItems} />
      </div>
    </form>
  );
};

export default BankStatementCutFilterUI;
