import { useApiQuery, useAuth } from '@/hooks';
import classes from './SupplierInput.module.scss';
import { Input } from '@/ui/Input';
import { adminServices } from '@/services';
import { useEffect, useState, ChangeEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from '@/utils/commonHelper';
import { InputSizes } from '@/types/ui/input';
import { SupplierSelection } from '@/pages/suppliers/supplierSelection';
import { ServiceFn } from '@/pages/type';

interface SupplierInputProps {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
  Supp_Name: string;
  Supp_Num: string;
  onChange: (fields: { Supp_Name?: string; Supp_Num?: string }) => void;
  size?: InputSizes;
}

interface SupplierSelectionState {
  flag: boolean;
  data: any;
}

const SupplierInput = ({
  label,
  orientation,
  Supp_Name = '',
  Supp_Num = '',
  size = 'md',
  onChange
}: SupplierInputProps) => {
  const { t } = useTranslation('invoiceListEditSection');
  const { user } = useAuth();

  const [showSupplierSelection, setShowSupplierSelection] = useState<SupplierSelectionState>({
    flag: false,
    data: null
  });

  type SupplierDetailsItem = { supp_name: string; supp_num: number | string };
  type SupplierDetailsResponse = {
    success: boolean;
    message: string;
    data: SupplierDetailsItem[];
  };

  const {
    state: { data: paymentSupplierResponse },
    callService: getPaymentSupplierListService,
    resetServiceState: resetPaymentSupplierServiceState
  } = useApiQuery<SupplierDetailsResponse>(
    adminServices.mapping.getSupplierDetails as ServiceFn
  );

  const debouncedFetchSuppliers = useCallback(
    debounce((...args: unknown[]) => {
      const value = args[0] as string;
      getPaymentSupplierListService({
        supp_num: value
      });
    }, 1000),
    [getPaymentSupplierListService]
  );

  useEffect(() => {
    if (paymentSupplierResponse?.data?.[0]) {
      const payloadData = paymentSupplierResponse.data[0];

      if (payloadData?.supp_name !== Supp_Name) {
        onChange({
          Supp_Name: payloadData?.supp_name || '',
          Supp_Num: String(payloadData?.supp_num ?? '')
        });
      }
      resetPaymentSupplierServiceState();
    }
  }, [paymentSupplierResponse, Supp_Name, onChange]);

  const handleSelectSupplierForPayment = (supplier: any) => {
    onChange({ Supp_Name: supplier?.supp_Name, Supp_Num: supplier?.supp_Num });
    setShowSupplierSelection({ flag: false, data: supplier });
  };

  const handleChangeSupplierInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length >= 4) debouncedFetchSuppliers(value);

    onChange({ Supp_Num: value });
  };

  const handleDoubleClickSupplierInput = () => {
    setShowSupplierSelection({ flag: true, data: null });
  };

  return (
    <div className={classes.supplierInput}>
      <Input
        size={size}
        label={label}
        orientation={orientation}
        value={Supp_Num}
        onChange={handleChangeSupplierInput}
        onDoubleClick={handleDoubleClickSupplierInput}
      />
      <Input
        size={'fullWidth'}
        isLabel={Boolean(label && orientation !== 'horizontal')}
        orientation={orientation}
        value={Supp_Name}
        disabled
      />
      <SupplierSelection
        onSelectSupplierForPayment={handleSelectSupplierForPayment}
        onClose={() => setShowSupplierSelection({ flag: false, data: null })}
        isOpen={showSupplierSelection.flag}
        headerTitle={t('L_Heading')}
      />
    </div>
  );
};

export default SupplierInput;
