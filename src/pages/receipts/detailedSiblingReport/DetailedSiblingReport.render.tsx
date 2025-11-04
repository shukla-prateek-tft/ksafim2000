import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './DetailedSiblingReport.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';

import { Input } from '@/ui/Input';

import { DetailedSiblingReportColumns } from './components/Column';
import { REGEX } from '@/constants/appConstant';

interface DetailedSiblingReportProps {
  data: Array<Record<string, string>>;
}

const DetailedSiblingReportUI = ({ data }: DetailedSiblingReportProps) => {
  const { t } = useTranslation('common');
  const handlePrint = () => {
    window.print();
  };
  const hide = true;
  return (          
    <ReportPrint
      renderActionItem={
        <div className={classes.renderItem}>
          <BackToPageButton />
          <DetailButton />
          <SearchButton />
          <PrintButton onClick={handlePrint} />
          <PrintExcel />
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
              <div>{t('L_DATE')}</div>
              <div>{t('L_DATE')}</div>
            </>
          }
        />
      }
      footer={<ReportFooter right={<ReportCells label={t('L_PRINTED_BY')} value={'MOHIT'} />} />}
    >
      <div className={classes.mainContainer}>
      <div className={classes.flex}>
          <Input label={t('L_ID')} type='number' size='md' maxLength={10} orientation="horizontal" />    
          <Input label={t('L_NAME')}  type='text' size='md' maxLength={24} pattern={REGEX.allCharacter}    orientation="horizontal" />
          <Input  size='md' maxLength={20} pattern={REGEX.allCharacter}  />
          <Input label={t('L_PHONE')} type='number' size='md' maxLength={10}orientation="horizontal" />
          <Input  size='md' maxLength={20} pattern={REGEX.allCharacter}  />
          <Input label={t('L_MAIL_DEF')}  type='text' size='md' maxLength={60} pattern={REGEX.allCharacter} orientation="horizontal" />
          <Input label={t('L_ADDRESS')}  type='text' size='md' maxLength={20} pattern={REGEX.allCharacter} orientation="horizontal"/>
          <Input  size='md' maxLength={17} pattern={REGEX.allCharacter} />
          <Input  size='sm' maxLength={5} pattern={REGEX.allCharacter}  />
        </div>
        <Table data={data} columns={DetailedSiblingReportColumns()} />
      </div>
    </ReportPrint>
  );
};

export default DetailedSiblingReportUI;
