// MCFW-0582
import {
  BackToPageButton,
  SaveButton,
  Button,
  DetailButton,
  OtherDetailButton,
  AddButton,
  SearchButton
} from '@/components/commonButtons';
import StudentDetailsUI from './StudentDetails.render';
import { useTranslation } from 'react-i18next';
import classes from './StudentDetails.module.scss';
import { BiSend } from 'react-icons/bi';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { CustomRowRenderType, ServiceFn } from '../type';
import {
  GetStudentDetailsResponseType,
  LearnigCenters,
  ParentsDetails,
  StudentDetailsProps
} from './types';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { useEffect, useState } from 'react';
import { showToastErrors } from '@/utils/commonHelper';

const StudentDetails = ({ screenName = 'MCFS0582' }: StudentDetailsProps) => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    state: {
      data: studentDetailsResponse,
      loading: isStudentDetailsLoading,
      isError: isStudentDetailsError,
      error: StudentDetailsError
    },
    callService: getStudentDetails
  } = useApiQuery<GetStudentDetailsResponseType>(
    adminServices.student.GetStudentDetails as ServiceFn
  );

  useEffect(() => {
    if (isStudentDetailsError && StudentDetailsError) {
      showToastErrors(StudentDetailsError);
    }
  }, [isStudentDetailsError, StudentDetailsError]);

  useEffect(() => {
    if (screenName) {
      getStudentDetails({
        InstanceParent: screenName,
        Student_Id: '',
        AllStudents: '',
        Student_Status: '',
        Include_Status: 1,
        Parent_Id: '',
        Study_Group: '',
        Finished_Group: '',
        Class_Code: '',
        Class_Num: '',
        To_Class_Code: '',
        To_Class_Num: '',
        Page: currentPage,
        Size: 10,
        SortColumn: '',
        SortType: '',
        SystemYear: user?.instiYear,
        Institution: user?.instiCode
      });
    }
  }, [screenName, currentPage]);

  const renderActionItems = () => {
    return (
      <>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <AddButton />
        <SearchButton />
        <Button title={t('L_MONEY_SIT')} />
        <Button title={t('T_MCSW0107')} />
        <Button title={t('L_MCFW0675_BOTTOM_BUTTON2')} />
      </>
    );
  };
  const customRowRenderForParentDetails: CustomRowRenderType<ParentsDetails> = (key, row) => {
    switch (key) {
      case 'fatherRelateType':
        return <Select options={[]} value={row?.fatherRelateType} size="fullWidth" />;
      case 'fatherCityCode':
        return (
          <div className={classes.parentTableCell}>
            <Input size="fullWidth" value={row?.fatherCityCode} />
            <Input size="fullWidth" value={row?.fatherCityName} />
          </div>
        );
      case 'street':
        return <Input size="fullWidth" />;
      case 'fatherPhone':
        return (
          <div className={classes.parentTableCell}>
            <Input size="fullWidth" value={row?.fatherPhone} />
            <Input size="fullWidth" value={row?.fatherPhonePrefix} />
          </div>
        );
      case 'fatherMisparNayad1':
        return (
          <div className={classes.parentTableCell}>
            <Input size="fullWidth" value={row?.fatherMisparNayad1} />
            <Input size="fullWidth" value={row?.fatherKidometNayad1} />
          </div>
        );
      case 'fatherCity':
        return (
          <div className={classes.parentTableCell}>
            <Input value={row?.fatherCity} />
            <Input type="checkbox" value={row?.fatherPaySchool} />
            <Button variant="link" renderIcon={<BiSend size={12} color="green" />} />
          </div>
        );
      default:
        return <Input value={String(row?.[key as keyof ParentsDetails] ?? '')} size="fullWidth" />;
    }
  };

  const customRowRenderForLearningCenters: CustomRowRenderType<LearnigCenters> = (key, row) => {
    switch (key) {
      case 'desc_Aut':
        return <Input size="fullWidth" disabled value={row?.desc_Aut}/>;
      case 'total_Sum':
        return (
          <div className={classes.learningCenterTableCell}>
            <Input size="fullWidth" value={row?.total_Sum} />
            <Button variant="link" renderIcon={<BiSend size={12} color="green" />} />
          </div>
        );
      case 'street':
        return <Input size="fullWidth" />;
      case 'is_Mazevet':
        return <Input type="checkbox" checked={row?.is_Mazevet} />;
         default:
        return <Input value={String(row?.[key as keyof LearnigCenters] ?? '')} size="fullWidth" />;
    }
  };

  return (
    <StudentDetailsUI
      renderActionItems={renderActionItems}
      customRowRenderForParentDetails={customRowRenderForParentDetails}
      customRowRenderForLearningCenters={customRowRenderForLearningCenters}
      studentDetailsData={studentDetailsResponse?.data}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}

    />
  );
};

export default StudentDetails;
