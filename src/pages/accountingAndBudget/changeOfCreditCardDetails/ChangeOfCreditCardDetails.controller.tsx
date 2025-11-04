//MCFW-1264
import React from 'react';
import ChangeOfCreditCardDetailsUI from './ChangeOfCreditCardDetails.render';
import { GlobalLoader } from '@/components';

const ChangeOfCreditCardDetails = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <ChangeOfCreditCardDetailsUI />
    </>
  );
};

export default ChangeOfCreditCardDetails;
