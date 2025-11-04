import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import { AdminLoginRequest } from '@/pages/login/type';

export const AuthServices = {
  adminLogin: (data: AdminLoginRequest): UseApiQueryOptionsType<AdminLoginRequest> => ({
    url: 'Account/Login',
    method: 'POST',
    data: data
  }),
  forgotPassword: (data: any): UseApiQueryOptionsType => {
    return {
      url: 'Account/forgotpassword',
      method: 'POST',
      data: data
    };
  },
  resetPassword: (data: any): UseApiQueryOptionsType => {
    return {
      url: 'Account/resetpassword',
      method: 'POST',
      data: data
    };
  },
  getChooseDBList: ({
    userRole = '1',
    page = 1,
    limit = 10,
    dbId = '',
    dbName = '',
    code = '',
    SortColumn='',
    SortType=''
  }): UseApiQueryOptionsType => {

    return {
      url: `Database/DatabaseList?${buildQueryParams({
        userRole: userRole,
        pageSize: limit,
        pageNumber: page,
        searchId: dbId,
        searchName: dbName,
        searchCode: code,
        SortColumn:SortColumn,
        SortType:SortType
      })}`,
      method: 'GET'
    };
  },
  switchDataBase: (data: any): UseApiQueryOptionsType => {
    return {
      url: `Database/SwitchDatabase`,
      method: 'POST',
      data
    };
  },
  removeDataBase: (): UseApiQueryOptionsType => {
    return {
      url: `Database/RemoveDatabase`,
      method: 'POST'
    };
  },
  
  verifyOtp: (data: any): UseApiQueryOptionsType => ({
    url: 'Account/VerifyOtp',
    method: 'POST',
    data: data
  })
};
