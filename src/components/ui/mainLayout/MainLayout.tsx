import { Outlet } from 'react-router-dom';
import { MainHeader } from '../../header';
import { useAuth } from '@/hooks';
import { useEffect, useState } from 'react';
import { adminServices } from '@/services';
import { useDispatch } from 'react-redux';
import { globalAction } from '@/store/slices/global';
import { mapOptions } from '@/utils/commonHelper';
import { RenderGlobalComponents } from './components/GlobalComponents';
import {
  HeaderWrapper,
  MainWrapper,
  Section,
  SideBarWrapper,
} from './MainLayout.styles';


const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {GlobalRenderedComponent}=useAuth()
  //get-budget-type-data
  // const {
  //   state: { data: getBudgetTypeResopnse },
  //   callService: getBudgetTypeService
  // }: any = useApiQuery(adminServices.mapping.getBudgetType);

  //get-invoice-status-api-service
  // const {
  //   state: { data: getInvoiceStatusResponse },
  //   callService: getInvoiceStatusService
  // }: any = useApiQuery(adminServices.mapping.getInvoiceStatus);

  //get-hebrew-year-api-service
  // const {
  //   state: { data: getHebrewYearListResponse },
  //   callService: getHebrewYearListService
  // }: any = useApiQuery(adminServices.mapping.getHebrewYearList);

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
    <Section>
      <RenderGlobalComponents />
      {GlobalRenderedComponent&&<GlobalRenderedComponent/>}
      <HeaderWrapper>
        <MainHeader />
      </HeaderWrapper>
      <SideBarWrapper>
        {/* <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/> */}
        <MainWrapper>
          <Outlet />
        </MainWrapper>
      </SideBarWrapper>
    </Section>
  );
};

export default MainLayout;
