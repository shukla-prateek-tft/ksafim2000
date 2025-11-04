import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './PettyCashAccount.module.scss';
import { Table } from '@/ui/Table';
import { pettyCashAccountColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { Footer } from '@/ui/Footer';
import { Card } from '@/ui/Card';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { PettyCashAccountProps } from './types';
import { getFormatedDate, getInputPattern } from '@/utils/commonHelper';
import { REGEX } from '@/constants/appConstant';
const staticRows: Array<Record<string, string | boolean>> = [
  {
    catalog_no: 'INV-001',
    discription: '2025-06-01',
    codeDescription: 'Ref001',
    date: '1000.00',
    check: true
  }
];

const PettyCashAccount: React.FC<PettyCashAccountProps> = ({
  renderActionItems,
  pettyCashDepositData,
  data,
  onChange
}) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <>
        <div className={classes.bottomContainer}>
          <span>{t('L_KUPA_KTANA_MES')}</span>
          <Input
            aria-required="true"
            maxLength={30}
            label={t('L_TOT')}
            orientation="horizontal"
            value={pettyCashDepositData?.total_Debit ?? ''}
            tabIndex={19}
          />
        </div>
        <Footer />
      </>
    );
  };
  const TopHeader = () => {
    return <div className={classes.renderActionItems}>{renderActionItems()}</div>;
  };
  return (
    <>
      <ScreenLayout
        screenName={t('T_MCFW0602')}
        screenNumber="0602"
        renderFooter={<BottomBar />}
        renderHeader={<TopHeader />}
      >
        <Card title={t('T_MCFW0602')}>
          <Input
            label={t('L_DETAILS')}
            orientation="horizontal"
            size="lg"
            value={data?.desc_Aut}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange && onChange('desc_Aut', e.target.value)
            }
            pattern={REGEX.allCharacter}
            maxLength={100}
            tabIndex={1}
          />
          <div className={classes.flex}>
            <Input
              label={t('L_PAY_DATE')}
              disabled
              orientation="horizontal"
              size="lg"
              value={getFormatedDate(data?.pay_Date || '')}
              tabIndex={2}
            />
            <Select
              label={t('L_ACC_CARD')}
              options={[
                { label: 'Standard', value: '1' },
                { label: 'Reduced', value: '2' },
                { label: 'Zero', value: '3' },
                { label: 'Exempt', value: '4' }
              ]}
              placeholder=""
              id="oposit_Card"
              size="lg"
              orientation="horizontal"
              value={String(data?.oposit_Card ?? '')}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange && onChange('oposit_Card', Number(e?.target?.value))
              }
              tabIndex={3}
            />
            <Select
              label={t('L_PAY_DATE')}
              options={[
                { label: 'Standard', value: '1' },
                { label: 'Reduced', value: '2' },
                { label: 'Zero', value: '3' },
                { label: 'Exempt', value: '4' }
              ]}
              placeholder=""
              id="bank_Card"
              size="lg"
              orientation="horizontal"
              value={String(data?.bank_Card ?? '')}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                onChange && onChange('bank_Card', Number(e?.target?.value))
              }
              tabIndex={4}
            />
          </div>
          <div className={classes.flex}>
            <Input
              label={t('L_PAY_WAY')}
              disabled
              size="fullWidth"
              value={pettyCashDepositData?.pay_Way}
              tabIndex={5}
            />
            <div className={classes.flexOnly}>
              <Input
                label={t('L_BANK')}
                value={data?.middleGrid0602Dtos && data?.middleGrid0602Dtos[0]?.bank}
                type="number"
                pattern={getInputPattern(5)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange && onChange('bank', Number(e.target.value), 0)
                }
                tabIndex={6}
              />
              <Input disabled isLabel={true} value={pettyCashDepositData?.bank_Name} tabIndex={7} />
            </div>
            <DatePickerComponent
              selectedDate={
                data?.middleGrid0602Dtos && data?.middleGrid0602Dtos[0]?.payment_Date
                  ? new Date(data?.middleGrid0602Dtos[0]?.payment_Date)
                  : null
              }
              onChange={(d: Date | string | null) =>
                onChange &&
                onChange('payment_Date', typeof d === 'string' ? d : d ? d.toISOString() : '', 0)
              }
              label={t('L_PAYMENT_DATE')}
              id="date_Aut"
              size="fullWidth"
              isTypeISO
              tabIndex={8}
            />
            <Input
              label={t('L_BANK_ACCOUNT')}
              size="fullWidth"
              value={data?.middleGrid0602Dtos && data?.middleGrid0602Dtos[0]?.bank_Account}
              type="number"
              pattern={getInputPattern(9)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange && onChange('bank_Account', Number(e.target.value), 0)
              }
              tabIndex={9}
            />
            <Input
              label={t('L_CHECK_NUM')}
              size="fullWidth"
              value={data?.middleGrid0602Dtos && data?.middleGrid0602Dtos[0]?.check_Num}
              pattern={REGEX.allCharacter}
              maxLength={16}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange && onChange('check_Num', Number(e.target.value), 0)
              }
              tabIndex={10}
            />
            <Input
              label={t('L_MONEY_AMNT')}
              size="fullWidth"
              value={(data?.middleGrid0602Dtos && data?.middleGrid0602Dtos[0]?.outcome) ?? ''}
              type="amount"
              min={0}
              maxLength={11}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange && onChange('outcome', Number(e.target.value), 0)
              }
              onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                onChange && onChange('outcome', Number(e.target.value), 0)
              }
              tabIndex={11}
            />
          </div>
        </Card>

        <Card>
          <div className={classes.InvoiceTable}>
            <Table
              columns={pettyCashAccountColumn()}
              data={staticRows}
              customRowRenderer={(key, row, index) => {
                switch (key) {
                  case 'SUPP_NUMBER':
                    return (
                      <Input
                        label=" "
                        id="L_SUPP_NUMBER"
                        maxLength={16}
                        //variant="borderless"
                        size="fullWidth"
                        type="number"
                        pattern={getInputPattern(10)}
                        value={
                          (data?.endGrid0602Dtos && data?.endGrid0602Dtos[index]?.supp_Number) ?? ''
                        }
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          onChange && onChange('supp_Number', Number(e.target.value), index)
                        }
                        tabIndex={12}
                      />
                    );
                  case 'INVOICE_NUMBER':
                    return (
                      <Input
                        label=" "
                        id="L_INVOICE"
                        maxLength={16}
                        //variant="borderless"
                        size="fullWidth"
                        type="number"
                        pattern={getInputPattern(6)}
                        value={
                          (data?.endGrid0602Dtos && data?.endGrid0602Dtos[index]?.invoice_Number) ??
                          ''
                        }
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          onChange && onChange('invoice_Number', Number(e.target.value), index)
                        }
                        tabIndex={13}
                      />
                    );
                  case 'DATE_AUT':
                    return (
                      <DatePickerComponent
                        selectedDate={
                          data?.endGrid0602Dtos && data?.endGrid0602Dtos[index]?.date_Aut
                            ? new Date(data?.endGrid0602Dtos[index]?.date_Aut)
                            : null
                        }
                        onChange={(d: Date | string | null) =>
                          onChange &&
                          onChange(
                            'date_Aut',
                            typeof d === 'string' ? d : d ? d.toISOString() : '',
                            index
                          )
                        }
                        placeholder=" "
                        id="L_DATE"
                        size="fullWidth"
                        // variant="borderless"
                        isTypeISO
                        tabIndex={14}
                      />
                    );
                  case 'DESC_AUT':
                    return (
                      <Input
                        label=" "
                        type="text"
                        id="L_DESC"
                        //variant="borderless"
                        size="fullWidth"
                        pattern={REGEX.allCharacter}
                        maxLength={30}
                        value={
                          (data?.endGrid0602Dtos && data?.endGrid0602Dtos[index]?.desc_Aut) ?? ''
                        }
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          onChange && onChange('desc_Aut', e.target.value, index)
                        }
                        tabIndex={15}
                      />
                    );
                  case 'SERVICE_TYPE':
                    return (
                      <Input
                        label=" "
                        id="L_SERVICE_TYPE"
                        maxLength={16}
                        //variant="borderless"
                        size="fullWidth"
                        type="number"
                        pattern={getInputPattern(6)}
                        value={
                          (data?.endGrid0602Dtos && data?.endGrid0602Dtos[index]?.service_Type) ??
                          ''
                        }
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          onChange && onChange('service_Type', Number(e.target.value), index)
                        }
                        tabIndex={16}
                      />
                    );
                  case 'ACC_CARD':
                    return (
                      <Input
                        label=" "
                        type="number"
                        id="L_ACC_NO"
                        maxLength={16}
                        //variant="borderless"
                        size="fullWidth"
                        value={
                          (data?.endGrid0602Dtos && data?.endGrid0602Dtos[index]?.acc_Card) ?? ''
                        }
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          onChange && onChange('acc_Card', Number(e.target.value), index)
                        }
                        tabIndex={17}
                      />
                    );
                  case 'DEBIT':
                    return (
                      <Input
                        label=" "
                        id="date"
                        //variant="borderless"
                        size="fullWidth"
                        type="amount"
                        min={0}
                        maxLength={11}
                        value={(data?.endGrid0602Dtos && data?.endGrid0602Dtos[index]?.debit) ?? ''}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          onChange && onChange('debit', Number(e.target.value), index)
                        }
                        onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                          onChange && onChange('debit', Number(e.target.value), index)
                        }
                        tabIndex={18}
                      />
                    );

                  default:
                    return (row as Record<string, string>)[key];
                }
              }}
            />
          </div>
        </Card>
      </ScreenLayout>
    </>
  );
};

export default PettyCashAccount;
