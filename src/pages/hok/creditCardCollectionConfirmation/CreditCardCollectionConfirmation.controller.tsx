//MCFW-1203
import CreditCardCollectionConfirmationUI from './CreditCardCollectionConfirmation.render';
import { CreditCardCollectionConfirmationRow } from './type';
import { GlobalLoader } from '@/components';

const CreditCardCollectionConfirmation = () => {
  const dummyData: CreditCardCollectionConfirmationRow[] = [
    {
      id: 1,
      familyName: 'Levi',
      privateName: 'David',
      paymentDate: '2025-01-05',
      creditAccount: '1234-****-****-5678',
      validDate: '2026-12',
      paymentSum: 1200.5,
      confirmationNum: 'CNF-1001',
      statusDesc: 'Approved',
      token: 'TK-ABC123',
      payApproved: true,
      toPay: false
    },
    {
      id: 2,
      familyName: 'Cohen',
      privateName: 'Sara',
      paymentDate: '2025-01-10',
      creditAccount: '9876-****-****-5432',
      validDate: '2027-08',
      paymentSum: 850,
      confirmationNum: 'CNF-1002',
      statusDesc: 'Pending',
      token: 'TK-XYZ789',
      payApproved: false,
      toPay: true
    }
  ];

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />
      <CreditCardCollectionConfirmationUI data={dummyData} />
    </>
  );
};

export default CreditCardCollectionConfirmation;
