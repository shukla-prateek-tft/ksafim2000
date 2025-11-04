import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Input } from '@/ui/Input';
import { Table } from '@/ui/Table';
import { getFormatedNumber } from '@/utils/commonHelper';
import classes from './InvoiceDisplay.module.scss';
import { SupplierInput } from '@/components/supplierInput';
import { Footer } from '@/ui/Footer';
import { InvoiceDisplayUIProps } from './types';



const InvoiceDisplayUI: React.FC<InvoiceDisplayUIProps> = ({
  data,
  column,
  totalAmount,
  selectedAmount = 0,
  supplierData,
  onSelectSupplier,
  renderActionItems,
  customRowRender
}) => {
  const { t } = useTranslation('invoiceDisplay');
  return (
      <ScreenLayout
        renderFooter={<Footer />}
        screenNumber="MCFW-0697"
        renderHeader={renderActionItems}
      >
        <div className={classes.inputAligner}>
          <SupplierInput 
          orientation='horizontal' 
          size='fullWidth'
            label={t('supplierInputLabel')}
            Supp_Name={supplierData.supplierName}
            Supp_Num={supplierData.supplierNo}
            onChange={data =>
              onSelectSupplier({ supp_Name: data?.Supp_Name, supp_Num: data?.Supp_Num })
            }
          />
        </div>
        <Table customRowRenderer={customRowRender} height="60vh" columns={column} data={data} />
        <div className={classes.inputAligner}>
          <Input
            orientation="horizontal"
            label={t('totalMarked')}
            readOnly
            value={getFormatedNumber(selectedAmount)}
          />
          <Input readOnly value={getFormatedNumber(totalAmount)} />
        </div>
      </ScreenLayout>
  );
};

export default InvoiceDisplayUI;
