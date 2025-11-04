import { CustomRowRenderType } from "../type";

export interface PullingOutMyPermitDataType {
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
  details: string | null;
}

export interface PullingOutMyPermitCardUIProps {
  customRowRenderer: CustomRowRenderType<Partial<PullingOutMyPermitDataType>>;
  data: Partial<PullingOutMyPermitDataType>[];
}