//MCFW-0612
import React from 'react';
import { useEffect, useState } from 'react';
import UserAndPermissionManagementUI from './UserAndPermissionManagement.render';
import classes from './userAndPermissionManagement.module.scss';
import { useTranslation } from 'react-i18next';
import {
  AddButton,
  BackToPageButton,
  Button,
  CancelButton,
  DetailButton,
  OtherDetailButton,
  PrintExcel,
  SaveButton
} from '@/components/commonButtons';
import { DialogBox } from '@/ui/DialogBox';
import {
  ApiResponse,
  JobOption,
  UserAndPermissionManagementProps,
  UserDataItem,
  VerificationQuestion,
  WindowItem
} from './types';
import { useApiQuery } from '@/hooks';
import { adminServices } from '@/services';
import { ApiState, ServiceFn } from '../type';
import { getQuestionListResponseType, getWindowListType } from './types';

const UserAndPermissionManagement = ({ isOpen, onClose }: UserAndPermissionManagementProps) => {
  const { t } = useTranslation('common');
  const [userPermissions, setUserPermissions] = useState([
    { acc_Card: '34534', desc_Aut: '345345' }
  ]);

  const {
    state: { data: getUserQuestionAndScreenResponse, loading: getUserQuestionAndScreenLoading },
    callService: getUserQuestionAndScreenService
  } = useApiQuery<ApiResponse<UserDataItem[]>>(
    adminServices.users.getUserListWithQuestionAndScreen as ServiceFn
  );

  const {
    state: { data: getQuestionTypeListResponse, loading: getQuestionTypeListLoading },
    callService: getQuestionTypeListService
  } = useApiQuery<getQuestionListResponseType>(
    adminServices.mapping.getQuestionTypeList as ServiceFn
  );
  const {
    state: { data: getWindowListResponse, loading: getWindowListLoading },
    callService: getWindowListService
  } = useApiQuery<getWindowListType>(adminServices.mapping.getWindowList as ServiceFn);

  const { state: userJobState, callService: getUserJobListService } = useApiQuery<
    ApiResponse<JobOption[]>
  >(adminServices.mapping.getUserRoles as ServiceFn);

  const { state: schoolJobState, callService: getSchoolJobService } = useApiQuery<
    ApiResponse<JobOption[]>
  >(adminServices.mapping.getUserRoles as ServiceFn);

  const { loading: getUserJobListLoading, data: getUserJobListData } = userJobState as ApiState<
    ApiResponse<JobOption[]>
  >;

  const { loading: getSchoolJobLoading, data: getSchoolJobData } = userJobState as ApiState<
    ApiResponse<JobOption[]>
  >;

  useEffect(() => {
    getUserQuestionAndScreenService({});
    getUserJobListService();
    getSchoolJobService();
    getQuestionTypeListService();
    getWindowListService({});
  }, []);

  const addNewItem = () => {
    setUserPermissions(prevData => [...prevData, { acc_Card: '34534', desc_Aut: '345345' }]);
  };

  const removeLastItem = () => {
    setUserPermissions(prevData => prevData.slice(0, -1));
  };

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton onClick={addNewItem} />
        <CancelButton onClick={removeLastItem} />
        <PrintExcel />
        <Button scale="primary" variant="outline" onClick={() => {}} title={t('L_SCREEN_TO_JOB')} />
      </div>
    );
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFW-0612">
      <UserAndPermissionManagementUI
        permissions={userPermissions}
        renderActionItems={renderActionItems}
        rolesDropDown={getUserJobListData?.data}
        schoolJobs={getSchoolJobData?.data}
        questions={[]}
        windows={[]}
      />
    </DialogBox>
  );
};

export default UserAndPermissionManagement;
