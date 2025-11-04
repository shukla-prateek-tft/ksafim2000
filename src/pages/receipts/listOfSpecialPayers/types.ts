import { CustomRowRenderType } from "../type";

export interface ListOfSpecialPayersUIProps {
    renderActionItems: () => JSX.Element;
    customRowRender: CustomRowRenderType<Partial<SpecialPayerType>>;
    payersList: Partial<SpecialPayerType>[];
}

export interface SpecialPayerType {
    payer: number;
    payerName: string;
    city: number;
    cityName: string;
    street: string;
    build: string;
    phone: string;
    phoneNumber: number;
    accName: string;
    email: string;
    receipt: boolean;
}