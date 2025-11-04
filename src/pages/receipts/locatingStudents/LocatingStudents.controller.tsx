// MCFL-0005
import { DialogBox } from '@/ui/DialogBox';
import classes from './LocatingStudents.module.scss';
import LocatingStudentsUI from './LocatingStudents.render';
import { BackToPageButton, SaveButton, SearchButton } from '@/components/commonButtons';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { CustomRowRenderType, ServiceFn, SortConfig } from '../type';
import { GetClassCodeResponseType, GetLocatingStudentResponse, StudentLocatorFilterDto } from './types';
import React, { useEffect } from 'react';
import { GlobalLoader } from '@/components';

const LocatingStudents = ({ isOpen, onClose }: any) => {
  const { user } = useAuth();
  const [filters, setFilters] = React.useState<StudentLocatorFilterDto>({
    Page: 1,
    Size: 10,
    SortColumn: '',
    SortType: 'string',
    Family_Name: null,
    Private_Name: null,
    Class_Code: null,
    Class_Num: null,
    Institution: user?.instiCode,
    SystemYear: user?.instiYear
  });

  const {
    state: { data: getLocatingStudentResponse, loading: getLocatingStudentLoading },
    callService: getLocatingStudentService
  }: any = useApiQuery<GetLocatingStudentResponse>(
    adminServices.payments.GetStudentLocator0005 as ServiceFn
  );
  const {
    state: { data: getClassCodeResponse, loading: getClassCodeLoading },
    callService: getClassCodeService
  }: any = useApiQuery<GetClassCodeResponseType>(adminServices.mapping.getClassCode as ServiceFn);

  useEffect(() => {
    getClassCodeService();
  }, []);
  const handleSearch = () => {
    getLocatingStudentService(filters);
  };
  const handleSorting = (key: string, direction: string) => {
    const params = {
      ...filters,
      SortColumn: key,
      SortType: direction
    };
    getLocatingStudentService(params);
  };
  const handlePagination = (page: string) => {
    const params = {
      ...filters,
      Page: page,
    };
    getLocatingStudentService(params);
  };
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
        <SearchButton />
      </div>
    );
  };
  const customRowRender: CustomRowRenderType<any> = (key, row) => {
    switch (key) {
      case 'Class_Code':
        return (
          <div className={classes.classCodeContainer}>
            <span>{row.Class_Num}</span>
            <span>{row.Class_Code}</span>
          </div>
        );
    }
  };
  return (
    <>
      <GlobalLoader loading={getClassCodeLoading || getLocatingStudentLoading} />
      <DialogBox isOpen={isOpen} onClose={onClose} title="MCFL-0005">
        <LocatingStudentsUI
          studentData={getLocatingStudentResponse?.data}
          renderActionItems={renderActionItems}
          classCodeData={getClassCodeResponse?.data}
          customRowRender={customRowRender}
          handleSearch={handleSearch}
          filters={filters}
          setFilters={setFilters}
          handleSort={handleSorting}
          handlePagination={handlePagination }
        />
      </DialogBox>
    </>
  );
};

export default LocatingStudents;
