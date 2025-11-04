import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Classes from './ReceivingStudentRecordsFiles.module.scss';
import { Input } from '@/ui/Input';
import { TextArea } from '@/ui/TextArea';
import { Table } from '@/ui/Table';
import { ReceivingStudentRecordsFilesColumns } from './components';
import { BackToPageButton, Button, DetailButton } from '@/components/commonButtons';
import { getInputPattern } from '@/utils/commonHelper';

interface ReceivingStudentRecordsFilesProps {
  customRowRender: (key: string, row: any, index: number) => ReactNode;
}

const ReceivingStudentRecordsFiles: React.FC<ReceivingStudentRecordsFilesProps> = ({
  customRowRender
}) => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className={Classes.Container}>
        <fieldset>
          <legend>{t('L_MAZEVET_FILE')}</legend>
          <div className={Classes.mainContainer}>
            <div className={Classes.mainHeader}>
              <Input
                orientation="horizontal"
                label={t('L_CLN_TABLES')}
                id="L_CLN_TABLES"
                checked={false}
                type="checkbox"
                size={'fullWidth'}
              />
            </div>
            <div className={Classes.inputFields}>
              <Input
                orientation="horizontal"
                label={t('L_INSTI')}
                id="L_INSTI"
                onChange={() => {}}
                type="number"
                size="lg"
                pattern={getInputPattern(6)}
              />
              <Input
                orientation="horizontal"
                label={t('L_PATH_AUT')}
                id="L_PATH_AUT"
                checked={false}
                onChange={() => {}}
                type="text"
                size={'fullWidth'}
              />
            </div>
            <div className={Classes.textAreas}>
              <TextArea
                orientation="horizontal"
                size="fullWidth"
                rows={4}
                label={t('L_MCFW1337_FIRST_TEXT')}
                placeholder={t('L_MAZEVET_1')}
              />

              <TextArea
                orientation="horizontal"
                size="fullWidth"
                rows={4}
                label={t('L_MCFW1337_SECOND_TEXT')}
                placeholder={t('L_MAZEVET_2')}
              />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>{t('T_MCFW1337')}</legend>
          <Table
            columns={ReceivingStudentRecordsFilesColumns()}
            data={[{}, {}, {}, {}, {}]}
            customRowRenderer={customRowRender}
            height={'400px'}
          />
        </fieldset>
        <div className={Classes.checkboxFields}>
          <Input
            orientation="horizontal"
            label={t('L_MCFW1337_CHECKBOX1')}
            id="L_MCFW1337_CHECKBOX1"
            checked={false}
            onChange={() => {}}
            type="checkbox"
            size="md"
          />
          <Input
            orientation="horizontal"
            label={t('L_MCFW1337_CHECKBOX2')}
            id="L_MCFW1337_CHECKBOX2"
            checked={false}
            onChange={() => {}}
            type="checkbox"
          />
          <Input
            orientation="horizontal"
            label={t('L_MCFW1337_CHECKBOX3')}
            id="L_MCFW1337_CHECKBOX3"
            checked={false}
            onChange={() => {}}
            type="checkbox"
          />
          <Input
            orientation="horizontal"
            label={t('L_SIGN_ALLS')}
            id="L_SIGN_ALLS"
            checked={false}
            onChange={() => {}}
            type="checkbox"
          />
        </div>
        <div className={Classes.buttons}>
          <BackToPageButton />
          <DetailButton />
          <Button title={t('L_MAZEVET_FILE')} />
          <Button title={t('L_MCFW1337_BUTTON2')} />
        </div>
      </div>
    </>
  );
};

export default ReceivingStudentRecordsFiles;
