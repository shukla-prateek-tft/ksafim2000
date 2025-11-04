//MCFW-1350
import { useApiQuery } from '@/hooks';
import BearingSuppliersUI from './BearingSuppliers.render';
import { GlobalLoader } from '@/components';
import { adminServices } from '@/services';
import { useEffect } from 'react';
import { GetSuppliersNumberDataParams, Supplier } from './type';


const BearingSuppliers = () => {
  //Get-Payment-Suppliers-List
  const {
    state: { loading: getSuppliersNumberDataLoading, data: getSuppliersNumberDataResponse },
    callService: getSuppliersNumberDataListService,
    resetServiceState: resetGetSuppliersNumberData
  }: any = useApiQuery(adminServices.suppliers.getSuppliersNumberData);

  const dummyData: Supplier[] = [
    {
      Mesav_Supp_Num: '123456',
      Mesav_Send_Date: '2025-01-01',
      Payment_Date: '2025-01-15',
      Mesav_Supp_Ref: 'REF123',
      Canceled: 'No',
      Mesav_Status: 'Active',
      Total_Supp: 10,
      Total_Sum: 1500.75
    },
    {
      Mesav_Supp_Num: '234567',
      Mesav_Send_Date: '2025-02-01',
      Payment_Date: '2025-02-15',
      Mesav_Supp_Ref: 'REF234',
      Canceled: 'Yes',
      Mesav_Status: 'Inactive',
      Total_Supp: 5,
      Total_Sum: 2000.5
    },
    {
      Mesav_Supp_Num: '234567',
      Mesav_Send_Date: '2025-02-01',
      Payment_Date: '2025-02-15',
      Mesav_Supp_Ref: 'REF234',
      Canceled: 'Yes',
      Mesav_Status: 'Inactive',
      Total_Supp: 5,
      Total_Sum: 2000.5
    },
    {
      Mesav_Supp_Num: '234567',
      Mesav_Send_Date: '2025-02-01',
      Payment_Date: '2025-02-15',
      Mesav_Supp_Ref: 'REF234',
      Canceled: 'Yes',
      Mesav_Status: 'Inactive',
      Total_Supp: 5,
      Total_Sum: 2000.5
    }
  ];

  useEffect(() => {
    // Parameters for the API call
    const params: GetSuppliersNumberDataParams = {
      Masav_Supp_Num: '',
      Payment_Date: new Date(),
      Page: '1', // Default page number
      Size: '10', // Default size per page
      SortColumn: '',
      SortType: '',
      SystemYear: '2025',
      Institution: '244111'
    };

    // Fetch the suppliers data
    getSuppliersNumberDataListService(params);
  }, []);

  return (
    <>
      <GlobalLoader showOnFullScreen loading={getSuppliersNumberDataLoading} />

      <BearingSuppliersUI suppliers={dummyData || getSuppliersNumberDataResponse?.data || []} />
    </>
  );
};

export default BearingSuppliers;
