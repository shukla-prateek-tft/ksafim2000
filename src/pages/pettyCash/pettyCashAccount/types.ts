export interface PettyCashDeposit0602Data {
  act_No: string;
  pay_Date: string | null;
  bank: string;
  bank_account: string;
  insti: number;
  study_Year: number;
  oposit_Card: number;
  payer_Name: string;
  desc_Aut: string;
  bank_Card: number;
  pay_Way: number;
  payment_Date: string;
  check_Num: number;
  student: number;
  total_Debit: number | null;
  bank_Name?: string;
  outcome?: string;
}

export interface PettyCashDeposit0602APIResponse {
  success: boolean;
  message: string;
  data: PettyCashDeposit0602Data;
}

export type MiddleGridDto = {
  bank: number;
  payment_Date: string;
  bank_Account: number;
  check_Num: number;
  outcome: number;
};

export type EndGridDto = {
  supp_Number: number;
  invoice_Number: number;
  date_Aut: string;
  desc_Aut: string;
  service_Type: number;
  service_Subject: number;
  acc_Card: number;
  debit: number;
  project_No: number;
};

export interface PettyCashAccountProps {
  renderActionItems: () => JSX.Element;
  pettyCashDepositData?: PettyCashDeposit0602Data;
  data?: {
    systemYear: number | string;
    institutionCode: number | string;
    desc_Aut: string;
    pay_Date: string;
    oposit_Card: number;
    bank_Card: number;
    middleGrid0602Dtos: MiddleGridDto[];
    endGrid0602Dtos: EndGridDto[];
  };
  onChange?: (
    field: string,
    value: string | number,
    index?: number
  ) => void;
}

export type PcState = {
  systemYear: number;
  institutionCode: number;
  desc_Aut: string;
  pay_Date: string;
  oposit_Card: number;
  bank_Card: number;
  middleGrid0602Dtos: MiddleGridDto[];
  endGrid0602Dtos: EndGridDto[];
};
