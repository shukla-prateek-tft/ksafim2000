import React from 'React';
import classes from './UpdatingAndPreparingBatches.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/commonButtons';
import clsx from 'clsx';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { REGEX } from '@/constants/appConstant';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
const UpdatingAndPreparingBatchesUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <div className={classes.itemsContainer}>
          <div className={classes.selectorAlign}>
            <Input
              size="md"
              orientation="horizontal"
              label={t('L_BATCH_NUM')}
              value={''}
              type="number"
              maxLength={6}
              tabIndex={1}
            />
            <Input
              size="md"
              orientation="horizontal"
              label={t('L_USER_NAME')}
              value={''}
              maxLength={15}
              pattern={REGEX.allCharacter}
              type="text"
              tabIndex={2}
            />
            <DatePickerComponent
              selectedDate={new Date()}
              onChange={() => {}}
              placeholder=" "
              id="L_DATE"
              size="md"
              orientation="horizontal"
              label={t('L_TIME')}
              tabIndex={3}
            />
            <DatePickerComponent
              selectedDate={new Date()}
              onChange={() => {}}
              placeholder=" "
              id="L_DATE"
              size="md"
              orientation="horizontal"
              label={t('/')}
              tabIndex={4}
            />
          </div>
          <div className={classes.selectorAlign}>
            <Input
              size="md"
              orientation="horizontal"
              label={t('L_Status')}
              value={''}
              tabIndex={5}
            />
            <Input
              size="md"
              orientation="horizontal"
              label={t('V_BATCH')}
              value={''}
              type="number"
              maxLength={4}
              tabIndex={6}
            />
            <Select
              size="md"
              orientation="horizontal"
              label={t('L_PAY_WAY')}
              placeholder=" "
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              tabIndex={7}
            />
            <Button scale="base" variant="outline" title={t('L_PARAMETERS')} />
          </div>
          <div className={classes.selectorAlign}>
            <Input
              size="md"
              orientation="horizontal"
              label={t('L_RECORD_TOTAL')}
              value={''}
              tabIndex={8}
            />
            <Input
              size="md"
              orientation="horizontal"
              label={t('L_UPDATE_REC')}
              value={''}
              tabIndex={9}
            />
            <Input
              size="md"
              orientation="horizontal"
              label={t('L_ADD_REC')}
              value={''}
              tabIndex={10}
            />
          </div>
          <div className={clsx(classes.selectorAlign, classes.center)}>
            <Input
              size="md"
              orientation="horizontal"
              label={t('L_VALID_REC')}
              value={''}
              tabIndex={11}
            />
            <Input
              size="md"
              orientation="horizontal"
              label={t('L_INVALID_REC')}
              value={''}
              tabIndex={12}
            />
          </div>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default UpdatingAndPreparingBatchesUI;
