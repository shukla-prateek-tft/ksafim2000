import { SortDirection } from '@/pages/type';

interface getScholarshipCancellationParamsType {
  SystemYear: number | string;
  Institution: number | string;
  Act_No: number | string;
  Page?: number;
  Size?: number;
  SortColumn: string;
  SortType: SortDirection;
}

interface getCollectProgramListParamsType {
  SystemYear: number | string;
  Institution: number | string;
  Page?: number;
  Size?: number;
  SortColumn: string;
  SortType: SortDirection;
}

interface headerType {
  return_Status: boolean;
  act_No: string;
  id: number | string;
  payer_Name: string;
  details: string;
  study_Year: number | string;
  acc_Act_Type: number | string;
  desc_Aut: string;
  pay_Date: Date | string;
  expense_Type: number | string;
}
interface incomeGridType {
  student: number | string;
  family_Name: string;
  private_Name: string;
  class_Name: string;
  class_Num: number | string;
  class_Code: number | string;
  service_Subject: number | string;
  service_Type: number | string;
  acc_Card: number | string;
  outcome_Sum: number | string;
  income_Sum: number | string;
  priority_Aut: number | string;
}

interface outcomeGridType {
  student: number | string;
  family_Name: string;
  private_Name: string;
  class_Name: string;
  class_Num: number | string;
  class_Code: number | string;
  service_Subject: number | string;
  service_Type: number | string;
  acc_Card: number | string;
  outcome_Sum: number | string;
  income_Sum: number | string;
  priority_Aut: number | string;
}

interface performScholarshipCancellationPayloadType {
  institutionCode: number | string;
  systemYear: number | string;
  header: headerType;
  incomeGrid: incomeGridType[];
  outcomeGrid: outcomeGridType[];
}

interface gridType {
  student: number;
  service_Type: number;
  acc_Card: number;
  family_Name: string;
  private_Name: string;
  sum_Aut: number;
}

interface CancellingABankTransferCommandType {
  return_status: number;
  pay_way: number;
  payment_Date: Date | string;
  check_Num: number;
  income: number;
  bank: number;
  bank_Name: string;
  bank_Account: number;
  act_No: string;
  study_Year: number;
  id: number;
  player_Name: string;
  oposit_Card: number;
  details: string;
  acc_Act_Type: null;
  tot_1: number;
  tot_2: number;
  grid: gridType[];
}

interface PerformCancelBankTransferPayloadType {
  systemYear: number | string;
  institutionCode: number | string;
  cancellingBankTransferCommand: CancellingABankTransferCommandType[];
  ledger_Split: boolean;
  cancellinvoice: boolean;
}
interface GetCancellingBankTransferListPayloadType {
  SystemYear: number | string;
  Institution: number | string;
  Receipt_No: number | string;
  Pay_way: number | string;
}

export type {
  getScholarshipCancellationParamsType,
  getCollectProgramListParamsType,
  performScholarshipCancellationPayloadType,
  PerformCancelBankTransferPayloadType,
  GetCancellingBankTransferListPayloadType
};
