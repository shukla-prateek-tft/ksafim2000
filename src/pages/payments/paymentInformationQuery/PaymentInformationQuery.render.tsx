import { Card } from '@/ui/Card';
import { ScreenLayout } from '@/ui/Layout';
import { Table } from '@/ui/Table';
import { PaymentInformationQueryColumn } from './components';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import classes from './PaymentInformationQuery.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { getInputPattern } from '@/utils/commonHelper';
import { useState } from 'react';
import { REGEX } from '@/constants/appConstant';

const defaultData = [
  {
    code1: false,
    code2: 'STUDENT',
    code3: 'ACT_NO',
    code4: 'DATE_AUTH',
    code5: 'ORDER_NUM',
    code6: 'DESC_AUT',
    code7: 'ACC_ACT',
    code8: 'SERVICE_TYPE',
    code9: 'ACC_CARD',
    code10: 'TYPE_NO',
    code11: 'OUTCOMES',
    code12: 'STATUS'
  }
];

const PaymentInformationQueryUI = ({ customRowRenderer, data }: any) => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    suppNum: '',
    suppName: '',
    signed: '',
    totalInvoices: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof formData) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  return (
    <ScreenLayout
      screenNumber="MCFW-0697"
      renderHeader={
        <div className={classes.doubleInput}>
          <Input
            size="md"
            label={t('L_SUPP')}
            type="number"
            orientation="horizontal"
            tabIndex={1}
            pattern={getInputPattern(10)}
            value={formData.suppNum}
            onChange={e => handleChange(e, 'suppNum')}
          />

          <Input
            value={formData.suppName}
            tabIndex={2}
            size="md"
            onChange={e => handleChange(e, 'suppName')}
            pattern={REGEX.allCharacter}
            maxLength={30}
          />
        </div>
      }
      renderFooter={
        <div>
          <div className={classes.inputField}>
            <div className={classes.checkboxWithInput}>
              <Input type="checkbox" />
              <Input
                size="md"
                orientation="horizontal"
                label={t('L_SIGNED')}
                type="amount"
                maxLength={13}
                min={0}
                value={formData.signed}
                onBlur={() => {}}
                onChange={e => handleChange(e, 'signed')}
                tabIndex={15}
              />
            </div>
            <div>
              <Input
                size="md"
                orientation="horizontal"
                label={t('L_TOTAL_INVOICES')}
                value={formData.totalInvoices}
                onChange={e => handleChange(e, 'totalInvoices')}
                type="amount"
                maxLength={15}
                tabIndex={16}
              />
            </div>
          </div>
          <div className={classes.actionItems}>
            <BackToPageButton tabIndex={17} />
            <SaveButton tabIndex={18} />
          </div>
        </div>
      }
    >
      <Card>
        <Table
          height="45vh"
          customRowRenderer={customRowRenderer}
          data={data}
          columns={PaymentInformationQueryColumn()}
        />
      </Card>
    </ScreenLayout>
  );
};

export default PaymentInformationQueryUI;
