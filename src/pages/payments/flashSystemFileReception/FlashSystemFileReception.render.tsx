import React from 'react'
import classes from './FlashSystemFileReception.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
const FlashSystemFileReceptionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const hidden = true; // This should be replaced with actual logic to determine visibility
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        {!hidden && <Input orientation="horizontal" label={t('L_FILE_DATE')} tabIndex={1}/>}
        <Select
          orientation="horizontal"
          label={t('L_FILE_CHOOSE') + ' ' + t('L_SUPPS')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          tabIndex={2}
        />
        <Select
          orientation="horizontal"
          label={t('L_FILE_CHOOSE') + ' ' + t('L_ERROR_SUPP')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          tabIndex={3}
        />
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default FlashSystemFileReceptionUI;
