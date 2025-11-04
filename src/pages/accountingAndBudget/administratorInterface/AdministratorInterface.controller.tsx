// MCFW-1346
import React from 'react';
import AdministratorInterfaceUI from './AdministratorInterface.render';
import { GlobalLoader } from '@/components';

const AdministratorInterface = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <AdministratorInterfaceUI />
    </>
  );
};

export default AdministratorInterface;


