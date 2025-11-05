import React, { useEffect, useState } from 'react';
import { GlobalLoader, DataTableColumnHeader } from '@/components';
import classes from './ChooseDataBase.module.scss';
import { attachMultipleClasses } from '@/Languages';
import { useTranslation } from 'react-i18next';
import { adminServices } from '@/services';
import { useApiQuery, useAuth } from '@/hooks';
import { toast } from 'react-toastify';
import { debounce } from '@/utils/commonHelper';
import { DialogBox } from '@/ui/DialogBox';
import { Table } from '@/ui/Table';
import { BackToPageButton, SaveButton } from '@/components/commonButtons';
import { Input } from '@/ui/Input';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { CustomRowRenderType, ServiceFn, TableColumnType } from '../type';
import {
  DatabaseCustomRow,
  DatabaseResponse,
  SearchQueries,
  SwitchDatabaseResponse
} from './types';

interface ChooseDatabaseProps {
  isOpen: boolean;
  onClose?: () => void;
  onSave: () => void;
  showClose?: boolean;
  getDatabaseResponse?: DatabaseResponse;
}

const ChooseDatabase: React.FC<ChooseDatabaseProps> = React.memo(
  ({ onClose = () => {}, isOpen, onSave, showClose }) => {
    const { t } = useTranslation('chooseDatabase');
    const { user, setDataBase } = useAuth();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const userRole = '1';
    const [searchQueries, setSearchQueries] = useState<SearchQueries>({
      dbName: '',
      dbId: '',
      code: '',
      SortColumn: '',
      SortType: ''
    });

    const {
      state: { loading: getDatabaseLoading, data: getDatabaseResponse },
      callService: getDatabaseService
    } = useApiQuery<DatabaseResponse>(adminServices.auth.getChooseDBList as ServiceFn);

    const processChange = debounce((isSearch?: boolean, search?: Partial<SearchQueries>) => {
      getDatabaseService({
        userRole,
        page: isSearch ? 1 : currentPage,
        limit: 13,
        dbId: search?.dbId ?? searchQueries.dbId,
        dbName: search?.dbName ?? searchQueries.dbName,
        code: search?.code ?? searchQueries.code,
        SortColumn: search?.SortColumn ?? searchQueries.SortColumn,
        SortType: search?.SortType ?? searchQueries.SortType
      });
    });

    useEffect(() => {
      if (getDatabaseResponse) {
        setDataBase(getDatabaseResponse?.data?.databases[0]?.id);
      }
    }, [getDatabaseResponse]);

    useEffect(() => {
      processChange();
    }, [currentPage]);

    const {
      state: {
        loading: switchDataBaseLoading,
        isSuccess: isSwitchDataBaseSuccess,
        data: switchDataBaseResponse,
        isError: isSwitchDataBaseError,
        error: switchDataBaseError
      },
      callService: switchDataBaseService
    } = useApiQuery<SwitchDatabaseResponse>(adminServices.auth.switchDataBase as ServiceFn);
    useEffect(() => {
      if (switchDataBaseError && isSwitchDataBaseError) {
        toast.error(switchDataBaseError?.message, { autoClose: 1200 });
      }
      if (isSwitchDataBaseSuccess && switchDataBaseResponse) {
        toast.success(switchDataBaseResponse?.message, { autoClose: 1200 });
        onSave();
      }
    }, [
      switchDataBaseError,
      isSwitchDataBaseError,
      isSwitchDataBaseSuccess,
      switchDataBaseResponse
    ]);
    const handleSelectDataBase = (id: DatabaseCustomRow) => {
      setDataBase(id.id);
    };
    const handleChangeQuery = (value: string, key: string) => {
      const searchPayLoad = {
        ...searchQueries,
        [key]: value
      };
      setSearchQueries(searchPayLoad);
      processChange(true, searchPayLoad);
      setCurrentPage(1);
    };
    const handleSave = (id?: string) => {
      //To-do APi integration
      if (!user?.database) {
        toast.warn(t('pleaseChooseDb'), { autoClose: 1200 });
        return;
      }
      switchDataBaseService(id || user?.database);
    };

    const handleApiSorting = (columnId: string, direction: string) => {
      const sortKey = columnId === 'id' ? 'db_id' : columnId === 'name' ? 'db_name' : 'db_name_arb';
      const updatedFilters = {
        ...searchQueries,
        SortColumn: sortKey,
        SortType: direction
      };

      getDatabaseService({
        ...updatedFilters,
        userRole: userRole,
        page: currentPage,
        limit: 10
      });
      setSearchQueries(updatedFilters);
    };

    const renderActionItems = () => {
      return (
        <>
          <SaveButton onClick={() => handleSave()} />
          {user?.token && <BackToPageButton onClick={onClose} />}
        </>
      );
    };

    const customRowRenderer: CustomRowRenderType<DatabaseCustomRow> = (key, row) => {
      const idValue = row?.id;
      const rowColorClass = idValue?.includes('_P')
        ? classes.greenColor
        : idValue?.includes('_M')
          ? classes.blueColor
          : '';
      return (
        <div
          onDoubleClick={() => handleSave(row?.id)}
          className={attachMultipleClasses(rowColorClass, classes.customRow)}
        >
          {row?.[key || '']}
        </div>
      );
    };

    const new_Table_Column: TableColumnType<DatabaseCustomRow>[] = [
      {
        key: 'code',
        width: '33%',
        sortable: true,
        align: 'right',
        label: t('institutionName')
      },
      {
        key: 'id',
        width: '34%',
        sortable: true,
        align: 'right',
        header: () => <span>{t('databaseId')} <span className={classes.redColor}>*</span></span>
      },
      {
        key: 'name',
        width: '33%',
        sortable: true,
        align: 'right',
        label: t('databaseName')
      }
    ];

    return (
      <>
        <GlobalLoader
          showOnFullScreen
          loading={
            switchDataBaseLoading ||
            (!searchQueries?.dbId?.length && !searchQueries?.dbName?.length && getDatabaseLoading)
          }
        />
        <DialogBox
          closeOnOverlay={showClose}
          showClose={showClose}
          onClose={onClose}
          title={t('title')}
          isOpen={isOpen}
        >
          <div className={classes.container}>
            <div className={classes.mainContent}>
              <div className={classes.inputContainer}>
                <Input
                  size="fullWidth"
                  value={searchQueries.code}
                  clearable={!!searchQueries.code?.length}
                  onClear={() => handleChangeQuery('', 'code')}
                  onChange={event => handleChangeQuery(event.target.value, 'code')}
                  maxLength={40}
                />
                <Input
                  size="fullWidth"
                  value={searchQueries.dbId}
                  clearable={!!searchQueries.dbId?.length}
                  onClear={() => handleChangeQuery('', 'dbId')}
                  onChange={event => handleChangeQuery(event.target.value, 'dbId')}
                  maxLength={40}
                />
                <Input
                  size="fullWidth"
                  value={searchQueries.dbName}
                  clearable={!!searchQueries.dbName?.length}
                  onClear={() => handleChangeQuery('', 'dbName')}
                  onChange={event => handleChangeQuery(event.target.value, 'dbName')}
                  maxLength={100}
                />
              </div>
              <Table
                rowKey={'id'}
                selectedRow={user?.database}
                onRowSelect={handleSelectDataBase}
                columns={new_Table_Column}
                customRowRenderer={customRowRenderer}
                data={getDatabaseResponse?.data?.databases}
                onSort={handleApiSorting}
              />
            </div>
            <BottomToolBar
              showPagination={
                getDatabaseResponse?.data?.paginationMetadata?.totalCount >
                getDatabaseResponse?.data?.paginationMetadata?.pageSize
              }
              handlePaginationChange={setCurrentPage}
              pagination={getDatabaseResponse?.data?.paginationMetadata}
              renderActionItems={renderActionItems}
            />
          </div>
        </DialogBox>
      </>
    );
  }
);

export default ChooseDatabase;
