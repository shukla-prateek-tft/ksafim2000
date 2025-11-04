export interface CutCardFilterType  {
    valueDate: { from: Date, to: Date },
    relevantDate: { from: Date, to: Date },
    fromCard: { from: number, to: number },
    sort: { from: number, to: number },
    fromSystemYear: number,
    toSystemYear: number;
    sortOrder: string;
    sortCode: number;
    accNo: string;
    accFilter: string;
    catalog: string;
    kalendarYear: number;
    notZero: boolean;
}

export interface CutCardUIProps {
    renderActionItems: () => JSX.Element;
    filter: Partial<CutCardFilterType>;
    onChange: (id: keyof CutCardFilterType, value: Date | number | string | undefined | Record<string, string>) => void;
}