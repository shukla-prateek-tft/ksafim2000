//MCFW-1184
import classes from './BookkeepingCard.module.scss';
import {
  BackToPageButton,
  Button,
  DetailButton,
  PrintButton,
  PrintExcel,
  SearchButton
} from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import BookkeepingCardUI from './BookkeepingCard.render';
import { BiSend } from 'react-icons/bi';
import { DatePicker } from '@/ui/DatePicker';
import { REGEX } from '@/constants/appConstant';
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
  'code11',
  'code12',
  'code13',
  'code14',
  'code15',
  'code16'
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

const renderActionItems = () => {
  const { t } = useTranslation('common');
  return (
    <div className={classes.actionItems}>
      <BackToPageButton />
      <DetailButton />
      <PrintButton />
      <SearchButton />
      <PrintExcel />
      <Button title={t('L_WITH_TEMP')} />
      <Button title={t('L_MCFW_0597_BUTTON_TITLE_1')} />
      <Button title={t('L_MULTI_ANUAL')} />
    </div>
  );
};
const customRowRender = (key: string, row: any, index: number) => {
  switch (key) {
    case 'code15':
      return <Button title={t('PDF')} />;
    case 'code14':
      return <Button variant="link" renderIcon={<BiSend size={12} color="green" />} />;
    case 'code13':
      return <Input type="checkbox" size="fullWidth" />;
    case 'code2':
      return <Input type="number" maxLength={6} size="fullWidth" disabled />;
    case 'code3':
    case 'code5':
      return <DatePicker selectedDate={''} onChange={() => {}} size="fullWidth" disabled />;
    case 'code4':
      return <Input type="number" maxLength={10} size="fullWidth" disabled />;
    case 'code6':
    case 'code7':
    case 'code8':
      return (
        <Input
          type="amount"
          maxLength={11}
          onChange={() => {}}
          onBlur={() => {}}
          size="fullWidth"
          disabled
        />
      );
    case 'code9':
      return <Input maxLength={30} pattern={REGEX.allCharacter} disabled />;
    case 'code10':
      return <Input maxLength={100} pattern={REGEX.allCharacter} disabled />;
    case 'code12':
      return <Input maxLength={15} pattern={REGEX.allCharacter} disabled />;
    default:
      return <Input disabled />;
  }
};
const BookkeepingCard = () => {
  return (
    <BookkeepingCardUI
      data={data}
      renderActionItems={renderActionItems}
      customRowRender={customRowRender}
    />
  );
};

export default BookkeepingCard;
