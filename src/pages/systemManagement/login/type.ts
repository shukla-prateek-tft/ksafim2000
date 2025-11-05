export interface VerifyOtpResponseType {
  success: boolean;
  message: string;
  data: {
    token?: string;
    InstitutionDB?: string;
  };
}

export interface AdminLoginResponseType {
  success: boolean;
  message: string;
  data: {
    token?: string;
    secret?: string;
    InstitutionDB?: string;
    accountYearTo?: string | null;
    financeYearTo?: string | null;
  };
}
export interface LoginFormInputs {
  userName: string;
  email: string;
  password: string;
  otp?: string;
  isOtpRequired?: boolean;
}
export interface LoginPage {
  type: 'main' | 'adminInterface';
}

export interface LoginUIProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  register: any;
  errors: {
    [key: string]: any;
  };
  loading: boolean;
  showForgotPassward?: boolean;
}
export interface AdminLoginRequest { userName: string; password: string; }

export interface VerifyOtpErrorType {
  success: boolean;
  message: string;
  data?: {
    failedAttempt?: boolean | number | string; 
  };
}