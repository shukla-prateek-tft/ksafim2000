// MCFW-1335
import React from 'react';
import { Input } from '@/ui/Input';
import StandingOrdersUI from './StandingOrders.render';
import classes from './StandingOrders.module.scss';
import { Button } from '@/ui/Button';

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
const StandingOrders = () => {
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
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
      case 'code14':
        return <Button className={classes.button}></Button>;
    }
  };
  const customDetailStudentRowRender = (key: string, row: any, index: number) => {
    switch (key) {
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
        return <Button className={classes.button}></Button>;
    }
  };
  return (
    <StandingOrdersUI
      data={data}
      customRowRender={customRowRender}
      customDetailStudentRowRender={customDetailStudentRowRender}
    />
  );
};

export default StandingOrders;
