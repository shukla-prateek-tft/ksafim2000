//MCFW-0609
import CorrectionOfStudentChargesUI from './CorrectionOfStudentCharges.render';
import { GlobalLoader } from '@/components';

const CorrectionOfStudentCharges = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <CorrectionOfStudentChargesUI />
    </>
  );
};

export default CorrectionOfStudentCharges;
