//MCFW-0602
import { useEffect, useState } from 'react';
import { GlobalLoader } from '@/components';
import PettyCashAccountUI from './PettyCashAccount.render';
import {
  AddButton,
  BackToPageButton,
  CancelButton,
  DetailButton,
  PrintExcel,
  SaveButton
} from '@/components/commonButtons';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { PettyCashDeposit0602APIResponse, MiddleGridDto, EndGridDto, PcState } from './types';
import { ServiceFn } from '../type';
import { toast } from 'react-toastify';
import {
  PerformPettyCashDeposit0602Payload,
  PerformPettyCashDeposit0602Response
} from '@/services/payment/types';

const PettyCashAccount = () => {
  const { user } = useAuth();

  const [pcState, setPcState] = useState<PcState>({
    systemYear: 0,
    institutionCode: 0,
    desc_Aut: '',
    pay_Date: '',
    oposit_Card: 0,
    bank_Card: 0,
    middleGrid0602Dtos: [],
    endGrid0602Dtos: []
  });

  const {
    state: {
      loading: pettyCashDepositLoading,
      data: pettyCashDepositData,
      isError: isPettyCashDepositError,
      error: pettyCashDepositError,
      isSuccess: isPettyCashDepositErrorSuccess
    },
    callService: pettyCashDepositService,
    resetServiceState: resetPettyCashDepositServiceState
  } = useApiQuery<PettyCashDeposit0602APIResponse>(
    adminServices.payments.getPettyCashDeposit0602 as ServiceFn
  );

  // POST: PerformPettyCashDeposit0602
  const {
    state: {
      data: performPettyCashDepositData,
      isError: isPerformPettyCashDepositError,
      error: performPettyCashDepositError,
      isSuccess: isPerformPettyCashDepositSuccess
    },
    callService: performPettyCashDepositService,
    resetServiceState: resetPerformPettyCashDepositServiceState
  } = useApiQuery<PerformPettyCashDeposit0602Response, PerformPettyCashDeposit0602Payload>(
    adminServices.payments
      .PerformPettyCashDeposit0602 as ServiceFn<PerformPettyCashDeposit0602Payload>
  );

  useEffect(() => {
    if (isPettyCashDepositError && !pettyCashDepositError?.data) {
      toast.error(pettyCashDepositData?.message);
      resetPettyCashDepositServiceState();
    }
    if (pettyCashDepositData?.success && isPettyCashDepositErrorSuccess) {
      toast.success(pettyCashDepositData?.message);
    }
  }, [
    pettyCashDepositData,
    isPettyCashDepositError,
    pettyCashDepositError,
    isPettyCashDepositErrorSuccess
  ]);

  useEffect(() => {
    pettyCashDepositService({
      SystemYear: user?.instiYear,
      InstitutionCode: user?.instiCode
    });
  }, []);

  useEffect(() => {
    const d = pettyCashDepositData?.data;
    if (!d) return;
    setPcState(prev => ({
      ...prev,
      systemYear: Number(user?.instiYear) || 0,
      institutionCode: Number(user?.instiCode) || 0,
      desc_Aut: d?.desc_Aut || '',
      pay_Date: d?.pay_Date || '',
      oposit_Card: Number(d?.oposit_Card) || 0,
      bank_Card: Number(d?.bank_Card) || 0,
      middleGrid0602Dtos: [
        {
          bank: Number(d?.bank) || 0,
          payment_Date: d?.payment_Date || new Date().toISOString(),
          bank_Account: Number(d?.bank_account) || 0,
          check_Num: Number(d?.check_Num) || 0,
          outcome: Number(d?.outcome) || 0
        }
      ],
      endGrid0602Dtos: prev.endGrid0602Dtos?.length ? prev.endGrid0602Dtos : []
    }));
  }, [pettyCashDepositData]);

  useEffect(() => {
    if (isPerformPettyCashDepositError) {
      const msg = performPettyCashDepositError?.message;
      toast.error(msg);
      resetPerformPettyCashDepositServiceState();
    }
    if (isPerformPettyCashDepositSuccess) {
      const msg = performPettyCashDepositData?.message;
      toast.success(msg);
    }
  }, [isPerformPettyCashDepositError, isPerformPettyCashDepositSuccess]);

  const handleChange = (field: string, value: string | number, index?: number) => {
    setPcState(prev => {
      if (typeof index === 'number') {
        // update middle grid
        if (['bank', 'payment_Date', 'bank_Account', 'check_Num', 'outcome'].includes(field)) {
          const next: MiddleGridDto[] = [...prev.middleGrid0602Dtos];
          if (!next[index]) {
            next[index] = {
              bank: 0,
              payment_Date: '',
              bank_Account: 0,
              check_Num: 0,
              outcome: 0
            };
          }
          const row = next[index];
          if (
            field === 'bank' ||
            field === 'bank_Account' ||
            field === 'check_Num' ||
            field === 'outcome'
          ) {
            row[field as 'bank' | 'bank_Account' | 'check_Num' | 'outcome'] = Number(value);
          } else if (field === 'payment_Date') {
            row.payment_Date = String(value);
          }
          return { ...prev, middleGrid0602Dtos: next };
        }
        // update end grid
        if (
          [
            'supp_Number',
            'invoice_Number',
            'date_Aut',
            'desc_Aut',
            'service_Type',
            'service_Subject',
            'acc_Card',
            'debit',
            'project_No'
          ].includes(field)
        ) {
          const next: EndGridDto[] = [...prev.endGrid0602Dtos];
          if (!next[index]) {
            next[index] = {
              supp_Number: 0,
              invoice_Number: 0,
              date_Aut: '',
              desc_Aut: '',
              service_Type: 0,
              service_Subject: 0,
              acc_Card: 0,
              debit: 0,
              project_No: 0
            };
          }
          const row = next[index];
          if (field === 'date_Aut' || field === 'desc_Aut') {
            row[field] = String(value);
          } else {
            row[
              field as
                | 'supp_Number'
                | 'invoice_Number'
                | 'service_Type'
                | 'service_Subject'
                | 'acc_Card'
                | 'debit'
                | 'project_No'
            ] = Number(value);
          }
          return { ...prev, endGrid0602Dtos: next };
        }
      }
      // top-level fields
      if (['systemYear', 'institutionCode', 'oposit_Card', 'bank_Card'].includes(field)) {
        return { ...prev, [field]: Number(value) };
      }
      if (['desc_Aut', 'pay_Date'].includes(field)) {
        return { ...prev, [field]: String(value) };
      }
      return prev;
    });
  };

  const handleSave = async () => {
    const payload: PerformPettyCashDeposit0602Payload = {
      systemYear: pcState.systemYear,
      institutionCode: pcState.institutionCode,
      desc_Aut: pcState.desc_Aut,
      pay_Date: pcState.pay_Date || new Date().toISOString(),
      oposit_Card: Number(pcState.oposit_Card) || 0,
      bank_Card: Number(pcState.bank_Card) || 0,
      middleGrid0602Dtos: pcState.middleGrid0602Dtos || [],
      project_No_Prompt: 0,
      is_Temp: false
    };

    if (pcState.endGrid0602Dtos && pcState.endGrid0602Dtos.length > 0) {
      payload.endGrid0602Dtos = pcState.endGrid0602Dtos;
    }

    performPettyCashDepositService(payload);
  };

  const renderActionItems = () => {
    return (
      <>
        <BackToPageButton onClick={() => {}} />
        <DetailButton />
        <PrintExcel />
        <SaveButton onClick={handleSave} />
        <AddButton />
        <CancelButton />
      </>
    );
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={pettyCashDepositLoading} />
      <PettyCashAccountUI
        renderActionItems={renderActionItems}
        pettyCashDepositData={pettyCashDepositData?.data}
        data={pcState}
        onChange={(field, value, index) => handleChange(field, value, index)}
      />
    </>
  );
};

export default PettyCashAccount;
