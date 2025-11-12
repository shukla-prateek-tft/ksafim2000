import { useTranslation } from 'react-i18next';
import classes from './ConfirmationOfReceiptOfMoneyFromPettyCash.module.scss';
import { Input } from '@/ui/Input';
import { ReportCells, ReportFooter, ReportPrint } from '@/components/printScreen';
import React from 'react';
const ConfirmationOfReceiptOfMoneyFromPettyCashUI = ({ data }: any) => {
  const { t } = useTranslation('common');
  return (
    <ReportPrint
      footer={
        <ReportFooter
          left={<ReportCells value="prateek.s" />}
          right={<ReportCells value="page 1" />}
        />
      }
    >
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <span>{t('T_MCFR0692')}</span>
        </div>
        {data?.map((elem, index) => {
          return (
            <React.Fragment key={`${'MCFR-0692-Elem-' + index}`}>
              <div className={classes.horizontalInputContainer}>
                <ReportCells value={t('23423')} label={t('L_INV_DATE')} />
                <ReportCells label={t('L_DESC')} />
              </div>
              <div className={classes.horizontalInputContainer}>
                <ReportCells value={t('23423')} label={t('L_SUPP_NUMBER')} />
                <ReportCells value={t('235434345')} label={t('L_INVOICE')} />
              </div>
              <div className={classes.horizontalInputContainer}>
                <ReportCells label={t('L_SERVICE_TYPE')} />
                <ReportCells label={t('L_ACC_NO')} />
              </div>
              <div className={classes.horizontalInputContainer}>
                <ReportCells label={t('L_NAME')} />
              </div>
              <div className={classes.bottomContainer}>
                <div className={classes.bottomInnerLeftContainer}>
                  <span>{t('L_SIGNITURE')}</span>
                </div>
                <div className={classes.bottomInnerRightContainer}>
                  <div className={classes.spaceAligner}>
                    <ReportCells label={t('L_DEBIT')} />
                  </div>
                  <div className={classes.spaceAligner}>
                    <ReportCells value={t('235434345')} label={t('L_DATE')} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </ReportPrint>
  );
};

export default ConfirmationOfReceiptOfMoneyFromPettyCashUI;
