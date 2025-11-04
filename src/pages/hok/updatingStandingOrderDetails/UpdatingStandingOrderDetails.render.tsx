import React from 'react';
import classes from './UpdatingStandingOrderDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { DatePicker } from '@/ui/DatePicker';
const UpdatingStandingOrderDetailsUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW1336')}</legend>
        <DatePicker orientation="horizontal" label={t('L_START_DATE')} size="md" />
        <Input orientation="horizontal" label={t('L_NUM_PAYMENT')} size="md" type='number' maxLength={2}/>
      </fieldset>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default UpdatingStandingOrderDetailsUI;
