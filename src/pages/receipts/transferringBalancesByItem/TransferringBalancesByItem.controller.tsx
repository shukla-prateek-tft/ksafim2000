//MCFW-1374
import TransferringBalancesByItemUI from './TransferringBalancesByItem.render';
import { GlobalLoader } from '@/components';

const TransferringBalancesByItem = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <TransferringBalancesByItemUI />
    </>
  );
};

export default TransferringBalancesByItem;
