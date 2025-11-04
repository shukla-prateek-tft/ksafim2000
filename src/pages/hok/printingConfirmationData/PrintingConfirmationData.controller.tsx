//MCFR-0653
import PrintingConfirmationDataUI from './PrintingConfirmationData.render';
import { Input } from '@/ui/Input';
import classes  from './PrintingConfirmationData.module.scss';

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

const PrintingConfirmationData = () => {
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code2':
        return (
          <div className={classes.bottomInputs}>
            <Input size='sm' value="" />
            <Input size='sm' value="" />
          </div>
        );
    }
  };
  return <PrintingConfirmationDataUI data={data} customRowRender={customRowRender} />;
};

export default PrintingConfirmationData;
