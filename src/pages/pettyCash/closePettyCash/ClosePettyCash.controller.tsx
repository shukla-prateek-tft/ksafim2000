// MCFW-0619

import React, { useEffect, useState } from 'react';
import ClosePettyCashUI from './ClosePettyCash.render';
import classes from './ClosePettyCash.module.scss';
import { BackToPageButton, DetailButton, SaveButton } from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
import { GlobalLoader } from '@/components';
import { useApiQuery, useAuth, useGpFinanceYear } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { showToastErrors } from '@/utils/commonHelper';
import { toast } from 'react-toastify';
import {
  ClosePettyCashFilterType,
  ClosePettyCashProps,
  GetClosingCashAPIResponse,
  InsertClosingCashApiResponse,
  InsertClosingCashServiceParamsType
} from './types';
import { GetPaywayResponse, PaywayDataType } from '../suppliers/paymentSupplierOutcome/type';
import { useGpTrgExecute } from '@/hooks/useGpTrgExecute';
import { useTranslation } from 'react-i18next';

// T703 Data
export const defaultFilterValues: Partial<ClosePettyCashFilterType> = {
  Act_No: 'R999999',
  Pay_Date: new Date(),
  Oposit_Card: '',
  Bank_Card: '',
  Desc_Aut: '',
  Pay_Way: '',
  Payment_Date: new Date(),
  Income: '0.00'
};


const ClosePettyCash = ({ isOpen, onClose }: ClosePettyCashProps) => {
  const { user, toggleFlags } = useAuth();
  const { t: commonT } = useTranslation("common");
  const formName = "MCFW0619";
  const [formTitle, setFormTitle] = useState(formName);
  const [filters, setFilters] = useState<Partial<ClosePettyCashFilterType>>({
    ...defaultFilterValues
  }); 
  const { gpTrgExecute } = useGpTrgExecute();
  const { validateFinanceDate } = useGpFinanceYear();
  const hoz_kupa_card = true; // this we will get from gp_getparam gp_getparam("hoz_kupa_ktana_card", v_hoz_kupa_card) on execute

  //Get Closing Cash
  const {
    state: {
      loading: getClosingCashLoading,
      isError: isGetClosingCashError,
      error: getClosingCashError,
      isSuccess: isGetClosingCashSuccess,
      data: getClosingCashData
    },
    callService: getClosingCashService
  } = useApiQuery<GetClosingCashAPIResponse>(adminServices.cash.getClosingCash as ServiceFn);

  useEffect(() => {
    if (isGetClosingCashError && getClosingCashError) {
      showToastErrors(getClosingCashError);
    }
    if (isGetClosingCashSuccess && getClosingCashData) {
      toast.success(getClosingCashData?.message);
    }
  }, [isGetClosingCashError, getClosingCashError, isGetClosingCashSuccess, getClosingCashData]);

  useEffect(() => {
    const dummyData = {
      SystemYear: 2025,
      Institution: 244111
      // SystemYear: user?.instiYear,
      // Institution: user?.instiCode
    };

    getClosingCashService(dummyData);
   const { formTitle } =  gpTrgExecute({
      formName: formName,
    })
   setFormTitle(formTitle);
  }, []);

  //Insert ClosingCash Service
  const {
    state: {
      loading: insertClosingCashLoading,
      isSuccess: isInsertClosingCashSuccess,
      data: insertClosingCashResponse,
      isError: isInsertClosingCashError,
      error: insertClosingCashError
    },
    callService: insertClosingCashService,
    resetServiceState: resetInsertClosingCashState
  } = useApiQuery<InsertClosingCashApiResponse, InsertClosingCashServiceParamsType>(
    adminServices.cash.insertClosingCashService as ServiceFn<InsertClosingCashServiceParamsType>
  );

  useEffect(() => {
    if (isInsertClosingCashSuccess && insertClosingCashResponse) {
      toast.success(insertClosingCashResponse?.message, { autoClose: 1200 });
    }
    if (isInsertClosingCashError && insertClosingCashError) {
      showToastErrors(insertClosingCashError?.message);
      resetInsertClosingCashState();
    }
  }, [
    insertClosingCashResponse,
    insertClosingCashError,
    isInsertClosingCashError,
    isInsertClosingCashSuccess
  ]);

  //get-payway-data-service
  const {
    state: { data: paywayResponse },
    callService: getPaywayService
  } = useApiQuery<GetPaywayResponse>(adminServices.mapping.getPayway as ServiceFn);

  const paywayData = Array.isArray(paywayResponse?.data)
    ? paywayResponse.data.map((item: PaywayDataType) => ({
        value: item.pay_Way,
        label: item.pay_Way_Desc
      }))
    : [];

  useEffect(() => {
    getPaywayService();
  }, []);

  const handleSave = () => {
    const finalPayload = {
      systemYear: user?.instiYear,
      institutionCode: user?.instiCode,
      income: 100,
      paywayId: 120,
      paymentDate: '2025-08-27',
      bandCard: 101,
      oppositeCard: '907362722'
    };

    insertClosingCashService(finalPayload);
  };

  const handleChangeFilters = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value } = event.target as HTMLInputElement;

    const updatedFilters = { ...filters, [id]: value };
    setFilters(updatedFilters);
  };

  const handleDateChange = (date: Date | string | null, id: string) => {
    const dateValue = date instanceof Date ? date.toISOString() : date;
    const updatedFilters = { ...filters, [id]: dateValue };
    setFilters(updatedFilters);
  };

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton onClick={() => {}} tabIndex={9} />
        <DetailButton onClick={() => {}}  tabIndex={10}/>
        <SaveButton onClick={onSubmit} tabIndex={11}/>
      </div>
    );
  };

  const checkFieldValidations = () => {
     // lp_t704_mand, lp_t703_mand
    if(filters?.Pay_Way) {
      // retrieve t243
    }

    if(!filters.Pay_Way || !filters.Oposit_Card || !filters.Payment_Date) {
       toggleFlags({
        showValidationError: true,
        errorData: {
          dialogTitle: 'SOME_TITLE',
          message: commonT('E_018', { form_number, formName }),
          confirmText: commonT('V_ACCEPT')
        }
      });
      return false;
    } else if(!filters.Bank_Card || Number(filters.Income) <= 0) {
      // show info toast
      toggleFlags({
        showValidationError: true,
        errorData: {
          dialogTitle: 'SOME_TITLE',
          message: commonT('L_NO_DETAILS'),
          confirmText: commonT('V_ACCEPT')
        }
      });
      return false;
    }
    return true;
  } 
  console.log({ user })

  const lpCheckCardHATV = () => {
      
  }

  const onSave = () => {
    // lp_t703_store
    if(!validateFinanceDate(filters.Pay_Date)) return;
    if(!validateFinanceDate(filters.Payment_Date)) return;

    /**
       clear/e "t711"
       retrieve/e "t711"
       setocc "t711",1
     */
    const responseT711:any = {};
    // this project_no should be retrieved from API t711
    const projectNo = 0;
    // docs_number
    let isSingleDocumentForExpense = false;

    if(projectNo === 0) {
      //ask question
      toggleFlags({
        showValidationError: true,
        errorData: {
          title: commonT('L_EXPENSE_DOC'),
          // here actually we need to show popup with two options
          // message: `${commonT('L_DOC_FOR_EXPENS')}, ${commonT('L_SINGLE_DOC')}`,
          confirmText: commonT('L_DOC_FOR_EXPENS'),
          cancelText: commonT('L_SINGLE_DOC'),
          confirmCallback: () => { isSingleDocumentForExpense = false }
        },
      });
    }

    /**
     * clear/e "t600"
     * insti_code.t600 /init = $$p_insti
     * retrieve/e "t600"
     */
    // if api fails return;
    // will get from api response
    let last_receipt_num = 0, set_number = 0;
    const receiptNo = last_receipt_num;
    if(last_receipt_num){
      last_receipt_num += 1;
    } else {
      last_receipt_num = 1;
    }
    if(set_number) {
      set_number += 1;
    } else {
      set_number = 0;
    }

    // $$set_number = "%%$text(l_set_number) %%$set_number$"
    //store/e "t600" -> api call to sotre the incremented data in t600
    // if api fails return;



    /**
     * populate the values with filters
     *         	$value_date$ = pay_date.t703
    67        	$pay_date$ = pay_date.t703
    68        	$$time_stamp = $datim
    69        	$oposit_card$ = oposit_card.t703
    70        	$desc_aut$ = desc_aut.t703
    71        	$bank_card$ = bank_card.t703
    72        	expense_type.t703 = 1
    74        	act_no.t703 = "R%%$receipt_num$" -> this will be last_receipt_num before updation
                clear/e "t723"
    77        	year_aut.t723 = $$p_system_year
    78        	insti.t723 = $$p_insti
    79        	run_number.t723 = $$time_stamp
    80        	call gp_time_stamp
    81        	set_number.t723 = $set_number$
    82        	acc_credit.t723 = $oposit_card$
    83        	acc_debit.t723 = acc_card.t243
    84        	credit.t723 = income.t704
    85        	debit.t723 = income.t704
    86        	check_no.t723 = $receipt_num$
     */

    // if desk aut is empty we need to show msg and its length should not be more than 29 and update details field

    
    let details = ""
    if(filters.Act_No) {
      details = `קבלת סגירה ${receiptNo} קופה קטנה`.slice(0, 30);
    } else {
      details = `ק.סגירת ק.ק ${receiptNo} ${filters.Desc_Aut}`.slice(0, 30);
    }

    const payloadT723 = {
      year_aut: 'SYSTEM_YEAR',
      insti: 'insti',
      run_number: 'time_stamp',
      set_number: set_number,
      acc_credit: filters.Oposit_Card,
      acc_debit: filters.Oposit_Card,
      credit: filters.Income,
      debit: filters.Income,
      check_no: receiptNo,
      details: details,
      value_date: filters.Payment_Date,
      date_relevant: filters.Pay_Date,
    }

    // store/e "t723" -> api to save T723 data
    // if fails then return


    const payloadT703= {
      value_date: filters.Pay_Date,
      pay_date: filters.Pay_Date,
      oposit_card: filters.Oposit_Card,
      desc_aut: filters.Desc_Aut,
      bank_card: filters.Bank_Card,
      expense_type: 1,
      act_no: `R${receiptNo}`,
    }

    // store/e "t703" -> api to save T703 data if fails then return

    // clear/e t717
    
    const payloadT717 = {
      insti: 'pinsti',
      reciet_num: receiptNo,
      reciet_date: new Date(),
      incom_act_no: filters.Act_No, //act_no.T703,
      amount_aut: filters.Income, // income.T704
      study_year: 'psystemyear',
      set_number: set_number,
      char_act_no: "R",
    }

    // store/e "t717" -> api to save t717, if fails return

    // open MCFR0623 with below parameter to print
    // this below params is an object with values for new screen
    // ideally we should call api and get this data by reciet_num or something
    // $$param1 = "insti=%%$$p_instistudy_year=%%$$p_system_yearreciet_num=%%$receipt_num$char_act_no=Roriginal=%%$text(l_original)"
    // open MCFR0623 till $$copies_no to print
    // copies_no is global var which comes from configuration


    // show a message to the user after print -> message "%%$text(l_receipt) %%$receipt_num$"

    // clear/e "t711"
    // retrieve/e "t711"
    let success = true;

    let doc_loop = 0;
    let expense_sum = 0;
    // setocc "t711",1
    let status
    while(success) {
      doc_loop += 1;
      const t711Payload: any = {};
      t711Payload.isTemp = true;
      if(doc_loop === 1 || !isSingleDocumentForExpense) {
        // creocc "t703",(-1)
        const { expenseNumber } = lpGetNumber();
        const t703Payload = {
          supp_receipt: 1,
          act_no: `E${expenseNumber}`,
          pay_date: new Date(),
          insti: 'pinsti',
          study_year: 'p_system_year',
          oposit_card: filters.Oposit_Card, // T703.oposit_card
          payer_name: commonT('L_PETY_CASH'),
          project_no: 'project_no.t711',
          expense_type: 1,
          set_number: set_number
        }
        if(!isSingleDocumentForExpense) {
          t703Payload.document_no = responseT711.invoice_number,
          t703Payload.desc_aut = `ע.מ:${responseT711.supp_number} ${responseT711.desc_aut}`.slice(0,30);
        } else {
          t703Payload.desc_aut = filters.Desc_Aut.slice(0, 30)
        }

      }

      if(doc_loop > 1 && isSingleDocumentForExpense) {
          //	creocc "t705",(-1)
      }
      const payloadT705: any = {
        student: responseT711.invoice_number || 0,
        service_type: responseT711.service_type,
        service_subject: responseT711.service_subject
      };

      if(hoz_kupa_card) {

      }
    }


    // const success = true;
    // if(success) return;

    // toggleFlags('errorData', {
    //   message: commonT('E_050'),
    // })
  }

  const lpGetNumber = () => {
    /**
     * clear/e "t600"
     3   nsti_code.t600 /init = $$p_insti
     4   retrieve/e "t600"
     */
    const response: any = {};
    const { last_outcom_num } = response;
    if(last_outcom_num){
      last_outcom_num += 1;
    }else {
      last_outcom_num = 1;
    }
    // $expense_number$ = last_outcom_num.t600

    // store/e t600

    // if fail return false
    return { expenseNumber: last_outcom_num }

  }

  const onSubmit = async () => {
    if(!checkFieldValidations()) return;
    toggleFlags('showValidationError', true);
    toggleFlags('errorData', {
      message: `${commonT('L_CLOSING_SMALL_CASH_REGISTER_LOCKS_AND_RECOMMENDED_AT_YEAR_END')}. ${commonT('L_SHOULD_I_CONTINUE')}`,
      dialogTitle: `${commonT('DIALOG_TITLE')} ${user?.hebrewYear}`,
      confirmText: commonT('C_YES'),
      cancelText: commonT('C_NO'),
      confirmCallback: onSave,
      closeCallback: () => {}
    });
  } 

  return (
    <DialogBox isOpen={true} onClose={onClose} title="MCFW0619">
      <GlobalLoader showOnFullScreen loading={getClosingCashLoading || insertClosingCashLoading} />
      <ClosePettyCashUI
        renderActionItems={renderActionItems}
        paywayData={paywayData}
        handleDateChange={handleDateChange}
        handleChangeFilters={handleChangeFilters}
        filters={filters as ClosePettyCashFilterType}
        title={formTitle}
      />
    </DialogBox>
  );
};

export default ClosePettyCash;
