import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './WrongSuppliersFromFlashSystem.module.scss';
import { Table } from '@/ui/Table';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { PrintButton, PrintExcel, BackToPageButton } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { SupplierFileColumns, SupplierFileErrColumns } from './components';

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
interface WrongSuppliersFromFlashSystemUIProps {
  renderActionItems: () => JSX.Element;
}

const WrongSuppliersFromFlashSystemUI: React.FC<WrongSuppliersFromFlashSystemUIProps> = ({
  renderActionItems
}) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <Footer
      // handlePaginationChange={handlePagination}
      // pagination={pagination}
      />
    );
  };

  return (
    <>
      <ScreenLayout
        screenName={t('')}
        screenNumber="1226"
        renderFooter={<BottomBar />}
        // renderHeader={renderActionItems()}
      >
        <div className={classes.item}>
          <div className={classes.tableContainer}>
            <Card title={t('L_SUPP_FILE')}>
              <Table columns={SupplierFileColumns()} data={data} height="35vh" />
            </Card>
          </div>
          <div className={classes.buttonContainer}>
            <Card>
              <div className={classes.btn}>
                <PrintButton />
                <PrintExcel />
              </div>
            </Card>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.tableContainer}>
            <Card title={t('L_FILE_SUPP_ERR')}>
              <Table columns={SupplierFileErrColumns()} data={data} height="35vh" />
            </Card>
          </div>
          <div className={classes.buttonContainer}>
            <Card>
              <div className={classes.btn}>
                <PrintButton />
                <PrintExcel />
                <BackToPageButton />
              </div>
            </Card>
          </div>
        </div>
      </ScreenLayout>
    </>
  );
};

export default WrongSuppliersFromFlashSystemUI;
