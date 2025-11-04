import React from 'react';
import { Select } from '@/ui/Select';
import Input from './Input.controller';
import classes from './Input.module.scss';
import { InputSizes, InputTypes, InputOrientation } from '@/types/ui/input';
interface Option {
  label: string;
  value: string;
}

export interface SelectWithInputProps {
  labelClassName?: string;
  onChangeSelect: () => void;
  onChangeInput: () => void;
  inputType?: InputTypes;
  options?: Option[];
  label?: string;
  inputPlaceholder?: string;
  selectPlaceholder?: string;
  size?: InputSizes;
  orientation?: InputOrientation;
  inputPattern?: string;
  maxLength?: number;
  tabIndex?: number;
}

export const SelectWithInput: React.FC<SelectWithInputProps> = ({
  onChangeSelect,
  onChangeInput,
  inputType = 'text',
  options = [],
  label,
  selectPlaceholder,
  inputPlaceholder,
  size = 'sm',
  orientation = 'horizontal',
  inputPattern,
  maxLength,
  tabIndex
}) => {
  return (
    <div className={classes.inputSelect}>
      <Select
        orientation={orientation}
        label={label}
        size={size}
        onChange={onChangeSelect}
        options={options}
        placeholder={selectPlaceholder}
        tabIndex={tabIndex}
      />
      <Input
        orientation={orientation}
        size={size}
        type={inputType}
        onChange={onChangeInput}
        placeholder={inputPlaceholder}
        maxLength={maxLength}
        pattern={inputPattern}
        tabIndex={tabIndex}
      />
    </div>
  );
};
