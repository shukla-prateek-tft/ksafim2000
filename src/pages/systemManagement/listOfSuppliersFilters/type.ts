export type NumericFieldName = 'supp_num' | 'acc_card' | 'supp_num_dealer' | 'supp_vat_num';
export type SupplierFiltersForm = {
    supp_num: string | null;
    supp_name: string;
    acc_card: string | null;
    supp_off: boolean;
    supp_num_dealer: string | null;
    supp_vat_num: string | null;
  };
  