import classes from './ListOfSpecialPayers.module.scss';
import { Table } from '@/ui/Table';
import { ListOfSpecialPayersColumn } from './components';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import Pagination from '@/ui/Pagination/Pagination';
import { ListOfSpecialPayersUIProps } from './types';
const ListOfSpecialPayersUI = ({ 
  renderActionItems, 
  customRowRender,
  payersList 
}: ListOfSpecialPayersUIProps) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      renderFooter={<Pagination pagination={{ pageSize: 10, pageNumber: 1, totalPages: 5 }} />}
      renderHeader={renderActionItems()}
      screenName="MCFW-0598"
    >
      <div className={classes.mainContainer}>
        <fieldset className={classes.fieldSet}>
          <legend className={classes.legend}>{t('T_MCFW0598')}</legend>
          <Table
            data={payersList}
            columns={ListOfSpecialPayersColumn()}
            customRowRenderer={customRowRender}
            height='75vh'
          />
        </fieldset>
      </div>
    </ScreenLayout>
  );
};

export default ListOfSpecialPayersUI;
