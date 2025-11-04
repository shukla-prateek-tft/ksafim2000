import { CustomRowRenderType } from "../type";

export interface TransferBetweenCentralizedSectionsFilterType {
    serviceType: string;
    accCardName: string;
    fromClassSelect: number;
    fromClass: number;
    toClassSelect: number;
    toClass: number;
    actType: string;
    includingLeaving: boolean;
}

export interface TransferBetweenCentralizedSectionsUIProps {
    renderActionItems: () => JSX.Element;
    filter: Partial<TransferBetweenCentralizedSectionsFilterType>;
    customRowRender: CustomRowRenderType<Partial<TransferBetweenCentralizedSectionsDataType>>;
    onChange: (id: keyof TransferBetweenCentralizedSectionsFilterType, value: string | number | boolean) => void;
}

export interface TransferBetweenCentralizedSectionsDataType {
    code1: string;
    code2: string;
    code3: string;
    code4: string;
    code5: string;
    code6: string;
    code7: boolean;
}