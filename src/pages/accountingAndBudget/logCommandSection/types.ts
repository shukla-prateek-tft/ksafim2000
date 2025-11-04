export interface LogCommandUIProps {
    renderActionItems: () => JSX.Element;
    filter: Partial<LogCommandFilterType>;
    onChange: (id: keyof LogCommandFilterType, value: number | string | Date | undefined) => void;
    onRangeChange: (value: Record<string, string>) => void;
}

export interface LogCommandFilterType {
    fromSet: number;
    toSet: number;
    fromValDate: Date;
    toValDate: Date;
    fromRelDate: Date;
    toRelDate: Date;
    checkNo: number;
    fromRunDate: Date;
    toRunDate: Date;
    right: string;
    obligation: string;
    leftType: string;
    credit: number;
    debit: number;
}