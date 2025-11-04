//MCFR-1366 && MCFR-0639
import { getFormatedDate, getFormatedNumber } from '@/utils/commonHelper';
import { useTranslation } from 'react-i18next';
import { useApiQuery, useAuth } from '@/hooks';
import { useParams, useSearchParams } from 'react-router-dom';
import { adminServices } from '@/services';
import { useEffect } from 'react';
import { BackToPageButton, PrintButton } from '@/components/commonButtons';
import classes from './SupplierPrint.module.scss';
import { Flex } from '@/ui/Flex/Flex';
import { ServiceFn, TableColumnType } from '@/pages/type';
import { ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';
import { BreakdownTableColumns, MainTableColumns, SingleEntryTableColumns } from './components';
interface PaymentRow {
  pay_Way_Desc?: string;
  payment_Date?: string | Date;
  credit_Account?: string | null;
  valid_Date?: string | null;
  bank?: string | null;
  bank_Account?: string | number | null;
  check_Num?: string | null;
  abc?: string | null;
  outcome?: number | null;
  returned?: string | null;
}

const PdfDocument = () => {
  const { t } = useTranslation('addInvoice');
  const { t: t2 } = useTranslation('enterInvoices');
  const { t: tCommon } = useTranslation('common');
  const { actNo, payActNo } = useParams();
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const isOriginal = searchParams.get('isOriginal') === 'true';

  // only for PayActNo
  const {
    state: { data: getPrintInvoiceExpenseDetailsByPayActNoResponse },
    callService: getPrintInvoiceExpenseDetailsByPayActNoService
  } = useApiQuery(adminServices.invoice.getInvoiceExpenseByPayActNo as ServiceFn);
  useEffect(() => {
    if (payActNo && actNo) {
      getPrintInvoiceExpenseDetailsByPayActNoService({
        PayActNo: payActNo,
        ActNo: actNo,
        SystemYear: user.instiYear,
        InstitutionCode: user.instiCode
      });
    } else {
      getPrintInvoiceExpenseDetailsByPayActNoService({
        PayActNo: payActNo,
        SystemYear: user.instiYear,
        InstitutionCode: user.instiCode
      });
    }
  }, [actNo, payActNo]);

  const printData = getPrintInvoiceExpenseDetailsByPayActNoResponse?.data;

  const data = {
    mainTable: {
      headers: [
        'L_MCFW1372_CELL_2',
        'L_MCFW1372_CELL_1',
        'V_DATE',
        'L_MCFW1372_CELL_4',
        'L_MCFW1372_CELL_10',
        'L_MCFW1372_CELL_5',
        'L_ACC_CARD1',
        'L_Amount'
      ],
      rows: [
        [
          printData?.t705Dto?.student,
          printData?.t705Dto?.act_No?.slice(3),
          printData?.t704Dto?.payment_Date && getFormatedDate(printData?.t705Dto?.payment_Date),
          printData?.t705Dto?.order_Number,
          printData?.t705Dto?.desc_Aut,
          printData?.t705Dto?.acc_Card,
          printData?.t705Dto?.service_Type,
          printData?.t705Dto?.outcome_Sum
        ]
      ]
    },
    breakdownTable: {
      headers: [
        '#',
        'L_CATALOG_NO',
        'L_PRODUCT_NAME',
        'L_AMOUNT ',
        'L_UN_PRICE',
        'L_UN_DISCOUNT',
        'L_VAT_TYPE',
        'L_VAT',
        'L_SUM_PLUS',
        'L_MCFW1372_CELL_5',
        'L_ACC_CARD',
        'L_CODE_GEFEN',
        'L_SUG_TAKTZIV'
      ]
    }
  };

  const total_value = printData?.t705Dto?.reduce(
    (sum: any, row: any) => sum + (row.price_Per_ActNo_Service_Type || 0),
    0
  );

  return (
    <>
      <div className={classes['print-container']}>
        <BackToPageButton onClick={window.close} />
        <PrintButton onClick={window.print} />
      </div>
      <ReportPrint
        header={
          <>
            {/* Header */}
            <div className={classes.header}>
              <Flex size="fit" gap={50}>
                <span>{printData?.invoiceHeaderData?.inst_FullName} </span>
              </Flex>
              <Flex gap={40} size="fit">
                <Flex size="fit" alignItems="flex-end" gap={10}>
                  <span>{t('phone')}</span>
                  <span>{printData?.invoiceHeaderData?.phone_Num || ''}</span>
                </Flex>
                <Flex gap={10} flexDirection="column">
                  <span>{t('instituteCode')}</span>
                  <span>{t('fax')}</span>
                </Flex>
                <Flex gap={10} flexDirection="column" size="fit">
                  <span>{printData?.invoiceHeaderData?.insti_Code || ''}</span>
                  <span>{printData?.invoiceHeaderData?.fax_Num || ''}</span>
                </Flex>
              </Flex>
            </div>
            {/* Voucher Section */}
            <div className={classes.voucherSection}>
              <Flex flexDirection="column" justifyContent="space-evenly" size="fit">
                <div>
                  {tCommon('L_DATE')}:{getFormatedDate(printData?.invoiceHeaderData?.pay_Date)}
                </div>
                <div>
                  {tCommon('L_ACADEMIC_YEAR')}&nbsp;{user?.hebrewYear}
                </div>
              </Flex>
              <div className={classes.voucherNumber}>
                <div>
                  <span style={{ fontSize: '28px', marginLeft: '50px' }}>
                    {tCommon('L_PAYMENT')}
                  </span>
                  <span style={{ fontSize: '29px' }}>
                    {printData?.invoiceHeaderData?.act_No?.slice(1)}
                  </span>
                </div>
              </div>
              <Flex flexDirection="column" justifyContent="space-evenly" size="fit">
                <div style={{ fontSize: '24px', paddingLeft: '70px' }}>
                  {isOriginal ? t2('originalText') : t2('printText1')}
                </div>
                <div style={{ fontSize: '24px', paddingLeft: '70px' }}>
                  {printData?.invoiceHeaderData?.return_Name}
                </div>
              </Flex>
            </div>
            {/* Details */}
            <div style={{ borderBottom: '1px solid black', marginBottom: '20px' }}>
              <div className={classes.details}>
                <div style={{ padding: '10px 0px' }}>
                  <div>{printData?.invoiceHeaderData?.supp_Name}</div>

                  <div>{printData?.invoiceHeaderData?.contact_Man_Name}</div>
                </div>
                <div>
                  <span style={{ marginLeft: '25px' }}>{tCommon('L_SUPP_NUM')}</span>
                  {printData?.invoiceHeaderData?.supp_Num
                    ? printData?.invoiceHeaderData?.supp_Num.toString().padStart(10, '0')
                    : ''}
                </div>
              </div>
            </div>

            <Flex gap={'50%'} justifyContent="flex-start">
              <span className="reference-desc-aut">
                {printData?.invoiceHeaderData?.desc_Aut?.trim()}
              </span>
              <span className="reference">{tCommon('L_Reference')}</span>
            </Flex>
          </>
        }
        footer={
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '50%'
                }}
              >
                {/* Summary */}
                <div className={classes.summary}>
                  <Flex gap={'50%'}>
                    <div>נכוי מס </div>
                    <div dir="ltr">
                      {printData?.invoiceHeaderData?.tax_Dedect != '0' &&
                        getFormatedNumber(printData?.invoiceHeaderData?.tax_Dedect)}
                    </div>
                  </Flex>
                  <div>{tCommon('L_VAT')}</div>
                  <div>{tCommon('L_SSEC')}</div>
                  <div className={classes.total}>
                    <span>{tCommon('U_SIGMA')}</span>
                    <span dir="ltr">
                      {getFormatedNumber(printData?.invoiceHeaderData?.outcome)}
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  width: '50%',
                  height: '100px'
                }}
              >
                {/* Summary */}
                <div className={classes.summary}>
                  <span>
                    {tCommon('U_SIGMA')} &nbsp;
                    <span dir="ltr">
                      {getFormatedNumber(printData?.invoiceHeaderData?.outcome)}
                    </span>
                  </span>{' '}
                </div>
              </div>
            </div>
            {/* Signatures */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className={classes.signatures}>
                <div>{tCommon('L_SIGNIT')}</div>
                <div>{tCommon('L_SIGN_PARENTS')}</div>
              </div>
              <Flex size="fit" padding={15} gap={10}>
                <div>
                  {tCommon('L_SET_NUMBER')}
                  <br />
                  {tCommon('L_STOCK_NUM')}
                </div>
                <div>{printData?.invoiceHeaderData?.set_Number}</div>
              </Flex>
            </div>
          </>
        }
      >
        <div className={classes.tableSection}>
          <Table
            columns={MainTableColumns()}
            data={printData?.t705Dto}
            customRowRenderer={(key: any, row: any) => {
              switch (key) {
                case 'act_No':
                  return row?.act_No?.slice(3)?.replace(/^0+/, '');

                case 'date_Aut':
                  return row?.date_Aut
                    ? getFormatedDate(row?.date_Aut)
                    : getFormatedDate(new Date());

                case 'price_Per_ActNo_Service_Type':
                  return (
                    <div>
                      <span dir="ltr">{getFormatedNumber(row?.price_Per_ActNo_Service_Type)}</span>
                      <span className={classes.star}> {row?.returned ? row?.returned : ''}</span>
                    </div>
                  );

                default:
                  return row[key] ?? '';
              }
            }}
          />
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                width: '90%',
                marginBottom: '10px'
              }}
            >
              <span style={{ marginLeft: '25px' }}>{tCommon('U_SIGMA')}</span>
              <span dir="ltr">{getFormatedNumber(total_value)}</span>
            </div>
          </div>
          <Table
            columns={SingleEntryTableColumns()}
            data={printData?.t704Dto ? [printData.t704Dto] : []}
            customRowRenderer={(key: keyof PaymentRow, row: PaymentRow) => {
              switch (key) {
                case 'payment_Date':
                  return row?.payment_Date ? getFormatedDate(row.payment_Date) : '';

                case 'bank_Account':
                  return row?.bank_Account ? row.bank_Account.toString().padStart(9, '0') : '';

                case 'outcome':
                  return (
                    <div>
                      <span dir="ltr">{getFormatedNumber(row?.outcome)}</span>
                      <span> {row?.returned ?? ''}</span>
                    </div>
                  );

                default:
                  return row[key] ?? '';
              }
            }}
          />
          <Table
            columns={BreakdownTableColumns()}
            data={printData?.t760Dto}
            rowKey="catalog_no"
            customRowRenderer={(key: string, row, index) => {
              switch (key) {
                case 'index':
                  return index + 1;

                case 'price_aut':
                case 'vat_sum':
                  return <span dir="ltr">{row?.[key]}</span>;

                case 'price_with_vat':
                  return <span dir="ltr">{getFormatedNumber(row?.price_with_vat)}</span>;

                case 'vat_type':
                  return row?.vat_type === 1
                    ? t('withVat')
                    : row?.vat_type === 2
                      ? t('withOutVat')
                      : t('noVat');

                default:
                  return (row as Record<string, any>)[key] ?? '';
              }
            }}
          />
        </div>
      </ReportPrint>
    </>
  );
};

export default PdfDocument;
