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
import { toast } from 'react-toastify';
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
  const [username, setUsername] = useState('');
const [usernameDirty, setUsernameDirty] = useState(false); // ≈ $fieldmod
const [checkingUser, setCheckingUser] = useState(false);   // ≈ $check_state$
const [userJob, setUserJob] = useState<number | null>(0); // ≈ $user_job$
const [userPassword,setUserPassword]=useState<string>('')
const [reloadPassw, setReloadPassw] = useState<boolean>(false);
const [validPassword, setValidPassword] = useState<string>('');
const [newPassword, setNewPassword] = useState<string>('');
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

  const handleUsernameChange = (value: string) => {
     if (!usernameDirty) setUsernameDirty(true);//// mark field as modified ($fieldmod)
    setUsername(value);
  }

  const lpCheckUser=async(user:string)=>{
  //   if(!checkingUser)
  //   {
  //     toast.error(t('L_USER_EXISTS'));
  //     throw new Error('CHECK_STATE_OFF');
  //   }
  //   // TODO: Replace with real API call that returns user_type for user_name.
  //   const result = 0;

  //  // setUserJob(result); // $user_job$ = $result
  //   return result;
  return 0;
  }

  //TEST MOCK FUNCTION for api
//   const lpCheckUser = async (user: string, focusEl: HTMLInputElement) => {
//   if (!checkingUser) {
//     toast.error(t('L_USER_EXISTS'));
//     setTimeout(() => focusEl?.focus(), 0);
//     throw new Error('CHECK_STATE_OFF');
//   }

//   // Simulate network delay
//   await new Promise(res => setTimeout(res, 400));

//   // Fake logic: if username contains 'fail' -> throw; else set a job number
//   if (user.toLowerCase().includes('fail')) {
//     toast.error('Mock: user not found / invalid');
//     setTimeout(() => focusEl?.focus(), 0);
//     throw new Error('MOCK_USER_INVALID');
//   }

//   const result = 3; // pretend DB returned user_type = 3
//   setUserJob(result); // mirrors $user_job$ = $result
//   toast.success(`Mock: user valid, job = ${result}`);
//   return result;
// };


  const handleUsernameBlur=async(e:any)=>{
    setCheckingUser(true)// $check_state$ = 1
    try{
       // Only validate if field was modified: if ($fieldmod)
      if (!usernameDirty) return;
       const value = (username || '').trim();
        if (value === '') {
      // (optional) also clear any derived state
      setUserJob(0);
      return;
    }
        // length user_name; if (v_length < 5) message/error
        if(value.length<5)
        {
          toast.error('L_USER_NAME_LENGTH_ERROR');
          setTimeout(() => e.target?.focus(), 0); // $prompt + return(-1)
        return;
        }
        await lpCheckUser(value);
        // success path → nothing else to do here
      }
      catch{

      }
      finally{setCheckingUser(false);}
    }
  
const handleResetPassword = async()=>
  {
    // clear stored password locally
    setUserPassword('');
    setReloadPassw(true);
    // setNewPassword('');
     setValidPassword('');
    // try {
    //   await api.updateUser(username, { user_password: null, reload_passw: 1 });
    //   toast.success(t('L_PASSWORD_RESET_DONE'));
    // } catch (err) {
    //   toast.error(t('L_ERROR_PASSW'));
    // }

    toast.info(t('L_PASSWORD_RESET_DONE')); // quick feedback in UI
    // focus logic: the UI will prompt valid password; if you have a ref, focus it here.
   setTimeout(() => {
    const el = document.getElementById('valid-password-input') as HTMLInputElement | null;
    el?.focus();
  }, 0);
}

 //  VALID_PASSWORD <LFLD> 
  const handleValidPasswordChange = (value: string) => {
    setValidPassword(value);
  };

const handleValidPasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // only enforce when reload was requested
    if (!reloadPassw) return;

    // PRO: if (valid_password.t990 = "") message/info $text(L_FILL_PASSW); $prompt = valid_password.t990; return(-1)
    if ((validPassword || '').trim() === '') {
      toast.info(t('L_FILL_PASSW'));
      // keep focus in the confirm field (mimic $prompt + return(-1))
      setTimeout(() => e.target?.focus(), 0);
      return;
    }

    // else allow blur (nothing else in this trigger)
  };
const handleNewPasswordChange = (value: string) => setNewPassword(value);
const handleNewPasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  // If empty, nothing to compare
  if (!newPassword && !validPassword) return;

  if (newPassword !== validPassword) {
    // show PRO error message
    toast.error('שגיאה באימות סיסמא');

    // clear both fields (matches PRO)
    setNewPassword('');
    setValidPassword('');

    // mimic $prompt = valid_password.t990 -> focus the confirmation field
    setTimeout(() => {
      const el = document.getElementById('valid-password-input') as HTMLInputElement | null;
      el?.focus();
    }, 0);

    // PRO had return commented out; we don't throw or block — just end handler
    return;
  }

  // else they match -> nothing to do here

}
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
      <UserAndPermissionManagementUI
        permissions={userPermissions}
        renderActionItems={renderActionItems}
        // USER_NAME props
        username={username}
        onUsernameChange={handleUsernameChange}
        onUsernameBlur={handleUsernameBlur}
        checkingUser={checkingUser}
         // NEW password-related props (VALID_PASSWORD)
        reloadPassw={reloadPassw}
        validPassword={validPassword}
        newPassword={newPassword}
        onValidPasswordChange={handleValidPasswordChange}
        onValidPasswordBlur={handleValidPasswordBlur}
        onResetPassword={handleResetPassword}
        onNewPasswordChange={handleNewPasswordChange}
        onNewPasswordBlur={handleNewPasswordBlur}
        // dropdowns
        rolesDropDown={getUserJobListData?.data}
        schoolJobs={getSchoolJobData?.data}
        questions={[]}
        windows={[]}
      />
    
  );
};

export default UserAndPermissionManagement;
