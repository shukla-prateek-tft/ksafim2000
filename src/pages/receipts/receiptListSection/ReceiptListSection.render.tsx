import React from 'react';
import classes from './ReceiptListSection.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { GroupRadio } from '@/ui/GroupRadio';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { REGEX } from '@/constants/appConstant';

const ReceiptListSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFS0687_TITLE')}</legend>
        <RangeSelector
          labelOrientation="horizontal"
          type="date"
          fromLabel={t('L_FROM_DATE')}
          toLabel={t('L_TO')}
        />
        <RangeSelector
          labelOrientation="horizontal"
          type="number"
          fromLabel={t('L_FROM_NUM')}
          toLabel={t('L_TO')}
          maxLength={6}
        />
        <div className={classes.itemsContainer}>
          {' '}
          <Input
            orientation="horizontal"
            label={t('L_PAYER')}
            size="md"
            type="number"
            maxLength={10}
          />
          <Input orientation="horizontal" disabled pattern={REGEX.allCharacter} maxLength={20} />
        </div>
        <Select
          orientation="horizontal"
          label={t('L_PAY_WAY')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          size="lg"
          tabIndex={0}
        />
        <Select
          orientation="horizontal"
          label={t('L_SERVICE_TYPE')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
          size="lg"
          tabIndex={0}
        />
        <div className={classes.bottomContainer}>
          <GroupRadio
            options={[
              { label: t('L_ALL'), value: '1' },
              { label: t('L_STUDY_YEAR'), value: '2' },
              { label: t('L_ACCOUNT_YEAR'), value: '3' }
            ]}
            name={''}
            selectedValue={''}
            onChange={() => {}}
            labelOrientation="horizontal"
          />
          <div className={classes.rightContainer}>
            <Input
              type="checkbox"
              orientation="horizontal"
              label={t('L_MCFS0687_HEADER_CHECKBOX_2')}
            />
            <Input type="checkbox" orientation="horizontal" label={t('L_RECEIPT_GIFT')} />
            <Input type="checkbox" orientation="horizontal" label={t('L_GIFT_RECEIPT')} />
          </div>
        </div>
        <Input type="checkbox" orientation="horizontal" label={t('L_MCFS0687_HEADER_CHECKBOX_1')} />
        <Input type="checkbox" orientation="horizontal" label={t('L_MCFS0687_HEADER_CHECKBOX_3')} />
        <div className={classes.innerContainer}>
          <p>{t('L_REMARK')}</p>
          <p>{t('L_FIND_REMARK')}</p>
        </div>
      </fieldset>
      <BottomToolBar pagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default ReceiptListSectionUI;
