import { Select } from '@/ui/Select';
import classes from './PaymentVoucherCancellationSection.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import React from 'react';


interface PaymentVoucherCancellationSectionProps {
  renderActionItems: () => JSX.Element;
  bankAccount: string;
  setBankAccount: React.Dispatch<React.SetStateAction<string>>;
  supplierName: string;
  setSupplierName: React.Dispatch<React.SetStateAction<string>>;
  supplierNameDisabled: string;
  setSupplierNameDisabled: React.Dispatch<React.SetStateAction<string>>;
  payment: string;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
  currentYear: string;
  setCurrentYear: React.Dispatch<React.SetStateAction<string>>;
}

const PaymentVoucherCancellationSectionUI: React.FC<PaymentVoucherCancellationSectionProps> = ({
  renderActionItems,
  bankAccount,
  setBankAccount,
  supplierName,
  setSupplierName,
  supplierNameDisabled,
  setSupplierNameDisabled,
  payment,
  setPayment,
  currentYear,
  setCurrentYear
}) => {
  const { t } = useTranslation('common');
  const hidden = false; // replace with actual logic later

  console.log(bankAccount, supplierName, payment, currentYear, 'selectedFilter');

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW0641')}</legend>
        <Select
          label={t('L_BANK_ACC')}
          options={[{ label: 'Label1', value: 'Value1' }]}
          orientation="horizontal"
          size="fullWidth"
          value={bankAccount}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBankAccount(e.target.value)}
          tabIndex={1}
        />

        <div className={classes.otherDetailContainer}>
          <Input
            value={supplierName}
            label={t('L_SUPP')}
            orientation="horizontal"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSupplierName(e.target.value)}
           tabIndex={2}

          />
          <Input
            disabled
            orientation="horizontal"
            value={supplierNameDisabled}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSupplierNameDisabled(e.target.value)
            }
          tabIndex={3}
          />
        </div>

        <Input
          name="l_payment"
          value={payment}
          className={classes.input}
          label={t('L_PAYMENT')}
          orientation="horizontal"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPayment(e.target.value)}
          tabIndex={4}
        />

        {hidden && (
          <Input
            value={currentYear}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentYear(e.target.value)}
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
