import classes from './CreditPaymentConfirmation.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { REGEX } from '@/constants/appConstant';
const CreditPaymentConfirmationUI = ({ renderActionItems }: any) => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.mainContainer}>
      <fieldset className={classes.fieldSet}>
        <legend className={classes.legend}>{t('T_MCFL0712_TITLE')}</legend>
        <Input
          orientation="horizontal"
          label={t('L_MCFL0712_LABEL_1')}
          size='md'
          type='text'
          pattern={REGEX.allCharacter}
          maxLength={7}
        />
      </fieldset>
      <div className={classes.innerContainer}>
        <p>{t('L_REMARK')}</p>
        <div>
          <p>{t('L_MCFL0712_REMARK')}</p>
        </div>
      </div>
      <BottomToolBar showPagination={false} renderActionItems={renderActionItems} />
    </div>
  );
};

export default CreditPaymentConfirmationUI;
