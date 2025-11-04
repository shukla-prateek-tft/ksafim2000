//MCFW-1413

import React, { useState } from "react";
import PullingOutMyPermitAuthorizedCardUI from "./PullingOutMyPermitAuthorizedCard.render";
import { Input } from "@/ui/Input";
import { PullingOutMyPermitAuthorizedDataType } from "./types";
import { CustomRowRenderType } from "../type";
import { DatePickerComponent } from "@/components";
import classes from "./PullingOutMyPermitAuthorizedCard.module.scss";


const PullingOutMyPermitAuthorizedCard = () => {
  const [pullingOutData, setPullingOutData] = useState<Partial<PullingOutMyPermitAuthorizedDataType>[]>([{}])
  const onChange = (id: keyof PullingOutMyPermitAuthorizedDataType, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
    const tempData = [...pullingOutData];
    tempData[index] = {
      ...tempData[index],
      [id]: event.target.value
    }
    setPullingOutData(tempData);
  }

  const onDateChange = (id: keyof PullingOutMyPermitAuthorizedDataType, newDate: Date = new Date(), index: number) => {
    const tempData = [...pullingOutData];
    tempData[index] = {
      ...tempData[index],
      [id]: newDate
    }
    setPullingOutData(tempData);
  }

  const customRowRender: CustomRowRenderType<Partial<PullingOutMyPermitAuthorizedDataType>> = (key, row, index = 0) => {
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
    }
  }
  return <PullingOutMyPermitAuthorizedCardUI
    customRowRender={customRowRender}
    data={pullingOutData}
  />;
};

export default PullingOutMyPermitAuthorizedCard;
