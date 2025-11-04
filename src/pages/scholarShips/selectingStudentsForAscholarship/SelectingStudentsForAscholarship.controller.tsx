// MCFL-1329

import SelectingStudentsForAscholarshipUI from './SelectingStudentsForAscholarship.render';
import { Checkbox } from '@/components';

const SelectingStudentsForAscholarship = () => {
  const customRowRender = (key: string, row: any) => {
    switch (key) {
      case 'code1':
        return <Checkbox checked={row?.code1} />;
      case 'code7':
        return <Checkbox checked={row?.code7} />;
    }
  };
  return <SelectingStudentsForAscholarshipUI customRowRender={customRowRender} />;
};

export default SelectingStudentsForAscholarship;
