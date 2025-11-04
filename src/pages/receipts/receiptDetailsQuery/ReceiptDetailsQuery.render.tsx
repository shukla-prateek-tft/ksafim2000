import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ReceiptDetailsQuery.module.scss';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Button, DetailButton, SearchButton } from '@/components/commonButtons';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { BiSend } from 'react-icons/bi';
import { getInputPattern } from '@/utils/commonHelper';
import { DatePicker } from '@/ui/DatePicker';

interface ReceiptDetailsQueryProps {}

const ReceiptDetailsQueryUI: React.FC<ReceiptDetailsQueryProps> = () => {
  const { t } = useTranslation('common');

  const creditTypeOptions = [
    { label: t('V_CRED_REG'), value: '1' },
    { label: t('V_CRED_30'), value: '2' },
    { label: t('V_CRED_ISR'), value: '3' },
    { label: t('V_CRED_PAY'), value: '4' },
    { label: t('V_CRED_VISA'), value: '5' },
    { label: t('V_CRED_CONSTANT'), value: '6' },
    { label: t('V_CRED_SUPER'), value: '7' },
    { label: t('V_CRED_CREDIT'), value: '8' },
    { label: t('V_CRED_AMEX'), value: '9' },
    { label: t('V_CRED_DINERS'), value: '0' }
  ];

  const BottomBar = () => {
    return (
      <>
        <div>{t('L_BOTTOM_0607_Text')}</div>

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
        <Button size="md" title={t('L_CLEAN')} />

        <SearchButton />
        <DetailButton />
      </div>
    );
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW1388')}
        screenNumber="0670"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('L_RECIEPT_DETAIL')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Select
                size="fullWidth"
                label={t('L_PAY_WAY')}
                options={[]}
                orientation="horizontal"
              />
              <Input
                size="fullWidth"
                label={t('L_MONEY_AMNT')}
                orientation="horizontal"
                type="amount"
                maxLength={10}
              />
              <Input
                size="fullWidth"
                label={t('L_CHECK_NUM')}
                orientation="horizontal"
                maxLength={16}
              />
              <Input
                size="fullWidth"
                label={t('L_HEADER_CARD')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(16)}
              />

              <Input
                size="fullWidth"
                label={t('L_TEXT_MCFR0670')}
                orientation="horizontal"
                disabled
                type="number"
                pattern={getInputPattern(10)}
              />
              <Input size="fullWidth" label={t('L_DESC')} orientation="horizontal" disabled />
            </div>
            <div className={classes.innerContainer}>
              <div className={classes.rangeItem}>
                <Input
                  size="fullWidth"
                  label={t('L_RECEIPT')}
                  orientation="horizontal"
                  maxLength={7}
                />
                <Button renderIcon={<BiSend size={12} color="green" />} variant="outline" />
              </div>

              <div className={classes.rangeItem}>
                <Input
                  size="fullWidth"
                  label={t('L_GIFT_RECEPT')}
                  orientation="horizontal"
                  maxLength={7}
                />
                <Input orientation="horizontal" type="checkbox" />
              </div>
              <div className={classes.rangeItem}>
                <Input
                  size="fullWidth"
                  label={t('L_RECEIPT_GIFT')}
                  orientation="horizontal"
                  maxLength={7}
                />
                <Input orientation="horizontal" type="checkbox" />
              </div>
              <Select
                size="fullWidth"
                label={t('L_CREDIT_TYPE')}
                options={creditTypeOptions}
                orientation="horizontal"
              />

              <Input
                size="fullWidth"
                label={t('L_PAYER_NAME')}
                orientation="horizontal"
                disabled
                maxLength={20}
              />
              <Input size="fullWidth" label={t('L_ACC_NO')} orientation="horizontal" disabled />
            </div>
            <div className={classes.innerContainer}>
              <Input
                label={t('L_YEAR')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(4)}
              />
              <Input label={t('L_Payment_Date')} orientation="horizontal" />
              <Input
                label={t('L_BANK')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(5)}
              />
              <Input
                label={t('L_BANK_ACCOUNT')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(9)}
              />
              <Input label={t('L_PAY_DATE')} orientation="horizontal" disabled />
              <Input
                label={t('L_SET_NUM')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(6)}
              />
            </div>
            <div className={classes.innerContainer}>
              <Input label={t('L_ASSOCIATED_NO')} orientation="horizontal" maxLength={7} />
              <Input
                label={t('L_TOKEN')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(19)}
              />
              <Input label={t('L_TERMINAL_NUM')} orientation="horizontal" maxLength={15} />
              <Input label={t('L_USER_NAME')} orientation="horizontal" disabled maxLength={15} />
            </div>
          </div>
        </Card>

        <Card title={t('L_MCFR0670_LEGENT2')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input size="fullWidth" label={t('L_DEPOSIT_NO')} orientation="horizontal" />
              <Input
                size="fullWidth"
                label={t('L_BANK_DEPOSIT')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(6)}
              />
              <Select size="fullWidth" label={t('L_BANKS')} options={[]} orientation="horizontal" />
            </div>

            <div className={classes.innerContainer}>
              <div className={classes.rangeItem}>
                <Input
                  size="fullWidth"
                  label={t('L_DEPOSIT_NUM')}
                  orientation="horizontal"
                  type="number"
                  pattern={getInputPattern(5)}
                />
                <Button renderIcon={<BiSend size={12} color="green" />} variant="outline" />
              </div>

              <div className={classes.rangeItem}>
                <Input
                  size="fullWidth"
                  label={t('L_MERGE')}
                  orientation="horizontal"
                  type="number"
                  pattern={getInputPattern(5)}
                />
                <Input
                  size="fullWidth"
                  label={t('L_PAYER')}
                  orientation="horizontal"
                  type="number"
                  pattern={getInputPattern(5)}
                />
              </div>

              <Input orientation="horizontal" type="checkbox" label={t('L_RETURNED_CHECK')} />
            </div>
            <div className={classes.innerContainer}>
              <DatePicker
                onChange={() => {}}
                selectedDate={new Date()}
                label={t('L_DEPOSIT_DATE')}
                orientation="horizontal"
              />
              <Input
                label={t('L_RETURN_FEE')}
                orientation="horizontal"
                type="amount"
                maxLength={10}
              />
              <Input
                label={t('L_CONCENTRATION')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(8)}
              />
            </div>
          </div>
        </Card>

        <Card title={t('L_MCFR0670_LEGENT3')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input size="fullWidth" label={t('L_SHVA_SEND_D')} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <Input
                size="fullWidth"
                label={t('L_CREDIT_STATUS')}
                orientation="horizontal"
                type="number"
                pattern={getInputPattern(3)}
              />
            </div>
            <div className={classes.innerContainer}>
              <Input
                size="fullWidth"
                label={t('L_CONFIMATION_N')}
                orientation="horizontal"
                maxLength={7}
              />
            </div>
          </div>
        </Card>

        <Card title={t('L_DETAL_ELSE')}>
          <div className={classes.mainContainer}>
            <div className={classes.innerContainer}>
              <Input size="fullWidth" label={t('L_MESAV_SEND_D')} orientation="horizontal" />
            </div>
            <div className={classes.innerContainer}>
              <Input size="fullWidth" label={t('L_YAAD_SEND_D')} orientation="horizontal" />
            </div>
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default ReceiptDetailsQueryUI;
