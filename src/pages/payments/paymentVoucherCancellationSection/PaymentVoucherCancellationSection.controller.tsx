// MCFS-0641
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import PaymentVoucherCancellationSectionUI from './PaymentVoucherCancellationSection.render';
import classes from './PaymentVoucherCancellationSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppRoutes } from '@/Languages';
import { NavigateState } from './types';

const PaymentVoucherCancellationSection = ({onClose}) => {
  const navigate = useNavigate();

  const [bankAccount, setBankAccount] = useState<string>('');
  const [supplierName, setSupplierName] = useState<string>('');
  const [supplierNameDisabled, setSupplierNameDisabled] = useState<string>('');
  const [payment, setPayment] = useState<string>('');
  const [currentYear, setCurrentYear] = useState<string>('');

  const onSave = () => {
    const state: NavigateState = {
      bankAccount,
      supplierName,
      supplierNameDisabled,
      payment,
      currentYear
    };
    navigate(AppRoutes.CANCELLATION_OF_PAYMENT_PROVISION, { state });
  };

  const renderActionItems = () => {
    return (
      <div className={classes.renderActionItems}>
        <BackToPageButton tabIndex={7} onClick={onClose}/>
        <DetailButton tabIndex={6} />
        <SaveButton onClick={onSave} tabIndex={5} />
      </div>
    );
  };

  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-0641">
      <PaymentVoucherCancellationSectionUI
        renderActionItems={renderActionItems}
        bankAccount={bankAccount}
        setBankAccount={setBankAccount}
        supplierName={supplierName}
        setSupplierName={setSupplierName}
        supplierNameDisabled={supplierNameDisabled}
        setSupplierNameDisabled={setSupplierNameDisabled}
        payment={payment}
        setPayment={setPayment}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
    </DialogBox>
  );
};

export default PaymentVoucherCancellationSection;
