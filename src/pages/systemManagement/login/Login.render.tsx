import React from 'react';
import classes from './login.module.scss';
import { AnimationCard, Button } from '@/components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LoginAnimation } from '@/assets/animations';
import { LoginUIProps } from './type';
import { Input } from '@/ui/Input';


const LoginUI: React.FC<LoginUIProps> = ({
  handleSubmit,
  register,
  errors,
  loading,
  showForgotPassward
}) => {
  const { t } = useTranslation('login');
  const { t: validationTranslations } = useTranslation('validations');
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginBox}>
        <div className={classes.loginImage}>
          <AnimationCard className={classes.animationComponent} data={LoginAnimation} />
        </div>
        <div className={classes.loginForm}>
          <h1>{t('title')}</h1>
          <form onSubmit={handleSubmit}>
            <div className={classes.formControl}>
              <Input
                orientation="vertical"
                type="email"
                placeholder={t('emailInputPlaceholder')}
                label={t('emailInputLabel')}
                name="email"
                register={register}
                error={validationTranslations(errors?.email?.message)}
              />
            </div>

            <div className={classes.formControl}>
              <Input
                orientation="vertical"
                type="password"
                placeholder={t('passwordInputPlaceholder')}
                label={t('passwordInputLabel')}
                name="password"
                register={register}
                error={validationTranslations(errors?.password?.message)}
              />
            </div>

            {showForgotPassward && (
              <div className={classes.linkContainer}>
                <Link className={classes.changePassword} to="/forgot-password">
                  {t('changePassword')}
                </Link>
              </div>
            )}

            <Button
              loading={loading}
              type="submit"
              className={classes.loginButton}
              title={t('btnTitle')}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
