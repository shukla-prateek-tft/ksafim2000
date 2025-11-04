//MCFW-0675
import React, { useEffect } from 'react';
import { GlobalLoader } from '@/components';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  SaveButton
} from '@/components/commonButtons';
import { useTranslation } from 'react-i18next';
import classes from './ListOfCollectionProgram.module.scss';
import ListOfCollectionProgramUI from './ListOfCollectionProgram.render';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { CollectionProgramResponseType } from './types';
import { showToastErrors } from '@/utils/commonHelper';

const ListOfCollectionProgram = () => {
  const { t } = useTranslation('common');
  const { user } = useAuth();

  const {
    state: {
      loading: isListOfCollectionProgramLoading,
      data: listOfCollectionProgramData,
      error: listOfCollectionProgramError,
      isError: isListOfCollectionProgramError
    },
    callService: getListOfCollectionProgram
  } = useApiQuery<CollectionProgramResponseType>(
    adminServices.receipt.getListOfCollectionProgram as ServiceFn
  );

  useEffect(() => {
    if (isListOfCollectionProgramError && listOfCollectionProgramError) {
      showToastErrors(listOfCollectionProgramError);
    }
  }, [isListOfCollectionProgramError, listOfCollectionProgramError]);

  useEffect(() => {
    getListOfCollectionProgram({
      SystemYear: user?.instiYear,
      Institution: user?.instiCode,
      Page: 1, //replace with actual value
      Size: 10, //replace with actual value
      SortColumn: '',
      SortType: ''
    });
  }, [getListOfCollectionProgram, user?.instiCode, user?.instiYear]);

  const renderActionItems = () => (
    <>
      <CancelButton />
      <AddButton />
      <SaveButton />
      <OtherDetailButton />
      <DetailButton />
      <BackToPageButton />
    </>
  );

  const renderHeadeItems = () => (
    <div className={classes.topHeaderContainer}>
      <Button title={t('L_COLLECT_DATE')} />
      <Button title={t('L_MCFW0675_BOTTOm_BUTTON6')} />
      <Button title={t('L_MCFW0675_BOTTOM_BUTTON5')} />
      <Button title={t('L_MCFW0675_BOTTOM_BUTTON4')} />
      <Button title={t('L_MCFW0675_BOTTOM_BUTTON3')} />
      <Button title={t('L_MCFW0675_BOTTOM_BUTTON2')} />
      <Button title={t('L_MCFW0675_BOTTOM_BUTTON1')} />
    </div>
  );

  return (
    <>
      <GlobalLoader showOnFullScreen loading={isListOfCollectionProgramLoading} />
      <ListOfCollectionProgramUI
        renderActionItems={renderActionItems}
        renderHeaderItems={renderHeadeItems}
        listOfCollectionProgramData={listOfCollectionProgramData}
      />
    </>
  );
};

export default ListOfCollectionProgram;
