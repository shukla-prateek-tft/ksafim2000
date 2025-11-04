import { GetFilterScreenMCFL0621ParamsType } from "@/services/payment/types";
import { Option } from "@/ui/Select/Select";
import { CodeDescDto } from "../locatingStudents/types";

export interface YearItem {
  year_Aut: number;
  jewish_Year: string;
}

export interface StudyYearResponse {
  success: boolean;
  message: string;
  data: YearItem[];
}

export interface PayerLocatorProps {
  filters: GetFilterScreenMCFL0621ParamsType;
  handleChangeFilter: (newValue: Partial<GetFilterScreenMCFL0621ParamsType>) => void;
  data: Array<Record<string, string>>;
  studyYearOptions: Option[];
  handleShow: () => void;
  handleClear: () => void;
  classCodeData: CodeDescDto[];
}