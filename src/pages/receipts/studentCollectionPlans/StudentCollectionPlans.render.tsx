import { Card } from '@/ui/Card';
import classes from './StudentCollectionPlans.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/components';
import { RangeSelector } from '@/ui/DateRangePicker';
import { REGEX } from '@/constants/appConstant';

interface StudentCollectionPlansUIProps {
  renderActionItems: () => JSX.Element | null;
}
const StudentCollectionPlansUI = ({ renderActionItems }: StudentCollectionPlansUIProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.container}>
      <Card title={`${t('L_QUERY')}: ${t('T_MCSW0107')}`}>
        <div className={classes.section}>
          <Input type='number' maxLength={10} label={t('L_MCFW0582_ID')} orientation="horizontal" size="md" />
          <Input pattern={REGEX.allCharacter} maxLength={24} label={t('L_FAMILY_NAME')} orientation="horizontal" size="md" />
          <Input  pattern={REGEX.allCharacter} maxLength={20} label={t('L_PRIVATE_NAME')} orientation="horizontal" size="md" />
          <Select tabIndex={0} options={[]} label={t('L_SEX')} orientation="horizontal" size="md" />
          <div className={classes.range}>
            <Select tabIndex={0}  options={[]} label={t('L_FROM_CLASS')} orientation="horizontal" size="md" />
            <Select tabIndex={0}  options={[]} label={t('L_TO')} orientation="horizontal" size="md" />
          </div>
          <RangeSelector
            labelOrientation="horizontal"
            fromLabel={t('L_CLASS_NUM')}
            toLabel={t('L_TO')}
            type="text"
            size="md"
          />
          <Input
            type="checkbox"
            checked={true}
            label={t('L_WITH_LEAVING')}
            orientation="horizontal"
            size="md"
          />
          <RangeSelector
            labelOrientation="horizontal"
            fromLabel={t('L_BALANCE_AMOUNT')}
            toLabel={t('L_TO')}
            type="text"
            size="md"
          />
          <Select
            size="fullWidth"
            tabIndex={0} 
            options={[]}
            label={t('L_SECTION_TO_CHOOSE_FROM')}
            orientation="horizontal"
          />
          <Input
            type="checkbox"
            size="md"
            checked={true}
            label={t('V_DEDUCTION')}
            orientation="horizontal"
          />
        </div>
      </Card>
      <Card>
        <div className={classes.section2}>
          <div className={classes.flex}>
            <Input type='number' maxLength={10} size="md" label={t('L_PARENT_ID')} orientation="horizontal" />
            <Input size="fullWidth" disabled value={''} />
          </div>
          <div className={classes.flex}>
            <Input type='number' maxLength={5}  size="md" label={t('L_CITY')} orientation="horizontal" />
            <Input  type='text' maxLength={20} size="fullWidth" disabled value={''} />
          </div>
          <div className={classes.flex}>
            <Input type='number' maxLength={18} size="md" label={t('L_STUDY_GROUP')} orientation="horizontal" />
            <Input size="fullWidth" disabled value={''} />
          </div>
          <Input
            type="checkbox"
            checked={true}
            label={t('L_MCSS0107_INCLUDEING_T_L')}
            orientation="horizontal"
          />
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default StudentCollectionPlansUI;
