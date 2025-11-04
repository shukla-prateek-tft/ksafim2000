import { useTranslation } from 'react-i18next';
import type { TableColumnType } from '@/pages/type';
import type { responseDataInterface } from '../type';
export const ClassRoomsInTheInstitutionColumn = (): TableColumnType<responseDataInterface>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'Class_Code',
      label: t('V_CLASS_CODE'),
      width: '33%',
      align: 'center',
      sortable: true
    },
    {
      key: 'Class_Num',
      label: t('V_CLASS_NUM'),
      width: '34%',
      align: 'center',
      sortable: true
    },
    {
      key: 'Finish',
      label: t('L_FINISH'),
      width: '33%',
      align: 'center',
      sortable: true
    }
  ];
};
