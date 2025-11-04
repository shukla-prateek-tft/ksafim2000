import React, { useState } from 'react';
import classes from './DatePicker.module.scss';
import { attachMultipleClasses } from '@/Languages';
import { Input } from '../inputs';
import DatePickerComponent from './DatePicker';

interface RangeSelectorProps {
  type?: 'date' | 'number' | 'text';
  onChange?: (key: string, value: any) => void;
  inputClassName?: string;
  className?: string;
  fromLabel?: string;
  toLabel?: string;
  step?: number;
  placeholder?: string;
  toValue?: any;
  fromValue?: string;
  fromId?: string;
  toId?: string;
  dateClassName?: string;
  disabled?: boolean;
  renderFromLabel?: any;
  renderToLabel?: any;
  pattern?: string;
}

const RangeSelector: React.FC<RangeSelectorProps> = ({
  type = 'date',
  onChange,
  inputClassName,
  dateClassName,
  className,
  fromLabel,
  toLabel,
  placeholder,
  toValue,
  fromValue,
  fromId,
  toId,
  disabled,
  renderFromLabel,
  renderToLabel,
  pattern
}) => {
  const [values, setValues] = useState<any>();
  const handleChange = (e: any, key: string) => {
    if (type === 'date') {
      setValues(prev => {
        return { ...prev, [key]: e };
      });
      onChange && onChange(key, e);
      return;
    }
    const { value } = e.target;
    setValues(prev => {
      return { ...prev, [key]: value };
    });
    onChange && onChange(key, value);
  };
  return (
    <div className={attachMultipleClasses(classes.dateRange, className)}>
      {type === 'date' ? (
        <DatePickerComponent
          renderLabel={renderFromLabel}
          selectedDate={values?.[fromId || ''] ? new Date(values?.[fromId || '']) : null}
          onChange={e => {
            handleChange(e, fromId || 'from');
            handleChange(e, toId || 'to');
          }}
          label={fromLabel}
          className={attachMultipleClasses(classes.inputDate, inputClassName)}
          id={fromId}
          datePickerClassName={dateClassName}
          placeholder={placeholder}
          disabled={disabled}
          isTypeISO={true}
        />
      ) : (
        <Input
          renderLabel={renderFromLabel}
          id={fromId}
          className={attachMultipleClasses(classes.inputCommon, inputClassName)}
          label={fromLabel}
          type={type}
          value={values?.[fromId || '']}
          onChange={e => {
            handleChange(e, fromId || 'from');
            handleChange(e, toId || 'to');
          }}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
        />
      )}
      {type === 'date' ? (
        <DatePickerComponent
          renderLabel={renderToLabel}
          minDate={values?.[fromId || ''] || toValue}
          selectedDate={
            values?.[toId || ''] ? new Date(values?.[toId || ''] || fromValue) : undefined
          }
          onChange={e => handleChange(e, toId || 'to')}
          label={toLabel}
          className={attachMultipleClasses(classes.inputDate, inputClassName)}
          id={fromId}
          datePickerClassName={dateClassName}
          placeholder={placeholder}
          disabled={disabled}
          isTypeISO={true}
        />
      ) : (
        <Input
          renderLabel={renderToLabel}
          id={toId}
          className={attachMultipleClasses(classes.inputCommon, inputClassName)}
          label={toLabel}
          value={values?.[toId || '']}
          type={type}
          onChange={e => handleChange(e, toId || 'to')}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
          {...(type === 'number' && values?.[fromId || ''] ? { min: values[fromId || ''] } : {})}
        />
      )}
    </div>
  );
};

export default RangeSelector;
