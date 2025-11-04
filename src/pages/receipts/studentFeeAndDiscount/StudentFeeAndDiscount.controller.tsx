//MCSQ-0107
import StudentFeeAndDiscountUI from './StudentFeeAndDiscount.render';
import { GlobalLoader } from '@/components';

const StudentFeeAndDiscount = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <StudentFeeAndDiscountUI />
    </>
  );
};

export default StudentFeeAndDiscount;
