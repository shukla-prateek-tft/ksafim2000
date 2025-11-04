// MCFW-1380
import { BackToPageButton, DetailButton, SaveButton, SearchButton } from '@/components/commonButtons';
import classes from './RefundReceiptFromCashRegisterWithoutTransmission.module.scss';
import { Input } from '@/ui/Input';
import RefundReceiptFromCashRegisterWithoutTransmissionUI from './RefundReceiptFromCashRegisterWithoutTransmission.render';
import { useState } from 'react';
import { RefundReceiptTransmissionDataType, RefundReceiptWithTransmissonFilterType } from './types';
import { CustomRowRenderType } from '../type';

const RefundReceiptFromCashRegisterWithoutTransmission = () => {
  const [filter, setFilter] = useState({});

  const onChange = (id: keyof RefundReceiptWithTransmissonFilterType, value: string | number | Date | null) => {
    setFilter({ ...filter, [id]: value });
  }

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
  const customRowRenderer: CustomRowRenderType<RefundReceiptTransmissionDataType> = (key, row) => {
    switch (key) {
      case 'c1':
        return (
          <div className={classes.flex}>
            <Input label=" " type="text" value={row?.['c1']} variant="borderless" />
            <Input label=" " type="text" value={row?.['c1']} variant="borderless" />
            <Input label=" " type="text" value={row?.['c1']} variant="borderless" />
          </div>
        );
      case 'c2':
        return <Input label=" " type="text" value={''} variant="borderless" />;
    }
  };
  return (
    <RefundReceiptFromCashRegisterWithoutTransmissionUI
      renderActionItems={renderActionItems}
      customRowRenderer={customRowRenderer}
      filter={filter}
      onChange={onChange}
    />
  );
};

export default RefundReceiptFromCashRegisterWithoutTransmission;
