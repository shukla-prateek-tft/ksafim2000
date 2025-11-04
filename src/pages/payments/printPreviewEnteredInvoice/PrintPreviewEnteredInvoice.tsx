//MCFR-0638
import { GlobalLoader } from '@/components';
import moment from 'moment';
import { getFormatedDate, getFormatedNumber } from '@/utils/commonHelper';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import styles from './Print_Preview_Entered_Invoice.module.scss';
import { BackToPageButton, PrintButton } from '@/components/commonButtons';
import { ReportFooter, ReportPrint } from '@/components/printScreen';
import { Table } from '@/ui/Table';

import { ServiceFn } from '@/pages/type';
import { InvoiceApiResponse, InvoiceItem, InvoiceQueryResponse, InvoiceType } from './types';
import { EnteredInvoiceColumns } from './components';

const initialData: InvoiceType = {
  fax_Num: '',
  insti_Code: '',
  inst_Fullname: '',
  phone_Num: '',
  pay_date: '',
  act_No: '',
  supp_Num: '',
  hebrew_Year: '',
  set_Number: 0,
  return_Name: '',
  desc_Aut: '',
  invoices: []
};

const Print_Preview_Entered_Invoice = () => {
  const { actNo } = useParams();
  const { user } = useAuth();
  const { t } = useTranslation('enterInvoices');
  const { t: tCommon } = useTranslation('common');
  const [searchParams] = useSearchParams();
  const isOriginal = searchParams.get('isOriginal') === 'true';
  const [printData, setPrintData] = useState<InvoiceType>(initialData);

  // get-payment-to-supplier-service
  const {
    state: { loading: invoiceDetailsLoading, data: invoiceDetails },
    callService: getInvoiceDetails
  }: InvoiceQueryResponse = useApiQuery<InvoiceApiResponse>(
    adminServices.invoice.getInvoiceForPrint as ServiceFn
  );

  useEffect(() => {
    if (actNo && user) {
      getInvoiceDetails({
        ActNo: actNo,
        SystemYear: user.instiYear,
        InstitutionCode: user.instiCode
      });
    }
  }, [actNo, user]);

  useEffect(() => {
    if (invoiceDetails?.data?.invoiceHeaderData && invoiceDetails?.data?.t705Data) {
      const {
        fax_Num,
        insti_Code,
        inst_Fullname,
        phone_Num,
        pay_Date,
        act_No,
        supp_Num,
        hebrew_Year,
        set_Number,
        return_Name,
        desc_Aut
      } = invoiceDetails?.data?.invoiceHeaderData;
      const { t705Data } = invoiceDetails.data;
      const data = {
        fax_Num: fax_Num || '',
        insti_Code: insti_Code || '',
        inst_Fullname: inst_Fullname || '',
        phone_Num: phone_Num || '',
        pay_date: pay_Date || '',
        act_No: act_No || '',
        supp_Num: supp_Num || '',
        hebrew_Year: hebrew_Year || '',
        set_Number: set_Number || '',
        return_Name: return_Name || '',
        desc_Aut: desc_Aut || '',
        invoices: t705Data?.length > 0 ? t705Data : []
      };
      setPrintData(data);
    }
  }, [invoiceDetails]);

  const totalPrice = useMemo(() => {
    return printData?.invoices?.reduce((acc: number, item: InvoiceItem) => {
      if (item?.price_Per_Service_Type) {
        return acc + Number(item?.price_Per_Service_Type);
      }
      return acc;
    }, 0);
  }, [printData]);

  return (
    <>
      <GlobalLoader showOnFullScreen loading={invoiceDetailsLoading || !printData} />
      <ReportPrint
        header={
          <div className={styles.Container}>
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <span>{printData?.inst_Fullname || ''}</span>
              </div>
              <div className={styles.contactSection}>
                <div className={styles.contactBlock}>
                  <span>{t('phone')}</span>
                  <span>{printData?.phone_Num || ''}</span>
                </div>

                <div className={styles.contactColumn}>
                  <span>{t('instituteCode')}</span>
                  <span>{t('fax')}</span>
                </div>

                <div className={styles.contactColumnFit}>
                  <span>{printData?.insti_Code || ''}</span>
                  <span>{printData?.fax_Num || ''}</span>
                </div>
              </div>
            </div>

            <div className={styles.VoucherSection}>
              <div className={styles.voucherLeft}>
                <div className={styles.voucherColumn}>
                  <span>{t('printInvoidPayDate')}:</span>
                  <span>{t('printAcademicYear')}:</span>
                </div>
                <div className={styles.voucherColumnFit}>
                  <span>
                    {moment(printData?.pay_date).format(import.meta.env.VITE_DEFAULT_DATE_FORMAT)}
                  </span>
                  <span>{printData.hebrew_Year}</span>
                </div>
              </div>

              <div className={styles.voucherCenter}>
                <span className={styles.expenseVoucherText}>{t('printActNo')}</span>
                <span className={styles.voucherActNo}>{printData?.act_No?.slice(1)}</span>
              </div>

              <div className={styles.voucherRight}>
                <div className={styles.voucherRightText}>
                  {isOriginal ? t('originalText') : t('printText1')}
                </div>
                <div className={styles.voucherRightText}>{printData?.return_Name}</div>
              </div>
            </div>

            <div className={styles.Detail}>
              <div>
                <span>{invoiceDetails?.data?.invoiceHeaderData?.supp_Name}</span>
                <span>{invoiceDetails?.data?.invoiceHeaderData?.contact_Man_Name}</span>
              </div>
              <div className={styles.detailRight}>
                <span>{t('printSuppNum')}</span>
                <span>
                  {printData?.supp_Num ? printData?.supp_Num?.toString().padStart(10, '0') : ' '}
                </span>
              </div>
            </div>

            <div className={styles.referenceRow}>
              <span className={styles['reference-desc-aut']}>{printData?.desc_Aut?.trim()}</span>
              <span className={styles['reference']}>{t('printReference')}</span>
            </div>
          </div>
        }
        footer={
          <>
            <div className={styles.footerContainer2}>
              <div className={styles.rightContainer}>
                <div className={styles.Summary}>
                  <div>{t('taxDeductLabel')}</div>
                  <div>{tCommon('L_VAT')}</div>
                  <div>{tCommon('L_SSEC')} </div>
                </div>
              </div>
              <div className={styles.centerContainer}></div>
              <div className={styles.leftContainer}>
                <div className={styles.left1}>
                  <span>{t('printTotal')}</span>
                  <span dir="ltr">{totalPrice ? getFormatedNumber(totalPrice) : ''}</span>
                </div>
                <div className={styles.left2}>
                  <span>{t('printSetNo')}</span>
                  <span>{printData.set_Number}</span>
                </div>
              </div>
            </div>
            <ReportFooter
              left={
                <div className={styles.Signature}>
                  <div>{tCommon('L_SIGNIT')}</div>
                  <div>{tCommon('L_SIGN_PARENTS')}</div>
                </div>
              }
            />
          </>
        }
        renderActionItem={
          <div className={styles.printContainer}>
            <BackToPageButton onClick={window.close} />
            <PrintButton onClick={window.print} />
          </div>
        }
        centerScroll={false}
      >
        <Table
          data={printData?.invoices || []}
          columns={EnteredInvoiceColumns()}
          customRowRenderer={(key, row: InvoiceItem) => {
            switch (key) {
              case 'pay_Act_no':
                return row?.pay_Act_no?.slice(3)?.replace(/^0+/, '') || '';
              case 'date_Aut':
                return row?.date_Aut ? getFormatedDate(row?.date_Aut) : ' ';
              case 'price_Per_Service_Type':
                return (
                  <span dir="ltr">
                    {row?.price_Per_Service_Type
                      ? getFormatedNumber(row?.price_Per_Service_Type)
                      : ''}
                    <span className="star"> {row?.returned ? row?.returned : ''}</span>
                  </span>
                );
              default:
                return String((row as any)[key as keyof InvoiceItem] ?? '');
            }
          }}
        />
        <div className={styles.footerContainer}>
          <div className={styles.totalEmptyContainer}>{''}</div>
          <div className={styles.totalContainer}>
            <span>{t('printTotal')}</span>
            <span dir="ltr">{totalPrice ? getFormatedNumber(totalPrice) : ''}</span>
          </div>
        </div>
      </ReportPrint>
    </>
  );
};

export default Print_Preview_Entered_Invoice;
