import { ReportCells, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { useTranslation } from 'react-i18next';
import classes from './CollectionStatusForClass.module.scss';
import { Input } from '@/ui/Input';
import { CollectionStatusForClassColumns } from './components/index';

const data = [
  {
    code1: 'STUDENT_ID',
    code2: 'STUDENT_NAME',
    code3: 'CLASS_NAME',
    code4: 'AMOUNT_DUE',
    code5: 'AMOUNT_PAID',
    code6: 'BALANCE',
    code8: 'CONFIRMED',
    code9: 'REMARKS',
    code10: 'PAYMENT_DATE'
  }
];

const CollectionStatusForClassUI = ({ customRowRender }: any) => {
  const { t } = useTranslation('common');

  const RenderInputField = () => {
    return (
      <div className={classes.renderItem}>
        <div className={classes.firstInputItem}>
          <Input size="md" label={t('TOT_STU_CLASS')} orientation="horizontal" value="tot_ta" />
          <div className={classes.input}>
            <Input size="md" label={t('L_TOTAL')} orientation="horizontal" value="L_TOTAL" />
            <Input value={'L_CLASS_CODE'} size="sm" />
            <Input value={'L_CLASS_CODE'} size="sm" />
          </div>
        </div>
        <div className={classes.inputItem}>
          <div>
            <Input size="md" label={t('L_STUD_PAY_FUL')} orientation="horizontal" value="PAYED" />
            <Input size="md" label={t('L_STUD_PAY_PER')} orientation="horizontal" value="PAYED" />
          </div>
          <div>
            <Input
              size="md"
              label={t('L_PARTLY_PAYED')}
              orientation="horizontal"
              value="PARTPAYED"
            />
            <Input size="md" label={t('L_PARTLY_PAY_PER')} orientation="horizontal" value="PAYED" />
          </div>
          <div>
            <Input size="md" label={t('L_NOT_PAYED')} orientation="horizontal" value="PARTPAYED" />
            <Input size="md" label={t('L_NOT_PAY_PER')} orientation="horizontal" value="PAYED" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <ReportPrint
      renderActionItem={<RenderInputField />}
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('SYSTEM_NAME')} />
              <ReportCells value={'REPORT_DATE'} label={t('V_DATE')} />
              <ReportCells value={t('PAGE_NUMBER')} label={t('L_PAGE')} />
            </>
          }
          right={<></>}
          center={
            <>
              <div>{t('REPORT_NAME')} MCFR0683</div>
            </>
          }
        />
      }
    >
      <Input size="md" label={t('L_CLASS_CODE')} orientation="horizontal" value={'CLASS_CL'} />
      <Table
        customRowRenderer={customRowRender}
        height="45vh"
        data={data}
        columns={CollectionStatusForClassColumns()}
      />
    </ReportPrint>
  );
};

export default CollectionStatusForClassUI;
