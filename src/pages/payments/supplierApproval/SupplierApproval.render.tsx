import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './SupplierApproval.module.scss';
import { Table } from '@/ui/Table';

import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Button } from '@/components/commonButtons';
import { Card } from '@/ui/Card';

import { SuppliersColumns } from './components';
import { GroupRadio } from '@/ui/GroupRadio';
import { PaginationType, SortConfig } from '../type';

const data = [
  {
    check: true,
    vineCode: 'VC001',
    codeDescription: 'Code 001 Description',
    accountant: 'John Doe',
    appSecond: 'Jane Smith',
    list: 'List Item A',
    errorDescription: 'No error'
  }
];
interface SupplierApprovalUIProps {
  renderActionItems: () => JSX.Element;
  customRowRender: (key: string, row: any, index: number) => JSX.Element | undefined;
  handleChangeSupplierType: (value: string) => void;
  selectedSupplierType: number;
  handleSearch: () => void;
  handlePagination: (page: number) => void;
  pagination: PaginationType | undefined;
  handleSorting?: (column: string, sortType: SortConfig) => void;
}

const SupplierApprovalUI: React.FC<SupplierApprovalUIProps> = ({
  renderActionItems,
  customRowRender,
  handleChangeSupplierType,
  selectedSupplierType,
  handleSearch,
  handlePagination,
  pagination,
  handleSorting
}) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return <Footer handlePaginationChange={handlePagination} pagination={pagination} />;
  };

  return (
    <>
      <ScreenLayout
        screenName={t('L_LOCATE_BY')}
        screenNumber="1211"
        renderFooter={<BottomBar />}
        renderHeader={renderActionItems()}
      >
        <Card title={`${t('L_QUERY')}: ${t('T_MCFL0008')}`}>
          <div className={classes.topContainer}>
            <GroupRadio
              options={[
                { label: t('L_WAIT'), value: '1' },
                { label: t('L_APPROVED'), value: '2' },
                { label: t('L_STATUS_NO'), value: '3' },
                { label: t('L_DONE'), value: '4' }
              ]}
              name="group1"
              selectedValue={selectedSupplierType.toString()}
              labelOrientation="horizontal"
              onChange={handleChangeSupplierType}
              orientation="horizontal"
              size="fullWidth"
              inversed
            />
            <Button size="md" title={t('L_SEARCH')} onClick={handleSearch} />
          </div>
        </Card>
        <Card title={t('T_MCFW0597')}>
          <Table
            onSort={handleSorting}
            columns={SuppliersColumns()}
            data={data}
            customRowRenderer={customRowRender}
          />
        </Card>
      </ScreenLayout>
    </>
  );
};

export default SupplierApprovalUI;
