// MCSW-0107
import React from 'react';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import FinancialTransactionsForTheStudentUI from './FinancialTransactionsForTheStudent.render';
import classes from './FinancialTransactionsForTheStudent.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';

const FinancialTransactionsForTheStudent = () => {
  const { t } = useTranslation('common');
  const renderActionItems = () => {
    return (
      <>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton />
        <SearchButton />
        <CancelButton />
        <Button title={t('PB_1')} />
        <Button title={t('L_MCFW0675_BOTTOM_BUTTON2')} />
        <Button title={t('PB_2')} />
        <Button title={t('U_STUDENT')} />
        <Button title={t('L_MOVE_PARAG')} />
        <Button title={t('L_LOAD_PLAN')} />
        <Button title={t('L_LOAD_BALANCE')} />
      </>
    );
  };

  const parentDetailsCustomRow = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return (
          <div>
            <Input size="fullWidth" />
          </div>
        );
      case 'code2':
        return (
          <div>
            <Input size="fullWidth" type="number" maxLength={10} />
          </div>
        );
      case 'code3':
        return (
          <div>
            <Input size="fullWidth" maxLength={24} pattern={REGEX.allCharacter} type="text" />
          </div>
        );
      case 'code4':
        return (
          <div>
            <Input size="fullWidth" maxLength={20} pattern={REGEX.allCharacter} type="text" />
          </div>
        );
      case 'code5':
        return (
          <div>
            <Input size="fullWidth" type="email" />
          </div>
        );
      case 'code6':
        return (
          <div className={classes.flex}>
            <Input size="fullWidth" type="number" maxLength={10} />
            <Input size="fullWidth" maxLength={5} pattern={REGEX.allCharacter} type="text" />
          </div>
        );
      case 'code7':
        return (
          <div className={classes.flex}>
            <Input size="fullWidth" type="number" maxLength={10} />
            <Input size="fullWidth" maxLength={5} pattern={REGEX.allCharacter} type="text" />
          </div>
        );
      case 'code8':
        return (
          <div className={classes.flex}>
            <Input size="fullWidth" type="number" maxLength={5} />
            <Input size="fullWidth" maxLength={15} pattern={REGEX.allCharacter} type="text" />
          </div>
        );
      case 'code9':
        return (
          <div>
            <Input size="fullWidth" type="number" maxLength={9} />
          </div>
        );
      case 'code10':
        return (
          <div>
            <Input type="checkbox" />
          </div>
        );
    }
  };

  const studentGroupCustomRow = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return (
          <div>
            <Input size="fullWidth" type="number" maxLength={3} />
          </div>
        );
      case 'code2':
        return (
          <div>
            <Input size="fullWidth" maxLength={30} pattern={REGEX.allCharacter} type="text" />
          </div>
        );
      case 'code3':
        return (
          <div>
            <Input size="fullWidth" maxLength={30} pattern={REGEX.allCharacter} type="text" />
          </div>
        );
      case 'code4':
        return <Input type="checkbox" />;
    }
  };

  const studentDiscountProgramCustomRow = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return (
          <div>
            <Input size="fullWidth" type="number" maxLength={3} />
          </div>
        );
      case 'code2':
        return (
          <div>
            <Input size="fullWidth" maxLength={30} pattern={REGEX.allCharacter} type="text" />
          </div>
        );
    }
  };

  const discountAccountCustomRow = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return (
          <div>
            <Input size="fullWidth" type="number" maxLength={3} />
          </div>
        );
      case 'code2':
        return (
          <div>
            <Input size="fullWidth" type="number" maxLength={3} />
          </div>
        );
      case 'code3':
        return (
          <div>
            <Input
              size="fullWidth"
              type="amount"
              min={0}
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
            />
          </div>
        );
      case 'code4':
        return (
          <div>
            <Input size="fullWidth" type="number" maxLength={3} />
          </div>
        );
      case 'code5':
        return <Input type="checkbox" />;
    }
  };

  const serviceTypeCustomRow = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return (
          <div>
            <Input size="fullWidth" />
          </div>
        );
      case 'code2':
        return (
          <div>
            <Input size="fullWidth" />
          </div>
        );
      case 'code3':
        return (
          <div>
            <Input size="fullWidth" />
          </div>
        );
      case 'code4':
        return (
          <div>
            <Input size="fullWidth" type="number" maxLength={3} />
          </div>
        );
      case 'code5':
        return (
          <div>
            <Input
              size="fullWidth"
              type="amount"
              min={0}
              maxLength={11}
              onChange={() => {}}
              onBlur={() => {}}
            />
          </div>
        );
    }
  };
  return (
    <FinancialTransactionsForTheStudentUI
      renderActionItems={renderActionItems}
      parentDetailsCustomRow={parentDetailsCustomRow}
      studentGroupCustomRow={studentGroupCustomRow}
      discountAccountCustomRow={discountAccountCustomRow}
      studentDiscountProgramCustomRow={studentDiscountProgramCustomRow}
      serviceTypeCustomRow={serviceTypeCustomRow}
    />
  );
};

export default FinancialTransactionsForTheStudent;
