import { ColumnProps, TableColumnType } from '@/pages/type';
import { CreditCardCollectionConfirmationRow } from '../type';

export const CreditCardCollectionConfirmationColumn = ({ t }: ColumnProps): TableColumnType<CreditCardCollectionConfirmationRow>[] => {
  return [
    {
      key: 'id',
      label: t('ID'),
      width: '8%'
    },
    {
      key: 'familyName',
      label: t('L_NAME'),
      width: '15%'
    },
    {
      key: 'paymentDate',
      label: t('L_DATE'),
      width: '10%'
    },
    {
      key: 'creditAccount',
      label: t('L_CREDIT_NO'),
      width: '10%'
    },
    {
      key: 'validDate',
      label: t('L_VALID_DATE'),
      width: '10%'
    },
    {
      key: 'paymentSum',
      label: t('L_MONEY_AMNT'),
      width: '8%'
    },
    {
      key: 'confirmationNum',
      label: t('L_OK_NUMBER'),
      width: '10%'
    },
    {
      key: 'statusDesc',
      label: t('L_STATUS'),
      width: '9%'
    },
    {
      key: 'token',
      label: t('L_TOKEN'),
      width: '10%'
    },
    {
      key: 'payApproved',
      label: t('L_APPROVED'),
      width: '5%'
    },
    {
      key: 'toPay',
      label: t('L_PAYED'),
      width: '5%'
    }
  ];
};
