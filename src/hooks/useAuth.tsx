import { useContext } from 'react';
import { AuthContext, GlobalComponentsContext } from '../store/contexts';
import { useTranslation } from 'react-i18next';

export const useAuth = () => {
  const { t } = useTranslation('validations');
  if (!AuthContext) {
    throw new Error(t('authContextError'));
  }
  const authContextData = useContext(AuthContext);

  const isMunicipality = authContextData?.user?.database?.includes('_M')?true:false;
  const globalContextData = useContext(GlobalComponentsContext);
  return { ...authContextData, ...globalContextData,isMunicipality };
};
