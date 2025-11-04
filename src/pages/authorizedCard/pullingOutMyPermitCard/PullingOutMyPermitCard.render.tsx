import { Table } from '@/ui/Table';
import { PullingOutMyPermitCardColumn } from './components';
import classes from './PullingOutMyPermitCard.module.scss';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  PrintExcel,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { Footer } from '@/ui/Footer';
import { Card } from '@/ui/Card';
import { PullingOutMyPermitCardUIProps } from './types';

const PullingOutMyPermitCardUI = ({
  customRowRenderer,
  data
}: PullingOutMyPermitCardUIProps) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <Footer
        // handlePaginationChange={handlePagination}
        // pagination={pagination}
        />
      </>
    );
  };

  const TopBar = () => {
    return (
      <div className={classes.actionItems}>
        <div className={classes.buttonContainer}>
          <CancelButton />
          <AddButton />
          <SaveButton />
        </div>
        <Button variant="outline" title={t('USER_DB')} />
        <div className={classes.buttonContainer}>
          <PrintExcel />
          <SearchButton />
          <OtherDetailButton />
          <DetailButton />
          <BackToPageButton />
        </div>
      </div>
    );
  };

  return (
    <ScreenLayout screenNumber="1414" renderHeader={<TopBar />} renderFooter={<BottomBar />}>
      <Card title={t('T_MCFW1414')}>
        <Table height='70vh' data={data} customRowRenderer={customRowRenderer} columns={PullingOutMyPermitCardColumn()} />
      </Card>
    </ScreenLayout>
  );
};

export default PullingOutMyPermitCardUI;
