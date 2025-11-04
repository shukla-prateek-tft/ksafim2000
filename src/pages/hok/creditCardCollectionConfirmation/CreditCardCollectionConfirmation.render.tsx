import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import classes from './CreditCardCollectionConfirmation.module.scss';
import { Table } from '@/ui/Table';
import { CreditCardCollectionConfirmationColumn } from './components';
import { Footer } from '@/ui/Footer';
import {
  SaveButton,
  Button,
  BackToPageButton,
  DetailButton,
  PrintButton
} from '@/components/commonButtons';
import { ScreenLayout } from '@/ui/Layout';
import { Card } from '@/ui/Card';
import { CreditCardCollectionConfirmationProps } from './type';


const CreditCardCollectionConfirmationUI: React.FC<CreditCardCollectionConfirmationProps> = ({ data = [] }) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomInputs}>
          <Input label={t('L_TOTAL')} orientation="horizontal" size="md" />
          <Input size="sm" />
        </div>
        <div className={classes.textContainer}>{t('L_PRINT_SEND')}</div>
        <div className={classes.textContainer}>{`*${t('L_NOT_MAIL')}`}</div>
        <Footer
          pagination={{
            pageNumber: 1,
            pageSize: 10,
            totalPages: 5,
            totalCount: 50,
            hasPreviousPage: false,
            hasNextPage: true
          }}
          handlePaginationChange={() => {}}
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
        <Button onClick={() => {}} title={t('Confirm')} />
      </div>
    );
  };
  return (
    <ScreenLayout screenNumber="1203" renderFooter={<BottomBar />} renderHeader={<TopHeader />}>
      <Card>
        <div className={classes.mainContainer}>
          <div className={classes.innerContainer}>
            <Table
              columns={CreditCardCollectionConfirmationColumn({t:t})}
              data={data}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'payApproved':
                  case 'toPay':
                    return (
                      <>
                        <Input type="checkbox" size="fullWidth" />
                      </>
                    );

                  case 'familyName':
                    return (
                      <div className={classes.nameContainer}>
                        <Input value={String(row?.[key] ?? '')} size="fullWidth" />
                        <Input value={String((row)?.['privateName'] ?? '')} size="fullWidth" />
                      </div>
                    );

                  default:
                    return <Input value={String(row?.[key] ?? '')} size="fullWidth" />;
                }
              }}
            />
          </div>
        </div>
      </Card>
    </ScreenLayout>
  );
};

export default CreditCardCollectionConfirmationUI;
