import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import classes from './ExpandingFinancialData.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { ExpandingFinancialDataUIProps } from './types';

const ExpandingFinancialDataUI = ({ 
  renderActionItems,
  filter,
  onFilterChange 
}: ExpandingFinancialDataUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <div className={classes.rowFlex}>
          <Input
            orientation="horizontal"
            label={t('L_STUDENT')}
            maxLength={10}
            type='number'
            value={filter.studentId}
            onChange={(e) => onFilterChange('studentId', e.target.value)}
          />
          <Input disabled />
          <Input disabled />
        </div>
        <div className={classes.itemContainer}>
          <Select
            orientation="horizontal"
            size='md'
            label={t('L_YEAR')}
            options={[
              { label: t('V_CODE1'), value: 'dsdsd' },
              { label: t('V_CODE2'), value: 'dsdsd' },
              { label: t('V_CODE3'), value: 'dsdsd' },
              { label: t('V_CODE4'), value: 'dsdsd' }
            ]}
            value={filter.studentYear}
            onChange={(e) => onFilterChange('studentYear', e.target.value)}
          />
          <Input
            orientation="horizontal"
            size='md'
            label={t('L_SERIAL_NUMBER')}
            value={filter.serialNumber}
            onChange={(e) => onFilterChange('serialNumber', e.target.value)}
          />
        </div>
        <div className={classes.itemContainer}>
          <Select
            orientation="horizontal"
            size='md'
            label={t('L_SERVICE_TYPE')}
            options={[
              { label: t('V_CODE1'), value: 'dsdsd' },
              { label: t('V_CODE2'), value: 'dsdsd' },
              { label: t('V_CODE3'), value: 'dsdsd' },
              { label: t('V_CODE4'), value: 'dsdsd' }
            ]}
            value={filter.serviceType}
            onChange={(e) => onFilterChange('serviceType', e.target.value)}
          />
          <Select
            orientation="horizontal"
            size='md'
            label={t('L_SERVICE_SUBJEC')}
            options={[
              { label: t('V_CODE1'), value: 'dsdsd' },
              { label: t('V_CODE2'), value: 'dsdsd' },
              { label: t('V_CODE3'), value: 'dsdsd' },
              { label: t('V_CODE4'), value: 'dsdsd' }
            ]}
            value={filter.serviceSubject}
            onChange={(e) => onFilterChange('serviceSubject', e.target.value)}
          />
        </div>
        <div className={classes.itemContainer}>
          <Select
            orientation="horizontal"
            size='md'
            label={t('L_ACC_ACT_TYPE')}
            options={[
              { label: t('V_CODE1'), value: 'dsdsd' },
              { label: t('V_CODE2'), value: 'dsdsd' },
              { label: t('V_CODE3'), value: 'dsdsd' },
              { label: t('V_CODE4'), value: 'dsdsd' }
            ]}
            value={filter.actType}
            onChange={(e) => onFilterChange('actType', e.target.value)}
          />
          <Select
            orientation="horizontal"
            label={t('L_CREDIT_DEBIT')}
            options={[
              { label: t('V_CODE1'), value: 'dsdsd' },
              { label: t('V_CODE2'), value: 'dsdsd' },
              { label: t('V_CODE3'), value: 'dsdsd' },
              { label: t('V_CODE4'), value: 'dsdsd' }
            ]}
            size='md'
            value={filter.creditDebit}
            onChange={(e) => onFilterChange('creditDebit', e.target.value)}
          />
        </div>
        <div className={classes.rowContainer}>
          <Input
            label={t('L_CHARGE')}
            type='number'
            maxLength={3}
            orientation='horizontal'
            size='md'
            value={filter.charge}
            onChange={(e) => onFilterChange('charge', e.target.value)}
          />
          <Input
            label={t('L_DISCOUNT')}
            type='number'
            maxLength={3}
            orientation='horizontal'
            size='md'
            value={filter.discount}
            onChange={(e) => onFilterChange('discount', e.target.value)}
          />
        </div>
        <div className={classes.rowContainer}>
          <Input
            label={t('L_CREDIT')}
            type='amount'
            maxLength={9}
            size='md'
            orientation='horizontal'
            value={filter.credit}
            onChange={(e) => onFilterChange('credit', e.target.value)}
          />
          <Input
            label={t('L_DEBIT')}
            type='number'
            maxLength={3}
            size='md'
            orientation='horizontal'
            value={filter.debit}
            onChange={(e) => onFilterChange('debit', e.target.value)}
          />
        </div>
        <div className={classes.rowContainer}>
          <DatePickerComponent
            label={t('L_VALUE_DATE')}
            size='md'
            orientation='horizontal'
            selectedDate={filter.valueDate || new Date()}
            onChange={(date) => onFilterChange('valueDate', date)}
          />
          <DatePickerComponent
            label={t('L_PAY_DATE')}
            size='md'
            orientation='horizontal'
            selectedDate={filter.payDate || new Date()}
            onChange={(date) => onFilterChange('payDate', date)}
          />
        </div>
        <div className={classes.rowContainer}>
          <DatePickerComponent
            label={t('L_UPDATE_DATE')}
            size='md'
            orientation='horizontal'
            selectedDate={filter.updateDate || new Date()}
            onChange={(date) => onFilterChange('valueDate', date)}
          />
          <Input
            label={t('L_USER_NAME')}
            type='text'
            maxLength={15}
            size='md'
            orientation='horizontal'
            value={filter.userName}
            onChange={(e) => onFilterChange('userName', e.target.value)}
          />
        </div>
        <div className={classes.rowContainer}>
          <Input
            label={t('L_RECEIPT')}
            type='number'
            maxLength={6}
            size='md'
            orientation='horizontal'
            value={filter.receipt}
            onChange={(e) => onFilterChange('receipt', e.target.value)}
          />
          <Input
            label={t('L_REFERENCE')}
            type='text'
            maxLength={15}
            size='md'
            orientation='horizontal'
            value={filter.reference}
            onChange={(e) => onFilterChange('reference', e.target.value)}
          />
        </div>
      </fieldset>

      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ExpandingFinancialDataUI;
