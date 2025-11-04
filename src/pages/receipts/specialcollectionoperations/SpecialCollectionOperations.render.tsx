import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './SpecialCollectionOperations.module.scss';
import { Table } from '@/ui/Table';
import { ListofGefenColumn } from './components';
import { ScreenLayout } from '@/ui/Layout';
import { BottomToolBar } from '@/ui/BottomToolBar';
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
  },
  {
    code1: '456',
    code2: 'ICICI',
    code3: 'Option2',
    code4: 'Pune',
    code5: 'ICICI Bank',
    code6: 'ICICI',
    code7: 'Baner',
    code8: false,
    code9: true
  }
];

interface SpecialCollectionOperationsProps {
  renderActionItems: () => JSX.Element;
  customRowRender: (key: string, row: any, index: number) => JSX.Element;
}


const SpecialCollectionOperationsUi: React.FC<SpecialCollectionOperationsProps> = ({ renderActionItems, customRowRender  }) => {
  const { t } = useTranslation('common');

  const BottomBar = () => {
    return (
      <div className={classes.bottomBar}>
        <div className={classes.bottomBarContent}>
          <div>{t("L_REMARK")}</div>
          <div>{t("L_MCFW0617_BOTTOM")}</div> 
        </div>
        <label className={classes.lastLable}>{t("L_MUST_MARK")}</label>
        <BottomToolBar renderActionItems={renderActionItems} />
      </div>
  
    );
  };

  return (
        <ScreenLayout
            screenName={t('topHeader')}
            screenNumber="MCFW0617"
            renderFooter={<BottomBar />}
            // renderHeader={<TopHeader />}
          >
            <legend className={classes.legend}>{t('T_MCFW0617')}</legend>
            <Table
              tableHeaderClassName={classes.tableHeader}
              columns={ListofGefenColumn()}
              data={data}
              customRowRenderer={customRowRender}
            />
        </ScreenLayout> 
  );
};

export default SpecialCollectionOperationsUi;

 
