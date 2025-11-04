import { useTranslation } from 'react-i18next';
import classes from './ListOfSuppliers.module.scss';
import { Table } from '@/ui/Table';
import { ListOfSuppliersColumn } from './components/';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { Footer } from '@/ui/Footer';
import { ListOfSuppliersUIProps } from './types';

const ListOfSuppliersUI = ({
  rowRender,
  renderActionItems,
  renderOtherActionButtons,
  onPaginationChange,
  handleSort,
  pagination,
  data = []
}: ListOfSuppliersUIProps) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      renderFooter={<Footer handlePaginationChange={onPaginationChange} pagination={pagination} />}
      renderHeader={renderActionItems}
      screenNumber="MCFW-0597"
    >
      <Card renderHeaderItems={renderOtherActionButtons} title={t('T_MCFW0597')}>
        <Table
          height="62vh"
          data={data}
          columns={ListOfSuppliersColumn()}
          customRowRenderer={rowRender}
          onSort={handleSort}
        />
        <div className={classes.description}>
          <p>{t('L_REMARK')}</p>
          <p>{t('L_0597_DESC')}</p>
        </div>
      </Card>
    </ScreenLayout>
  );
};

export default ListOfSuppliersUI;
