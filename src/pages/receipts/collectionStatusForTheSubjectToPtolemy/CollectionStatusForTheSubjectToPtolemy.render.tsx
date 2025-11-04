import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './CollectionStatusForTheSubjectToPtolemy.module.scss';
import {
  BackToPageButton,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';

import { Input } from '@/ui/Input';
import { CollectionStatusForTheSubjectToPtolemyTopColumns } from './components';

interface CollectionStatusForTheSubjectToPtolemyProps {
  data: Array<Record<string, string>>
}

const CollectionStatusForTheSubjectToPtolemyUI = ({ data }: CollectionStatusForTheSubjectToPtolemyProps) => {
  const { t } = useTranslation('common');
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
          <SearchButton />
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
                    label={t('L_SERVICE_TYPE')}
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  
                  />
                   <Input
                    orientation="horizontal"
                    label={t('L_DESC')}
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  
                  />
                 
              </div>
          </div>
          <Table data={data} columns={CollectionStatusForTheSubjectToPtolemyTopColumns()} />
          <div>
              <div className={classes.rowContainer}>
                <div>
                  <Input
                    orientation="horizontal"
                    label={t('L_TOTAL')}
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
                </div>
                  <div className={classes.lastinputContainer}>
                  <Input
                    orientation="horizontal"
                    label={t('L_TOTAL_STDU')}
                    id="text1"
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
                    id="text1"
                    checked={false}
                    onChange={() => {}}
                    type="text"
                  />
                </div>
              </div>
          </div>
      </div>
    
    </ReportPrint>
  );
};

export default CollectionStatusForTheSubjectToPtolemyUI;
