import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './UpdatingPermanentTransactionAccountDetails.module.scss';
import { Table } from '@/ui/Table';
import { UpdatingPermanentTransactionAccountDetailsColumns } from './components/Column';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { CustomRowRenderType, PaymentDataType } from '../type';

const data: PaymentDataType[] = [
  {
    id: 'INV-001',
    familyName: 'Family Name',
    privateName: "Private Name",
    date: new Date().toString(),
    bank: 'Bank Name',
    bankAccount: 'BACCOUNT1234',
    sum: "1000",
    actNo: "ACT1234",
    returned: true,
    paid: false,
    signed: true,
  }
];

interface UpdatingPermanentTransactionAccountDetailsProps {
  renderActionItems: () => JSX.Element;
  cardHeaderRenderItems: () => JSX.Element;
  customRowRenderer: CustomRowRenderType<PaymentDataType>
}

const UpdatingPermanentTransactionAccountDetails: React.FC<UpdatingPermanentTransactionAccountDetailsProps> = ({
  renderActionItems,
  cardHeaderRenderItems,
  customRowRenderer
}) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <Footer
          pagination={{
            pageNumber: 1,
            pageSize: 10,
            totalPages: 100,
            totalCount: 105,
            hasPreviousPage: false,
            hasNextPage: true
          }}
          showPagination={true}
        />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.renderActionItems}>
        {renderActionItems()}
      </div>
    );
  };

  const renderCardHeader = () => <div className={classes.renderActionItems}>
    {cardHeaderRenderItems()}
  </div>

  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW0658')}
        screenNumber="0658"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card
          renderHeaderItems={renderCardHeader()}
        >
          <Table
            columns={UpdatingPermanentTransactionAccountDetailsColumns()}
            data={data}
            customRowRenderer={customRowRenderer}
            height='60vh'
          />
          <div className={classes.midContainer}>
            <Input label={t('L_MARK_ALL_FOR_DELETION')} checked={false} type='checkbox' orientation='horizontal' />
            <span>{`* ${t('L_PAYER_NOTE')}`}</span>
          </div>
          <div className={classes.bottomContainer}>
            <div className={classes.flexRow}>
              <Input type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} label={t('L_SIGNED')} value={"total sum"} orientation='horizontal' />
              <Input  type='amount' maxLength={11} onChange={()=>{}} onBlur={()=>{}} value={"total"} orientation='horizontal' />
            </div>
            <Input type='amount' maxLength={11}  label={t('L_PAYMENT_LEFT')} value={"total"} orientation='horizontal' />
            <Input  type='amount' maxLength={11} label={t('L_TOTAL_RETURNS')} value={"return"} orientation='horizontal' />
            <Input type='amount' maxLength={11} label={t('L_TOTAL_PAYED')} value={"payed"} orientation='horizontal' />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default UpdatingPermanentTransactionAccountDetails;
