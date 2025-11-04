// MCFW-1216
import { BackToPageButton, Button } from '@/components/commonButtons';
import classes from './CreatingIncomeTaxFile.module.scss';
import CreatingIncomeTaxFileUI from './CreatingIncomeTaxFile.render';
import { useTranslation } from 'react-i18next';
import { DialogBox } from '@/ui/DialogBox';
import { showToastErrors } from '@/utils/commonHelper';
import { useEffect } from 'react';
import { useApiQuery } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { CreatingIncomeTaxFileProps, GetIncomeTaxFileResponse } from './types';

const CreatingIncomeTaxFile = ({ isOpen, onClose }: CreatingIncomeTaxFileProps) => {
  const { t } = useTranslation('common');

  const {
    state: {
      data: CreatingIncomeTaxFileResponse,
      loading: isCreatingIncomeTaxFileLoading,
      isError: isCreatingIncomeTaxFileError,
      error: CreatingIncomeTaxFileError
    },
    callService: fetchCreatingIncomeTaxFile
  } = useApiQuery<GetIncomeTaxFileResponse>(adminServices.payments.GetIncomeTaxFile as ServiceFn);

  useEffect(() => {
    if (isOpen) {
      fetchCreatingIncomeTaxFile();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isCreatingIncomeTaxFileError && CreatingIncomeTaxFileError) {
      showToastErrors(CreatingIncomeTaxFileError);
    }
  }, [isCreatingIncomeTaxFileError, CreatingIncomeTaxFileError]);

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <Button title={t('L_FILE_LOAD')} />
      </div>
    );
  };

  return (
    <DialogBox isOpen={isOpen} title={t('T_MCFW1216')} onClose={onClose}>
      <CreatingIncomeTaxFileUI
        renderActionItems={renderActionItems}
        data={CreatingIncomeTaxFileResponse?.data}
        loading={isCreatingIncomeTaxFileLoading}
      />
    </DialogBox>
  );
};

export default CreatingIncomeTaxFile;
