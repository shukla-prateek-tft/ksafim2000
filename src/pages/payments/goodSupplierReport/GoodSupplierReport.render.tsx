import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { GoodSupplierReportColumn } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate, getInputPattern } from '@/utils/commonHelper';
import classes from './GoodSupplierReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { useState } from 'react';

interface FormState {
  numberValue: string;
}

const GoodSupplierReportUI = ({ data }: any) => {
  const { t } = useTranslation('common');
  const [formState, setFormState] = useState<FormState>({
    numberValue: ''
  });

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
      setFormState(prev => ({
        ...prev,
        numberValue: value
      }));
    
  };

  const handleNumberBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
      setFormState(prev => ({
        ...prev,
        numberValue: Number(value).toString()
      }));
    
  };

  const handlePrint = () => {
    window.print();
  };
  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.renderItem}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton onClick={handlePrint} />
          <PrintExcel />
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={'HEB NAME'} value='heb name' />
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          right={
            <>
            </>
          }
          center={
            <>
              <div>1230 - דוח תשלומים לספקים - תשפ"ה - שנת כספים 2025</div>
            </>
          }
        />
      }
      footer={
          <ReportFooter
            left={<ReportCells label={t('סטים 2000')} value={'dfsdfbsd'}/>}
            right={<ReportCells label={t('L_PRINTED_BY')} value={'Prateek'} />}
          />
      }
    >
      <Input 
        type='number' 
        pattern={getInputPattern(8)} 
        size='md' 
        label={t('L_RIGHT_SUPP')} 
        orientation='horizontal'
        value={formState.numberValue}
        onChange={handleNumberChange}
        onBlur={handleNumberBlur}
      />
      <Table height='45vh' data={data} columns={GoodSupplierReportColumn()} />
    </ReportPrint>
  );
};

export default GoodSupplierReportUI;
