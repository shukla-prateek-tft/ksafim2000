//MCFW-0644
import DepositFromCreditUI from './DepositFromCredit.render';
import { GlobalLoader } from '@/components';

const DepositFromCredit = () => {
  const handleSave = () => {
    // Your save logic...
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <DepositFromCreditUI />
    </>
  );
};

export default DepositFromCredit;
