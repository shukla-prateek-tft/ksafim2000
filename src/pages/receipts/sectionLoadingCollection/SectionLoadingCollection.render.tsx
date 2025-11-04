import classes from './SectionLoadingCollection.module.scss';
import { BottomToolBar } from '@/components';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { Card } from '@/ui/Card';
import { getInputPattern } from '@/utils/commonHelper';

const SectionLoadingCollectionUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <Card>
        <div className={classes.mainContainer}>
          <div className={classes.flex}>
            <Input
              orientation="horizontal"
              label={t('L_CLASS_NUM')}
              type="number"
              pattern={getInputPattern(2)}
            />
            <Select
              orientation="horizontal"
              label={t('L_CLASS_CODE')}
              options={[
                { label: 'dsd', value: 'dsdsd' },
                { label: 'dsd', value: 'dsdsd' }
              ]}
            />
          </div>
          <div className={classes.flex}>
            <Input orientation="horizontal" label={t('L_INSTI')} />
            <Input orientation="horizontal" disabled />
          </div>
          <div className={classes.flex}>
            <Input
              orientation="horizontal"
              label={t('L_STUDENT')}
              type="number"
              pattern={getInputPattern(10)}
            />
            <Input orientation="horizontal" disabled />
            <Input orientation="horizontal" disabled />
          </div>
          <div className={classes.itemsContainer}>
            <Input
              type="checkbox"
              label={t('L_TEXTBOTTOMCHECKBOX_MCBS1161')}
              orientation="horizontal"
              size="md"
              inversed
            />
          </div>
        </div>
      </Card>

      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default SectionLoadingCollectionUI;
