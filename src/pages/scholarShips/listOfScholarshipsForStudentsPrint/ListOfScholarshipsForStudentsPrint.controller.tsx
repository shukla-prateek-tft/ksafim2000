//MCFR-1332
import ListOfScholarshipsForStudentsPrintUI from './ListOfScholarshipsForStudentsPrint.render';

const keys = ['code1', 'code2', 'code3', 'code4', 'code5', 'code6', 'code7', 'code8','code9'];
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

const data = Array.from({ length: 2 }, () => {
  const obj: Record<string, string> = {};
  keys.forEach(key => {
    obj[key] = getRandomHebrewWord(Math.floor(Math.random() * 4) + 3); 
  });
  return obj;
});


const ListOfScholarshipsForStudentsPrint = () => {
  return <ListOfScholarshipsForStudentsPrintUI data={data} />;
};

export default ListOfScholarshipsForStudentsPrint;
