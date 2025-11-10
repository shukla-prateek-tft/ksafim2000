import { Outlet } from 'react-router-dom';
import { useApiQuery } from '@/hooks';
import React, { useEffect, useState } from 'react';
import { adminServices } from '@/services';
import { useDispatch } from 'react-redux';
import { globalAction } from '@/store/slices/global';
import { attachMultipleClasses, mapOptions } from '@/utils/commonHelper';
import classes from './PageLayout.module.scss';
import { SideBar } from '@/ui/SideBar';
import { Header } from '@/ui/Header';
import { BankTransferFormReport } from '@/pages/bankTransferFormReport';
import { UserAndPermissionManagement } from '@/pages/userAndPermissionManagement';
import { RenderGlobalComponents } from '@/components/globals/GlobalComponents';
import { GlobalComponentsContextWrapper } from '@/store/contexts';

const PageLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  //get-budget-type-data
  // const {
  //   state: { data: getBudgetTypeResopnse },
  //   callService: getBudgetTypeService
  // } = useApiQuery(adminServices.mapping.getBudgetType);

  // //get-invoice-status-api-service
  // const {
  //   state: { data: getInvoiceStatusResponse },
  //   callService: getInvoiceStatusService
  // } = useApiQuery(adminServices.mapping.getInvoiceStatus);

  // //get-hebrew-year-api-service
  // const {
  //   state: { data: getHebrewYearListResponse },
  //   callService: getHebrewYearListService
  // } = useApiQuery(adminServices.mapping.getHebrewYearList);

  // useEffect(() => {
  //   getBudgetTypeService();
  //   getInvoiceStatusService();
  //   getHebrewYearListService();
  // }, []);

  // useEffect(() => {
  //   if (getBudgetTypeResopnse) {
  //     dispatch(
  //       globalAction.setGlobals({
  //         key: 'budgetTypes',
  //         value: mapOptions(getBudgetTypeResopnse?.data)
  //       })
  //     );
  //   }
  // }, [getBudgetTypeResopnse]);

  // useEffect(() => {
  //   if (getInvoiceStatusResponse) {
  //     dispatch(
  //       globalAction.setGlobals({
  //         key: 'invoiceStatus',
  //         value: mapOptions(getInvoiceStatusResponse?.data)
  //       })
  //     );
  //   }
  // }, [getInvoiceStatusResponse]);

  // useEffect(() => {
  //   if (getHebrewYearListResponse) {
  //     dispatch(
  //       globalAction.setGlobals({
  //         key: 'hebrewYear',
  //         value: mapOptions(getHebrewYearListResponse?.data)
  //       })
  //     );
  //   }
  // }, [getHebrewYearListResponse]);

  return (
    <section className={classes.section}>
      <RenderGlobalComponents />

              <GlobalComponentsContextWrapper>
      <div className={classes.sideBarWrapper}>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className={classes.mainWrapper}>
          <div
            className={attachMultipleClasses(classes.headerWrapper, isOpen && classes.openSideBar)}
          >
            <Header />
          </div>

          <div className={classes.mainContent}>
            <Outlet />
          </div>
        </main>
      </div></GlobalComponentsContextWrapper>
    </section>
  );
};

export default PageLayout;
