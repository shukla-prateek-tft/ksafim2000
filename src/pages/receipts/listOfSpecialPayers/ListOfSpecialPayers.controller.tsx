// MCFW-0598
import ListOfSpecialPayersUI from './ListOfSpecialPayers.render';
import {
  AddButton,
  BackToPageButton,
  Button,
  DetailButton,
  OtherDetailButton,
  SaveButton,
  SearchButton
} from '@/components/commonButtons';
import { useTranslation } from 'react-i18next';
import classes from './ListOfSpecialPayers.module.scss';
import { Input } from '@/ui/Input';
import { Select } from '@/ui/Select';
import React, { useState } from 'react';
import { CustomRowRenderType } from '../type';
import { SpecialPayerType } from './types';

const ListOfSpecialPayers = () => {
  const { t } = useTranslation('common');
  const [payersList, setPayersList] = useState<Partial<SpecialPayerType>[]>([{}]);

  const renderActionItems = () => {
    return (
      <div className={classes.actionItems}>
        <BackToPageButton />
        <DetailButton />
        <OtherDetailButton />
        <SaveButton />
        <SearchButton />
        <AddButton onClick={() => setPayersList([...payersList, {}])} />
        <Button variant="outline" title={t('L_MCFW0598_BOTTOM_BUTTON')} />
      </div>
    );
  };

  const onPayerChange = (index: number, id: string, value: string | number | boolean) => {
    const tempPayersList = [...payersList];
    tempPayersList[index] = {
      ...tempPayersList[index],
      [id]: value
    }
    setPayersList(tempPayersList);
  }

  const customRowRender: CustomRowRenderType<Partial<SpecialPayerType>> = (key, row, index = -1) => {
    switch (key) {
      case 'payer':
        return (
          <div className={classes.tableSpecialCell}>
            <Input type='number' maxLength={10} value={row?.payer} onChange={(event) => onPayerChange(index, key, event.target.value)} />
            <Button className={classes.greenBtn} />
          </div>
        );
      case 'payerName':
        return <Input size="fullWidth" maxLength={30} value={row?.payerName} onChange={(event) => onPayerChange(index, key, event.target.value)} />;
      case 'city':
        return (
          <div className={classes.tableSpecialCell}>
            <Input orientation="horizontal" type='number' maxLength={5} value={row?.city} onChange={(event) => onPayerChange(index, key, event.target.value)} />
            <Input orientation="horizontal" value={row?.cityName} disabled />
          </div>
        );
      case 'street':
        return <Input size="fullWidth" maxLength={17} value={row?.street} onChange={(event) => onPayerChange(index, key, event.target.value)}/>;
      case 'build':
        return <Input size="fullWidth" maxLength={5} value={row?.build} onChange={(event) => onPayerChange(index, key, event.target.value)}/>;
      case 'phone':
        return <div className={classes.tableSpecialCell}>
          <Input size="fullWidth" type='number' maxLength={7} value={row?.phoneNumber} onChange={(event) => onPayerChange(index, 'phoneNumber', event.target.value)}/>;
          <Input size="fullWidth" maxLength={3} value={row?.phone} onChange={(event) => onPayerChange(index, key, event.target.value)}/>;
        </div>
      case 'accName':
        return <Select size='fullWidth' options={[{ label: 'label1', value: 'value1' }]} value={row?.accName} onChange={(event) => onPayerChange(index, key, event.target.value)}/>;
      case 'email':
        return <Input size="fullWidth" type='email' value={row?.email} onChange={(event) => onPayerChange(index, key, event.target.value)}/>;
      case 'receipt':
        return <Input type="checkbox" checked={Boolean(row?.receipt)} onChange={(event) => onPayerChange(index, key, event.target.value)}/>;
    }
  };
  return (
    <ListOfSpecialPayersUI
      renderActionItems={renderActionItems}
      customRowRender={customRowRender}
      payersList={payersList}
    />
  );
};

export default ListOfSpecialPayers;
