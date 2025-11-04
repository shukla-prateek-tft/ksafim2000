import React, { useMemo } from 'react';
import { Input } from '@/ui/Input';
import DatePickerComponent from '@/ui/DatePicker/DatePicker';
import classes from '@/ui/DatePicker/DatePicker.module.scss';
import {
  DatePickerOrientation,
  DatePickerScale,
  DatePickerSize,
  DatePickerVariant
} from '@/types/ui/datePicker';
import { RangeSelectorType } from '@/types/ui/rangeSelector';
import { useAuth } from '@/hooks';

interface RangeSelectorProps {
  type?: RangeSelectorType;
  onChange?: (value: Record<string, string>) => void;
  fromLabel?: string;
  toLabel?: string;
  toValue?: string | number;
  fromValue?: string;
  step?: number;
  placeholder?: string;
  fromId?: string;
  toId?: string;
  disabled?: boolean;
  renderFromLabel?: React.ReactNode;
  renderToLabel?: React.ReactNode;
  pattern?: string | RegExp;
  variant?: DatePickerVariant;
  scale?: DatePickerScale;
  size?: DatePickerSize;
  labelOrientation?: DatePickerOrientation;
  toError?: string;
  fromError?: string;
  maxLength?: number;
  tabIndex?: number;
}

const RangeSelector: React.FC<RangeSelectorProps> = ({
  type = 'date',
  onChange,
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
  step,
  pattern,
  variant = 'outlined',
  scale,
  size = 'md',
  labelOrientation = 'vertical',
  toError,
  fromError,
  maxLength,
  tabIndex
}) => {
  const fromKey = useMemo(() => fromId || 'from', [fromId]);
  const toKey = useMemo(() => toId || 'to', [toId]);
  const {isMunicipality}=useAuth()
  const uiScale = scale ? scale : isMunicipality?'primary':'secondary';
  const selectedFromDate = useMemo(
    () => (fromValue ? new Date(fromValue) : null),
    [fromKey, fromValue]
  );

  const selectedToDate = useMemo(() => (toValue ? new Date(toValue) : null), [toKey, toValue]);

  const minToDate = useMemo(
    () => selectedFromDate || selectedToDate || undefined,
    [selectedFromDate, selectedToDate]
  );

  const onToDateChange = (value: string) => {
    onChange?.({ [fromKey]: fromValue || '', [toKey]: value });
  };

  const onFromDateChange = (value: string) => {
    onChange?.({ [fromKey]: value, [toKey]: value });
  };

  return (
    <div className={classes.commonRangePickerContainer}>
      {type === 'date' ? (
        <DatePickerComponent
          variant={variant}
          scale={uiScale}
          size={size}
          orientation={labelOrientation}
          selectedDate={selectedFromDate}
          onChange={onFromDateChange}
          label={fromLabel}
          id={fromId}
          placeholder={placeholder}
          disabled={disabled}
          isTypeISO
          error={fromError}
          tabIndex={tabIndex}
        />
      ) : (
        <Input
          variant={variant}
          scale={uiScale}
          size={size}
          orientation={labelOrientation}
          renderLabel={() => renderFromLabel}
          id={fromId}
          label={fromLabel}
          type={type}
          value={fromValue}
          onChange={e => onFromDateChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
          error={fromError}
          maxLength={maxLength}
          tabIndex={tabIndex}
        />
      )}

      {type === 'date' ? (
        <DatePickerComponent
          variant={variant}
          scale={uiScale}
          size={size}
          orientation={labelOrientation}
          minDate={minToDate}
          selectedDate={selectedToDate}
          onChange={onToDateChange}
          label={toLabel}
          id={toId}
          placeholder={placeholder}
          disabled={disabled}
          isTypeISO
          error={toError}
          tabIndex={tabIndex}
        />
      ) : (
        <Input
          variant={variant}
          scale={uiScale}
          size={size}
          orientation={labelOrientation}
          renderLabel={() => renderToLabel}
          id={toId}
          label={toLabel}
          value={toValue}
          type={type}
          onChange={e => onToDateChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
          error={toError}
          {...(type === 'number' && fromValue ? { min: fromValue } : {})}
          {...(step ? { step } : {})}
          maxLength={maxLength}
          tabIndex={tabIndex}
        />
      )}
    </div>
  );
};

export default RangeSelector;
