// MCFW-1382
import TransferBetweenCentralizedSectionsUI from './TransferBetweenCentralizedSections.render';
import {
  BackToPageButton,
  Button,
  SaveButton
} from '@/components/commonButtons';
import { useTranslation } from 'react-i18next';
import classes from './TransferBetweenCentralizedSections.module.scss';
import { Input } from '@/ui/Input';
import { useState } from 'react';
import { TransferBetweenCentralizedSectionsDataType, TransferBetweenCentralizedSectionsFilterType } from './types';
import { CustomRowRenderType } from '../type';
const TransferBetweenCentralizedSections = () => {
  const { t } = useTranslation('common');
  const [filter, setFilter] = useState({});
  const onChange = (id: keyof TransferBetweenCentralizedSectionsFilterType, value: string | number | boolean) => {
    setFilter({ ...filter, [id]: value });
  }
  const hidden = false;

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <SaveButton />
        <Button variant="outline" title={t('T_MCFR1376')} />
        {!hidden && (
          <>
            <Button variant="outline" title={t('L_MCFW1382_BOTTOM_BTN1')} />
            <Button variant="outline" title={t('L_MCFW1382_BOTTOM_BTN2')} />
            <Button variant="outline" title={t('L_MCFW1382_BOTTOM_BTN3')} />
          </>
        )}
      </div>
    );
  };

  const customRowRender: CustomRowRenderType<Partial<TransferBetweenCentralizedSectionsDataType>> = (key, row) => {
    switch (key) {
      case 'code1':
        return <Input value={row?.[key]} />;
      case 'code2':
        return <Input />;
      case 'code3':
        return <Input />;
      case 'code4':
        return <Input />;
      case 'code5':
        return <Input />;
      case 'code6':
        return <Input type="checkbox" checked={row?.code7} />;
      case 'code7':
        return <Button className={classes.greenBtn} />;
    }
  };
  return (
    <TransferBetweenCentralizedSectionsUI
      renderActionItems={renderActionItems}
      customRowRender={customRowRender}
      onChange={onChange}
      filter={filter}
    />
  );
};

export default TransferBetweenCentralizedSections;
