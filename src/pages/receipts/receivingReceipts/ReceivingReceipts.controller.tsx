//MCFW-1381
import ReceivingReceiptsUI from './ReceivingReceipts.render';
import { GlobalLoader } from '@/components';

const ReceivingReceipts = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <ReceivingReceiptsUI />
    </>
  );
};

export default ReceivingReceipts;
