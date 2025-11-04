//MCFR-1366

import PaymentVoucherPrintUI from "./PaymentVoucherPrint.render";

const keys = ['code1', 'code2', 'code3', 'code4', 'code5', 'code6', 'code7', 'code8', 'code9','code10', 'code11', 'code12', 'code13', 'code14'];
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
    obj[key] = getRandomHebrewWord(Math.floor(Math.random() * 4) + 3); 
  });
  return obj;
});

const PaymentVoucherPrint = () => {
  return <PaymentVoucherPrintUI data={data} />;
};

export default PaymentVoucherPrint;
