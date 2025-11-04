import { ApiState, CallServieType } from '../type';

export interface metaInfoInterface {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface responseDataInterface {
  Class_Code: number;
  Class_Num: number;
  Finish: boolean;
}

export interface responseInterface<Data> {
  success?: boolean;
  message?: string;
  data: Data;
  metaInfo: metaInfoInterface;
}

export interface GetClassAtInsti1220ResponseInterface {
  state: ApiState<responseInterface<responseDataInterface[]>>;
  callService: CallServieType;
}

export interface ClassCodeItemInterface {
  code: number;
  desc_Aut: string;
}

export interface GetClassCodeResponseInterface {
  state: ApiState<responseInterface<ClassCodeItemInterface[]>>;
  callService: CallServieType;
}

export interface ClassRoomsInTheInstitutionUIProps {
  data: responseDataInterface[];
  pagination?: metaInfoInterface;
  renderActionItems: () => JSX.Element;
  customRowRender: (key: string, row: responseDataInterface, index: number) => JSX.Element | null;
  onSort?: (key: keyof responseDataInterface, direction: 'Asc' | 'Desc') => void;
}
