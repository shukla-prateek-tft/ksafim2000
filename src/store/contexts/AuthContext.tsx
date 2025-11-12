import { STORAGE_KEY } from '@/constants/appConstant';
import { useLanguage } from '@/hooks';
import { AppRoutes } from '@/Languages';
import {
  ExpenseVoucherListFiltersType,
  GetListOfInvoicesParamsType,
  GetListOfInvoicesReportsParamsType
} from '@/services/Invoices/types';
import { triggerAuthChange } from '@/utils/commonHelper';
import { createContext,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';
import { loginAction, paymentSupplierAction } from '@/store/slices';
import {
  AuthContextWrapperProps,
  DefaultFlagsType,
  UserDetailType
} from './types';
import { SortDirection } from '@/pages/type';
import { ConfirmationDialogueBox } from '@/components';
import { TiWarning } from 'react-icons/ti';
import { FaQuestionCircle } from 'react-icons/fa';
export const defaultListOfInvoicesFilterValues: GetListOfInvoicesParamsType = {
  FromDate: '',
  ToDate: '',
  FromInvoice: '',
  ToInvoice: '',
  FromNum: '',
  ToNum: '',
  FromOrder: '',
  ToOrder: '',
  SuppNum: '',
  FromPayment: '',
  CurrentYear: true,
  IsGafen: false,
  FromCodeGefen: '',
  ToCodeGefen: '',
  BudgetType: '',
  InvoiceStatus: '',
  ActNo: '',
  SortColumn: '',
  SortType: 'Asc' as 'Asc' | 'Desc',
  SystemYear: '',
  Institution: '',
  Page: 1,
  Size: 11,
  NotZero: false
};
export const defaultExpenseVouchersFiltersValues: ExpenseVoucherListFiltersType = {
  FromDate: '',
  ToDate: '',
  SuppNum: '',
  ToNum: '',
  FromNum: '',
  ToCheck: '',
  FromCheck: '',
  FromInvoiceNumber: '',
  ToInvoiceNumber: '',
  TypeNo: '3',
  ParentId: '',
  AccNo: '',
  OrderNum: '',
  CurrYear: false,
  Cancelled: false,
  NoOrder: false,
  SortColumn: '',
  SortType: SortDirection.Desc,
  SystemYear: '',
  Institution: '',
  Page: 1,
  Size: 1000,
  AccDescAut: ''
};

export const defaultReportFilterValues: GetListOfInvoicesReportsParamsType = {
  FromDate: '',
  ToDate: '',
  SuppNum: '',
  AccCard: '',
  ToAccCard: '',
  AccCard2: '',
  ToAccCard2: '',
  AccCard3: '',
  ToAccCard3: '',
  SugTaktziv: '',
  Hinuh: '',
  NotZero: true,
  SortColumn: '',
  SortType: SortDirection.Asc,
  SystemYear: '',
  Institution: '',
  Page: 1,
  Size: 15,
  supp_Name: ''
};
const userDefaultValue: UserDetailType = {
  token: undefined,
  instiYear: null,
  currentInstiYear: null,
  instiCode: null,
  userName: '',
  instiName: '',
  hebrewYear: '',
  database: '',
  kalendarYear: '',
  schoolType: '',
  schoolPhoneNumber: '',
  schoolEmail: '',
  accountYearTo: '',
  accountYear: ''
};
const defaultFlags: DefaultFlagsType = {
  showChooseDataBase: false,
  showAdminInterfaceLogin: false,
  configChangeHeader: false,
  showValidationError: false,
  isKalendarYear: false,
  showListOfInvoiceFilter: false,
  showReportFilter: false,
  listOfInvoicesFilter: defaultListOfInvoicesFilterValues,
  reportListFilters: defaultReportFilterValues,
  expenseVoucherFilters: defaultExpenseVouchersFiltersValues,
  showExpenseVoucherFilters: false,
  goToScreen: false,
  SuppNum: '',
  errorData: {
    message: '',
    dialogTitle: '',
    confirmText: '',
    cancelText: '',
    closeCallback: () => {},
    confirmCallback: () => {},
    type: 'error',
    className: '',
    title: '',
    icon: null,
    showCancelButton: false
  }
};

export const AuthContext = createContext({
  user: userDefaultValue,
  isRtl: false,
  toggleRtl: (flag: boolean) => {},
  updateUser: (data: Partial<UserDetailType>) => {},
  globalLoading: false,
  toggleGlobalLoading: (flag: boolean) => {},
  refreshUserDetails: () => {},
  handleLogout: (shouldResetContext?: boolean) => {},
  flags: defaultFlags,
  setDataBase: (databaseName: string) => {},
  toggleFlags: <T extends keyof DefaultFlagsType>(
    keyOrObject: T | Partial<DefaultFlagsType>,
    flag?: DefaultFlagsType[T]
  ) => {},
  closeAllModals: () => {}

  // Single update
  // handleToggleFlags('key1', true);

  // Multiple updates
  // handleToggleFlags({ key1: true, key2: false, key3: true });
});

function AuthContextWrapper({ children }: AuthContextWrapperProps) {
  const [flags, setFlags] = useState(defaultFlags);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState<Partial<UserDetailType>>({} as UserDetailType);
  const [globalLoading, toggleGlobalLoading] = useState(false);
  const { currentLanguage } = useLanguage();
  const [isRtl, setIsRtl] = useState(currentLanguage === 'en' ? false : true || false);

  // const {
  //   state: { data: removeDatabaseResponse },
  //   callService: removeDatabaseService
  // } = useApiQuery<RemoveDataBaseResponseType>(adminServices.auth.removeDataBase);

  const updateUser = (userDetail: Partial<UserDetailType>) => {
    if (userDetail === null) {
      return setUser(userDefaultValue);
    }
    return setUser(userDetail);
  };
  const toggleRtl = (flag: boolean) => {
    setIsRtl(flag);
  };
  const setDataBase = (databaseData: string) => {
    setUser({ ...user, database: databaseData });
  };
  const refreshUserDetails = async () => {
    try {
      toggleGlobalLoading(true);
      const userAuth = secureLocalStorage.getItem(STORAGE_KEY);
      const userData = userAuth && JSON.parse(userAuth as string);
      if (userData) {
        if (!userData?.instiYear) {
          userData.instiYear = 2015;
        }
        if (!userData?.instiCode) {
          userData.instiCode = 227017;
        }
        setUser(userData);
        return userData;
      }
    } catch (error) {
      console.error('Error retrieving user data:', error); // Log the error
    } finally {
      toggleGlobalLoading(false);
    }
  };

  const closeAllModals = () => {
    setFlags((prevFlags: DefaultFlagsType) => ({
      ...prevFlags,
      showChooseDataBase: false,
      showAdminInterfaceLogin: false,
      configChangeHeader: false,
      showValidationError: false,
      showListOfInvoiceFilter: false,
      showReportFilter: false,
      showExpenseVoucherFilters: false
    }));
  };

  const setDefaultContext = () => {
    setUser(userDefaultValue);
    setFlags(defaultFlags);
    toggleGlobalLoading(false);
    setIsRtl(currentLanguage === 'en' ? false : true);
    // dispatch(documentAction.resetDocument());
    dispatch(loginAction.resetLogin());
    dispatch(paymentSupplierAction.resetPaymentSupplier());
  };

  const handleLogout = (shouldResetContext: boolean = true) => {
    secureLocalStorage.clear();
    // removeDatabaseService();
    shouldResetContext && setDefaultContext();
    setUser(userDefaultValue);
    handleToggleFlags('showChooseDataBase', true);
    navigate(AppRoutes.LOGIN, { replace: true });
    triggerAuthChange({});
  };
  const handleToggleFlags = <T extends keyof DefaultFlagsType>(
    keyOrObject: T | Partial<DefaultFlagsType>,
    flag?: DefaultFlagsType[T]
  ) => {
    setFlags((prevFlags: DefaultFlagsType) => {
      if (typeof keyOrObject === 'object') {
        return { ...prevFlags, ...keyOrObject };
      }
      return { ...prevFlags, [keyOrObject]: flag };
    });
  };

  const updatedCtxData = {
    isRtl,
    toggleRtl,
    user,
    updateUser,
    globalLoading,
    toggleGlobalLoading,
    refreshUserDetails,
    handleLogout,
    flags,
    toggleFlags: handleToggleFlags,
    setDataBase,
    closeAllModals
  };

  const closeErrorDialog = (isConfirm: boolean) => {
    const { closeCallback, confirmCallback } = flags?.errorData || {};
    isConfirm ? confirmCallback?.() : closeCallback?.();
    setFlags((prevFlags: DefaultFlagsType) => {
      return {
        ...prevFlags,
        showValidationError: false,
        errorData: {
          message: '',
          dialogTitle: '',
          cancelText: '',
          confirmText: '',
          closeCallback: () => {},
          confirmCallback: () => {}
        }
      };
    });

  };
    return (
      <AuthContext.Provider value={updatedCtxData}>
        <ConfirmationDialogueBox
          dialogTitle={flags?.errorData?.dialogTitle}
          icon={
            typeof flags?.errorData?.icon === 'function' ? (
              flags.errorData.icon()
            ) : flags?.errorData?.type === 'error' ? (
              <TiWarning size={15} />
            ) : (
              <FaQuestionCircle size={15} />
            )
          }
          show={flags?.showValidationError}
          title={flags?.errorData?.title}
          onCancel={() => closeErrorDialog(false)}
          message={flags?.errorData?.message}
          onConfirm={() => closeErrorDialog(true)}
          confirmText={flags?.errorData?.confirmText}
          cancelText={flags?.errorData?.cancelText}
          showCancelButton={flags?.errorData?.cancelText?.length > 0}
          type={flags?.errorData?.type || 'error'}
        />
        {children}
      </AuthContext.Provider>
    );
}

export default AuthContextWrapper;
