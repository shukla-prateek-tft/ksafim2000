import { ReportCells, ReportFooter, ReportHeader, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { useTranslation } from 'react-i18next';
import { getFormatedDate } from '@/utils/commonHelper';
import classes from './studentsWithoutPermanentTeaching.module.scss';
import {
  BackToPageButton,
  Button,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';

import { Input } from '@/ui/Input';
import { StudentsWithoutPermanentTeachingColumns } from './components/Column';
import { Select } from '@/ui/Select';
import { GroupRadio } from '@/ui/GroupRadio';
import { Card } from '@/ui/Card';

interface StudentsWithoutPermanentTeachingProps {
  data: Array<Record<string, string>>;
}

const StudentsWithoutPermanentTeachingUI = ({ data }: StudentsWithoutPermanentTeachingProps) => {
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
          <PrintButton onClick={handlePrint} />
          <PrintExcel />
          <SearchButton />
        </div>
      }

       header={
        <ReportHeader hiddenOnRender
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
        <Card hideOnPrint>
          <div className={classes.container}>
            <div className={classes.inputContainer}>
              <Select
                size='md'
                orientation="horizontal"
                label={t('L_CLASS_FROM')}
                options={[{ label: 'label1', value: 'value1' }]}
              />
              <Input  type='number' maxLength={2} />
            </div>
            <div className={classes.renderItem}>
              <Button title={t('L_RETRIEVE_BTN')} />
              <Button title={t('U_CLEAR')} />
            </div>
          </div>
          <div className={classes.inputContainer}>
            <Select
            size='md'
              orientation="horizontal"
              label={t('L_CLASS_TO')}
              options={[{ label: 'label1', value: 'value1' }]}
            />
            <Input  type='number' maxLength={2}/>
          </div>
          <GroupRadio
            title={t('L_MAKE_STATUS')}
            labelOrientation="horizontal"
            inversed
            options={[
              { label: t('V_PERMIT_ALL'), value: '1' },
              { label: t('V_OBLIGED'), value: '2' },
              { label: t('L_ELIGABLE_CHILD'), value: '2' }
            ]}
            name="group1"
            selectedValue=""
            onChange={() => {}}
            orientation="horizontal"
          />

          <div className={classes.inputContainer}>
            <Input
              orientation="horizontal"
              label={t('L_CLASS_CODE')}
              value={t('L_DESC')}
              id="text1"
              checked={false}
              onChange={() => {}}
              type="text"
              maxLength={16}
              size='md'
            />
            <Input orientation="horizontal" value={t('L_CLASS_NUM')} size="sm" type="number" maxLength={2} />
            {!hide && (
              <Input
                orientation="horizontal"
                onChange={() => {}}
                value={t('L_CLASS_CODE')}
                type="number"
                maxLength={2}
              />
            )}
          </div>
        </Card>

        <Table data={data} columns={StudentsWithoutPermanentTeachingColumns()} />
      </div>
    </ReportPrint>
  );
};

export default StudentsWithoutPermanentTeachingUI;
