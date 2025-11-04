//MCSR-0110
import FinancialTransactionUI from './FinancialTransaction.render';
import { Input } from '@/ui/Input';
import { CustomRowRenderer, ParentDetailKey, ParentDetailRow } from './type';
const keys = [
  'code1',
  'code2',
  'code3',
  'code4',
  'code5',
  'code6',
  'code7',
  'code8',
  'code9',
  'code10',
  'code11'
];
const hebrewLetters = [
  'א',
  'ב',
  'ג',
  'ד',
  'ה',
  'ו',
  'ז',
  'ח',
  'ט',
  'י',
  'כ',
  'ל',
  'מ',
  'נ',
  'ס',
  'ע',
  'פ',
  'צ',
  'ק',
  'ר',
  'ש',
  'ת'
];
const getRandomHebrewWord = (length: number = 4) => {
  return Array.from(
    { length },
    () => hebrewLetters[Math.floor(Math.random() * hebrewLetters.length)]
  ).join('');
};

const data = Array.from({ length: 130 }, () => {
  const obj: Record<string, string> = {};
  keys.forEach(key => {
    obj[key] = getRandomHebrewWord(Math.floor(Math.random() * 4) + 3); // words of 3–6 characters
  });
  return obj;
});

const FinancialTransaction: React.FC = () => {
  const customRowRender: CustomRowRenderer = (
    key: ParentDetailKey,
    row: ParentDetailRow,
    index: number
  ) => {
    switch (key) {
      case 'L_SERVICE_TYPE':
        return (
          <>
            <Input type="text" value={''} />
            <Input type="text" value={''} />
          </>
        );
      default:
        return null;
    }
  };
  return <FinancialTransactionUI data={data} customRowRender={customRowRender} />;
};

export default FinancialTransaction;
