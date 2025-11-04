//MCFW - 1224
import React from 'react';
import DepositConfirmationDeferredUI from './DepositConfirmationDeferred.render';
import {  GlobalLoader } from '@/components';


import { useNavigate } from 'react-router-dom';

const DepositConfirmationDeferred = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Your save logic...
  };


  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <DepositConfirmationDeferredUI />
    </>
  );
};

export default DepositConfirmationDeferred;
