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
  
   const handleCheqCardChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const payWay = Number(row?.L_pay_way ?? 0);

    if (isChecked && payWay === 16) {
      const hasPending = await checkPendingCheques();

      if (hasPending) {
        toast.error("יש שיקים שטרם הופקדו בבנק — לא ניתן להמשיך");
   
        return;
      }
    }
    updateRow({ CheqCard: isChecked });
    onToggleCheqCard?.(row, isChecked, index);
  };


   const handleLovClick = async () => {
      // setActiveIndex(index);
      // // const list = await gp_lov(); // Call Uniface gp_lov
      // if (list.length === 0) {
      //   toast.info("No accounts found (is_debit=1)");
      //   return;
      // }
      // setLovData(list);
      // setLovOpen(true);
      // open modal
    };
  
   
  const handlePayWayBlur = () => {
    if (payWay === 115 && (!desc || desc.trim() === "")) {
      updateRow({ pay_way_desc: "העברה עירייה" });
    }
  };
  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
      const typedValue = e.target.value?.trim();
      if (!typedValue) return; // no input
      // const result = await gp_get_val(typedValue);
      // if (!result.valid) {
      //   toast.error("Invalid account value");
      //   updateRow(index, { acc_card: "", acc_card_name: "" });
      // } else {
      //   updateRow(index, {
      //     acc_card: result.id,
      //     acc_card_name: result.name,
      //   });
      }
  
  const customRowRender = (key: PaymentMethodsColumnKey, row: PaymentMethodItem, index: number) => {
    switch (key) {
      case PaymentMethodsColumnEnum.PayWay:
          return (
          <div className={classes.rowContainer}>
            <Input value={String(row?.[key] ?? '')} type="number" readOnly onBlur={handlePayWayBlur}/>
          </div>
        );
      case PaymentMethodsColumnEnum.PayWayDesc:
         return (
          <div className={classes.rowContainer}>
            <Input value={String(row?.[key] ?? '')} readOnly />
          </div>
        );
      case PaymentMethodsColumnEnum.AccCardName:
          return (
          <div className={classes.rowContainer}>
            <Input
              type="text"
              value={String(row?.acc_card_name ?? "")}
              onClick={handleLovClick} // DTLF trigger
              onBlur={handleBlur} // LFLD trigger
              placeholder="Select or type account"
              readOnly={false}
              style={{ cursor: "pointer" }}
            />
          </div>
        );
        
      case PaymentMethodsColumnEnum.AccCard2Name:
        return (
          <div className={classes.rowContainer}>
        {/* similar to ACC card Name */}
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
          return <Input type="checkbox" checked={Boolean(row?.[key])}  onChange={()=>{}} />;
      case PaymentMethodsColumnEnum.ChequeReq:
        return <Input type="checkbox" checked={Boolean(row?.[key])}  onChange={handleCheqCardChange} />;
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
