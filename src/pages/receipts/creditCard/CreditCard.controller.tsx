// MCFW-1387
import CancelingAPaymentOrderUI from './CreditCard.render';
import { GlobalLoader } from '@/components';

const CreditCard = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <CancelingAPaymentOrderUI />
    </>
  );
};

export default CreditCard;
