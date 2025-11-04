import React from 'react';
import classes from './CollectionConfirmationFromTheBank.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { RangeSelector } from '@/ui/DateRangePicker';

const CollectionConfirmationFromTheBankUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('L_MCFS0653_TITLE')}</legend>
        <div>
          <RangeSelector
            labelOrientation="horizontal"
            type="date"
            fromLabel={t('L_MCFS0653_LABEL')}
            toLabel={t('L_TO_DATE')}
          />
        </div>

        <div className={classes.itemsContainer}>
          <Select
            orientation="horizontal"
            label={t('L_FROM_CLASS')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={0}
          />
          <Select
            orientation="horizontal"
            label={t('L_CLASS_TO')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={0}
          />
        </div>

        <div className={classes.itemsContainer}>
          <Select
            orientation="horizontal"
            label={t('L_ACC_CREDIT')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={0}
          />
          <Select
            orientation="horizontal"
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={0}
          />
        </div>

        <div className={classes.itemsContainer}>
          <Select
            orientation="horizontal"
            label={t('L_ACC_DEBIT')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={0}
          />
          <Select
            orientation="horizontal"
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={0}
          />
        </div>

        <div className={classes.itemsContainer}>
          <Input
            orientation="horizontal"
            label={t('L_FEE')}
            size="sm"
            id="text1"
            type="amount"
            maxLength={11}
            onChange={() => {}}
            onBlur={() => {}}
          />
        </div>
        <div className={classes.itemsContainer}>
          <Select
            orientation="horizontal"
            label={t('L_ACC_DEBIT')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={0}
          />
          <Select
            orientation="horizontal"
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
            tabIndex={0}
          />
        </div>
        <div className={classes.itemsContainer}>
          <Input
            orientation="horizontal"
            label={t('L_MAIL_TO_SEND')}
            onChange={() => {}}
            type="checkbox"
          />
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CollectionConfirmationFromTheBankUI;
