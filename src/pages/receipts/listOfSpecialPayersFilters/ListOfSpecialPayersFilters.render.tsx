import classes from './ListOfSpecialPayersFilters.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';
import { useTranslation } from 'react-i18next';
const ListOfSpecialPayersFiltersUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <Card title={t('T_MCFS0598_TITLE')}>
        <div className={classes.itemsContainer}>
          <Input
            orientation="horizontal"
            label={t('L_NO')}
            type="number"
            pattern={getInputPattern(10)}
          />
          <Input orientation="horizontal" label={t('L_NAME')} type='text' maxLength={30} />
          <div className={classes.innerContainer}>
            <div>
              <p>{t('L_REMARK')}</p>
            </div>
            <div>
              <p>{t('L_MCFS0598_DESCRIPTION1')}</p>
              <p>{t('L_MCFS0598_DESCRIPTION2')}</p>
            </div>
          </div>
        </div>
      </Card>
      <BottomToolBar renderActionItems={renderActionItems} />
    </div>
  );
};

export default ListOfSpecialPayersFiltersUI;
