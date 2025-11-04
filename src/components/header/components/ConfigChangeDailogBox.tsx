// MCFW-1242
// MCFW-0052
import classes from './ConfigChangeDialogBox.module.scss';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks';
import { useState, useMemo, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { STORAGE_KEY } from '@/constants/appConstant';
import { getInputPattern, getLengthPattern } from '@/utils/commonHelper';
import secureLocalStorage from 'react-secure-storage';
import { FaInfo } from 'react-icons/fa';
import { DialogBox } from '@/ui/DialogBox';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { BottomToolBar } from '@/ui/BottomToolBar';
interface ConfigChangeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isKalendarYear: boolean;
}
const ConfigChangeDailogBox: React.FC<ConfigChangeDialogProps> = ({
  isOpen,
  onClose,
  isKalendarYear
}) => {
  const { t } = useTranslation('configChangeDialogBox');
  const { t: t2 } = useTranslation('homeScreen');
  const { t: t3 } = useTranslation('mainHeader');
  const { t: t4 } = useTranslation('openSupplier');
  const { user, updateUser, toggleFlags } = useAuth();
  const { enums } = useSelector((state: any) => state.global);
  const [localConfigValues, setLocalConfigValues] = useState({
    instiYear: user?.instiYear,
    instiCode: user?.instiCode,
    hebrewYear: user?.hebrewYear,
    kalendarYear: user?.kalendarYear
  });
  useEffect(() => {
    setLocalConfigValues(prev => {
      return {
        ...prev,
        instiYear: user?.instiYear,
        instiCode: user?.instiCode,
        hebrewYear: user?.hebrewYear,
        kalendarYear: user?.kalendarYear
      };
    });
  }, [isOpen]);
  const renderActionItems = () => {
    return (
      <div className={classes.renderItem}>
        <BackToPageButton onClick={onClose} />
        <SaveButton onClick={handleSaveChanges} />
      </div>
    );
  };
  const handleChangeConfig = (event: any) => {
    const { value, id } = event?.target;
    setLocalConfigValues({ ...localConfigValues, [id]: value });
  };
  //Will use this modal in future
  const showConfirmPopup = () => {
    toggleFlags({
      showValidationError: true,
      errorData: {
        title: t2('instiYearWaringMessage'),
        dialogTitle: t2('confirm_Title'),
        confirmText: t3('yesText'),
        cancelText: t4('cancelText'),
        type: 'success',
        confirmCallback: handleSaveChanges,
        icon: () => <FaInfo />,
        showCancelButton: false
      }
    });
  };
  const handleSaveChanges = () => {
    const { kalendarYear, instiYear } = localConfigValues || {};
    const isValidYear = (year: number) => year >= 1996 && year <= 2100;

    if (isKalendarYear && !isValidYear(Number(kalendarYear))) {
      toast.error(t('outOfRangeDateError'), { autoClose: 1200 });
      return;
    }

    if (!isKalendarYear && !isValidYear(Number(instiYear))) {
      toast.error(t('outOfRangeDateError'), { autoClose: 1200 });
      return;
    }

    updateUser({
      ...user,
      instiYear: localConfigValues?.instiYear,
      instiCode: localConfigValues?.instiCode,
      hebrewYear: localConfigValues?.hebrewYear,
      kalendarYear: localConfigValues?.kalendarYear
    });
    user.instiYear = localConfigValues?.instiYear;
    user.instiCode = localConfigValues?.instiCode;
    user.hebrewYear = localConfigValues?.hebrewYear;
    user.kalendarYear = localConfigValues?.kalendarYear;
    secureLocalStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    if (!isKalendarYear && user.currentInstiYear != localConfigValues?.instiYear) {
      onClose();
      toast.warning(t('warningMessage'), { autoClose: 1200 });
    } else {
      onClose();
      toast.success(t('successMessage'), { autoClose: 1200 });
    }
  };

  const updatedHebrewYear = useMemo(
    () =>
      enums.hebrewYear?.map((elem: any) => ({
        value: elem?.label,
        label: elem?.label
      })) || [],
    [enums.hebrewYear]
  );

  return (
    <DialogBox
      onClose={onClose}
      title={!isKalendarYear ? t('headerText') : t('KALENDAR_YEAR_HEADER')}
      isOpen={isOpen}
    >
      <main className={classes.main}>
        <fieldset>
          {isKalendarYear ? (
              <Input 
                size="md"
                id="kalendarYear"
                label={t('L_KALENDAR_YEAR')}
                type="range-number"
                step="1"
                min="1900"
                max="2099"
                className={`${classes.smallInput} ${classes.inputWithStyledArrows}`}
                value={localConfigValues?.kalendarYear || undefined}
                onChange={handleChangeConfig}
                orientation="horizontal"
                pattern={getLengthPattern(4)}
              />
          ) : (
            <>
              <Select
                size="md"
                id="hebrewYear"
                value={localConfigValues?.hebrewYear}
                label={t('schoolYearInputLabel')}
                options={updatedHebrewYear}
                onChange={handleChangeConfig}
                orientation="horizontal"
              />
              <Input
                size="md"
                id="instiYear"
                label={t('systemYearInputLabel')}
                type="range-number"
                min="1900"
                max="2099"
                step="1"
                placeholder={t('systemYearPlaceholder')}
                value={localConfigValues?.instiYear || undefined}
                onChange={handleChangeConfig}
                orientation="horizontal"
                pattern={getLengthPattern(4)}
              />
              <div className={classes.aligner}>
                <Input
                  size="md"
                  id="instiCode"
                  label={t('institutionInputLabel')}
                  disabled
                  value={localConfigValues?.instiCode || undefined}
                  placeholder={t('institutionPlaceholder')}
                  onChange={handleChangeConfig}
                  orientation="horizontal"
                  pattern={getInputPattern(4)}
                />
                <Input size="sm" disabled value={user?.instiName || undefined} />
              </div>
            </>
          )}
        </fieldset>
      </main>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default ConfigChangeDailogBox;
