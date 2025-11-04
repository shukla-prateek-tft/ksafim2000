import React from 'react';
import { Card } from '@/ui/Card';
import classes from './ScholarshipDistributionReportSection.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
const ScholarshipDistributionReportSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <Card title={`${t('L_QUERY')} : ${t('T_MCFR1332')}`}>
        <Input
          orientation="horizontal"
          label={t('L_ACT_NO1')}
          type="number"
          maxLength={7}
          tabIndex={1}
        />
        <Input orientation="horizontal" label={t('L_SERVICE_TYPE')} tabIndex={2} />
        <Input orientation="horizontal" label={t('L_ACC_CARD1')} tabIndex={3} />

        <Select
          orientation="horizontal"
          label={t('L_ACC_ACT_TYPE')}
          placeholder=" "
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          tabIndex={4}
        />
        <div className={classes.selectorAlign}>
          <div className={classes.selector1}>
            <Select
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              label={t('L_CLASS_FROM')}
              orientation="horizontal"
              tabIndex={5}
            />
            <Input size="sm" type="number" maxLength={2} tabIndex={6} />
          </div>
          <div className={classes.selector1}>
            <Select
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              label={t('L_CLASS_TO')}
              orientation="horizontal"
              tabIndex={7}
            />
            <Input size="sm" type="number" maxLength={2} tabIndex={8} />
          </div>
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ScholarshipDistributionReportSectionUI;
