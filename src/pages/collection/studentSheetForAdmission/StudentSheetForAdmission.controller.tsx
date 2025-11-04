//MCFW-1418
import StudentSheetForAdmissionUI from './StudentSheetForAdmission.render';
import classes from './StudentSheetForAdmission.module.scss';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  PrintButton,
  SaveButton
} from '@/components/commonButtons';
import { Select } from '@/ui/Select';
import { Input } from '@/ui/Input';
import { IoArrowDown } from 'react-icons/io5';
import { attachMultipleClasses } from '@/Languages';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
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
  return (
    <div className={classes.actionItems}>
      <CancelButton />
      <AddButton />
      <SaveButton />
      <PrintButton />
      <DetailButton />
      <BackToPageButton />
    </div>
  );
};
const renderOtherButtons = () => {
  const {t} =useTranslation('common')
  return (
    <div className={classes.actionItems}>
      <Button size="fullWidth" title={t("L_MCFW1418_BOTTOM_BTN1")} />
      <Button size="fullWidth" title={t("L_MCFW1418_BOTTOM_BTN2")}/>
      <Button size="fullWidth" title={t('L_MCFW1418_BOTTOM_BTN3')} />
      <Button size="fullWidth" title={(t('L_RETURN_R'))} />
      <Button size="fullWidth" title={t('L_MCFW1418_BOTTOM_BTN5')} />
      <Button size="fullWidth" title={t('L_STUD_CHARGE')}  />
      <Button size="fullWidth" title={t('L_MOVE_PARAG')}  />
      <Button title={t('T_MCSL0005')}  />
    </div>
  );
};
const customRowRender = (key: string, row: any, index: number) => {
  switch (key) {
    case 'code1':
      return <Input type="checkbox" size="fullWidth" />;
    case 'code6':
      return (
        <div className={classes.tableCell}>
          <p>{row[key]}</p>
          <Button className={classes.greenBtn} />
        </div>
      );
    case 'code10':
      return <Button className={attachMultipleClasses(classes.greenBtn,classes.downloadBtn)} renderIcon={<IoArrowDown />} />;
  }
};
const StudentSheetForAdmission = () => {
  return (
    <StudentSheetForAdmissionUI
      data={data}
      renderOtherButtons={renderOtherButtons}
      renderActionItems={renderActionItems}
      customRowRender={customRowRender}
    />
  );
};

export default StudentSheetForAdmission;
