import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CentralizedChargeCorrection.module.scss';
import { Table } from '@/ui/Table';
import { Button } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { REGEX } from '@/constants/appConstant';
import { ListofGefenColumn } from './components';

const data = [
  {
    check: true,
    vineCode: 'VC001',
    codeDescription: 'Code 001 Description',
    accountant: 'John Doe',
    appSecond: 'Jane Smith',
    list: 'List Item A',
    errorDescription: 'No error'
  }
];
interface CentralizedChargeCorrectionProps {
  renderActionItems: any;
}

const CentralizedChargeCorrectionUI: React.FC<CentralizedChargeCorrectionProps> = ({
  renderActionItems
}: any) => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className={classes.container}>
        <Card title={t('L_Vendor_Tax_Number')}>
          <div className={classes.mainContainer}>
            <Input label={t('L_DESC')} disabled orientation="horizontal" pattern={REGEX.allCharacter} maxLength={30} tabIndex={4}/>
            <Input label={t('L_DISCOUNT')} disabled orientation="horizontal" type='number' maxLength={3} tabIndex={5} />
            <Button size="md" title={t('L_SEARCH')} tabIndex={6} />
          </div>
        </Card>
        <Card>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={ListofGefenColumn()}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'L_Invoice_Number':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="number"
                          id="catalog_no"
                          maxLength={3}
                         size='fullWidth'

                        />
                      </div>
                    );
                  case 'vineCode':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          pattern={REGEX.allCharacter}
                          maxLength={30}
                         size='fullWidth'
                        />
                      </div>
                    );
                  case 'codeDescription':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          label=" "
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          pattern={REGEX.allCharacter}
                          size='fullWidth'
                         
                        />
                      </div>
                    );

                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
          </div>
        </Card>
        <BottomToolBar renderActionItems={renderActionItems} />
      </div>
    </>
  );
};

export default CentralizedChargeCorrectionUI;
