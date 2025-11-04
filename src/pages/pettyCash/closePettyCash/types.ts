export interface ClosePettyCashProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export interface InsertClosingCashServiceParamsType {
  systemYear: number;
  institutionCode: number;
  income: number;
  paywayId: number;
  paymentDate: string;
  bandCard: number;
  oppositeCard: string;
}

export interface InsertClosingCashApiResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface GetClosingCashAPIResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface ClosePettyCashFilterType {
  Act_No: string;
  Pay_Date: string;
  Oposit_Card: string;
  Bank_Card: string;
  Desc_Aut: string;
  Pay_Way: string;
  Payment_Date: string;
  Income: number;
}

export interface ClosePettyCashUIProps {
  renderActionItems?: () => JSX.Element | null;
  paywayData?: Array<{ value: string | number; label: string }>;
  handleChangeFilters: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleDateChange: (date: Date | string | null, id: string) => void;
  filters: ClosePettyCashFilterType;
}
