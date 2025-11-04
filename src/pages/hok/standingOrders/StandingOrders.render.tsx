import React from 'react';
import { Input } from '@/ui/Input';
import { ScreenLayout } from '@/ui/Layout';
import { useTranslation } from 'react-i18next';
import classes from './StandingOrders.module.scss';
import { Button } from '@/ui/Button';
import { BackToPageButton, DetailButton, PrintExcel, SaveButton } from '@/components/commonButtons';
import { Footer } from '@/ui/Footer';
import { Card } from '@/ui/Card';
import { Select } from '@/ui/Select';
import { FaPencilAlt } from 'react-icons/fa';
import { Table } from '@/ui/Table';
import { DetailSTtudentColumn, StandingOrdersColumn } from './components';
import { REGEX } from '@/constants/appConstant';

interface AdditionalPaymentReportUIProps {
  data: any[];
  customRowRender?: () => JSX.Element;
  customDetailStudentRowRender?: () => JSX.Element;
}

const StandingOrdersUI: React.FC<AdditionalPaymentReportUIProps> = ({
  data,
  customRowRender,
  customDetailStudentRowRender
}) => {
  const { t } = useTranslation('common');
  const BottomBar = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <PrintExcel />
      </div>
    );
  };

  const BottomButtons = () => {
    return (
      <div className={classes.actionItems}>
        {/* need to be checked
         <Button>{t('BT_STEP_1')}</Button>
        <Button>{t('BT_STEP_2')}</Button>
        <Button>{t('BT_STEP_3')}</Button>
        <Button>{t('BT_STEP_4')}</Button>
        <Button>{t('BT_STEP_5')}</Button> */}
        <Button>{t('L_PB_UPDATE')}</Button>
        <Button>{t('L_PB_CALC')}</Button>
        <Button>{t('L_PB_SPREAD')}</Button>
        <Button>{t('L_PAYMENT_COLLECTION_CONFIRMATION')}</Button>
        <Button>{t('L_DEPOSIT_PLUS_TRANSFER_OF_SECURITIES')}</Button>
        <Button>{t('L_PB_ADDATE')}</Button>
        <Button>{t('L_CANCEL_COLLECT')}</Button>
        <Button>{t('L_STUDENT_DETAILS_FOR_PAYER')}</Button>
        <Button>{t('L_REDEPLOYMENT')}</Button>
        <Button>{t('L_PRIVATE_EQULAITY_REPORT')}</Button>
        <Button>{t('L_REAL_ESTATE_TRANSACTION_REPORT')}</Button>
      </div>
    );
  };

  const TopHeader = () => {
    return (
      <Footer
        showPagination
        pagination={{
          pageSize: 10,
          totalPages: 10,
          hasNextPage: true,
          hasPreviousPage: true
        }}
      />
    );
  };

  return (
    <ScreenLayout
      screenName={t('T_MCFW1335')}
      screenNumber="1335"
      renderHeader={<BottomBar />}
      renderFooter={<TopHeader />}
    >
      <Card title={`${t('L_QUERY')}-${t('T_MCFL0621')}`} renderHeaderItems={BottomButtons}>
        <div className={classes.mainContainer}>
          <div className={classes.innerContainer}>
            <Input
              size="md"
              label={t('L_PAYER_ID_NUMBER')}
              orientation="horizontal"
              type="number"
              maxLength={10}
            />
            <Input
              size="md"
              label={t('L_STUDENT_ID')}
              orientation="horizontal"
              type="number"
              maxLength={10}
            />
            <div className={classes.flex}>
              <Select
                options={[]}
                size="sm"
                label={t('L_FROM_CLASS')}
                orientation="horizontal"
                tabIndex={0}
              />
              <Input size="sm" orientation="horizontal" type="number" maxLength={2} />
            </div>
            <div className={classes.flex}>
              <Input
                size="sm"
                label={t('L_BANK3')}
                orientation="horizontal"
                type="number"
                maxLength={5}
              />
              <Input
                size="sm"
                orientation="horizontal"
                disabled
                pattern={REGEX.allCharacter}
                maxLength={12}
              />
            </div>
            <Input
              size="md"
              label={t('L_FROM_THE_CANCELLATION_AMNT')}
              orientation="horizontal"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
            />
          </div>

          <div className={classes.innerContainer}>
            <Input
              size="md"
              label={t('L_FAMILY_NAME')}
              orientation="horizontal"
              pattern={REGEX.allCharacter}
              maxLength={20}
            />
            <Input
              size="md"
              label={t('L_FAMILY_NAME')}
              orientation="horizontal"
              pattern={REGEX.allCharacter}
              maxLength={40}
            />
            <div className={classes.flex}>
              <Select
                options={[]}
                size="sm"
                label={t('L_CLASS_TO')}
                orientation="horizontal"
                tabIndex={0}
              />
              <Input size="sm" orientation="horizontal" type="number" maxLength={2} />
            </div>
            <Input
              size="md"
              label={t('L_BANK_ACCOUNT')}
              orientation="horizontal"
              type="number"
              maxLength={9}
            />
            <Input
              size="md"
              label={t('L_UP_TO_AN_AMOUNT')}
              orientation="horizontal"
              type="amount"
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
            />
          </div>

          <div className={classes.innerContainer}>
            <Input
              size="md"
              label={t('L_PRIVATE_NAME')}
              orientation="horizontal"
              pattern={REGEX.allCharacter}
              maxLength={12}
            />
            <Input
              size="md"
              label={t('L_PRIVATE_NAME')}
              orientation="horizontal"
              pattern={REGEX.allCharacter}
              maxLength={40}
            />
            <div className={classes.flex}>
              <Input
                size="sm"
                label={t('L_STUDY_GROUP')}
                orientation="horizontal"
                type="number"
                maxLength={18}
              />
              <Input size="sm" orientation="horizontal" disabled />
            </div>
            <Input
              type="checkbox"
              size="md"
              label={t('L_EXIST_BNK_ACC')}
              orientation="horizontal"
            />
            <Input type="checkbox" size="md" label={t('L_PAYER_NOTE')} orientation="horizontal" />
          </div>

          <div className={classes.flexCenter}>
            <Button>{t('L_RETRIEVE_BTN')}</Button>
            <Button renderIcon={<FaPencilAlt />} size="md"></Button>
          </div>
        </div>
      </Card>

      <Card title={t('L_PARENT_DETAIL')}>
        <Table
          height="40vh"
          data={data}
          customRowRenderer={customRowRender}
          columns={StandingOrdersColumn()}
        />
        <div className={classes.mainContainer}>
          <Input type="checkbox" size="sm" label={t('L_SIGN_ALLS')} orientation="horizontal" />
          <Input
            size="sm"
            label={t('L_TOTAL_PAID')}
            orientation="horizontal"
            type="number"
            maxLength={4}
          />
          <Input
            size="sm"
            label={t('L_TOT_STUDENT')}
            orientation="horizontal"
            type="number"
            maxLength={4}
          />
          <Input
            size="sm"
            label={t('')}
            orientation="horizontal"
            type="amount"
            maxLength={11}
            onChange={() => {}}
            onBlur={() => {}}
          />
          <Input
            type="checkbox"
            checked={true}
            size="sm"
            label={t('L_PARENT_PAY')}
            orientation="horizontal"
          />
          <Input
            type="checkbox"
            checked={true}
            size="sm"
            label={t('L_CREDIT_BALANCE')}
            orientation="horizontal"
          />
          <p>{t('L_BOTTOM_TEXT2')}</p>
        </div>
      </Card>
      <div className={classes.mainContainer}>
        <Card title={t('L_DET_STUDENTS')}>
          <Table
            height="20vh"
            data={data}
            customRowRenderer={customDetailStudentRowRender}
            columns={DetailSTtudentColumn()}
          />
          <Input
            size="sm"
            label={t('L_TOT')}
            orientation="horizontal"
            type="amount"
            maxLength={11}
            onChange={() => {}}
            onBlur={() => {}}
          />
        </Card>
        <Card title={t('L_MCFW1335_CONTACT_PHONE')}>
          <div className={classes.flexCenter}>
            <div>
              <Input
                size="sm"
                label={t('L_STATIONARY')}
                orientation="horizontal"
                type="number"
                maxLength={10}
              />
              <Input
                size="sm"
                label={t('')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={5}
              />
            </div>
            <div>
              <Input
                size="sm"
                label={t('L_MOBILE')}
                orientation="horizontal"
                type="number"
                maxLength={10}
              />
              <Input
                size="sm"
                label={t('')}
                orientation="horizontal"
                pattern={REGEX.allCharacter}
                maxLength={5}
              />
            </div>
          </div>
          <Input
            size="fullWidth"
            label={t('L_COMMENT')}
            orientation="horizontal"
            pattern={REGEX.allCharacter}
            maxLength={40}
          />
        </Card>
      </div>
    </ScreenLayout>
  );
};

export default StandingOrdersUI;
