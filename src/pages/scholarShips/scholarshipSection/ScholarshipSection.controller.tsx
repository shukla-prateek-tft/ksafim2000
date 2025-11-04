//MCFW-0639
import ScholarshipSectionUI from './ScholarshipSection.render';
import { GlobalLoader } from '@/components';

const ScholarshipSection = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <ScholarshipSectionUI />
    </>
  );
};

export default ScholarshipSection;
