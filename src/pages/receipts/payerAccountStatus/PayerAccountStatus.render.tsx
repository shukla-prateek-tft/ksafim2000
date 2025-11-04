import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './PayerAccountStatus.module.scss';
import {
  Button,
} from '@/components/commonButtons';

import { Input } from '@/ui/Input';
import { PayerAccountStatusBottomColumns, PayerAccountStatusTopColumns } from './components';

interface PayerAccountStatusProps {
  data: Array<Record<string, string>>
}

const PayerAccountStatusUI = ({ data }: PayerAccountStatusProps) => {
  const { t } = useTranslation('common');
  const handlePrint = () => {
    window.print();
  };

  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.renderItem}>
          <Button title='#' />
          <Button title={t("L_DATE")} />
          <Button title={t("L_BANK")} />
          <Button title={t("L_BANK_ACCOUNT")} />
          <Button title={t("L_IS_CREDIT_CARD")} />
          <Button title={t("L_VALID_DATE")} />
          <Button title={t("L_MONEY_AMNT")} />
        </div>
      }
      header={
        <ReportHeader
          right={
                  <>
                    <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
                    <ReportCells label={t('HEB')} value={'Value'} />
                    <ReportCells label={t('L_PAGE')} value={'1'} />
                  </>
                }
          center={
            <>
              <div>{t('REPORT_DATE')}</div>
              <div>{t('QUERY_PARAMS')}</div>
            </>
          }
        />
      }
      footer={
          <ReportFooter
            right={<ReportCells label={t('L_PRINTED_BY')} value={'MOHIT'} />}
          />
      }
    >
      <div className={classes.mainContainer}>
          <div>
              <div className={classes.inputContainer}>
                  <Input
                    orientation="horizontal"
                    label={t('L_ID')}
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  
                  />
                   <Input
                    orientation="horizontal"
                    label={t('L_NAME')}
                    id="text2"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
                  <Input
                    orientation="horizontal"
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
               
                    <Input
                    orientation="horizontal"
                    label={t('L_PHONE')}
                    id="text3"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
                      <Input
                    orientation="horizontal"
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
                
                     <Input
                    orientation="horizontal"
                    label={t('L_MOBILE')}
                    id="text4"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
                     <Input
                    orientation="horizontal"
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
               
                    <Input
                    orientation="horizontal"
                    label={t('L_ADDRESS')}
                    value={t('L_CITY_NAME')}
                    id="text5"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
                   <Input
                    orientation="horizontal"
                    value={t('L_STREET')}
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
                    <Input
                    orientation="horizontal"
                    value={t('L_BUILD_NUM')}
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
              </div>
          </div>
          <div className={classes.tableContainer}>
            <Table data={data} columns={PayerAccountStatusTopColumns()} />
            <Table data={data} columns={PayerAccountStatusBottomColumns()} />
          </div>
          <div>
              <div className={classes.rowContainer}>
                <div>
                 <Button title={t('L_DIRECT_DEBIT')} />
                </div>
              </div>
          </div>
      </div>
    
    </ReportPrint>
  );
};

export default PayerAccountStatusUI;
