import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  FocusEvent,
  ReactNode,
  KeyboardEvent
} from 'react';
import { useAuth } from '@/hooks';
import { formatToInternationalNumbering, getLengthPattern, isValidAmount, regexEvaluator } from '@/utils/commonHelper';
import { InputType, REGEX } from '@/constants/appConstant';
import InputUI from './Input.render';
import { UseFormRegisterReturn } from 'react-hook-form';
import {
  InputOrientation,
  InputScale,
  InputSizes,
  InputTypes,
  InputVariants
} from '@/types/ui/input';
import { GroupTitlePositionTypes } from '@/types/ui/groupRadio';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: InputTypes;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
  telephoneInputValue?: string;
  name?: string;
  register?: UseFormRegisterReturn;
  orientation?: InputOrientation;
  fontSize?: string | number;
  error?: string;
  defaultValue?: string | number;
  onChangeTelephone?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  telephoneId?: string;
  clearable?: boolean;
  variant?: InputVariants;
  buttonText?: string;
  accept?: string;
  checked?: boolean;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  renderLabel?: () => ReactNode;
  pattern?: string | RegExp | unknown;
  canHaveLocalState?: boolean;
  maxLength?: number;
  onDoubleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  renderIcon?: () => ReactNode;
  size?: InputSizes;
  scale?: InputScale;
  isLabel?: boolean;
  inversed?: boolean;
  labelPosition?: GroupTitlePositionTypes;
  hideValidationMessage?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange = () => {},
  disabled = false,
  label = '',
  telephoneInputValue = '',
  name = '',
  register,
  orientation = 'vertical',
  fontSize = '',
  error = '',
  defaultValue = '',
  onChangeTelephone,
  onClear,
  telephoneId,
  clearable = false,
  buttonText = 'Upload File',
  accept = 'image/*',
  checked,
  onFocus,
  renderLabel,
  pattern,
  canHaveLocalState,
  maxLength = 1000,
  onDoubleClick,
  renderIcon,
  size = 'sm',
  scale ,
  variant = 'outlined',
  isLabel = false,
  inversed = false,
  labelPosition,hideValidationMessage = false,
  ...props
}) => {
  const { isRtl,isMunicipality } = useAuth();
  const uiScale = scale ? scale : isMunicipality?'primary':'secondary';
  const inputName = name ? name : `no-autofill-${Math.random().toString(36).substr(2, 5)}`;
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [localState, setLocalState] = useState<string | number>('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const nameRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, type: inputType } = event.target;

    if (inputType === 'checkbox') {
      onChange(event);
      return;
    }
    if (value === '') {
      if (canHaveLocalState) setLocalState(event.target.value);
      onChange(event);
      return;
    }
    const validationRequiredForNumber=type==='number'&&maxLength
    if (pattern||validationRequiredForNumber) {
      let regex: RegExp;
      try {
        regex = new RegExp(validationRequiredForNumber?getLengthPattern(Number(maxLength)):pattern);
      } catch {
        return;
      }
      if (regexEvaluator(regex, value)) {
        if (canHaveLocalState) setLocalState(event.target.value);
        onChange(event);
        return;
      } else {
        return;
      }
    }

    switch (type) {
      case InputType.AMOUNT: {
        let rawValue = event.target.value.replace(/[^0-9.-]/g, '');
        const hyphenCount = (rawValue.match(/-/g) || []).length;

        if(hyphenCount > 1) return;

        event.target.value = rawValue;
        const [integer, decimal] = rawValue.split(".");
        const maxDecLength = decimal?.includes("-") ? 3 : 2;
        const maxIntegerLength = integer?.includes("-") ? maxLength : maxLength - 1;

        if (integer?.length <= maxIntegerLength && (!decimal || decimal?.length <= maxDecLength) ) {
          if (canHaveLocalState) setLocalState(event.target.value);
          onChange(event);
        }

        return;
      }
      case InputType.ALPHA_NUMERIC:
        if (regexEvaluator(REGEX.alphaNumeric, value)) {
          if (canHaveLocalState) setLocalState(event.target.value);
          onChange(event);
        }
        return;
      case InputType.NUMBER:
        if (regexEvaluator(REGEX.number, value.trim())) {
          if (canHaveLocalState) setLocalState(event.target.value);
          onChange(event);
        }
        return;

      case InputType.TEXT:
        if (regexEvaluator(REGEX.text, value.trim())) {
          if (canHaveLocalState) setLocalState(event.target.value);
          onChange(event);
        }
        return;

      default:
        return;
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (type === 'number') {
      if (
        event.key === 'e' ||
        event.key === '+' ||
        event.key === '-' ||
        event.key === '.' ||
        event.keyCode === 69 ||
        event.keyCode === 107
      ) {
        event.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (canHaveLocalState) {
      setLocalState(defaultValue);
    }
  }, [defaultValue]);

  const getAmountLength = () => {
    if (value === '' || value === undefined || !isValidAmount(value)) return maxLength;
    const strValue = String(value);
    const formattedValue = formatToInternationalNumbering(strValue);
    const decimalMatch = strValue?.match(/\.(\d+)/);
    const decimalCount = decimalMatch ? decimalMatch[1]?.length : 0;
    const hyphenCount = (strValue.match(/-/g) || []).length;
    const count = (formattedValue.match(/[,.]/g) || [])?.length + decimalCount + hyphenCount;
    return maxLength + count;
  };

 const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    let rawValue =  event.target.value.replace(/,/g, '');
    if(rawValue.includes("-")) {
      rawValue = "-" + rawValue.replace(/-/g, '');
    }
    if (!rawValue) {
      event.target.value = '';
    } else {
      const num = Number(rawValue);
      if (!isNaN(num)) {
        event.target.value = formatToInternationalNumbering(num.toFixed(2));
      }
    }

    const mainRegex = new RegExp(`^-?\\d{0,${maxLength - 1}}(\\.\\d{0,2})?$`);
    if (regexEvaluator(mainRegex, rawValue)) {
      if (canHaveLocalState) setLocalState(event.target.value);
      onChange(event);
    }
  };


  return (
    <InputUI
      orientation={orientation}
      isRtl={isRtl}
      label={label}
      renderLabel={renderLabel}
      variant={variant}
      type={type}
      error={error}
      disabled={disabled}
      nameRef={nameRef}
      telephoneInputValue={telephoneInputValue}
      fontSize={fontSize}
      onChangeTelephone={onChangeTelephone}
      telephoneId={telephoneId}
      onFocus={onFocus}
      onDoubleClick={onDoubleClick}
      buttonText={buttonText}
      onChange={onChange}
      accept={accept}
      placeholder={placeholder}
      checked={checked}
      canHaveLocalState={canHaveLocalState}
      localState={localState}
      defaultValue={defaultValue}
      register={register}
      inputName={inputName}
      handleChange={handleChange}
      value={value}
      maxLength={maxLength}
      getAmountLength={getAmountLength}
      handleBlur={handleBlur}
      isPasswordVisible={isPasswordVisible}
      handleKeyDown={handleKeyDown}
      togglePasswordVisibility={togglePasswordVisibility}
      onClear={onClear}
      clearable={clearable}
      renderIcon={renderIcon}
      size={size}
      scale={uiScale}
      isLabel={isLabel}
      inversed={inversed}
      labelPosition={labelPosition}
      {...props}
      hideValidationMessage={hideValidationMessage}
      pattern={type==='number'?getLengthPattern(Number(maxLength)):pattern}
    />
  );
};

export default Input;
