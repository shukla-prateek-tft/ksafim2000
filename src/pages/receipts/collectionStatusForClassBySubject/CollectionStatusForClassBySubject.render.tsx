import { ReportCells, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { ListScholarshipForStudentsReportColumns } from './components';
import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './CollectionStatusForClassBySubject.module.scss';
import { Input } from '@/ui/Input';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  SearchButton,
  PrintExcel
} from '@/components/commonButtons';
import { Flex } from '@/components';

interface ListScholarshipForStudentsReportProps {
  data: Array<Record<string, string>>;
}

const CollectionStatusForClassBySubject = ({ data }: ListScholarshipForStudentsReportProps) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      renderActionItem={
        <div className={classes.renderItem}>
          <BackToPageButton />
          <DetailButton />
          <PrintButton />
          <SearchButton />
          <PrintExcel />
        </div>
      }
      header={
        <ReportHeader
          left={
            <>
              <ReportCells label={t('L_DATE')} value={getFormatedDate()} />
              <ReportCells label={'HEB NAME'} value="heb name" />
              <ReportCells label={t('L_PAGE')} value={'10'} />
            </>
          }
          center={
            <>
              <div>לספקים - תשפ"ה - שנת כספים</div>
              <div>לספקים - תשפ"ה - שנת כספים</div>
              <div className={classes.centerContainer}>
                <Flex>

                <Input orientation="horizontal" label={t('L_INSTI')} size="lg" />
                <Input orientation="horizontal" size="md" />
                </Flex>
                <Flex>

                <Input orientation="horizontal" label={t('L_CLASS_CODE')} size="lg" />
                <Input orientation="horizontal"  size="md" />
                </Flex>
              </div>
              <div className={classes.center}>
                <Input orientation="horizontal" size="md" />
                <Input orientation="horizontal" size="md" />
                <Input orientation="horizontal" size="md" />
                <Input orientation="horizontal" size="md" />
                <Input orientation="horizontal" size="md" />
                <Input orientation="horizontal" size="md" />
              </div>
            </>
          }
        />
      }
      footer={
        <fieldset className={classes.fieldContainer}>
          <span>{t('L_TOTAL')}</span>
          <span>{t('text1')}</span>
          <span>{t('text2')}</span>
          <span>{t('text3')}</span>
          <span>{t('text4')}</span>
          <span>{t('text5')}</span>
          <span>{t('text6')}</span>
          <span>{t('text7')}</span>
          <span>{t('text8')}</span>
          <span>{t('text9')}</span>
          <span>{t('text10')}</span>
          <span>{t('text11')}</span>
          <span>{t('text12')}</span>
          <span>{t('text13')}</span>
          <span>{t('text14')}</span>
          <span>{t('text15')}</span>
          <span>{t('text16')}</span>
          <span>{t('text17')}</span>
          <span>{t('text18')}</span>
        </fieldset>
      }
    >
      <Table height="40vh" data={data} columns={ListScholarshipForStudentsReportColumns()} />
    </ReportPrint>
  );
};

export default CollectionStatusForClassBySubject;
