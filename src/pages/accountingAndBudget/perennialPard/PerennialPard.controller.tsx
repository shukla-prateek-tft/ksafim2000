//MCFW-1386
import PerennialPardUI from './PerennialPard.render';
import { GlobalLoader } from '@/components';

const PerennialPard = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <PerennialPardUI />
    </>
  );
};

export default PerennialPard;
