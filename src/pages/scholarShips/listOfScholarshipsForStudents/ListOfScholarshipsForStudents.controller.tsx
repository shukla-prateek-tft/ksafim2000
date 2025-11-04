//MCFW-1331
import { GlobalLoader } from '@/components/loader';
import ListOfScholarshipsForStudentsUI from './ListOfScholarshipsForStudents.render';
const ListOfScholarshipsForStudents = () => {
  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <ListOfScholarshipsForStudentsUI />
    </>
  );
};

export default ListOfScholarshipsForStudents;
