//MCFW-1319
import React from 'react';
import StudentLocatorUI from './CentralizedCorrection.render';
import {
  BackToPageButton,
  DetailButton,
  PrintExcel,
  SaveButton
} from '@/components/ui/buttons/CommonButtons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classes from './CentralizedCorrection.module.scss';
import { GlobalLoader } from '@/components';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
import { DatePicker } from '@/ui/DatePicker';

const CentralizedCorrection = () => {
  const handleSave = () => {
    // Your save logic...
  };

  const renderActionItems = () => {
    const { t } = useTranslation('common');
    return (
      <div className={classes.actionItems}>
        <BackToPageButton onClick={() => {}} />
        <DetailButton />
        <PrintExcel />
        <SaveButton onClick={handleSave} />
      </div>
    );
  };

  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'CHECK':
        return (
          <>
            <Input
              type="checkbox"
              orientation="horizontal"
              checked={row.check}
              size="fullWidth"
              tabIndex={15}
            />
          </>
        );
      case 'STUDENT_ID':
        return (
          <>
            <div className={classes.ListofGefenCell}>
              <Input
                label=" "
                type="number"
                id="catalog_no"
                maxLength={10}
                variant="borderless"
                size="fullWidth"
                disabled
              />
            </div>
          </>
        );
      case 'FAMILY_NAME':
        return (
          <>
            <div className={classes.ListofGefenCell}>
              <Input
                label=" "
                type="text"
                id="catalog_no"
                maxLength={24}
                variant="borderless"
                size="fullWidth"
                pattern={REGEX.allCharacter}
                tabIndex={16}
              />
              <Input
                label=" "
                type="text"
                id="catalog_no"
                maxLength={20}
                variant="borderless"
                size="fullWidth"
                pattern={REGEX.allCharacter}
                tabIndex={17}
              />
            </div>
          </>
        );
      case 'ASS_CO':
        return (
          <div className={classes.ListofGefenCell}>
            <Input
              label=" "
              type="text"
              id="codeDescription"
              maxLength={20}
              variant="borderless"
              size="fullWidth"
              pattern={REGEX.allCharacter}
              tabIndex={18}
            />
            <Input
              label=" "
              type="number"
              id="codeDescription"
              maxLength={2}
              variant="borderless"
              size="fullWidth"
              tabIndex={19}
            />
          </div>
        );
      case 'LEFT_DATE':
        return (
          <>
            <DatePicker
              selectedDate={''}
              onChange={() => {}}
              label=" "
              variant="borderless"
              size="fullWidth"
              tabIndex={20}
            />
          </>
        );
      case 'STUD_DEBIT':
        return (
          <>
            <Input
              label=" "
              type="amount"
              id="codeDescription"
              maxLength={11}
              variant="borderless"
              size="fullWidth"
              disabled
              onChange={() => {}}
              onBlur={() => {}}
            />
          </>
        );
      case 'STUD_CREDIT':
        return (
          <>
            <Input
              label=" "
              type="amount"
              id="codeDescription"
              maxLength={11}
              variant="borderless"
              size="fullWidth"
              disabled
              onChange={() => {}}
              onBlur={() => {}}
            />
          </>
        );
      case 'TUD_DISCOUNT':
        return (
          <>
            <Input
              label=" "
              type="amount"
              id="codeDescription"
              maxLength={11}
              variant="borderless"
              size="fullWidth"
              disabled
              onChange={() => {}}
              onBlur={() => {}}
            />
          </>
        );
      case 'STUD_TOTAL':
        return (
          <>
            <Input
              label=" "
              type="amount"
              id="codeDescription"
              maxLength={11}
              variant="borderless"
              size="fullWidth"
              disabled
              onChange={() => {}}
              onBlur={() => {}}
            />
          </>
        );
      case 'STUD_SUM':
        return (
          <>
            <Input
              label=" "
              type="amount"
              id="codeDescription"
              maxLength={11}
              variant="borderless"
              size="fullWidth"
              onChange={() => {}}
              onBlur={() => {}}
              tabIndex={21}
            />
          </>
        );
    }
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <StudentLocatorUI renderActionItems={renderActionItems} customRowRender={customRowRender} />
    </>
  );
};

export default CentralizedCorrection;
