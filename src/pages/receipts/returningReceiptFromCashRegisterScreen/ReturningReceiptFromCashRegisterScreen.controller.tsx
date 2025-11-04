// MCFW-1185
import ReturningReceiptFromCashRegisterScreenUI from './ReturningReceiptFromCashRegisterScreen.render';
import { GlobalLoader } from '@/components';

const ReturningReceiptFromCashRegisterScreen = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <ReturningReceiptFromCashRegisterScreenUI />
    </>
  );
};

export default ReturningReceiptFromCashRegisterScreen;
