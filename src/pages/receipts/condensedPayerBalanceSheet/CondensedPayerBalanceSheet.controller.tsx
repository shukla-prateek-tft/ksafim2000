//MCFR-1219

import React from 'react';
import CondensedPayerBalanceSheetUI from './CondensedPayerBalanceSheet.render';
import { Input } from '@/ui/Input';
import classes from './CondensedPayerBalanceSheet.module.scss';

const keys = ['code1', 'code2', 'code3', 'code4', 'code5', 'code6'];
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

const customRowRenderer = (key: string, row: any, index: number) => {
  switch (key) {
    case 'code2':
      return (
        <div className={classes.cell}>
          <Input size="fullWidth" variant="borderless" />
          <Input size="fullWidth" variant="borderless" />
        </div>
      );
    case 'code3':
      return (
        <div className={classes.cell}>
          <Input size="fullWidth" variant="borderless" />
          <Input size="fullWidth" variant="borderless" />
        </div>
      );
  }
};

const CondensedPayerBalanceSheet = () => {
  return <CondensedPayerBalanceSheetUI data={data} customRowRenderer={customRowRenderer} />;
};

export default CondensedPayerBalanceSheet;
