// MCFW-1277
import React, { useEffect } from 'react';
import {
  BackToPageButton,
  DetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import ScholarshipCancellationUI from './ScholarshipCancellation.render';
import classes from './ScholarshipCancellation.module.scss';
import { Input } from '@/ui/Input';
import { REGEX } from '@/constants/appConstant';
import { useApiQuery } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { GetScholarshipCancellationResponse } from './types';
import { toast } from 'react-toastify';

const ScholarshipCancellation = () => {
  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <SaveButton />
        <SearchButton />
      </div>
    );
  };

  const fromStudentCustomRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return (
          <div className={classes.cell}>
            <Input
              type="number"
              maxLength={10}
              orientation="horizontal"
              size="fullWidth"
              tabIndex={7}
            />
            <Input
              type="text"
              maxLength={20}
              pattern={REGEX.allCharacter}
              orientation="horizontal"
              size="fullWidth"
              tabIndex={8}
            />
            <Input
              type="text"
              maxLength={12}
              pattern={REGEX.allCharacter}
              orientation="horizontal"
              size="fullWidth"
              tabIndex={9}
            />
          </div>
        );

      case 'code2':
        return (
          <Input
            type="text"
            value={row.code2}
            orientation="horizontal"
            size="fullWidth"
            maxLength={30}
            pattern={REGEX.allCharacter}
            tabIndex={10}
          />
        );
      case 'code3':
        return (
          <Input
            type="text"
            value={row.code3}
            orientation="horizontal"
            size="fullWidth"
            maxLength={30}
            pattern={REGEX.allCharacter}
            tabIndex={11}
          />
        );
      case 'code4':
        return (
          <Input
            type="amount"
            maxLength={11}
            value={row.code4}
            orientation="horizontal"
            size="fullWidth"
            onChange={() => {}}
            onBlur={() => {}}
            tabIndex={12}
          />
        );

      default:
        return <>{row[key]}</>;
    }
  };
  const forStudentCustomRowRender = (key: string, row: any, index: number) => {
    switch (key) {
      case 'code1':
        return (
          <div className={classes.cell}>
            <Input
              type="number"
              maxLength={10}
              orientation="horizontal"
              size="fullWidth"
              tabIndex={14}
            />
            <Input
              type="text"
              maxLength={20}
              pattern={REGEX.allCharacter}
              orientation="horizontal"
              size="fullWidth"
              tabIndex={15}
            />
            <Input
              maxLength={12}
              pattern={REGEX.allCharacter}
              type="text"
              orientation="horizontal"
              size="fullWidth"
              tabIndex={16}
            />
          </div>
        );

      case 'code2':
        return (
          <Input
            type="text"
            value={row.code2}
            orientation="horizontal"
            size="fullWidth"
            maxLength={30}
            pattern={REGEX.allCharacter}
            tabIndex={17}
          />
        );
      case 'code3':
        return (
          <Input
            type="text"
            value={row.code3}
            orientation="horizontal"
            size="fullWidth"
            maxLength={30}
            pattern={REGEX.allCharacter}
            tabIndex={18}
          />
        );
      case 'code4':
        return (
          <Input
            value={row.code4}
            orientation="horizontal"
            size="fullWidth"
            type="amount"
            maxLength={11}
            onChange={() => {}}
            onBlur={() => {}}
            tabIndex={19}
          />
        );

      default:
        return <>{row[key]}</>;
    }
  };
  const {
    state: {
      loading: getScholarshipCancellationLoading,
      isSuccess: isGetScholarshipCancellationSuccess,
      data: getScholarshipCancellationResponse,
      isError: isGetScholarshipCancellationError,
      error: getScholarshipCancellationError
    },
    callService: getScholarshipCancellationService
  } = useApiQuery<GetScholarshipCancellationResponse>(
    adminServices.receipt.getScholarshipCancellation as ServiceFn
  );
  useEffect(() => {
    if (getScholarshipCancellationError && isGetScholarshipCancellationError) {
      toast.error(getScholarshipCancellationError?.message, { autoClose: 1200 });
    }
    if (isGetScholarshipCancellationSuccess && getScholarshipCancellationResponse) {
      toast.success(getScholarshipCancellationResponse?.message, { autoClose: 1200 });
    }
  }, [
    getScholarshipCancellationError,
    isGetScholarshipCancellationError,
    getScholarshipCancellationResponse,
    isGetScholarshipCancellationSuccess
  ]);
  useEffect(() => {
    getScholarshipCancellationService({
      Page: 1,
      Size: 10,
      SystemYear: 2025,
      Institution: 244111,
      Act_No: 'I000846'
    });
  }, []);
  return (
    <ScholarshipCancellationUI
      renderActionItems={renderActionItems}
      fromStudentCustomRowRender={fromStudentCustomRowRender}
      forStudentCustomRowRender={forStudentCustomRowRender}
    />
  );
};

export default ScholarshipCancellation;
