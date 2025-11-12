import { Select } from '@/ui/Select';
import classes from './PaymentVoucherCancellationSection.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import React from 'react';
import { Payload } from './types';

interface PaymentVoucherCancellationSectionProps {
  renderActionItems: () => JSX.Element;
  payload: Payload;
  handleChange: any;
}

const PaymentVoucherCancellationSectionUI: React.FC<PaymentVoucherCancellationSectionProps> = ({
  renderActionItems,
  payload,
  handleChange
}) => {
  const { t } = useTranslation('common');
  const hidden = true; // replace with actual logic later

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW0641')}</legend>
        <Select  id='bank_Card'
          label={t('L_BANK_ACC')}
          options={[{ label: 'Label1', value: 'Value1' }]}
          orientation="horizontal"
          size="fullWidth"
          value={payload?.bank_Card}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleChange(e.target.value, 'bank_Card')
          }
          tabIndex={1}
        />

        <div className={classes.otherDetailContainer}>
          <Input
            size="lg"
            value={payload?.suppNum}
            label={t('L_SUPP')}
            orientation="horizontal"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value, 'suppNum')
            }
            tabIndex={2}
          />
          <Input
            size="fullWidth"
            disabled
            orientation="horizontal"
            value={payload?.suppName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value, 'suppName')
            }
            tabIndex={3}
          />
        </div>

        <Input
          size="lg"
          name="l_payment"
          value={payload?.expense}
          className={classes.input}
          label={t('L_PAYMENT')}
          orientation="horizontal"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, 'expense')
          }
          tabIndex={4}
        />

        {hidden && (
          <Input
            value={payload?.isExpenseCash}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value, 'isExpenseCash')
            }
            type="checkbox"
            label={t('L_CURRENT_YEAR')}
            orientation="horizontal"
          />
        )}
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} showPagination={false} />
    </div>
  );
};

export default PaymentVoucherCancellationSectionUI;
