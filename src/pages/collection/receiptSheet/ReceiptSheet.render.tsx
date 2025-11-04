import classes from './ReceiptSheet.module.scss';
import { BottomToolBar, Checkbox } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { DatePicker } from '@/ui/DatePicker';

const ReceiptSheetUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('T_MCFW0632')} : ${t('L_DETAILS')}`}</legend>

        <div className={classes.mainContainer}>
          <div className={classes.flexWithGap}>
            <Input orientation="horizontal" label={t('L_ACT_NO')} size="sm" disabled />
            <Input orientation="horizontal" label={t('L_DESC')} type='text' maxLength={16}/>
          </div>

          <div className={classes.itemsContainer}>
          <div className={classes.flexWithGap}>
              <Select
                orientation="horizontal"
                label={t('L_CLASS_FROM')}
                size="sm"
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
              />
              <Input orientation="horizontal"  type='number' maxLength={2}/>
            </div>
          <div className={classes.flexWithGap}>
              <Select
                orientation="horizontal"
                label={t('L_CLASS_TO')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                size="sm"
              />
              <Input orientation="horizontal" size="sm" type='number' maxLength={2}/>
            </div>
          </div>
          <div className={classes.flexWithGap}>
            <Input orientation="horizontal" label={t('L_STUDY_GROUP')} size="sm" type='number' maxLength={18} />
            <Input orientation="horizontal" disabled />
          </div>
          <div className={classes.flexWithGap}>
            <Input orientation="horizontal" label={t('L_SERVICE_TYPE')} size="sm" type='number' maxLength={6}/>
            <Select
              orientation="horizontal"
              label={t('L_ACC_NUM')}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
              size="sm"
            />
          </div>
          <div className={classes.flexWithGap}>
            <Input orientation="horizontal" label={t('L_ACC_ACT_TYPE')} size="sm" type='number' maxLength={3}/>
            <Input orientation="horizontal" label={t('L_MONEY')} size="sm"type='amount' maxLength={11} />
          </div>
          <div className={classes.itemsContainer}>
            <DatePicker orientation="horizontal" label={t('L_DATE')} size="sm" />
            <Checkbox label={t('L_BOTTOM_MCFW0626')} checked={true} size="sm" />
          </div>
        </div>

        <div className={classes.innerContainer}>
          <p>{t('L_REMARK')}</p>
          <p>{t('L_0632_DESC')}</p>
        </div>
      </fieldset>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ReceiptSheetUI;
