import classes from './ReturningPartialReciptCashRegister.module.scss';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@/ui/DatePicker';
import { Table } from '@/ui/Table';
import { ReturningReceiptColumns } from './components';
import { ReactNode } from 'react';
import Badge from '@/ui/Badge/Badge';
import { PiWarningCircleFill } from 'react-icons/pi';
import { REGEX } from '@/constants/appConstant';
import { Card } from '@/ui/Card';
import { ScreenLayout } from '@/ui/Layout';
interface ReturningPartialReciptCashRegisterUIProps {
  renderActionItems: () => JSX.Element | null;
  customRowRenderer: (key: string, row: any, index: number) => ReactNode;
}

const ReturningPartialReciptCashRegisterUI = ({
  renderActionItems,
  customRowRenderer
}: ReturningPartialReciptCashRegisterUIProps) => {
  const { t } = useTranslation('common');
  return (
    <ScreenLayout
      screenNumber="0640"
      renderFooter={<BottomToolBar renderActionItems={renderActionItems} />}
    >
      <div className={classes.mainContainer}>
        <Card title={t('T_MCFW0640')}>
          <div className={classes.inputContainer}>
            <div>
              <Input type="checkbox" tabIndex={1} />
            </div>
            <div className={classes.inputContainerAlign}>
              <Input
                type="number"
                maxLength={3}
                orientation="horizontal"
                label={t('L_S_PAY_WAY')}
                placeholder=" "
                tabIndex={2}
              />

              <Input
                orientation="horizontal"
                label={t('L_CHECK_NUM')}
                placeholder=" "
                maxLength={16}
                pattern={REGEX.allCharacter}
                tabIndex={4}
              />
              <div className={classes.flex}>
                <Input
                  type="number"
                  maxLength={5}
                  orientation="horizontal"
                  label={t('L_BANK')}
                  placeholder=" "
                  tabIndex={6}
                />
                <Input maxLength={12} pattern={REGEX.allCharacter} placeholder=" " disabled />
              </div>
              <Input
                type="number"
                maxLength={19}
                orientation="horizontal"
                label={t('L_TOKEN')}
                placeholder=" "
                tabIndex={8}
              />
              <Select
                orientation="horizontal"
                label={t('L_ACC_ACT_TYPE')}
                placeholder=" "
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
                tabIndex={10}
              />
              <Input
                maxLength={30}
                pattern={REGEX.allCharacter}
                orientation="horizontal"
                label={t('L_DETAILS')}
                placeholder=" "
                tabIndex={12}
              />
            </div>
            <div className={classes.inputContainerAlign}>
              <DatePicker
                selectedDate={''}
                label={t('L_PAYMENT_DATE')}
                placeholder=" "
                orientation="horizontal"
                variant="outlined"
                onChange={() => {}}
                tabIndex={3}
              />

              <Input
                type="amount"
                maxLength={11}
                orientation="horizontal"
                label={t('L_INCOME')}
                placeholder=" "
                tabIndex={5}
              />
              <Input
                type="number"
                maxLength={9}
                orientation="horizontal"
                label={t('L_BANK_ACCOUNT')}
                placeholder=" "
                tabIndex={7}
              />
              <Input
                maxLength={15}
                pattern={REGEX.allCharacter}
                orientation="horizontal"
                label={t('L_TERMINAL_NUM')}
                placeholder=" "
                tabIndex={9}
              />
              <div className={classes.flex}>
                <Input
                  maxLength={7}
                  pattern={REGEX.allCharacter}
                  orientation="horizontal"
                  label={t('L_RECEIPT')}
                  placeholder=" "
                  readOnly
                />
                <Input
                  type="number"
                  maxLength={4}
                  placeholder=" "
                  label={t('L_SYSTEM_YEAR')}
                  orientation="horizontal"
                  tabIndex={11}
                />
              </div>
              <div className={classes.flex}>
                <Input
                  type="number"
                  maxLength={10}
                  orientation="horizontal"
                  label={t('L_PAYER')}
                  placeholder=" "
                  tabIndex={13}
                />
                <Input maxLength={20} pattern={REGEX.allCharacter} placeholder=" " disabled />
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <Table
            data={[{}, {}]}
            columns={ReturningReceiptColumns()}
            customRowRenderer={customRowRenderer}
          />
          <div className={classes.totalContainer}>
            <div className={classes.total}>
              <Input
                type="amount"
                maxLength={11}
                orientation="horizontal"
                placeholder=" "
                onChange={() => {}}
                onBlur={() => {}}
                tabIndex={22}
              />
              <Input
                type="amount"
                maxLength={11}
                orientation="horizontal"
                label={t('L_TOTAL')}
                placeholder=" "
                onChange={() => {}}
                onBlur={() => {}}
                tabIndex={21}
              />
            </div>
          </div>
        </Card>

        <div className={classes.remarks}>
          <Badge
            renderIcon={<PiWarningCircleFill />}
            title={t('L_CONFIRM_SIGN')}
            badgeType="outline"
          />
          <div>
            <p>
              {t('L_SIGNITURE')} <span>____________________</span>
            </p>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default ReturningPartialReciptCashRegisterUI;
