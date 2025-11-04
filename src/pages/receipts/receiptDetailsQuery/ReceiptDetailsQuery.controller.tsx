// MCFR-0670
import ReceiptDetailsQueryUI from './ReceiptDetailsQuery.render';
import { GlobalLoader } from '@/components';

const ReceiptDetailsQuery = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <ReceiptDetailsQueryUI />
    </>
  );
};

export default ReceiptDetailsQuery;


