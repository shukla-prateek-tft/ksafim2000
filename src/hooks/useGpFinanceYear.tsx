import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useAuth } from './useAuth';

export const useGpFinanceYear = () => {
  const { toggleFlags } = useAuth();
  const { t } = useTranslation('common');
  const { user } = useAuth();
  
  function validateFinanceDate(
    dateToValidate: Date,
  ): boolean {
    const kalendarYear =  user?.kalendarYear;
  // gp_getparam -> check work with financial year
   const workWithFinanceYear = true;
    if (!workWithFinanceYear) {
      return true;
    }

    if (!kalendarYear) {
      toggleFlags('showValidationError', true);
      toggleFlags('errorData', {
        message: t('L_DATE_CLOSE'),
      });
      return false;
    }

    const fromDate = moment(`${kalendarYear}-01-01`, 'YYYY-MM-DD');
    const toDate = moment(`${kalendarYear}-12-31`, 'YYYY-MM-DD');
    const currentDate = moment(dateToValidate);

    if (currentDate.isBetween(fromDate, toDate, undefined, '[]')) {
      return true;
    }

    toggleFlags('showValidationError', true);
    toggleFlags('errorData', {
      message: t('L_CLOSE_YEAR'),
    });
    return false;
  }

  return { validateFinanceDate };
};
