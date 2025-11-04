export interface ExportFinancialDataFilterType {
    studentId: string;
    studentYear: number;
    serialNumber: string;
    serviceType: string;
    serviceSubject: string;
    actType: string;
    creditDebit: string;
    charge: number;
    discount: number;
    credit: number;
    debit: number;
    valueDate: Date;
    payDate: Date;
    updateDate: Date;
    userName: string;
    receipt: number;
    reference: string;
}

export interface ExpandingFinancialDataUIProps {
    renderActionItems: () => JSX.Element;
    filter: Partial<ExportFinancialDataFilterType>;
    onFilterChange: (id: keyof ExportFinancialDataFilterType, value: string | number | Date | null) => void;
}

export interface ExpandingFinancialDataProps {
    isOpen: boolean;
    onClose: () => void;
}