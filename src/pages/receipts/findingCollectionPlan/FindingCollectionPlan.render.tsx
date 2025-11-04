import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from '@/ui/Table';
import { ListColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { BottomToolBar } from '@/ui/BottomToolBar';
import classes from './FindingCollectionPlan.module.scss';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';

interface FindingCollectionPlansProps {
  renderActionItems: () => JSX.Element;
  customRowRender: (key: string, row: any, index: number) => JSX.Element;
}
const data = [
  {
    code1: '123',
    code2: 'HDFC',
    code3: 'Option1',
    code4: 'Mumbai',
    code5: 'HDFC Bank',
    code6: 'HDFC',
    code7: 'Andheri West',
    code8: true,
    code9: false
  }
];
const FindingCollectionPlanUi: React.FC<FindingCollectionPlansProps> = ({
  renderActionItems,
  customRowRender
}) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <div className={classes.bottomBar}>
        <BottomToolBar renderActionItems={renderActionItems} />
      </div>
    );
  };

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.inputFields}>
          <Button title={t('L_SEARCH')} size={'md'} />
          <Input
            orientation="horizontal"
            label={t('L_CHARGE')}
            id="text1"
            onChange={() => {}}
            type="text"
            maxLength={15}
            size="md"
          />
          <Input
            orientation="horizontal"
            label={t('L_NAME')}
            id="If_Hsb_Open"
            onChange={() => {}}
            type="text"
            size={'md'}
            maxLength={15}
          />
        </div>
        <Table
          tableHeaderClassName={classes.tableHeader}
          columns={ListColumn()}
          data={data}
          customRowRenderer={customRowRender}
        />
      </div>
      <BottomToolBar renderActionItems={renderActionItems} />
    </>
  );
};

export default FindingCollectionPlanUi;
