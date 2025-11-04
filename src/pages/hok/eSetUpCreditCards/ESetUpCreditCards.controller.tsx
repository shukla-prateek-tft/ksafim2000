// MCFW-1406
import { Input } from '@/ui/Input';
import classes from './ESetUpCreditCards.module.scss';
import { Button } from '@/ui/Button';
import ESetUpCreditCardsUI from './ESetUpCreditCards.render';
import { BiSend } from 'react-icons/bi';

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
const ESetUpCreditCards = () => {
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return <Input type='checkbox' />;
      case 'code3':
        return (
          <div className={classes.flex}>
            <Input />
            <Input />
          </div>
        );

      case 'code7':
        return (
          <div className={classes.flex}>
            <Input />
            <Input />
          </div>
        );
      case 'codebutton':
        return <Button variant="link" renderIcon={<BiSend size={12} color="green" />}/>
      case 'code17':
        return <Button variant="link" renderIcon={<BiSend size={12} color="green" />}/>
        
    }
  };
  const customDetailStudentRowRender = (key: string, row: any, index: number) => {
    switch (key) {
        case 'code1':
        return <Input type='checkbox' />;
      case 'code3':
        return (
          <div className={classes.flex}>
            <Input />
            <Input />
          </div>
        );

      case 'code4':
        return (
          <div className={classes.flex}>
            <Input />
            <Input />
          </div>
        );
      case 'code6':
         return <Button variant="link" renderIcon={<BiSend size={12} color="green" />}/>
    }
  };
  return (
    <ESetUpCreditCardsUI
      data={data}
      customRowRender={customRowRender}
      customDetailStudentRowRender={customDetailStudentRowRender}
    />
  );
};

export default ESetUpCreditCards;
