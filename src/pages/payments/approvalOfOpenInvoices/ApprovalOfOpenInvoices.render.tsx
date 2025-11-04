import classes from './ApprovalOfOpenInvoices.module.scss';
import { Table } from '@/ui/Table';
import { ApprovalOfOpenInvoicesColumn } from './Components';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import {
  BackToPageButton,
  Button,
  DetailButton,
  SaveButton,
  SearchButton,
  PrintExcel
} from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import {
  ApprovalOfOpenInvoicesProps,
  OpenInvoiceItem,
  ApprovalOfOpenInvoicesSortKey,
  ApprovalOfOpenInvoicesColumnKey,
  ApprovalOfOpenInvoicesColumnEnum
} from './type';
import { getLengthPattern } from '@/utils/commonHelper';

const ApprovalOfOpenInvoicesUI = (props: ApprovalOfOpenInvoicesProps) => {
  const { data = [], pagination, handlePaginationChange, handleSort } = props || {};

  const { t } = useTranslation('common');
  const customRowRender = (
    key: ApprovalOfOpenInvoicesColumnKey,
    row: OpenInvoiceItem,
    index: number
  ) => {
    switch (key) {
      case ApprovalOfOpenInvoicesColumnEnum.SuppName:
        return (
          <div className={classes.supplierInputs}>
            <Input
              type="number"
              maxLength={10}
              pattern={getLengthPattern(10)}
              value={String(row['suppNum'] ?? '')}
              size="fullWidth"
            />
            <Input value={String(row[key] ?? '')} size="fullWidth" disabled />
          </div>
        );
      case ApprovalOfOpenInvoicesColumnEnum.AccCardName:
        return <Input value={String(row[key] ?? '')} size="fullWidth" disabled />;
      default:
        return <Input value={String(row[key] ?? '')} size="fullWidth" />;
    }
  };

  const BottomBar = () => {
    return (
      <>
        <div className={classes.flex}>
          <Input label={t('L_TOTAL')} disabled orientation="horizontal" />
          <Input disabled orientation="horizontal" />
        </div>

        <Footer pagination={pagination} handlePaginationChange={handlePaginationChange} />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <Button size="md" title={t('L_MCFW0615')} />
        <Button size="md" title={t('L_PRINT_PAYMENT')} />
        <PrintExcel />
        <SaveButton />
        <SearchButton />
        <DetailButton />
        <BackToPageButton />
      </div>
    );
  };
  return (
    <ScreenLayout
      screenName={t('')}
      screenNumber="1372"
      renderFooter={<BottomBar />}
      renderHeader={<TopHeader />}
    >
      <Card>
        <Table
          customRowRenderer={(key, row, index) =>
            customRowRender(key as ApprovalOfOpenInvoicesColumnKey, row, index)
          }
          data={data}
          columns={ApprovalOfOpenInvoicesColumn({ t: t })}
          onSort={(key, direction) => handleSort?.(key as ApprovalOfOpenInvoicesSortKey, direction)}
        />
      </Card>
    </ScreenLayout>
  );
};

export default ApprovalOfOpenInvoicesUI;
