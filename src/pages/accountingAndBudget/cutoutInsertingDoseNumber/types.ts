export interface CutoutInsertingDoseNumberUIProps {
    renderActionItems: () => JSX.Element;
    number: number | '';
    setNumber: (newNumber: number | '') => void;
}