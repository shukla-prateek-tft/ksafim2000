import { SortDirection } from "@tanstack/react-table";

export interface GetClosingCashByPayWayAndInstitutionType {
  SystemYear: number;
  Institution: number;
}
export interface PostClosingCashType {
  systemYear: number;
  institutionCode: number;
  income: number;
  paywayId: number;
  paymentDate: string;
  bandCard: number;
  oppositeCard: string;
}

export interface GetReport0695DetailsParamsType {
  BankCard: number;
  Page?: number;
  Size?: number;
  SortColumn?: string;
  SortType?: SortDirection;
  SystemYear?: string;
  Institution?: string;
}
