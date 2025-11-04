//MCFW-0628
import { useAuth } from '@/hooks';
import classes from './LogCommands.module.scss';
import { formatToInternationalNumbering } from '@/utils/commonHelper';
import { Table } from '@/ui/Table';
import { LogCommandsColumns } from './components';
import { useTranslation } from 'react-i18next';
import { Card } from '@/ui/Card';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
const data = [
  {
    check: '1001',
    vineCode: 'Supplier A',
    codeDescription: 'Office Supplies',
    accountant: 'INV-001',
    appSecond: '2024-06-01',
    list: 'Order-123',
    errorDescription: 'No error',
    serviceType: 'Consulting',
    accNum: 'ACC-001',
    moneyAmnt: 1500,
    status: 'Open'
  },
  {
    check: '1002',
    vineCode: 'Supplier B',
    codeDescription: 'IT Services',
    accountant: 'INV-002',
    appSecond: '2024-06-02',
    list: 'Order-124',
    errorDescription: 'Pending approval',
    serviceType: 'Support',
    accNum: 'ACC-002',
    moneyAmnt: 2500,
    status: 'Pending'
  },
  {
    check: '1003',
    vineCode: 'Supplier C',
    codeDescription: 'Maintenance',
    accountant: 'INV-003',
    appSecond: '2024-06-03',
    list: 'Order-125',
    errorDescription: 'No error',
    serviceType: 'Repair',
    accNum: 'ACC-003',
    moneyAmnt: 1800,
    status: 'Closed'
  }
];

interface LogCommandsUIProps {
  renderActionItems: () => JSX.Element | null;
  customRowRender: (key: string, row: any, index: number) => JSX.Element | undefined;
}

const LogCommandsUI = ({ renderActionItems, customRowRender }: LogCommandsUIProps) => {
  const { user } = useAuth();
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
            hasPreviousPage: true
          }}
        />
      }
      renderHeader={renderActionItems()}
      screenName="MCFW-0628"
    >
      <div className={classes.container}>
        <div>
          <fieldset>
            <div>
              {user.instiCode} - {user.instiName}
            </div>
            <div>{t('V_KSAFIM2000')}</div>
          </fieldset>
          <Card>
            <Table columns={LogCommandsColumns()} data={data} customRowRenderer={customRowRender} />
            <div className={classes.summary}>
              <div className={classes.summarySection}>
                <div className={classes.total}>
                  <p>
                    <p className={classes.label}>{t('L_MCFW0628_SUMMARY1')}</p>
                    <span>{formatToInternationalNumbering(10000)}</span>
                  </p>
                </div>
              </div>
              <div className={classes.summarySection}>
                <div className={classes.total}>
                  <p>
                    <p className={classes.label}>{t('L_TEMP')}</p>
                    <span>{formatToInternationalNumbering(10000)}</span>
                    <span>{formatToInternationalNumbering(10000)}</span>
                  </p>
                </div>
                <div className={classes.total}>
                  <p>
                    <p className={classes.label}>{t('L_PERMANENT')}</p>
                    <span>{formatToInternationalNumbering(10000)}</span>
                    <span>{formatToInternationalNumbering(10000)}</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <div className={classes.bottomContainer}>
            <div className={classes.inputField}>
              <Input size="md" maxLength={20} pattern={REGEX.allCharacter} tabIndex={16} />
              <Input
                size="md"
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                tabIndex={17}
              />
            </div>
            <div className={classes.inputField}>
              <Input size="md" maxLength={20} pattern={REGEX.allCharacter} tabIndex={18} />
              <Input
                size="md"
                type="amount"
                maxLength={11}
                onChange={() => {}}
                onBlur={() => {}}
                tabIndex={19}
              />
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default LogCommandsUI;
