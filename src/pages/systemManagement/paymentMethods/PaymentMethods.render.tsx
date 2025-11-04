import React from 'react';
import classes from './paymentMethods.module.scss';
import { Table } from '@/ui/Table';
import { PaymentMethodsColumn } from './components';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Input } from '@/ui/Input';
import {
  PaymentMethodsProps,
  PaymentMethodItem,
  PaymentMethodsColumnEnum,
  PaymentMethodsColumnKey
} from './types';

const PaymentMethods = ({
  renderActionItems,
  data,
  pagination,
  handlePaginationChange,
  handleSort,
  hideCheqCard,
  onToggleCheqCard
}: PaymentMethodsProps) => {
  const { t } = useTranslation('common');

  const customRowRender = (key: PaymentMethodsColumnKey, row: PaymentMethodItem, index: number) => {
    switch (key) {
      case PaymentMethodsColumnEnum.PayWay:
      case PaymentMethodsColumnEnum.PayWayDesc:
      case PaymentMethodsColumnEnum.AccCardName:
      case PaymentMethodsColumnEnum.AccCard2Name:
        return (
          <div className={classes.rowContainer}>
            <Input value={String(row?.[key] ?? '')} readOnly />
          </div>
        );
      case PaymentMethodsColumnEnum.CheqCard:
        return (
          <Input
            type="checkbox"
            checked={Boolean(row?.[key])}
            onChange={e => onToggleCheqCard?.(row, e.target.checked, index)}
          />
        );
      case PaymentMethodsColumnEnum.CreditCard:
      case PaymentMethodsColumnEnum.BankReq:
      case PaymentMethodsColumnEnum.ChequeReq:
        return <Input type="checkbox" checked={Boolean(row?.[key])} />;
      default:
        return (
          <div className={classes.rowContainer}>
            <Input value={String(row?.[key] ?? '')} readOnly />
          </div>
        );
    }
  };

  const BottomBar = () => {
    return (
      <Footer
        pagination={{
          pageSize: pagination?.pageSize || 10,
          pageNumber: pagination?.pageNumber || 1,
          totalPages: pagination?.totalPages || 1,
          hasNextPage: Boolean(pagination?.hasNextPage),
          hasPreviousPage: Boolean(pagination?.hasPreviousPage),
          totalCount: pagination?.totalCount || 0
        }}
        handlePaginationChange={handlePaginationChange}
      />
    );
  };
  const TopHeader = () => {
    return <div className={classes.topHeaderContainer}>{renderActionItems()}</div>;
  };

  return (
    <ScreenLayout
      screenName={t('T_MCFW1181')}
      screenNumber="1181"
      renderFooter={<BottomBar />}
      renderHeader={<TopHeader />}
    >
      <div className={classes.mainContainer}>
        <fieldset className={classes.fieldSet}>
          <div className={classes.topContainer}>
            <div className={classes.leftInnerContainer}>{t('L_MCFW_1181_TITLE_1')}</div>
            <div className={classes.rightInnerContainer}>{t('L_MCFW_1181_TITLE_2')}</div>
          </div>
          <Table
            customRowRenderer={(key, row, index) =>
              customRowRender(key as PaymentMethodsColumnKey, row, index)
            }
            data={data}
            columns={PaymentMethodsColumn({ t: t }).filter(col =>
              hideCheqCard ? col.key !== PaymentMethodsColumnEnum.CheqCard : true
            )}
            onSort={(key, direction) => handleSort?.(key as PaymentMethodsColumnKey, direction)}
            height="68vh"
          />
          <p className={classes.detailText}>
            <span>{t('L_REMARK')}</span>
            {t('L_MCFW_1181_BOTTOM_TEXT')}
          </p>
        </fieldset>
      </div>
    </ScreenLayout>
  );
};

export default PaymentMethods;
