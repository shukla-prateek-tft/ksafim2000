export interface HintCardFilterType  {
    valueDate: { from: Date, to: Date },
    relevantDate: { from: Date, to: Date },
    fromCard: { from: number, to: number },
    sort: { from: number, to: number },
    sortOrder: string;
    sortCode: number;
    accNo: string;
    accFilter: string;
    catalog: string;
    kalendarYear: number;
    notZero: boolean;
}

export interface HintCardUIProps {
    renderActionItems: () => JSX.Element;
    filter: Partial<HintCardFilterType>;
    onChange: (id: keyof HintCardFilterType, value: Date | number | string | undefined | Record<string, string>) => void;
}