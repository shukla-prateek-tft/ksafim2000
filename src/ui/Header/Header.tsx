import { useAuth } from '@/hooks';
import classes from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { METROPOLINET_ICON_2 } from '@/assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes, updateLanguage } from '@/Languages';
import { attachMultipleClasses, getFormatedDate } from '@/utils/commonHelper';
import React, { useEffect } from 'react';
import { IoLogOutOutline, IoSearch } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';

const Header: React.FC = () => {
  const { closeAllModals, toggleFlags, handleLogout, toggleRtl, user, isMunicipality } = useAuth();
  const { t } = useTranslation('mainHeader');
  const navigate = useNavigate();
  const location = useLocation();
  const uiScale = isMunicipality ? 'primary' : 'secondary';
  useEffect(() => {
    closeAllModals();
  }, [location.pathname]);

  const routeNames = [
    {
      name: 'Cancel Expense Voucher',
      screen: 'MCFW0698',
      screenId: '0698',
      path: AppRoutes.CANCEL_EXPENSE_VOUCHER
    },
    {
      name: 'Payment to suppliers',
      screenId: '1370',
      screen: 'MCFW1370',
      path: AppRoutes.PAYMENT_SUPPILER_LIST
    },
    {
      name: 'Reporting invoices to the Gefen system',
      screenId: '1361',
      path: AppRoutes.REPORTING_INVOICES
    },
    {
      name: 'Payment Supplier Outcome',
      screenId: '0696',
      screen: 'MCFW0696',
      path: AppRoutes.PAYMENT_SUPPLIER_OUTCOME
    },
    {
      name: 'Add Invoices',
      screen: 'MCFW1363',
      screenId: '1363',
      path: AppRoutes.ADD_INVOICES
    },
    {
      name: 'Documents',
      screen: 'MCFW1314',
      screenId: '1314',
      path: AppRoutes.DOCUMENTS //modal
    },
    {
      name: 'Find cards and Codes',
      screen: 'GP_LOV_GFN',
      screenId: 'GP_LOV_GFN',
      path: AppRoutes.FIND_CARDS_AND_CODES //modal
    },
    {
      name: 'Invoice List Edit Section',
      screen: 'MCFS1250',
      screenId: '1250',
      path: AppRoutes.INVOICE_LIST_EDIT_SECTION
    },
    {
      name: 'List of Invoices',
      screen: 'MCFW1250',
      screenId: '1250',
      path: AppRoutes.LIST_OF_INVOICES
    },
    {
      name: 'Gefen Invoice',
      screen: 'MCFW1411',
      screenId: '1411',
      path: AppRoutes.GEFN_INVOICE
    },
    {
      name: 'Scanned invoice transmission history',
      screen: 'MCFW1395',
      screenId: '1395',
      path: AppRoutes.SCANNED_INVOICE_TRANSMISSION_HISTORY
    },
    {
      name: 'Recent Invoice History',
      screen: 'MCFW1412',
      screenId: '1412',
      path: AppRoutes.RECENT_INVOICE_HISTORY
    },
    {
      name: 'Extend supplier validity',
      screen: 'MCFW1356',
      screenId: '1356',
      path: AppRoutes.EXTEND_SUPPLIER_VALIDITY //modal
    },
    {
      name: 'File Reception Feedback',
      screen: 'MCFW1369',
      screenId: '1369',
      path: AppRoutes.FILE_RECEPTION_FEEDBACK
    },
    {
      name: 'Open a Supplier',
      screen: 'MCFW1210',
      screenId: '1210',
      path: AppRoutes.OPEN_A_SUPPLIER
    },
    {
      name: 'Receive Scanned invoices',
      screen: 'MCFW1393',
      screenId: '1393',
      path: AppRoutes.RECEIVE_SCANNED_INVOICES
    },
    {
      name: 'Enter Invoice',
      screen: 'MCFW0695',
      screenId: '0695',
      path: AppRoutes.ENTER_INVOICES
    },
    {
      name: 'Invoice Display',
      screen: 'MCFW0697',
      screenId: '0697',
      path: AppRoutes.INVOICE_DISPLAY
    },
    {
      name: 'Suppliers',
      screen: 'MCFW0758',
      screenId: '0758',
      path: AppRoutes.SUPPLIERS
    },
    {
      name: 'Print-Preview-Supplier-Invoices',
      screen: 'MCFR-0681',
      screenId: '0681',
      path: AppRoutes.PRINT_PREVIEW_SUPPLIER_INVOICES
    },
    {
      name: 'List OF Payment Vouchers',
      screen: 'MCFS-0649',
      screenId: '0649',
      path: AppRoutes.LIST_OF_EXPENSE_VOUCHERS
    },
    {
      name: 'Edit Payment Details',
      screen: 'MCFR-0697',
      screenId: '0697',
      path: AppRoutes.EDIT_PAYMENT_DETAILS
    },
    {
      name: 'Print Preview Invoice Report',
      screen: 'MCFR-1367',
      screenId: '1367',
      path: AppRoutes.PRINT_PREVIEW_INVOICE_REPORT
    },
    {
      name: 'List of new expense vouchers',
      screen: 'MCFR-0510',
      screenId: '0510',
      path: AppRoutes.LIST_OF_NEW_EXPENSE_VOUCHERS
    },
    {
      name: 'Change Invoice Details',
      screen: 'MCFW-1251',
      screenId: '1251',
      path: AppRoutes.CHANGE_INVOICE_DETAILS
    }
  ];

  const selectItemData = [
    { label: t('extraBtn'), value: '1', disabled: true },
    { label: t('goToScreen'), value: '2' },
    { label: t('changeYear'), value: '3', disabled: location.pathname !== '/' },
    ...(user?.kalendarYear
      ? [
        {
          label: t('changeKalendarYear2'),
          value: '6',
          disabled: location.pathname !== '/'
        }
      ]
      : []),
    { label: t('changeInstitution'), value: '4', disabled: true },
    { label: t('exit'), value: '5' }
  ];
  const selectItemForPayments = [{ label: t('PaymentDetailsQuery'), value: '7' }];
  const languageSelectItem = [
    { label: t('english'), value: 'en' },
    { label: t('hebrew'), value: 'he' }
    // { label: t("arabic"), value: "ar" },
  ];
  const handleChangeLanguage = (event: any) => {
    const currentValue = event.target.value;
    updateLanguage(currentValue);
    toggleRtl(currentValue === 'en' ? false : true);
  };
  const handleChangeSelect = (event: any) => {
    const currentValue = event.target.value;
    switch (currentValue) {
      case '1':
        break;
      case '2':
        toggleFlags('goToScreen', true);
        break;
      case '3':
        location.pathname === '/' && toggleFlags('configChangeHeader', true);
        toggleFlags('isKalendarYear', false);
        break;
      case '4':
        // toggleFlags("showChooseDataBase", true);
        break;
      case '5':
        toggleLogout();
        break;
      case '6':
        location.pathname === '/' && toggleFlags('configChangeHeader', true);
        toggleFlags('isKalendarYear', true);
        break;
      case '7':
        navigate(AppRoutes.EDIT_PAYMENT_DETAILS);
        break;
      default:
        break;
    }
  };
  function getScreenId() {
    return routeNames?.find(elem => {
      const regexString = `^${elem.path.replace(/:\w+/g, '[^/]+')}$`;
      const regex = new RegExp(regexString);
      return regex.test(location.pathname);
    })?.screenId;
  }
  const dataBaseValue = user?.database;

  const headerColorClass = dataBaseValue?.includes('_P')
    ? classes.greenColor
    : dataBaseValue?.includes('_M')
      ? classes.blueColor
      : '';
  const databasePrefix = dataBaseValue?.includes('_P')
    ? t('databasePrefix')
    : dataBaseValue?.includes('_M')
      ? t('databaseSuffix')
      : '';

  const toggleLogout = () => {
    toggleFlags({
      showValidationError: true,
      errorData: {
        title: t('confirmLogoutText'),
        dialogTitle: t('confirmLogoutTitle'),
        confirmText: t('confirmText'),
        cancelText: t('cancelText'),
        type: 'success',
        confirmCallback: handleLogout,
        icon: () => <IoLogOutOutline />,
        showCancelButton: false
      }
    });
  };

  return (
    <div className={attachMultipleClasses(classes.header, headerColorClass, classes[`scale-${uiScale}`])}>
      <div className={classes.rightSideContainer}>
        <div className={classes.logoContainer}>
          <img
            onClick={() => navigate(AppRoutes.HOME)}
            className={classes.headerIcon}
            src={METROPOLINET_ICON_2}
          />
        </div>
        <div className={classes.renderItems}>
          <div className={classes.displayItem}>
            <span className={classes.displayItemTitle}>{t('institution')}</span>
            <span
              className={classes.displayItemContent}
            >{`${user.instiCode} ${user.instiName}`}</span>
          </div>
          <div className={classes.displayItem}>
            <span className={classes.displayItemTitle}>{t('version')}</span>
            <span className={classes.displayItemContent}>
              {import.meta.env.VITE_VERSION_DATE || ' '}
            </span>
          </div>
          <div className={classes.displayItem}>
            <span className={classes.displayItemTitle}>{t('fiscalYear')}</span>
            <span className={classes.displayItemContent}>{user.instiYear || ' '}</span>
          </div>
          {user.kalendarYear && (
            <div className={classes.displayItem}>
              <span className={classes.displayItemTitle}>{t('changeKalendarYear')}</span>
              <span className={classes.displayItemContent}>{user.kalendarYear || ' '}</span>
            </div>
          )}
          <div className={classes.divider}></div>
          <div className={classes.displayItem}>
            <span className={classes.displayItemTitle}>{t('dbType')}</span>
            <span className={attachMultipleClasses(classes.databaseTextContainer, classes.displayItemContent)}>{databasePrefix || ' '}</span>
          </div>
          <div className={classes.displayItem}>
            <span className={classes.displayItemTitle}>{t('todayDate')}</span>
            <span className={classes.displayItemContent}>
              {getFormatedDate(new Date(), import.meta.env.VITE_DEFAULT_DATE_FORMAT) || ' '}
            </span>
          </div>
          {getScreenId() && (
            <div className={classes.displayItem}>
              <span className={classes.displayItemTitle}>{t('screen_Title')}</span>
              <span className={classes.displayItemContent}>{getScreenId()}</span>
            </div>
          )}
          <Select
            variant="borderless"
            size="sm"
            options={selectItemForPayments}
            onChange={handleChangeSelect}
            renderControl={() => <BsThreeDots className={classes.menuTrigger} />}
          ></Select>
        </div>
      </div>
      <div className={classes.actionItems}>
        <div className={classes.searchInput}>
          <Input
            size="fullWidth"
            placeholder={t('screenSearch')}
            renderIcon={() => <IoSearch size={15} />}
          />
        </div>
        <Select
          renderControl={() => <div className={classes.userIconContainer}>
            {user?.userName?.slice(0, 2)?.toUpperCase()}
          </div>}
          options={selectItemData}
          onChange={handleChangeSelect}
        ></Select>
      </div>
    </div>
  );
};

export default Header;
