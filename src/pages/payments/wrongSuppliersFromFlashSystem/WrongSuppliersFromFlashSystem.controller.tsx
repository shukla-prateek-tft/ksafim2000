//MCFW-1226
import React from 'react';
import WrongSuppliersFromFlashSystemUI from './WrongSuppliersFromFlashSystem.render';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classes from './WrongSuppliersFromFlashSystem.module.scss';
import {
  BackToPageButton,
  DetailButton,
  SaveButton,
  PrintExcel,
  Button
} from '@/components/commonButtons';
import { GlobalLoader } from '@/components';

const WrongSuppliersFromFlashSystem = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Your save logic...
  };

  const renderActionItems = () => {
    const { t } = useTranslation('common');
    return (
      <div className={classes.actionContainer}>
        <BackToPageButton onClick={() => navigate(-1)} />
        <DetailButton />
        <PrintExcel />
        <SaveButton onClick={handleSave} />
        <Button title={t('L_MCFW0615')} />
        <Button title={t('L_DEPOSIT_TMP')} />
        <Button title={t('L_MCFW0630_BTN1')} />
        <Button title={t('L_MCFW0630_BTN2')} />
      </div>
    );
  };
  const customRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'c1':
      case 'c2':
      case 'c3':
      case 'c4':
      case 'c5':
      case 'c6':
      case 'c7':
      case 'c8':
      case 'c9':
      case 'c10':
        return (
          <div className={classes.tableCell}>
            <Input variant="borderless" />
          </div>
        );
      case 'c11':
        return (
          <div className={classes.tableCell}>
            <Input variant="borderless" type="checkbox" size="fullWidth" />
          </div>
        );
    }
  };

  return (
    <>
      <GlobalLoader showOnFullScreen loading={false} />

      <WrongSuppliersFromFlashSystemUI
        renderActionItems={renderActionItems}
        customRowRender={customRowRender}
      />
    </>
  );
};

export default WrongSuppliersFromFlashSystem;
