// MCFW-1181
import React from 'react';
import {
  BackToPageButton,
  DetailButton,
  SaveButton,
  SearchButton,
  OtherDetailButton,
  Button,
  AddButton,
  CancelButton
} from '@/components/commonButtons';
import PaymentMethodsUI from './PaymentMethods.render';
import { useTranslation } from 'react-i18next';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { useEffect, useMemo, useState } from 'react';
import { ServiceFn } from '@/pages/type';
import {
  PaymentMethodItem,
  GetPaymentMethodsResponse as ApiResponse,
  ValidateCheqCardValueChangeResponse
} from './types';
import { showToastErrors } from '@/utils/commonHelper';
import { toast } from 'react-toastify';

const PaymentMethods = () => {
  const { t } = useTranslation('common');
  const auth = useAuth();
  const user = auth?.user;

  const {
    state: { isError: isGetPaymentMethodsError, data: GetPaymentMethodsResponse },
    callService: GetPaymentMethodsService,
    resetServiceState: resetGetPaymentMethods
  } = useApiQuery<ApiResponse>(adminServices.payments.GetPaymentMethods as ServiceFn);

  const {
    state: {
      isError: isValidateError,
      error: ValidateCheqCardValueChangeError,
      data: ValidateCheqCardValueChangeResponse
    },
    callService: validateCheqCardChange,
    resetServiceState: resetValidateState
  } = useApiQuery<ValidateCheqCardValueChangeResponse>(
    adminServices.payments.ValidateCheqCardValueChange as ServiceFn
  );

  const [query, setQuery] = useState({
    Page: 1,
    Size: 10,
    SortColumn: '',
    SortType: ''
  });

  const [rowData, setRowData] = useState<PaymentMethodItem[]>([]);
  const [newCheqCard, setNewCheqCard] = useState<boolean | null>(null);
  const [rowIndex, setRowIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!user?.instiYear || !user?.instiCode) return;
    GetPaymentMethodsService({
      ...query,
      SystemYear: Number(user?.instiYear),
      Institution: Number(user?.instiCode)
    });
  }, [user?.instiYear, user?.instiCode, query]);

  useEffect(() => {
    if (isGetPaymentMethodsError) {
      resetGetPaymentMethods();
    }
  }, [isGetPaymentMethodsError, resetGetPaymentMethods]);

  useEffect(() => {
    if (isValidateError) {
      showToastErrors(ValidateCheqCardValueChangeError);
      resetValidateState();
    }
  }, [isValidateError, ValidateCheqCardValueChangeError, resetValidateState]);

  useEffect(() => {
    const canProceed = ValidateCheqCardValueChangeResponse?.data?.canProceed;
    if (canProceed) {
      const nextValue =
        typeof ValidateCheqCardValueChangeResponse.data?.cheq_Card === 'boolean'
          ? ValidateCheqCardValueChangeResponse.data.cheq_Card
          : newCheqCard;
      if (rowIndex !== null && typeof nextValue === 'boolean') {
        setRowData(prev =>
          prev.map((item, index) => (index === rowIndex ? { ...item, cheq_Card: nextValue } : item))
        );
      }
      // In future we will send the request to update the cheq card value
    }
    if (ValidateCheqCardValueChangeResponse) {
      resetValidateState();
    }
  }, [ValidateCheqCardValueChangeResponse, rowIndex, newCheqCard, resetValidateState]);

  const rows = useMemo(() => {
    return Array.isArray(GetPaymentMethodsResponse?.data)
      ? GetPaymentMethodsResponse.data.map((item: PaymentMethodItem) => ({
          pay_Way: item?.pay_Way,
          pay_Way_Desc: (item?.pay_Way_Desc || '').trim?.() || item?.pay_Way_Desc,
          acc_Card_Name: (item?.acc_Card_Name || '').trim?.() || item?.acc_Card_Name,
          acc_Card2_Name: (item?.acc_Card2_Name || '').trim?.() || item?.acc_Card2_Name,
          credit_Card: item?.credit_Card ?? false,
          cheq_Card: item?.cheq_Card ?? false,
          bank_Req: item?.bank_Req ?? false,
          cheque_Req: item?.cheque_Req ?? false
        }))
      : [];
  }, [GetPaymentMethodsResponse?.data]);

  useEffect(() => {
    setRowData(rows);
  }, [rows]);


  const pagination = GetPaymentMethodsResponse?.metaInfo;
  const hideCheqCard = Boolean(GetPaymentMethodsResponse?.summaryData?.cheq_Card_Hid);

  const handlePaginationChange = (page: number) => {
    setQuery(prev => ({ ...prev, Page: page }));
  };

  const handleSort = (key: string, direction: string) => {
    setQuery(prev => ({
      ...prev,
      SortColumn: key,
      SortType: direction,
      Page: 1
    }));
  };

  const handleToggleCheqCard = (row: PaymentMethodItem, nextChecked: boolean, index: number) => {
      if(row.pay_Way= 16){
        validateCheqCardChange({
          Pay_Way: row.pay_Way || null,
          SystemYear: user?.instiYear,
          InstitutionCode: user?.instiCode
        });
      }
    setRowIndex(index);
    setNewCheqCard(nextChecked);
  };

  const renderActionItems = () => {
    return (
      <>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <SearchButton />
        <AddButton />
        <CancelButton />
        <Button title={t('L_MCFH0051')} onClick={handleCTRButtonClick}/> 
      </>
    );
  };
  /////////////////////////////////////////////////////////////////////////////////////
  function runLocalValidations(rows) {
  for (const row of rows) {
    if (!row.acc_card) {
      return "Account Card is required.";
    }

    if (row.pay_way === 16) {
      if (row.cheq_card === true && !row.acc_card2) {
        return "Credit Account is required for cheque payments.";
      }

      if (row.cheq_card === false && row.acc_card2) {
        return "Credit Account must be empty when Cheque Card is unchecked.";
      }
    }
  }
  return null; // No error
}

  const handleCTRButtonClick = async () => {
    try {
  
      const validationError = runLocalValidations(t243Rows);
      if (validationError) {
        showMessage("error", validationError);
        return;
      }

      // STEP 2: Save data (GP_TRG_STORE)
      const response = await saveTransaction({ rows: t243Rows, systemParams });

      if (!response.ok) {
        // simulate GP_TRG_STORE $status < 0
        showMessage("error", response.message || "Error while saving data");
        return;
      }

      //  STEP 3: Success message + commit equivalent
      if (response.statusCode === 1805) {
        showMessage("success", "Data saved successfully");
      }

      // STEP 4: Open next form (GP_RUN_FORM equivalent)
      navigate("/form/mcfh0051"); // or open modal, depending on UX
    } catch (error) {
      showMessage("error", "Unexpected error during save");
    } finally {
      setLoading(false);
    }
  };
    
 const [grpData, setGrpData] = useState(null);
  useEffect(()=>{
    // 1 call the gp_trg_execute function to get the title of the screen, use title state for this
    // 2 Call gp_getparam("new_work_cheq_post",$new_work_cheq_post$)
    // const paramRes = await gp_getparam("new_work_cheq_post");
    // if (!paramRes) {
    //   toast.error("נא לבדוק פרמטר new_work_cheq_post");
    //   return;
    // }
    // 3: Api call to get Table data   retrieve/e "t243"
  })
  return (
    <PaymentMethodsUI
      renderActionItems={renderActionItems}
      data={rowData}
      pagination={pagination}
      hideCheqCard={hideCheqCard}
      handlePaginationChange={handlePaginationChange}
      handleSort={handleSort}
      onToggleCheqCard={handleToggleCheqCard}
    />
  );
};

export default PaymentMethods;
