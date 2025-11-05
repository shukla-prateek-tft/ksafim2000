import React, { SetStateAction } from 'react';
import classes from './AdminInterfaceLogin.module.scss';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks';
import { Controller } from 'react-hook-form';
import OTPInput from '../OtpInput/OtpInput';
import { TiPlus } from 'react-icons/ti';
import { attachMultipleClasses } from '@/Languages';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
import { Input } from '@/ui/Input';

interface AdminInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  showClose?: boolean;
  handleSubmit?: () => void;
  register?: any;
  control?: any;
  errors?: {
    [key: string]: any;
  };
  isOtpRequired?: boolean;
  setShowOtpInput: React.Dispatch<SetStateAction<boolean>>;
}

const AdminInterfaceLogin: React.FC<AdminInterfaceProps> = ({
  onClose,
  isOpen,
  showClose,
  handleSubmit,
  register,
  control,
  errors,
  isOtpRequired,
  setShowOtpInput
}) => {
  const { t } = useTranslation('adminLoginInterface');
  const { toggleFlags, user } = useAuth();
  const { t: validationTranslations } = useTranslation('validations');

  const handleGoBackToScreen = () => {
    toggleFlags('showAdminInterfaceLogin', false);
    toggleFlags('showChooseDataBase', true);
    setShowOtpInput(false);
  };

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        {!(import.meta.env.VITE_IS_PILOT === 'true') && (
          <BackToPageButton onClick={handleGoBackToScreen} />
        )}
        <SaveButton onClick={handleSubmit} type={'submit'} />
      </div>
    );
  };
  const rowColorClass = user?.database?.includes('_P')
    ? classes.greenColor
    : user?.database?.includes('_M')
      ? classes.blueColor
      : '';
  const databasePrefix = user?.database?.includes('_P')
    ? t('parentTitle')
    : user?.database?.includes('_M')
      ? t('municipalTitle')
      : '';
  const CurrentDataBase =
    import.meta.env.VITE_IS_PILOT === 'true' ? import.meta.env.VITE_DATABASE_NAME : user?.database;
  return (
    <DialogBox
      closeOnOverlay={showClose}
      showClose={showClose}
      onClose={onClose}
      isOpen={isOpen}
      title={
        <span>
          {t('ksafimTitle')}
          <TiPlus color="red" />
        </span>
      }
    >
      <div className={classes.mainContainer}>
        <span className={attachMultipleClasses(rowColorClass, classes.titleBox)}>
          {CurrentDataBase}
          {databasePrefix}
        </span>
        <div className={classes.inputContainers}>
          {!isOtpRequired && (
            <>
              <Input
                size="lg"
                orientation="horizontal"
                name="userName"
                label={t('emailLabel')}
                register={register}
                error={validationTranslations(errors?.email?.message)}
                maxLength={15}
              />
              <Input
                size="lg"
                type="password"
                orientation="horizontal"
                label={t('passwordLabel')}
                name="password"
                register={register}
                error={validationTranslations(errors?.password?.message)}
                maxLength={16}
              />
            </>
          )}
          {isOtpRequired && control && (
            <div className={classes.otpContainer}>
              <label className={classes.inputLabel}>OTP</label>
              <Controller
                name="otp"
                control={control}
                render={({ field }) => (
                  <OTPInput
                    length={6}
                    onChange={otp => {
                      field.onChange(otp);
                    }}
                  />
                )}
              />
              {errors?.otp && (
                <p className={classes.errorText}>{validationTranslations(errors.otp.message)}</p>
              )}
            </div>
          )}
        </div>
        <div className={classes.contentContainer}>
          <p className={classes.textImportant}>{t('importantText')}</p>
          <p>{t('sendingToParents')}</p>
          <p>{t('attachPayment')}</p>
          <p>{t('information')}</p>
          <p className={classes.informationText}>{t('contactSupport')}</p>
        </div>
      </div>
      {renderActionItems()}
    </DialogBox>
  );
};

export default AdminInterfaceLogin;
