import React, { Suspense, useEffect } from 'react';
import { useAuth } from '../hooks';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalLoader } from '@/components';
import ChooseDatabase from './chooseDb/ChooseDatabase';
import { routes } from './routes';
const Pages = React.memo(() => {
  const { user, flags, toggleFlags, refreshUserDetails, handleLogout } = useAuth();
  const token = user?.token;
  const handleSaveDataBase = async () => {
    toggleFlags('showChooseDataBase', false);
    if (!token) {
      toggleFlags('showAdminInterfaceLogin', true);
    }
  };
  const handleCloseDataBase = () => {
    toggleFlags('showChooseDataBase', false);
  };
  useEffect(() => {
    checkUserLogin();
  }, []);
  const checkUserLogin = async () => {
    const userData = await refreshUserDetails();

    if (!userData) {
      handleLogout(false);
    }
  };

  return (
    <div dir={'rtl'}>
      {!token && (
        <ChooseDatabase
          showClose={token ? true : false}
          onClose={handleCloseDataBase}
          isOpen={flags.showChooseDataBase}
          onSave={handleSaveDataBase}
        />
      )}
      <Suspense fallback={<GlobalLoader loading={true} showOnFullScreen />}>
        {routes(token, user)}
      </Suspense>
    </div>
  );
});

export default Pages;
