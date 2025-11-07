import classes from './CompanyDetails.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { Card } from '@/ui/Card';

const CompanyDetailsUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  const screenNumber = 'mcfw0658';
  const textContent = screenNumber == 'mcfw0658' ? t('L_ADD_SUM') : t('L_DECREASE_SUM');
  return (
    <div className={classes.mainContainer}>
      <Card>
        <Input type='text' maxLength={80} value={t('MONIC_NAME')} size="md" disabled />
        <div className={classes.cardConatiner}>{textContent}</div>
        <Input type='amount' maxLength={11} onChange={() => {}} onBlur={()=>{}} orientation="horizontal" label={t('L_SUM')} value={t('')} size="md" />
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default CompanyDetailsUI;
