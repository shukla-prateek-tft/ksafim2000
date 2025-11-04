import { useTranslation } from 'react-i18next';

export const ListOfDonationReceiptsColumn = () => {
  const { t } = useTranslation('common');
  return [
    {
      key: 'code1',
      label: t('L_DATE'),
      width: '9%'
    },
    {
      key: 'code2',
      label: t('L_VALUE_DATE'),
      width: '9%'
    },
    {
      key: 'code3',
      label: t('L_DOCUMENT'),
      width: '9%'
    },
    {
      key: 'code4',
      label: t('L_BANK_OPERATION'),
      width: '9%'
    },
    {
      key: 'code5',
      label: t('L_DEBIT'),
      width: '9%'
    },
    {
      key: 'code6',
      label: t('L_CREDIT'),
      width: '9%'
    },
    {
      key: 'code7',
      label: t('L_REST'),
      width: '9%'
    },
    {
      key: 'code8',
      label: t('L_MERGE'),
      width: '9%'
    },
    {
      key: 'code9',
      label: t('L_INSERT_TYPE'),
      width: '9%'
    },
    {
      key: 'code10',
      label: t('L_USER'),
      width: '9%'
    },
    {
      key: 'code11',
      label: t('V'),
      width: '9%'
    }
  ];
};
