export interface DulpicateCancelExistingPortionFilterType {
    setNumber: number;
    valueDate: Date;
    relevantDate: Date;
    checkNo: number;
    details: string;
}

export interface DulpicateCancelExistingPortionUIProps {
    filter: Partial<DulpicateCancelExistingPortionFilterType>;
    onChange: (id: keyof DulpicateCancelExistingPortionFilterType, value: string | number | Date | null) => void;
    renderActionItems: () => JSX.Element;
    onRangeSelect: (value: Record<string, string>) => void;
}