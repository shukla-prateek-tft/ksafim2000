//MCFW-1247
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  SaveButton
} from '@/components/commonButtons';
import StudyGroupsUI from './StudyGroups.render';
import { Input } from '@/ui/Input';

import classes from './StudyGroups.module.scss';
import { useTranslation } from 'react-i18next';
import { DialogBox } from '@/ui/DialogBox';
import { useEffect } from 'react';
import { showToastErrors } from '@/utils/commonHelper';
import { useApiQuery, useAuth } from '@/hooks';
import { CustomRowRenderType, ServiceFn } from '../type';
import { adminServices } from '@/services';
import {
  GetStudyGroupResponse,
  GetStudyGroupsParamsType,
  insertStudyGroupsParamType,
  StudyGroup
} from './types';

const StudyGroups = () => {
  const { t } = useTranslation('common');

  const { user } = useAuth();
  const {
    state: {
      data: StudyGroupResponse,
      loading: isStudyGroupLoading,
      isError: isStudyGroupError,
      error: studyGroupsError
    },
    callService: getStudyGroups
  } = useApiQuery<GetStudyGroupResponse>(adminServices.study.GetStudyGroups as ServiceFn);

  const {
    state: {
      loading: insertStudyGroupsLoading,
      data: insertStudyGroupsData,
      isError: isInsertStudyGroupsError,
      error: insertStudyGroupsError
    },
    callService: onInsertStudyGroups
  } = useApiQuery(adminServices.study.insertStudyGroups as ServiceFn<insertStudyGroupsParamType>);

  useEffect(() => {
    const params: GetStudyGroupsParamsType = {
      Group_Num: 144, // replace with actual Group number
      Group_Name: 'jaia', // replace with actual Group name
      Include_Finished: false,
      Page: 1, // Default page number
      Size: 10, // Default size per page
      SortColumn: '',
      SortType: '',
      SystemYear: Number(user?.instiYear),
      Institution: Number(user?.instiCode)
    };

    getStudyGroups(params);
  }, [user?.instiCode, user?.instiYear]);

  useEffect(() => {
    if (isStudyGroupError && studyGroupsError) {
      showToastErrors(studyGroupsError);
    }
  }, [isStudyGroupError, studyGroupsError]);

  useEffect(() => {
    if (isInsertStudyGroupsError && insertStudyGroupsError) {
      showToastErrors(insertStudyGroupsError);
    }
  }, [isInsertStudyGroupsError, insertStudyGroupsError]);

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton
          onClick={() =>
            onInsertStudyGroups({
              systemYear: Number(user?.instiYear),
              institutionCode: Number(user?.instiCode),
              studyGroupList: StudyGroupResponse?.data?.data || []
            })
          }
        />
        <AddButton onClick={() => {}} />
        <CancelButton onClick={() => {}} />
        <Button title={t('L_MCFW1247_BTN1')} />
        <Button title={t('L_MCFW1247_BTN2')} />
      </div>
    );
  };

  const customRowRender: CustomRowRenderType<StudyGroup> = (key, row) => {
    if (!row || !key) return null;

    switch (key) {
      case 'is_MazeVet':
        return <Input type="checkbox" checked={!!row[key]} onChange={() => {}} />;
      default:
        return <Input value={String(row[key]) ?? ''} onChange={() => {}} variant="borderless" />;
    }
  };

  return (
    <>
      <DialogBox isOpen onClose={() => {}} title="MCFW-1247">
        <StudyGroupsUI
          renderActionItems={renderActionItems}
          customRowRender={customRowRender}
          studyGroupsData={StudyGroupResponse?.data}
        />
      </DialogBox>
    </>
  );
};

export default StudyGroups;
