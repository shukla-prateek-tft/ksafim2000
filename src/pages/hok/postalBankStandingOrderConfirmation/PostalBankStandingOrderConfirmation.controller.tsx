//MCFW-0653
import PostalBankStandingOrderConfirmationUI from './PostalBankStandingOrderConfirmation.render';
import { GlobalLoader } from '@/components';

const PostalBankStandingOrderConfirmation = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <PostalBankStandingOrderConfirmationUI />
    </>
  );
};

export default PostalBankStandingOrderConfirmation;
