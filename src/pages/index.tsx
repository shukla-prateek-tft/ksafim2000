import React, { Suspense, useEffect } from 'react';
import { useAuth } from '../hooks';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from './routes';
import { GlobalLoader } from '@/components/loader';
import { ChooseDatabase } from './systemManagement/chooseDb';
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
      {token && (
        <ChooseDatabase
          showClose={token ? true : false}
          onClose={handleCloseDataBase}
          isOpen={flags.showChooseDataBase}
          onSave={handleSaveDataBase}
        />
      )}
      <Suspense fallback={<GlobalLoader loading={true} showOnFullScreen />}>
        {routes('radjdj', user)}
      </Suspense>
    </div>
  );
});

export default Pages;
