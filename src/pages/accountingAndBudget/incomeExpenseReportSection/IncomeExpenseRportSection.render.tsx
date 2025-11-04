import classes from './IncomeExpenseRportSection.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { RangeSelector } from '@/ui/DateRangePicker';
import { Card } from '@/ui/Card';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { BottomToolBar } from '@/ui/BottomToolBar';

const IncomeExpenseRportSectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{`${t('L_QUERY')}: ${t('T_MCFR1425')}`}</legend>
        <Card title={`${t('L_STUDY_YEAR')}: 2025`}>
          <RangeSelector
            labelOrientation="horizontal"
            type="text"
            fromLabel={t('L_FROM_SORT_CODE')}
            toLabel={t('L_TO')}
          />
          <RangeSelector
            labelOrientation="horizontal"
            type="text"
            fromLabel={t('L_F_VALUE_DATE')}
            toLabel={t('L_TO')}
          />
          <RangeSelector
            labelOrientation="horizontal"
            type="text"
            fromLabel={t('L_FROM_REL_DATE')}
            toLabel={t('L_TO')}
          />
          <Input type="checkbox" orientation="horizontal" label={t('L_SUM_NOT_ZERO')} />
          <Input type="checkbox" orientation="horizontal" label={t('L_BAL_NOT_ZERO')} />
        </Card>
      </fieldset>
      <Badge renderIcon={<PiWarningCircleFill />} variant="warning" title={t('L_0660_DESC')} />
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default IncomeExpenseRportSectionUI;
