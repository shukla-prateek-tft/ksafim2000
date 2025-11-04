import classes from './ReceiptCancellationWithoutApprovalFilter.module.scss';
import { GroupRadio } from '@/ui/GroupRadio';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { getInputPattern } from '@/utils/commonHelper';
import { Input } from '@/components';
import { REGEX } from '@/constants/appConstant';
const ReceiptCancellationWithoutApprovalFilterUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')} : ${t('T_MCFR1380')}`}</legend>
        <Select
          size="md"
          orientation="horizontal"
          label={t('L_STUDY_YEAR')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
        />
        <RangeSelector
          size="md"
          labelOrientation="horizontal"
          fromLabel={t('L_FROM_NUM')}
          toLabel={t('L_TO')}
          type='number'
          pattern={getInputPattern(10)}
        />
        <RangeSelector
          size="md"
          labelOrientation="horizontal"
          type="text"
          fromLabel={t('L_F_DATE')}
          toLabel={t('L_TO')}
        />
        <Select
          size="md"
          orientation="horizontal"
          label={t('L_SERVICE_TYPE')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
        />
        <div className={classes.flex}>
          <div className={classes.flex}>
           <Select
            size="md"
            orientation="horizontal"
            label={t('L_CLASS_FROM')}
            options={[
              { label: 'dsd', value: 'dsdsd' },
              { label: 'dsd', value: 'dsdsd' }
            ]}
          />
          <Input
            label=" "
            type="number"
            id="discription"
            maxLength={2}
            size='fullWidth'
          />
          </div>
         <div className={classes.flex}>
            <Select
              size="md"
              orientation="horizontal"
              label={t('L_TO')}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />
           <Input
            label=" "
            type="number"
            id="discription"
            maxLength={2}
            size='fullWidth'
          />
         </div>
        </div>
        <Select
          size="md"
          orientation="horizontal"
          label={t('L_ACC_ACT_TYPE')}
          options={[
            { label: 'dsd', value: 'dsdsd' },
            { label: 'dsd', value: 'dsdsd' }
          ]}
        />
        <GroupRadio
          size="md"
          orientation="horizontal"
          labelOrientation="horizontal"
          options={[
            { label: t('L_ALL_OF_THEM'), value: 'dsdsd' },
            { label: t('L_WITH_LEAVING'), value: 'dsdsd' },
            { label: t('L_NOT_INCLUDING_LEAVES'), value: 'dsdsd' }
          ]}
          name={''}
          selectedValue={''}
          onChange={function (value: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </fieldset>
      <p className={classes.infoText}>{t('L_0654_DESC')}</p>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default ReceiptCancellationWithoutApprovalFilterUI;
