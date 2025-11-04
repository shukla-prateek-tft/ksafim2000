import classes from './RefundReceiptFromCashRegisterWithoutTransmission.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { Table } from '@/ui/Table';
import { RefundReceiptFromCashRegisterWithoutTransmissionColumns } from './components';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { RefundReceiptFromCashRegisterWithoutTransmissionProps } from './types';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';

const RefundReceiptFromCashRegisterWithoutTransmissionUI = ({
  renderActionItems,
  customRowRenderer,
  filter,
  onChange
}: RefundReceiptFromCashRegisterWithoutTransmissionProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW0640')}</legend>
        <div className={classes.inputContainer}>
          <div>
            <Input type="checkbox" />
          </div>
          <div className={classes.inputContainerAlign}>
            <Select
              orientation="horizontal"
              label={t('L_S_PAY_WAY')}
              placeholder=" "
              options={[]}
              value={filter.payway}
              onChange={(e) => onChange('payway', e.target.value)}
            />
            <Input
              orientation="horizontal"
              label={t('L_CHECK_NUM')}
              placeholder=" "
              maxLength={16}
              value={filter.checkNum}
              onChange={(e) => onChange('payway', e.target.value)}
            />
            <div className={classes.flex}>
              <Input
                orientation="horizontal"
                label={t('L_BANK')}
                placeholder=" "
                value={filter.bank}
                onChange={(e) => onChange('bank', e.target.value)} type='number' maxLength={5} />
              <Input placeholder=" " disabled />
            </div>
            <Input orientation="horizontal" label={t('L_TOKEN')} placeholder=" " type='number' maxLength={16} value={filter.token} onChange={(e) => onChange('token', e.target.value)} />
            <Select
              orientation="horizontal"
              label={t('L_ACC_ACT_TYPE')}
              placeholder=" "
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              value={filter.actType}
              onChange={(e) => onChange('actType', e.target.value)}
            />
            <Input orientation="horizontal" label={t('L_DETAILS')} placeholder=" " maxLength={30} value={filter.token}
              onChange={(e) => onChange('token', e.target.value)} />
          </div>
          <div className={classes.inputContainerAlign}>
            <div className={classes.flex}>
              <DatePickerComponent orientation="horizontal" label={t('L_PAYMENT_DATE')} placeholder=" " selectedDate={filter.paymentDate || new Date()} onChange={(date) => onChange('paymentDate', date)} />
              <Input orientation="horizontal" label={t(' ')} placeholder=" " />
            </div>
            <Input orientation="horizontal" label={t('L_INCOME')} placeholder=" " type='amount' value={filter.income} onChange={(e) => onChange('income', e.target.value)} maxLength={9} />
            <Input orientation="horizontal" label={t('L_BANK_ACCOUNT')} placeholder=" " type='number' maxLength={9} value={filter.bankAccount} onChange={(e) => onChange('bankAccount', e.target.value)} />
            <Input orientation="horizontal" label={t('L_TERMINAL_NUM')} placeholder=" " maxLength={16} value={filter.terminalNum} onChange={(e) => onChange('terminalNum', e.target.value)} />
            <div className={classes.flex}>
              <Input orientation="horizontal" label={t('L_RECEIPT')} placeholder=" " maxLength={7} value={filter.receipt} onChange={(e) => onChange('receipt', e.target.value)} />
              <Input placeholder=" " label={t('L_SYSTEM_YEAR')} orientation="horizontal" type='number' maxLength={4} value={filter.systemYear} onChange={(e) => onChange('systemYear', e.target.value)} />
            </div>
            <div className={classes.flex}>
              <Input orientation="horizontal" label={t('L_PAYER')} placeholder=" " type='number' maxLength={10} value={filter.payer} onChange={(e) => onChange('payer', e.target.value)} />
              <Input placeholder=" " disabled />
            </div>
          </div>
        </div>
        <Table
          columns={RefundReceiptFromCashRegisterWithoutTransmissionColumns()}
          data={[{ c1: 'abcd', c2: '', c3: '', c4: '', c5: '' }]}
          customRowRenderer={customRowRenderer}
        />
        <div className={classes.totalContainer}>
          <div className={classes.total}>
            <Input orientation="horizontal" placeholder=" " />
            <Input orientation="horizontal" label={t('L_TOTAL')} placeholder=" " />
          </div>
        </div>
        <div className={classes.remarks}>
          <Badge renderIcon={<PiWarningCircleFill />} title={t('L_CONFIRM_SIGN')} badgeType='outline' />
          <div>
            <p>
              {t('L_SIGNITURE')} <span>____________________</span>
            </p>
          </div>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default RefundReceiptFromCashRegisterWithoutTransmissionUI;
