export interface UserDetails {
  user_Name: string | null;
  u_Version: string | null;
  user_Password: string | null;
  last_In: string | null;
  supervisor: number | null;
  prev_Password: string | null;
  suspended_User: number | null;
  last_Pass_Change: string | null;
  insti: string | null;
  suspended_Couse: string | null;
  menu_No: string | null;
  first_Confirm: string | null;
  two_Confirm: string | null;
  family_Name: string | null;
  private_Name: string | null;
  phone: string | null;
  phone_Prefix: string | null;
  phone_2: string | null;
  phone_Prefix_2: string | null;
  e_Mail: string | null;
  user_Job: string | null;
  school_Job: string | null;
  prev_Password_2: string | null;
  prev_Password_3: string | null;
  id: string | null;
  invoice_Confirm: string | null;
  reload_Passw: string | null;
}

export interface QuestionDetail {
  // define structure once available, keeping it strict for now
}

export interface ScreenDetail {
  // define structure once available, keeping it strict for now
}

export interface UserDataItem {
  userDetails: UserDetails;
  questionDetails: QuestionDetail[];
  screenDetails: ScreenDetail[];
}
export interface DropdownOption {
  label: string;
  value: string | number;
}

export interface UserPermission {
  acc_Card: string;
  desc_Aut: string;
}

export interface JobResponse {
  caseId: number;
  caseValue: string;
}

export interface QuestionResponse {
  code: number;
  desc_Aut: string;
}

export interface WindowResponse {
  window_Number: number;
  window_Name: string;
  window_Desc: string;
  window_Run: number | null;
  creator_Name: string | null;
  create_Date: string | null;
  updator_Name: string | null;
  update_Date: string | null;
  supervisor: number | null;
  ministery: number | null;
  form_Type: number;
  external: number;
  placing: string | null;
  target_Aut: string | null;
}

export interface GetWindowListParams {
  WindowNumber?: string;
  Page: number;
  Size: number;
  SortColumn?: string;
  SortType?: string;
  SystemYear: number;
  Institution: number;
}

export interface UserAndPermissionManagementUIProps {
  renderActionItems: () => JSX.Element;
  permissions: UserPermission[];
  schoolJobs: JobResponse[];
  rolesDropDown: JobResponse[];
  questions: DropdownOption[];
  windows: WindowResponse[];
}
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  metaInfo?: MetaInfo;
}

export interface MetaInfo {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

// ---------- Role / School Job ----------
export interface JobOption {
  caseId: number;
  caseValue: string;
}

// ---------- Verification Questions ----------
export interface VerificationQuestion {
  code: number;
  desc_Aut: string;
}

// ---------- Window ----------
export interface WindowItem {
  window_Number: number;
  window_Name: string;
  window_Desc: string;
  window_Run: number | null;
  creator_Name: string | null;
  create_Date: string | null;
  updator_Name: string | null;
  update_Date: string | null;
  supervisor: number | null;
  ministery: number | null;
  form_Type: number;
  external: number;
  placing: string | null;
  target_Aut: string | null;
}

// ---------- Props ----------
export interface Permission {
  acc_Card: string;
  desc_Aut: string;
}

export interface UserAndPermissionManagementProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface getQuestionListResponseType {
  success: boolean;
  message: string;
  data: [];
}
export interface getWindowListType {
  success: boolean;
  message: string;
  data: [];
}
