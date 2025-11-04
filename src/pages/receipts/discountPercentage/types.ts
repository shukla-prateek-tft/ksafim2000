export interface DiscountPercentageUIProps {
    renderActionItems: () => JSX.Element;
    discountData: Partial<DiscountPercentageDataType>;
    onChange: (id: keyof DiscountPercentageDataType, value: string) => void;
}

export interface DiscountPercentageDataType {
    percentageOne: number;
    percentageTwo: number;
}