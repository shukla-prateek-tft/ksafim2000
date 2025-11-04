//MCFW-1388
import CutoutEnteringConcentrationUI from './CutoutEnteringConcentration.render';
import { GlobalLoader } from '@/components';

const CutoutEnteringConcentration = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <CutoutEnteringConcentrationUI />
    </>
  );
};

export default CutoutEnteringConcentration;
