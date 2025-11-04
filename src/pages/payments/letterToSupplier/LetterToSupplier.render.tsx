import { ReportCells, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { LetterToSupplierColumns } from './components';
import { useTranslation } from 'react-i18next';
import classes from './LetterToSupplier.module.scss';

interface LetterToSupplierProps {
  data: Array<Record<string, string>>;
}

const LetterToSupplierUI = ({ data }: LetterToSupplierProps) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      header={
        <div className={classes.betweenFlex}>
          <div>
            <ReportCells value={t('L_INST_FULLNAME')} />
            <div className={classes.flex}>
              <ReportCells value={t('SEMEL')} />
              <ReportCells value={t('L_INST_CODE')} />
            </div>
            <ReportCells label={t('L_BANK')} value={t('BANK')} />
          </div>
          <div>
            <div className={classes.flex}>
              <ReportCells label={t('L_PHONE')} value={t('PHONE')} />
              <ReportCells value={t('P')} />
              <ReportCells value={t('TELE')} />
            </div>
            <div className={classes.flex}>
              <ReportCells label={t('L_FAX')} value={t('FAX_NUM')} />
              <ReportCells value={t('P')} />
              <ReportCells value={t('FAX')} />
            </div>
            <ReportCells label={t('L_BANK_ACCOUNT')} value={t('BANK_ACCOUNT')} />
          </div>
          <div>
            <div className={classes.flex}>
              <ReportCells label={t('L_ADDRESS')} value={t('CITY')} />
              <ReportCells value={t('STREET')} />
              <ReportCells value={t('BUILDING')} />
            </div>
            <ReportCells label={t('L_MAIL_DEF')} value={t('L_MAIL_DEF')} />
          </div>
        </div>
      }
    >
      <div className={classes.mainContainer}>
        <div className={classes.flexEnd}>
          <ReportCells label={t('V_DATE')} value={t('V_DATE')} />
          <ReportCells label={t('L_Tax_Number')} value={t('L_Tax_Number')} />
          <ReportCells label={t('L_REFERENCE_NO')} value={t('L_REFERENCE_NO')} />
        </div>
        <fieldset>
          <legend>{t('L_TO_LETTER')}</legend>
          <ReportCells value={t('SUPP_NAME')} />
          <ReportCells label={t('L_DOB_DOD')} value={t('L_DOB_DOD')} />
          <ReportCells label={t('L_ADDRESS')} value={t('L_ADDRESS')} />
          <div className={classes.flex}>
            <ReportCells label={t('L_PHONE')} value={t('L_PHONE')} />
            <ReportCells label={t('L_FAX')} value={t('FAX')} />
          </div>
          <ReportCells label={t('L_MAIL_DEF')} value={t('EMAIL')} />
        </fieldset>
        <div className={classes.flexEnd}>
          <ReportCells value={t('ADDRESS1')} />
          <ReportCells value={t('ADDRESS2')} />
        </div>
        <ReportCells label={t('L_HELLO')} />
        <ReportCells value={t('HANDON')} />
        <p>MESSAGE------ this is the demo message</p>
        <Table height="30vh" data={data} columns={LetterToSupplierColumns()} />
        <div className={classes.flexEnd}>
          <ReportCells value={t('Total')} />
        </div>
        <p>MESSAGE 2------ this is the demo message 2</p>
        <div className={classes.flexEnd}>
          <ReportCells label={t('L_SINCERELY')} />
          <ReportCells value={t('L_INST_FULLNAME')} />
          <ReportCells value={t('L_INST_CODE')} />
        </div>
      </div>
    </ReportPrint>
  );
};

export default LetterToSupplierUI;
