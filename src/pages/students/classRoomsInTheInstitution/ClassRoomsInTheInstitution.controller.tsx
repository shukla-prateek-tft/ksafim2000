// MCFW-1220
import { AddButton, BackToPageButton, CancelButton, SaveButton } from '@/components/commonButtons';
import ClassRoomsInTheInstitutionUI from './ClassRoomsInTheInstitution.render';
import classes from './ClassRoomsInTheInstitution.module.scss';
import { DialogBox } from '@/ui/DialogBox';
import Pagination from '@/ui/Pagination/Pagination';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import { useTranslation } from 'react-i18next';
import { useApiQuery, useAuth } from '@/hooks';
import { adminServices } from '@/services';
import { ServiceFn } from '../type';
import { useEffect, useMemo } from 'react';
import { showToastErrors } from '@/utils/commonHelper';
import {
  GetClassAtInsti1220ResponseInterface,
  GetClassCodeResponseInterface,
  responseDataInterface
} from './type';
const ClassRoomsInTheInstitution = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const {
    state: {
      data: classAtInsti1220Response,
      error: classAtInsti1220Error,
      isError: isClassAtInsti1220Error
    },
    callService: getClassAtInsti1220Service
  }: GetClassAtInsti1220ResponseInterface = useApiQuery(
    adminServices.payments.GETClassAtInsti_1220 as ServiceFn
  );

  const {
    state: { data: classCodeResponse, error: classCodeError, isError: isClassCodeError },
    callService: getClassCodeService
  }: GetClassCodeResponseInterface = useApiQuery(adminServices.mapping.GetClassCode as ServiceFn);

  const hidden = true;

  useEffect(() => {
    getClassCodeService({
      Desc_Aut: '',
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
    getClassAtInsti1220Service({
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
  }, []);

  useEffect(() => {
    if (isClassAtInsti1220Error && classAtInsti1220Error) {
      showToastErrors(classAtInsti1220Error);
    }
  }, [isClassAtInsti1220Error, classAtInsti1220Error]);

  useEffect(() => {
    if (isClassCodeError && classCodeError) {
      showToastErrors(classCodeError);
    }
  }, [isClassCodeError, classCodeError]);

  const classCodeOptions = useMemo(() => {
    const list = classCodeResponse?.data || [];
    return Array.isArray(list)
      ? list.map(item => ({ label: String(item?.desc_Aut || '').trim(), value: item?.code }))
      : [];
  }, [classCodeResponse]);

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
        <AddButton />
        <CancelButton />
        <Pagination
          pagination={classAtInsti1220Response?.metaInfo}
          handlePaginationChange={(page: number) =>
            getClassAtInsti1220Service({
              Page: page,
              Size: classAtInsti1220Response?.metaInfo?.pageSize || 10,
              SortColumn: '',
              SortType: '',
              SystemYear: user?.instiYear,
              Institution: user?.instiCode
            })
          }
        />
      </div>
    );
  };
  const customRowRender = (key: string, row: responseDataInterface, index: number) => {
    switch (key) {
      case 'Class_Code':
        return <Select options={classCodeOptions} value={row.Class_Code} />;
      case 'Class_Num':
        return <Input value={row.Class_Num} />;
      case 'Finish':
        return (
          <div className={classes.checkboxContainerTable}>
            {!hidden && (
              <Select
                placeholder={t('L_CLASS_TYPE')}
                options={[
                  { label: 'dsd', value: 'dsdsd' },
                  { label: 'dsd', value: 'dsdsd' }
                ]}
              />
            )}
            <Input type="checkbox" checked={row.Finish} />
          </div>
        );
      default:
        return null;
    }
  };

  const handleSort = (columnKey: keyof responseDataInterface, direction: 'Asc' | 'Desc') => {
    getClassAtInsti1220Service({
      Page: classAtInsti1220Response?.metaInfo?.pageNumber || 1,
      Size: classAtInsti1220Response?.metaInfo?.pageSize || 10,
      SortColumn: String(columnKey),
      SortType: direction,
      SystemYear: user?.instiYear,
      Institution: user?.instiCode
    });
  };
  return (
    <DialogBox isOpen={isOpen} onClose={onClose} title="MCFW-1220">
      <ClassRoomsInTheInstitutionUI
        renderActionItems={renderActionItems}
        customRowRender={customRowRender}
        data={classAtInsti1220Response?.data || []}
        onSort={handleSort}
      />
    </DialogBox>
  );
};

export default ClassRoomsInTheInstitution;
