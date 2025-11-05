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
    {}
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
      const regexString = `^${elem?.path?.replace(/:\w+/g, '[^/]+')}$`;
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
