//MCFW-0054
import { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LoginUI from './Login.render';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { GlobalLoader } from '@/components';
import { toast } from 'react-toastify';
import { AdminInterfaceLogin } from './components';
import { validations } from '@/utils/validators';
import secureLocalStorage from 'react-secure-storage';
import { STORAGE_KEY } from '@/constants/appConstant';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { loginAction } from '@/store/slices';
import { resetTime } from '@/utils/commonHelper';
import { ServiceFn } from '../type';
import { AdminLoginRequest, AdminLoginResponseType, LoginFormInputs, LoginPage, VerifyOtpErrorType, VerifyOtpResponseType } from './type';

const schema = yup.object({
  userName: validations.userName,
  password: validations.newPassword,
  otp: validations.otp,
  isOtpRequired: yup.boolean()
});

const Login = ({ type }: LoginPage) => {
  const { updateUser, flags, toggleFlags, user, setDataBase } = useAuth();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [secret, setSecret] = useState('');
  const { t } = useTranslation('adminLoginInterface');
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = useCallback<SubmitHandler<LoginFormInputs>>(
    data => {
      if (!showOtpInput) {
        loginService(data);
      } else if (data.otp?.length === 6) {
        verifyOtpService({
          otp: data.otp,
          secret,
          userName: data.userName,
          password: data.password
        });
      } else {
        toast.success(t('validOtp'), { autoClose: 1200 });
      }
    },
    [showOtpInput, secret]
  );

  const {
    state: {
      loading: verifyOtpLoading,
      isSuccess: isVerifyOtpSuccess,
      data: verifyOtpResponse,
      isError: isVerifyOtpError,
      error: verifyOtpError
    },
    callService: verifyOtpService
 } = useApiQuery<VerifyOtpResponseType>(adminServices.auth.verifyOtp as ServiceFn);

  const {
    state: {
      loading: loginLoading,
      isSuccess: isLoginSuccess,
      data: loginResponse,
      isError: isLoginError,
      error: loginError
    },
    callService: loginService,
    resetServiceState: resetLoginServiceState
 } = useApiQuery<AdminLoginResponseType,AdminLoginRequest>(adminServices.auth.adminLogin as ServiceFn<AdminLoginRequest>);

  useEffect(() => {
    if (isLoginSuccess && loginResponse) {
      if (loginResponse.data.secret && !loginResponse.data.token) {
        setSecret(loginResponse.data.secret);
        setShowOtpInput(true);
        toast.info(t('otpSent'), { autoClose: 1500 });
      } else {
        const accountYearDate = loginResponse?.data?.accountYearTo
          ? new Date(loginResponse.data.accountYearTo)
          : null;
        const financeYearDate = loginResponse?.data?.financeYearTo
          ? new Date(loginResponse?.data?.financeYearTo)
          : null;
        const today = new Date();
        resetTime(accountYearDate);
        resetTime(financeYearDate);
        resetTime(today);

        if (accountYearDate === null || accountYearDate < today) {
          dispatch(loginAction.setIsCheckAccountYear(true));
        }
        if (financeYearDate != null && financeYearDate < today) {
          dispatch(loginAction.setIsCheckFinancialYear(true));
        }

        const AuthenticateUser = async () => {
          const payload = {
            ...loginResponse?.data,
            token: loginResponse?.data?.token,
            database:
              import.meta.env.VITE_IS_PILOT === 'true'
                ? import.meta.env.VITE_DATABASE_NAME
                : loginResponse?.data?.InstitutionDB || user?.database
          };
          updateUser(payload);
          secureLocalStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
          toast.success(loginResponse.message, { autoClose: 1200 });
          toggleFlags('showChooseDataBase', false);
          toggleFlags('showAdminInterfaceLogin', false);
        };
        AuthenticateUser();
      }
    } else if (loginError && isLoginError) {
      toast.error(loginError?.message, { autoClose: 1200 });
      resetLoginServiceState();
    }
  }, [isLoginSuccess, loginResponse, loginError, isLoginError]);

  useEffect(() => {
    if (isVerifyOtpSuccess && verifyOtpResponse) {
      const AuthenticateUser = async () => {
        const payload = {
          ...verifyOtpResponse?.data,
          token: verifyOtpResponse?.data?.token,
          database:
            import.meta.env.VITE_IS_PILOT === 'true'
              ? import.meta.env.VITE_DATABASE_NAME
              : verifyOtpResponse?.data?.InstitutionDB || user?.database
        };
        updateUser(payload);
        secureLocalStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        toast.success(verifyOtpResponse.message, { autoClose: 1200 });
        toggleFlags('showChooseDataBase', false);
        toggleFlags('showAdminInterfaceLogin', false);
      };
      AuthenticateUser();
      } else if (verifyOtpError && isVerifyOtpError) {
        const error = verifyOtpError as VerifyOtpErrorType;
        if (!error.success && error.data?.failedAttempt) {
          toast.error(error.message, { autoClose: 1200 });
          setShowOtpInput(false);
          setSecret('');
          reset();
        } else if (!error.success) {
          toast.error(error.message, { autoClose: 1200 });
        }
      }
  }, [verifyOtpResponse, isVerifyOtpSuccess, verifyOtpError, isVerifyOtpError]);

  useEffect(() => {
    if (import.meta.env.VITE_IS_PILOT === 'true') {
      setDataBase(import.meta.env.VITE_DATABASE_NAME);
      toggleFlags('showAdminInterfaceLogin', true);
    } else {
      toggleFlags('showChooseDataBase', true);
    }
    console.log('rnned');
    
  }, []);

  useEffect(() => {
    reset();
  }, [flags?.showAdminInterfaceLogin]);

  return (
    <>
      <GlobalLoader showOnFullScreen loading={loginLoading || verifyOtpLoading} />
      {type === 'adminInterface' && (
        <>
          <AdminInterfaceLogin
            showClose={false}
            isOpen={flags.showAdminInterfaceLogin}
            onClose={() => toggleFlags('showAdminInterfaceLogin', false)}
            handleSubmit={handleSubmit(onSubmit)}
            register={register}
            control={control}
            errors={errors}
            isOtpRequired={showOtpInput}
            setShowOtpInput={setShowOtpInput}
          />
        </>
      )}
      {type === 'main' && !flags.showChooseDataBase && (
        <LoginUI
          showForgotPassward={true}
          handleSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          loading={loginLoading}
        />
      )}
    </>
  );
};

export default Login;
