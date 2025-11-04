import { ApiState, CallServieType, CustomRowRenderType, SortDirection } from "../type";

export interface SupplierDetailsDataType {
    Supp_Special?: boolean;
    Supp_Off?: boolean;
    Supp_Num?: number;
    Supp_Name?: string;
    Supp_Type?: number;
    Tax_Deduct?: number;
    Deduct_Type?: number;
    Tax_Date?: Date;
    Books_Aproved?: boolean;
    Acc_Card?: number;
    Desc_Aut?: string;
    Sort_Code?: number;
    Supp_Dif?: boolean;
    Supp_To_File?: boolean;
    Supp_To_Order?: boolean;
    Supp_Num_Dealer?: number;
    Main_To_Mas?: boolean;
    Supp_Vat_Num?: number;
    [key: string]: string | number | boolean | Date | undefined;
}

export interface IncomeTaxSupplierReportProps {
    supplierReportData: SupplierReportInfoType;
    renderActionItem: () => JSX.Element;
    customRowRenderer: CustomRowRenderType<SupplierDetailsDataType>;
    onColumnSort: (columnKey: string, sortType: SortDirection) => void;
    printedBy: string;
}

export interface SupplierReportInfoType {
    report597QueryDto: SupplierDetailsDataType[];
    queryHeader: string;
}

export interface GetSupplierReport0597ReturnType {
    state: ApiState<{ data: SupplierReportInfoType }> | unknown;
    callService: CallServieType;
}