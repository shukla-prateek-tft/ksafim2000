import { Input } from '@/ui/Input';
import classes from './ListOfValues.module.scss';
import { useTranslation } from 'react-i18next';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Button } from '@/ui/Button';

interface ListOfValuesProps {
  renderActionItems: () => JSX.Element;
}

const ListOfValuesUI = ({ renderActionItems }: ListOfValuesProps) => {
  const { t } = useTranslation('common');

  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.rowContainer}>
        <legend>{t('L_TBL_SEARCH')}</legend>
        <div>
          <Input
            label={t('')}
            placeholder={t('DESC_AUT')}
            orientation="horizontal"
            maxLength={12}
            size="fullWidth"
          />
          <Button title="BTN_1" size="xl" />
          <Input
            label={t('')}
            placeholder={t('DESC_AUT')}
            orientation="horizontal"
            maxLength={12}
            size="fullWidth"
          />
        </div>
      </fieldset>
      <div className={classes.footer}>
        <BottomToolBar
          pagination={{ pageSize: 8, pageNumber: 1, totalPages: 5 }}
          showPagination={true}
          renderActionItems={renderActionItems}
        />
      </div>
    </div>
  );
};

export default ListOfValuesUI;
