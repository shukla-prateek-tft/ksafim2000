import classes from './BankDepositConfirmation.module.scss';
import { Table } from '@/ui/Table';
import { BankDepositConfirmationColumn } from './components';
import { useTranslation } from 'react-i18next';
import { ScreenLayout } from '@/ui/Layout';
import { Input } from '@/ui/Input';
import { Footer } from '@/ui/Footer';
import { Card } from '@/ui/Card';

const BankDepositConfirmationUI = ({ renderActionItems, customRowRender }: any) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      renderFooter={
        <Footer
          pagination={{
            pageSize: 10,
            pageNumber: 1,
            totalPages: 5,
            hasNextPage: true,
            hasPreviousPage: true,
            totalCount:100
          }}
        />
      }
      renderHeader={renderActionItems()}
      screenNumber="0643"
    >
      <div className={classes.mainContainer}>
        <Card  title={`${t('L_DEPOSIT_NUMBER')} 5454544`}>
          <Table
            height="57vh"
            data={[
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' },
              { code1: 'sesfsfd' }
            ]}
            columns={BankDepositConfirmationColumn()}
            customRowRenderer={customRowRender}
          />
        </Card>
        <Card>
          <div className={classes.bottomDetail}>
            <div className={classes.aligner}>
              <Input type='amount' maxLength={11} orientation="horizontal" label={t('L_TOTAL') + ':'} size="md" />
              <Input size="md" type='number' maxLength={4}/>
            </div>
          </div>
        </Card>
      </div>
    </ScreenLayout>
  );
};

export default BankDepositConfirmationUI;
