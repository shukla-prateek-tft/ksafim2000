import { Table } from '@/ui/Table';

import classes from './PullingOutMyPermitAuthorizedCard.module.scss';
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
import { PullingOutMyPermitAuthorizedCardColumn } from './components';
import { PullingOutMyPermitAuthorizedCardUIProps } from './types';

const PullingOutMyPermitAuthorizedCardUI = ({
  customRowRender,
  data
}: PullingOutMyPermitAuthorizedCardUIProps) => {
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
    <ScreenLayout screenNumber="1413" renderHeader={<TopBar />} renderFooter={<BottomBar />}>
      <Card title={t('T_MCFW1413')}>
        <Table 
          data={data} 
          columns={PullingOutMyPermitAuthorizedCardColumn()} 
          customRowRenderer={customRowRender}
          height='70vh'
        />
      </Card>
    </ScreenLayout>
  );
};

export default PullingOutMyPermitAuthorizedCardUI;
