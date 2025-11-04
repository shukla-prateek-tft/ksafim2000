import React from 'react';
import { Input } from '@/ui/Input';
import classes from './LocatingStudents.module.scss';
import { useTranslation } from 'react-i18next';
import { Table } from '@/ui/Table';
import { LocatingStudentsColumns } from './components';
import { Select } from '@/ui/Select';
import { Button } from '@/components/commonButtons';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { LocatingStudentsProps } from './types';
import { REGEX } from '@/constants/appConstant';
const LocatingStudents = ({
  renderActionItems,
  studentData,
  customRowRender,
  classCodeData,
  handleSearch,
  filters,
  setFilters,
  handleSort,
  handlePagination
}: LocatingStudentsProps) => {
  const { t } = useTranslation('common');
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  return (
    <div className={classes.container}>
      <div className={classes.rowContainer}>
        <div>
          <div className={classes.rowContainer}>
            <Input
              value={filters?.Family_Name}
              name="Family_Name"
              size="md"
              pattern={REGEX.allCharacter}
              label={t('L_FAMILY_NAME')}
              placeholder={t('L_FAMILY_NAME')}
              orientation="horizontal"
              maxLength={12}
              onChange={handleFilterChange}
            />
            <Input
              value={filters?.Private_Name}
              name="Private_Name"
              size="md"
              pattern={REGEX.allCharacter}
              label={t('L_PRIVATE_NAME')}
              placeholder={t('L_PRIVATE_NAME')}
              orientation="horizontal"
              maxLength={12}
              onChange={handleFilterChange}
            />
          </div>
          <div className={classes.rowContainer}>
            <Select
              value={filters?.Class_Code}
              name="Class_Code"
              size="md"
              label={t('L_CLASS_CODE')}
              placeholder={t('L_CLASS_CODE')}
              orientation="horizontal"
              onChange={handleFilterChange}
              options={classCodeData?.map(item => ({
                label: item.desc_Aut,
                value: item.code
              }))}
              tabIndex={0}
            />
            <Input
              value={filters?.Class_Num}
              name="Class_Num"
              size="sm"
              type='number'
              placeholder={t('L_CLASS_NUM')}
              orientation="horizontal"
              maxLength={2}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        <Button onClick={handleSearch}>{t('L_SEARCH')}</Button>
      </div>
      <Table
        onSort={handleSort}
        columns={LocatingStudentsColumns()}
        height="50vh"
        data={studentData}
        customRowRenderer={customRowRender}
      />
      <div className={classes.footer}>
        <BottomToolBar
          pagination={studentData?.metaInfo}
          showPagination={true}
          handlePaginationChange={handlePagination}
          renderActionItems={renderActionItems}
        />
      </div>
    </div>
  );
};

export default LocatingStudents;
