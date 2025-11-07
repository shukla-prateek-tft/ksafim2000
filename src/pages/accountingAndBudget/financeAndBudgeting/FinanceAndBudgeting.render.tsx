import classes from './FinanceAndBudgeting.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';
import { FinanceAndBudgetingUIProps } from './types';

const FinanceAndBudgetingUI = ({ 
  renderActionItems,
  filter,
  onChange 
}: FinanceAndBudgetingUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <div className={classes.mainContainer}>
          <div className={classes.flex}>
            <Input orientation="horizontal" label={t('L_YEAR')} size="fullWidth" type='number' maxLength={4} value={filter.year} onChange={(e) => onChange('year', e.target. value)} />
            <Input size="fullWidth" orientation="horizontal" disabled label={t('L_NEW_YEAR')} type='number' maxLength={4} />
          </div>
          <Input orientation="horizontal" label={t('L_VALUE_DATE')} size="lg" value={filter.valueDate} onChange={(e) => onChange('valueDate', e.target. value)} />
          <Select
            orientation="horizontal"
            label={t('L_CLOSE_CARD')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="lg"
            value={filter.accClose} 
            onChange={(e) => onChange('accClose', e.target. value)}
          />
          <Select
            orientation="horizontal"
            label={t('L_ACC_START')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="lg"
            value={filter.accOpen} 
            onChange={(e) => onChange('accOpen', e.target. value)}
          />
          <Select
            orientation="horizontal"
            label={t('CHEQ_DUE')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="lg"
            value={filter.chequeDue} 
            onChange={(e) => onChange('chequeDue', e.target. value)}
          />

          <div className={classes.groupContainer}>
            <GroupRadio
              onChange={(value) => onChange('moveTo', value || '')}
              title={t('L_MOVE_TO')}
              orientation="horizontal"
              options={[
                { label: t('L_DETAILED'), value: 'dsdsd' },
                { label: t('L_CONCENTRATED'), value: 'dsdsd' }
              ]}
              name={''}
              selectedValue={filter.moveTo}
            />
          </div>

          <Select
            orientation="horizontal"
            label={t('L_BANK_ACC')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="lg"
            value={filter.bankCard1} 
            onChange={(e) => onChange('bankCard1', e.target. value)}
          />
          <Select
            orientation="horizontal"
            isLabel={true}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="lg"
            value={filter.bankCard2} 
            onChange={(e) => onChange('bankCard2', e.target. value)}
          />
          <Select
            orientation="horizontal"
            isLabel={true}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="lg"
            value={filter.bankCard3} 
            onChange={(e) => onChange('bankCard3', e.target. value)}
          />
          <Select
            orientation="horizontal"
            isLabel={true}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            size="lg"
            value={filter.bankCard4} 
            onChange={(e) => onChange('bankCard4', e.target. value)}
          />
        </div>

        <div className={classes.innerContainer}>
          <p>{t('L_1164_DESC')}</p>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default FinanceAndBudgetingUI;
