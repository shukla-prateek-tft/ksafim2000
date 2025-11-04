import { buildQueryParams } from '@/utils/commonHelper';
import { UseApiQueryOptionsType } from '../types';
import { GetPaymentDetailsReportByStudentParamsType, GetStudentDetailsParamType } from './types';

export const StudentService = {
  GetPaymentDetailsReportByStudent: ({
    F_Class_Code,
    F_Class_Num,
    T_Class_Code,
    T_Class_Num,
    No_Id_Par,
    Double_Pay,
    No_Pay,
    Page,
    Size,
    SortColumn,
    SortType,
    SystemYear,
    Institution
  }: GetPaymentDetailsReportByStudentParamsType): UseApiQueryOptionsType => {
    return {
      url: `Student/GetPaymentDetailsReportByStudent?${buildQueryParams({
        F_Class_Code,
        F_Class_Num,
        T_Class_Code,
        T_Class_Num,
        No_Id_Par,
        Double_Pay,
        No_Pay,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution
      })}`,
      method: 'GET'
    };
  },
  GetStudentDetails: ({
       InstanceParent,
        Student_Id,
        AllStudents,
        Student_Status,
        Include_Status,
        Parent_Id,
        Study_Group,
        Finished_Group,
        Class_Code,
        Class_Num,
        To_Class_Code,
        To_Class_Num,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
  }: GetStudentDetailsParamType): UseApiQueryOptionsType => {
    return {
      url: `Student/GetStudentDetailsForClass?${buildQueryParams({
        InstanceParent,
        Student_Id,
        AllStudents,
        Student_Status,
        Include_Status,
        Parent_Id,
        Study_Group,
        Finished_Group,
        Class_Code,
        Class_Num,
        To_Class_Code,
        To_Class_Num,
        Page,
        Size,
        SortColumn,
        SortType,
        SystemYear,
        Institution,
      })}`,
      method: 'GET'
    };
  }
};
