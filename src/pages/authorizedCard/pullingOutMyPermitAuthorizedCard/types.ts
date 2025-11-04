import { CustomRowRenderType } from "../type";

export interface PullingOutMyPermitAuthorizedDataType {
  dbName: string | null;
  institute: string | null;
  instituteName: string | null;
  year: number | null;
  setNumber: number | null;
  valueDate: Date | null;
  relevantDate: Date | null;
  creditAccount: number | null;
  creditName: string | null;
  debitAccount: number | null;
  debitName: string | null;
  credit: number | null;
  debit: number | null;
}

export interface PullingOutMyPermitAuthorizedCardUIProps {
  customRowRender: CustomRowRenderType<Partial<PullingOutMyPermitAuthorizedDataType>>;
  data: Partial<PullingOutMyPermitAuthorizedDataType>[];
}