import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './StudyGroups.module.scss';
import { StudyGroupsColumns } from './Components/Columns';
import { Table } from '@/ui/Table';
import { ScreenLayout } from '@/ui/Layout';
import { Input } from '@/ui/Input';
import { Card } from '@/ui/Card';
import { Footer } from '@/ui/Footer';
import { GroupRadio } from '@/ui/GroupRadio';
import { BottomToolBar } from '@/ui/BottomToolBar';
import {  StudyGroupsUIProps } from './types';
import { REGEX } from '@/constants/appConstant';

const StudyGroupsUI = ({
  renderActionItems,
  customRowRender,
  studyGroupsData
}: StudyGroupsUIProps) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <Footer
      // handlePaginationChange={handlePagination}
      // pagination={pagination}
      />
    );
  };

  return (
    <ScreenLayout>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <div className={classes.inputSection}>
            <div>
              <Input label={t('T_MCIL0013')} type='number' maxLength={18}/>
              <Input isLabel pattern={REGEX.allCharacter} maxLength={20}/>
            </div>
            <Input type="checkbox" label={t('L_MCFW1247_CHECKBOX')} orientation="horizontal" />
          </div>
        </div>
        <Table
          columns={StudyGroupsColumns()}
          data={studyGroupsData?.data || []}
          customRowRenderer={customRowRender}
        />
        
        <div className={classes.flexBetween}>
          <Input type="checkbox" />
          <div className={classes.actionItems}>
            <GroupRadio
              size="fullWidth"
              options={[
                { label: t('L_MCFW1247_KVUTSA'), value: '1' },
                { label: t('L_MISHTATEF_KVUTSA'), value: '2' }
              ]}
              name="group"
              selectedValue={''}
              onChange={() => {}}
              orientation="horizontal"
              labelOrientation="horizontal"
            />
            <Input type="text" value={'File_NAME'} />
          </div>
        </div>
        <BottomToolBar
          pagination={{
            pageNumber: 1, // replace with actual page number
            totalPages: 1, // replace with actual total pages
            totalCount: 10, // replace with actual total count
            pageSize: 10, // replace with actual page size
            hasPreviousPage: false,
            hasNextPage: false
          }}
          renderActionItems={renderActionItems}
        />
      </div>
      <div className={classes.cardsTableContainer}></div>
    </ScreenLayout>
  );
};

export default StudyGroupsUI;
