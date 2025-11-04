import { Input } from '@/ui/Input';
import { ScreenLayout } from '@/ui/Layout';
import { useTranslation } from 'react-i18next';
import classes from './ESetUpCreditCards.module.scss';
import { Button } from '@/ui/Button';
import { BackToPageButton, DetailButton, PrintExcel, SaveButton } from '@/components/commonButtons';
import { Footer } from '@/ui/Footer';
import { Card } from '@/ui/Card';
import { Select } from '@/ui/Select';
import { FaPencilAlt } from 'react-icons/fa';
import { Table } from '@/ui/Table';
import { DetailSTtudentColumn, ParentDetailsColumn } from './components';
import { AdditionalPaymentReportUIProps } from './types';




const ESetUpCreditCardsUI: React.FC<AdditionalPaymentReportUIProps> = ({
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
      </div>
    );
  };

  const BottomButtons = () => {
    return (
      <div className={classes.actionItems}>
        {/* need to be checked traslation of button is added
         <Button>{t('L_STAGE1')}</Button>
        <Button>{t('L_STAGE2')}</Button>
        <Button>{t('L_STAGE3')}</Button>
        <Button>{t('L_STAGE4')}</Button>
        <Button>{t('L_STAGE5')}</Button> */}
        <Button>{t('L_START_DEF')}</Button>
        <Button>{t('L_CALC_PAYMENT')}</Button>
        <Button>{t('L_PAYMENT_SPREAD')}</Button>
        <Button>{t('L_INVOICE_COLLECTION_CONFIRMATION_RECEIPTS')}</Button>
        <Button>{t('DEPOSIT_CONCENTRATION')}</Button>
        <Button>{t('L_ADD_PAYMENT')}</Button>
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
      screenName={t('T_MCFW1406')} 
      screenNumber="1406"
      renderHeader={<BottomBar />}
      renderFooter={<TopHeader />}
    >
      <Card title={`${t('L_QUERY')}-${t('T_MCFL0621')}`} renderHeaderItems={BottomButtons}>
        <div className={classes.mainContainer}>
          <div className={classes.innerContainer}>
            <Input size="md" label={t('L_PAYER_ID_NUMBER')} orientation="horizontal" />
            <Input size="md" label={t('L_STUDENT_ID')} orientation="horizontal" />
            <div className={classes.flex}>
              <Select options={[]} size="sm" label={t('L_FROM_CLASS')} orientation="horizontal" />
              <Input size="sm" orientation="horizontal" />
            </div>
            <div className={classes.flex}>
              <Input size="sm" label={t('L_CREDIT_NO')} orientation="horizontal" />
            </div>
            <Input size="md" label={t('L_FROM_THE_CANCELLATION_AMNT')} orientation="horizontal" />
          </div>

          <div className={classes.innerContainer}>
            <Input size="md" label={t('L_FAMILY_NAME')} orientation="horizontal" />
            <Input size="md" label={t('L_FAMILY_NAME')} orientation="horizontal" />
            <div className={classes.flex}>
              <Select options={[]} size="sm" label={t('L_CLASS_TO')} orientation="horizontal" />
              <Input size="sm" orientation="horizontal" />
            </div>
            <Input size="md" label={t('L_VALID_DATE')} orientation="horizontal" />
            <Input size="md" label={t('L_UP_TO_AN_AMOUNT')} orientation="horizontal" />
          </div>

          <div className={classes.innerContainer}>
            <Input size="md" label={t('L_PRIVATE_NAME')} orientation="horizontal" />
            <Input size="md" label={t('L_PRIVATE_NAME')} orientation="horizontal" />
            <div className={classes.flex}>
              <Input size="sm" label={t('L_STUDY_GROUP')} orientation="horizontal" />
              <Input size="sm" orientation="horizontal" disabled />
            </div>
              <Input size="sm" label={t('L_TOKEN')} orientation="horizontal" />
            <Input
              type="checkbox"
              size="md"
              label={t('L_EXIST_CREDIT')}
              orientation="horizontal"
            />
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
          columns={ParentDetailsColumn()}
        />
        <div className={classes.mainContainer}>
          <Input type="checkbox" size="sm" label={t('L_SIGN_ALLS')} orientation="horizontal" />
          <Input size="sm" label={t('L_TOTAL_PAID')} orientation="horizontal" />
          <Input size="sm" label={t('L_SUM_STUDENT')} orientation="horizontal" />
          <Input size="sm" label={t('')} orientation="horizontal" />
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
        </Card>
        <Card title={t('L_MCFW1335_CONTACT_PHONE')}>
          <div className={classes.flexCenter}>
            <div  className={classes.flexCenter}>
              <Input size="sm" label={t('L_STATIONARY')} orientation="horizontal" />
              <Input size="sm"  orientation="horizontal" />
            </div>
            <div className={classes.flexCenter}>
              <Input size="sm" label={t('L_MOBILE')} orientation="horizontal" />
              <Input size="sm" label={t('')} orientation="horizontal" />
            </div>
          </div>
        </Card>
      </div>
    </ScreenLayout>
  );
};

export default ESetUpCreditCardsUI;