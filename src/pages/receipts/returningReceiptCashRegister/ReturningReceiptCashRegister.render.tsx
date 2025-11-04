import { Card } from '@/ui/Card';
import classes from './ReturningReceiptCashRegister.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { RangeSelector } from '@/ui/DateRangePicker';
import { BottomToolBar } from '@/ui/BottomToolBar';

interface ReturningReceiptCashRegisterUIProps {
  renderActionItems: () => JSX.Element | null;
}
const ReturningReceiptCashRegisterUI = ({
  renderActionItems
}: ReturningReceiptCashRegisterUIProps) => {
  const { t } = useTranslation('common');
  const hidden = true; // This can be a prop or state based on your requirements
  return (
    <div>
      <Card title={`${t('L_MCFS0640_HEADER')}`}>
        <div className={classes.section}>
          <div className={classes.range}>
            <Input
              type={'number'}
              maxLength={6}
              label={t('T_MCFR0623')}
              orientation="horizontal"
              size="md"
            />
            {hidden && (
              <Input
                type="checkbox"
                checked={true}
                label={t('L_MARK_ALL')}
                orientation="horizontal"
              />
            )}
          </div>
          <Select size="md" options={[]} label={t('L_PAY_WAY')} orientation="horizontal" />
          <div className={classes.flex}>
            <Input
              type={'number'}
              maxLength={5}
              size="md"
              label={t('L_BANK')}
              orientation="horizontal"
            />
            <Input size="md" value={''} disabled />
          </div>
          <Input
            type={'number'}
            maxLength={9}
            size="md"
            label={t('L_BANK_ACCOUNT')}
            orientation="horizontal"
          />
          <Input maxLength={16} size="md" label={t('L_CHECK_NUM')} orientation="horizontal" />
          <Input
            type="amount"
            maxLength={11}
            size="md"
            label={t('L_MONEY_AMNT')}
            orientation="horizontal"
          />
          <RangeSelector
            fromLabel={t('L_PAYMENT_DATE')}
            toLabel={t('L_TO')}
            labelOrientation="horizontal"
            type="text"
          />

          <div className={classes.range}>
            <Input
              type="checkbox"
              checked={true}
              label={t('L_GIFT_RECEIPT')}
              orientation="horizontal"
            />
            {hidden && (
              <Input type="checkbox" checked={true} label={t('L_CARD')} orientation="horizontal" />
            )}
          </div>
        </div>
      </Card>

      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default ReturningReceiptCashRegisterUI;
