import classes from './IncomeVersusExpensesForTheTopic.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input, SelectWithInput } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
const IncomeVersusExpensesForTheTopicUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <div className={classes.selectorAlign}>
          <SelectWithInput
            size="sm"
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            label={t('L_CLASS_FROM')}
            onChangeSelect={() => {}}
            onChangeInput={() => {}}
            maxLength={2}
            inputType='number'
          />
          <SelectWithInput
            size="sm"
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            label={t('L_TO')}
            onChangeSelect={() => {}}
            onChangeInput={() => {}}
            maxLength={2}
            inputType='number'
          />
        </div>
        <div className={classes.selectContainer}>
          <div className={classes.selectContainerAlign}>
            <Select
              orientation="horizontal"
              label={t('L_SERVICE1')}
              size="fullWidth"
              placeholder=" "
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />

            <Select
              size="fullWidth"
              orientation="horizontal"
              label={t('L_SERVICE2')}
              placeholder=" "
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />

            <Select
              size="fullWidth"
              orientation="horizontal"
              label={t('L_SERVICE3')}
              placeholder=" "
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />

            <Select
              size="fullWidth"
              orientation="horizontal"
              label={t('L_SERVICE4')}
              placeholder=" "
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />
          </div>
          <div className={classes.selectContainerAlign}>
            <Select
              size="fullWidth"
              orientation="horizontal"
              label={t('L_SERVICE5')}
              placeholder=" "
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />

            <Select
              size="fullWidth"
              orientation="horizontal"
              label={t('L_SERVICE6')}
              placeholder=" "
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />
          </div>
        </div>
        <Input size="md" type="checkbox" orientation="horizontal" label={t('L_WITH_LEAVING')} />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default IncomeVersusExpensesForTheTopicUI;
