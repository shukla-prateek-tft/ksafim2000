import { TableColumnType } from '@/pages/type';
import { useTranslation } from 'react-i18next';
import { TransferBetweenCentralizedSectionsDataType } from '../types';
export const TransferBetweenCentralizedSectionsColumn = (): TableColumnType<Partial<TransferBetweenCentralizedSectionsDataType>>[] => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_MCFW1382_CELL1'),
      width: '18',
      align: 'center'
    },
    {
      key: 'code2',
      label: t('L_STUDENT_NAME'),
      width: '18%',
      align: 'center'
    },
    {
      key: 'code3',
      label: t('V_CLASS_CODE'),
      width: '18%',
      align: 'center'
    },
    {
      key: 'code4',
      label: t('L_MOVE_SUM'),
      width: '18%',
      align: 'center'
    },
    {
      key: 'code5',
      label: t('L_MCFW1382_CELL2'),
      width: '18%',
      align: 'center'
    },
    {
      key: 'code6',
      label: 'V',
      width: '5%',
      align: 'center'
    },
    {
      key: 'code7',
      width: '5%',
      align: 'center'
    }
  ];
};
