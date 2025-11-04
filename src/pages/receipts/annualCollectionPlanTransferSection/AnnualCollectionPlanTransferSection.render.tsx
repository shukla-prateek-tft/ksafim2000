import classes from './AnnualCollectionPlanTransferSection.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { RangeSelector } from '@/ui/DateRangePicker';
import { REGEX } from '@/constants/appConstant';
import { getInputPattern } from '@/utils/commonHelper';
const AnnualCollectionPlanTransferSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')} : ${t('T_MCBH1165')}`}</legend>
        <Input size="md" orientation="horizontal" label={t('L_CURRENT_YEAR')} type='text' maxLength={10} pattern={REGEX.allCharacter} tabIndex={4}/>
        <Input size="md" orientation="horizontal" label={t('L_NEW_YEAR')} type='text' maxLength={10} pattern={REGEX.allCharacter} tabIndex={5}/>
        <RangeSelector
          labelOrientation="horizontal"
          fromLabel={t('L_F_CHARGE')}
          toLabel={t('L_TO')}
          type='number'
          pattern={getInputPattern(3)}
        />
      </fieldset>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default AnnualCollectionPlanTransferSectionUI;
