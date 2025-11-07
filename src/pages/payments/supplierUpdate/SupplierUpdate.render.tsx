import React from 'react';
import classes from './SupplierUpdate.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { GroupRadio } from '@/ui/GroupRadio';
import { getInputPattern } from '@/utils/commonHelper';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';

const SupplierUpdateUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFW1232')}</legend>

        <div className={classes.mainContainer}>
          <div className={classes.flex}>
            <div>
              <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                id="L_DATE"
                size="fullWidth"
                orientation="horizontal"
                label={t('L_TAX')}
                tabIndex={1}
              />
              <Input
                orientation="horizontal"
                label={t('L_TAX_TYPE')}
                tabIndex={3}
                type="number"
                pattern={getInputPattern(6)}
              />
            </div>
            <div>
              <Input label={t('L_EMPTY_FIELDS')} type="checkbox" tabIndex={2} />
              <Input orientation="horizontal" type="checkbox" tabIndex={4} />
            </div>
          </div>
          <div>
            <GroupRadio
              options={[
                { label: t('L_ADD_TO_ALL'), value: '1' },
                { label: t('L_REEMOVE_TO_ALL'), value: '2' }
              ]}
              name="group1"
              selectedValue=""
              title={t('L_TO_ORDER')}
              onChange={() => {}}
              orientation="horizontal"
              size="fullWidth"
            />
          </div>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default SupplierUpdateUI;
