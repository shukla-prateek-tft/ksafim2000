// MCFS-0641
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import PaymentVoucherCancellationSectionUI from './PaymentVoucherCancellationSection.render';
import classes from './PaymentVoucherCancellationSection.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useEffect, useState } from 'react';
import { Payload } from './types';
import { useAuth } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { useFocusFirstInvalidField } from '@/hooks/useFocusFirstInvalidField';
const PaymentVoucherCancellationSection = ({ onClose }: any) => {
  const { t } = useTranslation('');
  const { toggleFlags } = useAuth();
  const [payload, setPayload] = useState<Payload>({
    bank_Card: '',
    expense: '',
    suppName: '',
    suppNum: '',
    isExpenseCash: false
  });
  const { focusFirstInvalidField } = useFocusFirstInvalidField();
  const onSave = () => {
    const showError = (inputId: string) => {
      toggleFlags({
        showValidationError: true,
        errorData: {
          message: t('L_NO_SUPP'),
          dialogTitle: t('errorTitle'),
          confirmText: t('confirmText'),
          confirmCallback: () => focusFirstInvalidField(inputId)
        }
      });
      return;
    };

    if (payload?.bank_Card === '') {
      showError('bank_Card');
    } else if (payload?.expense === '' && payload?.suppNum === '') {
      showError('suppNum');
    }
    //Navigate to next screen with payload
  };
  // Step-1 First we need to call gloabl function to get screen name
  useEffect(() => {
    //Call (gp-trg-execute)
  }, []);
  //Step-2 API Call for getting bankcard to polulate options

  //Step-3 Initial value for Bank_card select componnete with global variable $$bank_acc

  //
  const renderActionItems = () => {
    return (
      <div className={classes.renderActionItems}>
        <BackToPageButton tabIndex={7} onClick={onClose} />
        <DetailButton tabIndex={6} />
        <SaveButton onClick={onSave} tabIndex={5} />
      </div>
    );
  };

  const handleChangePayload = <K extends keyof Payload>(value: Payload[K], key: K) => {
    setPayload(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-0641">
      <PaymentVoucherCancellationSectionUI
        renderActionItems={renderActionItems}
        payload={payload}
        handleChange={handleChangePayload}
      />
    </DialogBox>
  );
};

export default PaymentVoucherCancellationSection;
