import { useTranslation } from 'react-i18next';


import { Flex } from '@/ui/Flex/Flex';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';
import classes from './PostalBankStandingOrderConfirmation.module.scss';
import { Table } from '@/ui/Table';
import { PostalBankStandingOrderConfirmationColumn } from './components';
import { Footer } from '@/ui/Footer';
import {
  SaveButton,
  BackToPageButton,
  DetailButton,
  SearchButton,
  PrintButton
} from '@/components/commonButtons';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';

interface PostalBankStandingOrderConfirmationProps {}

const PostalBankStandingOrderConfirmationUI: React.FC<
  PostalBankStandingOrderConfirmationProps
> = () => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <>
          <span>{`* ${t('L_NOT_MAIL')}`}</span>
          <div className={classes.bottomContent}>
            <span>{`${t('L_MCFW_0653_bottom_text1')}`}</span>
            <div className={classes.bottomInput}>
              <Input
                id="acc_Type"
                type="number"
                pattern={getInputPattern(3)}
                tabIndex={10}
                label={t('L_SIGNED')}
                orientation="horizontal"
              />
              <Input type='number' maxLength={4} disabled orientation="horizontal" size="sm" />
            </div>
          </div>
          <span>{t('REMARK_FLD')}</span>
        </>
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
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <PrintButton />
        <SearchButton />
      </div>
    );
  };
  return (
    <ScreenLayout
      screenNumber="MCFW-0653"
      renderFooter={<BottomBar />}
      renderHeader={<TopHeader />}
    >
      <Card title={t('T_MCFW0653')}>
        <div className={classes.mainContainer}>
          <Table
            columns={PostalBankStandingOrderConfirmationColumn()}
            data={[{}, {}, {}]}
            customRowRenderer={(key, row, index) => {
              switch (key) {
                case 'code1':
                  return (
                    <div className={classes.cellContainer}>
                      <Input value={t('ID')} size="fullWidth" />
                    </div>
                  );

                case 'code2':
                  return (
                    <div className={classes.cellContainer}>
                      <Input value={t('FAMILY_NAME')} size="fullWidth" />
                      <Input value={t('PRIVATE_NAME')} size="fullWidth" />
                    </div>
                  );
                case 'code3':
                  return (
                    <div className={classes.cellContainer}>
                      <Input value={t('PAYMENT_DATE')} size="fullWidth" />
                    </div>
                  );
                case 'code4':
                  return (
                    <div className={classes.cellContainer}>
                      <Input value={t('BANK')} size="fullWidth" />
                    </div>
                  );
                case 'code5':
                  return (
                    <div className={classes.cellContainer}>
                      <Input value={t('BANK_ACC')} size="fullWidth" />
                    </div>
                  );
                case 'code6':
                  return (
                    <div className={classes.cellContainer}>
                      <Input value={t('PAYMENT_SUM')} size="fullWidth" />
                    </div>
                  );
                case 'code7':
                  return (
                    <div className={classes.cellContainer}>
                      <Input type="checkbox" value={t('')} />
                      <Input type="checkbox" value={t('')} />
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
  );
};

export default PostalBankStandingOrderConfirmationUI;
