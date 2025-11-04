// MCFW-0604
import CollectionPlansUI from './CollectionPlans.render';
import { GlobalLoader } from '@/components';

const CollectionPlans = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <CollectionPlansUI />
    </>
  );
};

export default CollectionPlans;


