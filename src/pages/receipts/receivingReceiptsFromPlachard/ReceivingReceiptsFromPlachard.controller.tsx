// MCFW-1295
import CancelingAPaymentOrderUI from './ReceivingReceiptsFromPlachard.render';
import { GlobalLoader } from '@/components';

const ReceivingReceiptsFromPlachard = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <CancelingAPaymentOrderUI />
    </>
  );
};

export default ReceivingReceiptsFromPlachard;
