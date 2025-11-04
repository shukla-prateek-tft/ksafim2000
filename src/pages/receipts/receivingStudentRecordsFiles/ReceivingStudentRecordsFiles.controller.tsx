//MCFW-1337
import ReceivingStudentRecordsFilesUI from './ReceivingStudentRecordsFiles.render';
import { Input } from '@/ui/Input';
import { getInputPattern } from '@/utils/commonHelper';

const ReceivingStudentRecordsFiles = () => {
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return <Input type="checkbox" />;
      case 'code2':
        return <Input size="fullWidth" type='text' maxLength={10}/>;
      case 'code3':
        return <Input size="fullWidth" type='number' pattern={getInputPattern(7)} />;
      case 'code4':
        return <Input size="fullWidth" />;
      case 'code5':
        return <Input size="fullWidth" disabled />;
    }
  };

  return (
    <>
      <ReceivingStudentRecordsFilesUI customRowRender={customRowRender} />
    </>
  );
};

export default ReceivingStudentRecordsFiles;
