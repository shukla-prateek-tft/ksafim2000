// MCFL-1227
import React from 'react'
import { BackToPageButton, Button, SaveButton } from '@/components/commonButtons';
import FlashSystemFileReceptionUI from './FlashSystemFileReception.render';
import classes from './FlashSystemFileReception.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useTranslation } from 'react-i18next';

const FlashSystemFileReception = ({ isOpen, onClose }: any) => {
  const { t } = useTranslation('common');

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <Button variant="outline" title={t('L_Upload_File')} />
        <Button variant="outline" title={t('L_SUPP_ERR')} />
        <SaveButton />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFL-1227">
      <FlashSystemFileReceptionUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default FlashSystemFileReception;
