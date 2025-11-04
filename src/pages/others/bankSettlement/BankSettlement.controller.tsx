// MCFW-0627
import BankSettlementUI from './BankSettlement.render';
import { GlobalLoader } from '@/components';

const BankSettlement = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <BankSettlementUI />
    </>
  );
};

export default BankSettlement;
