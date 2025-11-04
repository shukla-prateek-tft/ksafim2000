import React from 'react';
import classes from './CollectionStatusSectionForSubjectInStudent.module.scss';
import { BottomToolBar } from '@/components/';
import { Input, SelectWithInput } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { Card } from '@/ui/Card';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
const CollectionStatusSectionForSubjectInStudentUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <Card title={t('T_MCFS0654')}>
        <Select
          orientation="horizontal"
          label={`${t('L_SERVICE_TYPE')}  1`}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          size="md"
          tabIndex={1}
        />
        <Select
          orientation="horizontal"
          label={t('2')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          size="md"
          tabIndex={2}
        />
        <div className={classes.itemsContainer}>
          <SelectWithInput
            label={t('L_F_CLASS_CODE')}
            onChangeSelect={() => {}}
            onChangeInput={() => {}}
            inputType="number"
            maxLength={2}
            tabIndex={3}
          />
          <SelectWithInput
            label={t('L_TO')}
            onChangeSelect={() => {}}
            onChangeInput={() => {}}
            inputType="number"
            maxLength={2}
            tabIndex={4}
          />
        </div>
        <RangeSelector
          labelOrientation="horizontal"
          type="text"
          fromLabel={t('L_FROM_DATE')}
          toLabel={t('L_TO_DATE')}
          tabIndex={5}
        />
        <div className={classes.itemsContainer}>
          <Input type="checkbox" orientation="horizontal" label={t('L_FINAL_EXAMS')} />
          <Input type="checkbox" orientation="horizontal" label={t('L_WITH_LEAVING')} />
        </div>
      </Card>
      <Card>
        <div className={classes.textContents}>
          <div>{t('L_REMARK')}</div>
          <Badge renderIcon={<PiWarningCircleFill />} title={t('L_MCFS0759_REMARK')} />
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CollectionStatusSectionForSubjectInStudentUI;
