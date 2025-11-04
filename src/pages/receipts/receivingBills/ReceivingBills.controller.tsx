// MCFW-0621
import ReceivingBillsUI from './ReceivingBills.render';
import { GlobalLoader } from '@/components';

const ReceivingBills = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <ReceivingBillsUI />
    </>
  );
};

export default ReceivingBills;


