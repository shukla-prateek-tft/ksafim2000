//MCFW-1331
import ListOfScholarshipsForStudentsUI from './ListOfScholarshipsForStudents.render';
import { GlobalLoader } from '@/components';

const ListOfScholarshipsForStudents = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <ListOfScholarshipsForStudentsUI />
    </>
  );
};

export default ListOfScholarshipsForStudents;
