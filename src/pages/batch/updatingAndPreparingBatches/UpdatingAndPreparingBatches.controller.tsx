// MCFW-0048
import React from "react"
import {
  AddButton,
  BackToPageButton,
  Button,
  DetailButton,
  OtherDetailButton,
  SaveButton
} from '@/components/commonButtons';
import UpdatingAndPreparingBatchesUI from './UpdatingAndPreparingBatches.render';
import classes from './UpdatingAndPreparingBatches.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import { useTranslation } from 'react-i18next';
const UpdatingAndPreparingBatches = () => {
  const { t } = useTranslation('common');
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton />
        <Button variant="outline" title={t('L_MCIR0698')} />
        <Button variant="outline" title={t('L_RUN_NOW')} />
      </div>
    );
  };
  return (
    <DialogBox isOpen onClose={() => {}} title="MCFS-0048">
      <UpdatingAndPreparingBatchesUI renderActionItems={renderActionItems} />
    </DialogBox>
  );
};

export default UpdatingAndPreparingBatches;
