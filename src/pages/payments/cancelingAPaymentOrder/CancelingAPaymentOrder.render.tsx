import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CancelingAPaymentOrder.module.scss';
import { Table } from '@/ui/Table';
import { CentralizedCorrectionFirstColumn, CentralizedCorrectionSecondColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { DetailButton, SaveButton } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { getFormatedDate } from '@/utils/commonHelper';
import {
  GetExpenceVoucherDetailsResponseType,
  GetExpenseDetailsInvoicesResponseType,
  GetPaymentDetalsResponseType,
  InputValueType
} from './types';
import { REGEX } from '@/constants/appConstant';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';

const data2 = [
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  }
];

interface CancelingAPaymentOrderProps {
  cancelPaymentOrderData: GetExpenceVoucherDetailsResponseType;
  paymentDetailsData: GetPaymentDetalsResponseType;
  expenseDetailsInvoicesData: GetExpenseDetailsInvoicesResponseType;
  handleCancelPymentVoucher: (inputValue: {
    desc: string;
    cancel_Payment_Voucher: boolean;
  }) => void;
}

const CancelingAPaymentOrderUI: React.FC<CancelingAPaymentOrderProps> = ({
  cancelPaymentOrderData,
  paymentDetailsData,
  expenseDetailsInvoicesData,
  handleCancelPymentVoucher
}) => {
  const { t } = useTranslation('common');

  const [inputValue, setInputValue] = useState<InputValueType>({
    desc: '',
    cancel_Payment_Voucher: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, type, checked, id } = e.target;
    setInputValue(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    if (id === 'cancel_Payment_Voucher' && checked) {
      handleCancelPymentVoucher({
        ...inputValue,
        [id]: checked
      });
    }
  };

  const {
    Act_No = '',
    Pay_Date,
    Supp_Num = '',
    Supp_Name = '',
    Desc_Aut = ''
  } = cancelPaymentOrderData?.data || {};

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <Input
            label={t('L_CANCEL_INFO')}
            size="fullWidth"
            id="desc"
            name="desc"
            value={inputValue?.desc}
            orientation="horizontal"
            onChange={handleInputChange}
            type="text"
            pattern={REGEX.allCharacter}
            maxLength={30}
          />
          <span>{t('L_0641_DESC')}</span>
        </div>

        <Footer
        // handlePaginationChange={handlePagination}
        // pagination={pagination}
        />
      </>
    );
  };
  const TopHeader = () => {
    return (
      <div className={classes.topHeaderContainer}>
        <DetailButton />
        <SaveButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1388')}
        screenNumber="0641"
        renderFooter={() => <BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_OUTCOME_DETAIL')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input
                label={t('L_DOCUMENT')}
                orientation="horizontal"
                value={Act_No}
                onChange={() => {}}
                pattern={REGEX.allCharacter}
                maxLength={7}
              />
              <DatePickerComponent
                selectedDate={new Date()}
                onChange={() => {}}
                placeholder=" "
                id="L_DATE"
                size="fullWidth"
                orientation="horizontal"
                label={t('L_PAY_DATE')}
              />
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.rangeItem}>
                <Input
                  label={t('L_SUPP')}
                  orientation="horizontal"
                  value={Supp_Num}
                  onChange={() => {}}
                  type="number"
                  maxLength={10}
                />
                <Input disabled value={Supp_Name} type="text" maxLength={30} />
              </div>
              <Input
                label={t('L_DETAILS')}
                orientation="horizontal"
                value={Desc_Aut}
                type="text"
                maxLength={100}
              />
            </div>
            <div className={classes.innerContainer}>
              <Input
                label={t('T_TEXT2_MCFW1388')}
                id="cancel_Payment_Voucher"
                name="cancel_Payment_Voucher"
                onChange={handleInputChange}
                orientation="horizontal"
                type="checkbox"
                checked={inputValue?.cancel_Payment_Voucher}
              />
              <Input
                label={t('T_TEXT2_MCFW1388')}
                orientation="horizontal"
                type="number"
                maxLength={5}
              />
            </div>
          </div>
        </Card>

        <Card title={t('L_PAY_DETAIL')}>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={CentralizedCorrectionFirstColumn()}
              data={paymentDetailsData?.data || []}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'Pay_Way':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Pay_Way}
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Bank':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Bank}
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                        <Input
                          value={row?.Bank_Name}
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Payment_Date':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={getFormatedDate(row?.Payment_Date)}
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Bank_Account':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Bank_Account}
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Check_Num':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Check_Num}
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Outcome':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Outcome}
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );

                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
          </div>
        </Card>
        <Card title={t('L_OUTCOME_REF_D')}>
          <div className={classes.addInvoiceTable}>
            <Table
              columns={CentralizedCorrectionSecondColumn()}
              data={expenseDetailsInvoicesData?.data || []}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'Student':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Student}
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Acc_Act_Type':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Acc_Act_Type}
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Service_Type':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Service_Type}
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Acc_Card':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Acc_Card}
                          type="text"
                          id="catalog_no"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Outcome_Sum':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Outcome_Sum}
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );
                  case 'Income_Sum':
                    return (
                      <div className={classes.ListofGefenCell}>
                        <Input
                          value={row?.Income_Sum}
                          type="text"
                          id="codeDescription"
                          maxLength={16}
                          variant="borderless"
                        />
                      </div>
                    );

                  default:
                    return (row as Record<string, any>)[key];
                }
              }}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default CancelingAPaymentOrderUI;
