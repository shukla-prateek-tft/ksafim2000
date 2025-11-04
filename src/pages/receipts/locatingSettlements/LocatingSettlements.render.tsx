import React, { ReactNode } from 'react';
import classes from './LocatingSettlements.module.scss';
import { Input } from '@/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '@/ui/Button';
import { LocatingSettlementsColumns } from './components/Column';
import { Table } from '@/ui/Table';
import { BottomToolBar } from '@/ui/BottomToolBar';
import { REGEX } from '@/constants/appConstant';

interface LocatingSettlementsProps {
  customRowRender: (key: string, row: any, index: number) => ReactNode;
  renderActionItems: () => JSX.Element;
}

const LocatingSettlements: React.FC<LocatingSettlementsProps> = ({
  customRowRender,
  renderActionItems
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
    <div className={classes.mainComponent}>
      <div className={classes.inputFields}>
        <Button title={t('L_SEARCH')} size={'md'} />
        <Input
          orientation="horizontal"
          label={t('L_CITY_NAME')}
          id="L_CITY_NAME"
          onChange={() => {}}
          type="text"
          size="sm"
          maxLength={20}
          pattern={REGEX.allCharacter}
          tabIndex={1}
        />
        <Input
          orientation="horizontal"
          label={t('L_CITY_CODE')}
          id="L_CITY_CODE"
          onChange={() => {}}
          type="number"
          size={'sm'}
          maxLength={5}
          tabIndex={2}
        />
      </div>

      <Table
        columns={LocatingSettlementsColumns()}
        data={[{}, {}, {}, {}, {}]}
        customRowRenderer={customRowRender}
        height={'300px'}
      />
      <BottomBar />
    </div>
  );
};

export default LocatingSettlements;
