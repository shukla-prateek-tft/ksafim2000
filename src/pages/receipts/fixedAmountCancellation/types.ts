export interface FixedAmountCancellationUIProps {
    amount: number | null;
    setAmount: (newAmount: number) => void;
    renderActionItems: () => JSX.Element;
}