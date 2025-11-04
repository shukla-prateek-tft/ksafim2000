//MCFW-0639
import { GlobalLoader } from '@/components/loader';
import ScholarshipSectionUI from './ScholarshipSection.render';

const ScholarshipSection = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <ScholarshipSectionUI />
    </>
  );
};

export default ScholarshipSection;
