export interface FinanceAndBudgetingFilterType {
    year: number;
    valueDate: Date;
    accClose: string;
    accOpen: string;
    chequeDue: string;
    moveTo: string;
    bankCard1: string;
    bankCard2: string;
    bankCard3: string;
    bankCard4: string;
}

export interface FinanceAndBudgetingUIProps {
    renderActionItems: () => JSX.Element;
    filter: Partial<FinanceAndBudgetingFilterType>;
    onChange: (id: keyof FinanceAndBudgetingFilterType, value: string | number | Date | null) => void;
}