import { GefenCardAndCodeDataType } from '@/pages/findCardsAndCodes/types';
import { SortConfig, SortDirection } from '@/pages/type';
import { NewExpenseVoucherData } from '@/pages/vouchers/newExpensesVouchers/types';

// ---------- Common Base Types ----------

export interface PaginationParams {
  Page: number;
  Size: number;
}

export interface PaginationParamsString {
  Page: string;
  Size: string;
}

export interface SortingParams {
  SortColumn: SortConfig;
  SortType: SortDirection;
}

export interface PaginationSortingParams extends PaginationParams, SortingParams {}
export interface PaginationSortingParamsString extends PaginationParamsString, SortingParams {}

export interface InstitutionContext {
  SystemYear: string | number;
  Institution?: string | number;
  InstitutionCode?: string | number;
}

// ---------- API Param Types ----------

export interface GetGefenCardsAndCodesParamsType
  extends PaginationParams, InstitutionContext {
  BudgetType: string;
  DescAut: string;
  RemarkAut: string;
  DescAccCard: string;
  ShortDescAut: string;
  InvoiceNumber: string;
  SortColumn: keyof GefenCardAndCodeDataType | '';
  SortType: SortDirection | ''
}

export interface PaginationParamsType {
  page: number;
  limit: number;
}
export interface RecentInvoiceHistoryType extends PaginationSortingParams, InstitutionContext {
  BudgetType: string;
  DescAut: string;
}

export interface GetInvoiceBySupplierIdParamsType {
  Supp_Num: string;
}

export interface GetInvoiceFileParamsType {
  actNo: string;
}

export interface GetAccCardsParamsType extends PaginationSortingParamsString, InstitutionContext {
  DescAut: string;
}

export interface GetServiceTypesParamsTypes
  extends PaginationSortingParamsString,
    InstitutionContext {
  DescAut: string;
}
export interface GetFileReceptionFeedBackParamsType extends InstitutionContext {}

export interface GetInvoiceDisplayParamsType extends InstitutionContext {
  Supp_Num: string;
}

export interface GetCpDetailsListParamsType extends PaginationSortingParams, InstitutionContext {
  City_Name: string;
  City_Code?: null;
}

export interface GetAccountCardListDetailsparamsType
  extends PaginationSortingParams,
    InstitutionContext {
  Desc_Aut: string;
  Acc_Card?: null;
  Sort_Code?: null;
}

export interface GetListOfInvoicesReportsParamsType
  extends PaginationSortingParams,
    InstitutionContext {
  supp_Name: string | undefined;
  FromDate: string;
  ToDate: string;
  SuppNum: string;
  AccCard: string;
  ToAccCard: string;
  AccCard2: string;
  ToAccCard2: string;
  AccCard3: string;
  ToAccCard3: string;
  SugTaktziv: string;
  Hinuh: string;
  NotZero: boolean;
}

export interface GetListOfInvoicesParamsType extends PaginationSortingParams, InstitutionContext {
  NotZero: boolean | undefined;
  FromDate?: string;
  ToDate?: string;
  FromInvoice?: string;
  ToInvoice: string;
  FromNum: string;
  ToNum: string;
  FromOrder: string;
  ToOrder: string;
  SuppNum: string;
  FromPayment: string;
  CurrentYear: boolean;
  IsGafen: boolean;
  FromCodeGefen: string;
  ToCodeGefen: string;
  BudgetType: string | number;
  InvoiceStatus: string | number;
  ActNo: string;
  supp_Name?: string;
  ToPayment?: string;
}

export interface ExpenseVoucherListFiltersType extends Omit<PaginationSortingParams, "SortColumn">, InstitutionContext {
  FromDate: string;
  ToDate: string;
  FromNum: string;
  ToNum: string;
  FromCheck: string;
  ToCheck: string;
  FromInvoiceNumber: string;
  ToInvoiceNumber: string;
  SuppNum: string;
  CurrYear: boolean;
  NoOrder: boolean;
  Cancelled: boolean;
  OrderNum: string;
  AccNo: string;
  AccDescAut: string;
  ParentId: string;
  TypeNo: string;
  SortColumn: keyof NewExpenseVoucherData | '';
  SystemYear: string | null;
  Institution: string | null;
}

export interface GetExistingInvoiceParamsType extends InstitutionContext {
  ActNo: string;
  Student: string;
  ServiceType: string;
  ServiceSubject: string;
  AccCard: string;
}

export interface GetScannedInvoiceTransmissionHistoryParamsType
  extends PaginationSortingParamsString {
  Supp_Num: number;
  Invoice_Number: number;
}

export interface GetBackDetailsListParamsType extends PaginationSortingParams, InstitutionContext {
  Bank_Name: string;
  Bank?: string;
}

export interface GetInvoiceDetailsParamsType extends InstitutionContext {
  SystemYear: number;
  AccCardId: string;
  ServiceTypeId: string;
}

export interface CheckSupplierExistTypes {
  suppNum: string;
  id: string;
}

export interface CheckStudentExistTypes extends InstitutionContext {
  Student: string;
  SuppNum: string;
}

interface invoiceListType {
  actNo: string;
  student: string;
  serviceType: string;
  serviceSubject: string;
  accCard: string;
}
export interface GetRecentInvoicesListParamsType extends InstitutionContext {
  ActNos: invoiceListType[];
  year: string;
}

export interface GetInvoiceForPrintParamsTypes extends InstitutionContext {
  ActNo: string;
}

export interface GetInvoiceExpenseForPrintParamsType extends InstitutionContext {
  PayActNo: string;
  ActNo: string;
}

export interface GetSupplierInvoicesParamsTypes extends InstitutionContext {
  Acc_Card: string;
}

export interface GetInvoiceReportACCCardParmsTypes extends InstitutionContext {
  FromDate: string;
  ToDate: string;
  SuppNum: string;
  AccCard: string;
  ToAccCard: string;
  AccCard2: string;
  ToAccCard2: string;
  AccCard3: string;
  ToAccCard3: string;
  SugTaktziv: string;
  Hinuh: string;
  NotZero: boolean;
}

export interface GetInvoiceReportListByACCCardParamsType extends InstitutionContext {
  AccCard: string;
  SuppNum: string;
  SugTaktziv: string;
  FromDate: string;
  ToDate: string;
}

export interface UpdateInvoiceFileStatusParamsTypes extends InstitutionContext {
  ActNo: string;
  InvoiceNumber: string;
}

export interface GetPaymentInvoiceListParamsTypes
  extends PaginationSortingParamsString,
    InstitutionContext {
  actNo: string;
  payWay: string;
  outcome: string;
  student: string;
  SuppNum: string;
  payDate: string;
  suppOrder: string;
  ssec: string;
  vat: string;
  taxDedect: string;
  splitInsti: string;
  splitCard: string;
  splitPercent: string;
  actStatus: string;
  cancelActNo: string;
  cancelDate: string;
}

export interface GetAccountingSystemParamsType extends InstitutionContext {}

interface T703DtoType {
  pay_Date: string;
  supp: number;
  supp_Order: number;
  tax_Dedect: number;
  desc_Aut: string;
  oposit_Card: number;
  vat: number;
  ssec: number;
  act_Status: number;
  split_Card: number;
  split_Insti: number;
  user_Name: string;
  project_No: number;
  stamp_Idate: string;
  stamp_Date: string;
  student: number;
  date_Aut: string;
  inv_Desc_Aut: string;
  type_No: number;
  acc_Act_Type: number;
  outCome_Sum: number;
  tot_Inv: number;
  order_Number: number;
  supp_Receipt: number;
}

interface T760DtoType {
  line_no: number;
  catalog_no: number;
  desc_aut: string;
  amount_aut: number;
  price_aut: number;
  inv_acc_card: number;
  inv_service_type: number;
  inv_service_subject: number;
  sug_taktziv: number;
  vat_type: number;
  vat_sum: number;
  discount: number;
  price_with_vat: number;
}

interface T705DtoType {
  insti: number;
  year: number;
  actNo: string;
  student: number;
  serviceType: number;
  serviceSubject: number;
  accCard: number;
  accActType: number;
  outcomeSum: number;
  dateAut: string;
  orderNumber: number;
  realStudyYear: number;
  descAut: string;
  actStatus: number;
  typeNo: number;
  isConfirm: number;
  oposit_Card: number;
  pay_Date: string;
}

export interface InsertInvoiceDetailsServiceParamsType {
  systemYear: number;
  institutionCode: number;
  t703Dto: T703DtoType;
  t760Dto?: T760DtoType[];
  t705Dto: T705DtoType[];
}

export interface InvoiceDetailType {
  accCard: number;
  actNo: string;
  serviceSubject: number;
  serviceType: number;
  student: number;
}

export interface InsertInvoiceExpensesDetailsParamsType {
  systemYear: number;
  institutionCode: number;
  pay_Date: string;
  desc_Aut: string;
  pay_Way: number;
  bank: number;
  bankAccount: number;
  bankAcc: number;
  supp: number;
  suppOrder: string;
  opositCard: number;
  amountCredit: number;
  amountDebit: number;
  outCome: number;
  tax_Dedect: number;
  validDate: number;
  checkStatus: number;
  checkNo: number;
  student: number;
  add_SSEC: boolean;
  ssec: number;
  invoiceDetailsList: InvoiceDetailType[];
}

export interface UploadInvoiceServiceParamsType {
  Img_Id: number;
  InvoiceFile: string | File | Blob;
  Stamp_user: string;
  Stamp_date: string;
  Comment: string;
  Transmit: number;
  Act_no: string;
  Invoice_number: number;
  Id_Type: number;
  Command_Num: number;
  SystemYear: number;
  InstitutionCode: number;
}

export interface T703DtoPayLoadType {
  pay_Date: string;
  supp: number;
  desc_Aut: string;
  oposit_Card: number;
  act_Status: number;
  supplier_Receipt: number;
}

export interface T705DtoPayLoadType {
  student: number;
  date_Aut: string;
  order_Number: number;
  acc_Act_Type: number;
  outCome_Sum: number;
  desc_aut: string;
  inv_acc_card: number;
  inv_service_type: number;
  inv_service_subject: number;
}

export interface AddEnteredInvoicesType {
  systemYear: number;
  institutionCode: number;
  t703Dto: T703DtoPayLoadType;
  t705Dto: T705DtoPayLoadType[];
}

export interface InsertSupplierDataServicesType {
  supp_Num: number;
  supp_Name: string;
  acc_Card: number;
  is_Vat: boolean;
  taarich_Leda: string;
  supp_Num_Social: number;
  social_Security: number;
  old_Age_Pension: number;
  bank: number;
  bank_Account: number;
  books_Aproved: number;
  tax_Date: string;
  tax_Deduct: number;
  city_Code: number;
  street: string;
  post_Box: number;
  zip: number;
  build_Num: string;
  fax_Num: number;
  fax_Prefix: string;
  phone_Num1: number;
  phone_Prefix1: string;
  phone_Num2: number;
  phone_Prefix2: string;
  payment_Type: number;
  email_1: string;
  discount_Pct: number;
  supp_Type: number;
  manager_Family_Name: string;
  manager_Cell_Phone: number;
  manager_Cell_Phone_Pre: string;
  manager_Phone_Num: number;
  manager_Phone_Prefix: string;
  desc_Aut: string;
  remark_Aut: string;
  choz_Num: number;
  contract_Num: number;
  stamp_Idate: string;
}

export interface T760DtoInvoiceType {
  line_no: number;
  catalog_no: number;
  desc_aut: string;
  amount_aut: number;
  price_aut: number;
  inv_acc_card: number;
  inv_service_type: number;
  inv_service_subject: number;
  sug_taktziv: number;
  vat_type: number;
  vat_sum: number;
  discount: number;
  price_with_vat: number;
}

export interface InsertInvoiceDetailsServicesType {
  systemYear: number;
  institutionCode: number;
  actNo: string;
  outcome_Sum: string;
  invoice_Number: number;
  old_Invoice_Number: number;
  oldServiceTypeId: number;
  oldServiceSubjectId: number;
  oldAccCardId: number;
  dateAut: string;
  serviceType: number;
  acc_Card: number;
  serviceSubject: number;
  sugTaktziv: number;
  descAut: string;
  t760Dto: T760DtoInvoiceType[];
}

export interface RemoveInvoiceFileType {
  ImgId: number;
  SystemYear: number;
  InstitutionCode: number;
}

export interface SupplierListItemType {
  supp_Num: string;
  supp_Name: string;
  bank: string;
  bank_Account: string;
  tax_Date: string;
  supp_Type: number;
  deduct_Type: number;
  books_Aproved: number;
  tax_Deduct: number;
  supp_Vat_Num: string;
  supp_Num_Dealer: string;
}

export interface UploadOpenSuppilerType {
  systemYear: number;
  institutionCode: number;
  supplierList: SupplierListItemType[];
}

export interface InvoiceHeaderType {
  planNum: string;
  descAutNew: string;
  descAut: string;
  actNo: string;
  newStudent: number;
  student: number;
  dateAut: string;
  newDateAut: string;
  typeNo: number;
  typeNoNew: number;
}

export interface InvoiceDetailType {
  catalogNo: number;
  amountAut: number;
  priceAut: number;
  vatType: number;
  vatSum: number;
  accCardOld: number;
  priceOld: number;
  invAccCard: number;
  priceWithVat: number;
  cardHinuhHatv: number;
  invServiceType: number;
  descAut: string;
  descAutOld: string;
  accChanged: boolean;
  serviceTypeOld: number;
  serviceSubjectOld: number;
  invServiceSubject: number;
  sugTaktzivOld: number;
  sugTaktziv: number;
  lineNoOld: number;
}

export interface UpdateExistingInvoiceDetailsType {
  systemYear: number;
  institutionCode: number;
  invoiceHeader: InvoiceHeaderType;
  invoiceDetails: InvoiceDetailType[];
}

export interface UpdateInvoicesForMinistryOfEducationType {
  systemYear: number;
  institutionCode: number;
  isInvoiceOnly: boolean;
}

export interface SendingInvoicePdfFileType {
  systemYear: number;
  institutionCode: number;
  actNo: string;
}

export interface GetListofOpenInvoicesType
  extends Partial<PaginationSortingParams>,
    InstitutionContext {
  FromDate?: string;
  ToDate?: string;
  FromInvoice?: string;
  ToInvoice?: string;
  FromNum?: string;
  ToNum?: string;
  FromOrder?: string;
  ToOrder?: string;
  SuppNum?: string;
  FromPayment?: string;
  ToPayment?: string;
  CurrentYear?: boolean;
}
export interface getOpenInvoicesReportForParamsType{
  VozHupa: string;
  Page: number;
  Size: number;
  SortColumn: string;
  SortType: SortDirection;
  SystemYear: number | string;
  Institution: number | string;
}

