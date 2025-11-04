//MCFW-1414
import { useState } from 'react';
import PullingOutMyPermitCardUI from './PullingOutMyPermitCard.render';
import { PullingOutMyPermitDataType } from './types';
import { Input } from '@/ui/Input';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import { CustomRowRenderType } from '../type';
import classes from "./PullingOutMyPermitCard.module.scss";

const PullingOutMyPermitCard = () => {
  const [pullingOutData, setPullingOutData] = useState<Partial<PullingOutMyPermitDataType>[]>([{}])
  const onChange = (id: keyof PullingOutMyPermitDataType, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
    const tempData = [...pullingOutData];
    tempData[index] = {
      ...tempData[index],
      [id]: event.target.value
    }
    setPullingOutData(tempData);
  }

  const onDateChange = (id: keyof PullingOutMyPermitDataType, newDate: Date = new Date(), index: number) => {
    const tempData = [...pullingOutData];
    tempData[index] = {
      ...tempData[index],
      [id]: newDate
    }
    setPullingOutData(tempData);
  }

  const customRowRenderer: CustomRowRenderType<Partial<PullingOutMyPermitDataType>> = (key, row, index = 0) => {
    if (!key) return;
    switch (key) {
      case 'dbName':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.dbName || ''}
            maxLength={60}
            type="text"
            size="md"
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
      case 'institute':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.institute || ''}
            type="text"
            size="md"
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
      case 'instituteName':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.instituteName || ''}
            type="text"
            size="md"
            maxLength={40}
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
      case 'year':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.year || ''}
            type="number"
            size="md"
            maxLength={4}
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
      case 'setNumber':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.setNumber || ''}
            type="number"
            size="md"
            maxLength={6}
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
      case 'valueDate':
        return <div className={classes.flexContainer}>
          <DatePickerComponent
            selectedDate={row?.valueDate || new Date()}
            onChange={(newDate) => onDateChange(key, newDate, index)}
          />
        </div>
      case 'relevantDate':
        return <div className={classes.flexContainer}>
          <DatePickerComponent
            selectedDate={row?.relevantDate || new Date()}
            onChange={(newDate) => onDateChange(key, newDate, index)}
          />
        </div>
      case 'creditAccount':
        return <div className={classes.flexContainer}><Input
          orientation="horizontal"
          value={row?.creditAccount || ''}
          type="number"
          size="md"
          onChange={(event) => onChange(key, event, index)}
        />
        </div>
      case 'creditName':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.creditName || ''}
            size="md"
            maxLength={30}
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
      case 'debitAccount':
        return <div className={classes.flexContainer}><Input
          orientation="horizontal"
          value={row?.debitAccount || ''}
          size="md"
          onChange={(event) => onChange(key, event, index)}
        />
        </div>
      case 'debitName':
        return <div className={classes.flexContainer}><Input
          orientation="horizontal"
          value={row?.debitName || ''}
          size="md"
          maxLength={30}
          onChange={(event) => onChange(key, event, index)}
        />
        </div>
      case 'credit':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.credit || ''}
            size="md"
            maxLength={9}
            type="amount"
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
      case 'debit':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.debit || ''}
            size="md"
            maxLength={9}
            type="amount"
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
      case 'details':
        return <div className={classes.flexContainer}>
          <Input
            orientation="horizontal"
            value={row?.details || ''}
            size="md"
            maxLength={100}
            onChange={(event) => onChange(key, event, index)}
          />
        </div>
    }
  }

  return <PullingOutMyPermitCardUI
    customRowRenderer={customRowRenderer}
    data={pullingOutData}
  />;
};

export default PullingOutMyPermitCard;
