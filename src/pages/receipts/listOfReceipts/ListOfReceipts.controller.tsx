//MCFR-0687
import { Input } from '@/ui/Input';
import ListOfReceiptsUI from './ListOfReceipts.render';
import { Select } from '@/ui/Select';

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
  'code10'
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

const ListOfReceipts = () => {
  const customRowRenderer = (key: string, row: any) => {
    switch (key) {
      case 'code1':
        return <Select options={[]} size="fullWidth" />;
      case 'code2':
       return <Input type="checkbox" />;
      default:
        return <>{(row as Record<string, string>)[key]}</>;
    }
  };
  return <ListOfReceiptsUI data={data} customRowRenderer={customRowRenderer} />;
};

export default ListOfReceipts;
