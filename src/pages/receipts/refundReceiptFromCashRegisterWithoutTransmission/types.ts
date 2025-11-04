import { CustomRowRenderType } from "../type";

export interface RefundReceiptWithTransmissonFilterType {
    payway: number;
    checkNum: string;
    bank: number;
    token: number;
    actType: string;
    details: string;
    paymentDate: Date;
    income: number;
    bankAccount: number;
    terminalNum: string;
    receipt: string;
    systemYear: number;
    payer: number;
}

export interface RefundReceiptFromCashRegisterWithoutTransmissionProps {
    renderActionItems: () => JSX.Element | null;
    customRowRenderer: CustomRowRenderType<RefundReceiptTransmissionDataType>;
    filter: Partial<RefundReceiptWithTransmissonFilterType>;
    onChange: (id: keyof RefundReceiptWithTransmissonFilterType, value: string | number | Date | null) => void;
}

export interface RefundReceiptTransmissionDataType {
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    c5: string;
}