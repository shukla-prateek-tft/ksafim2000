import React, { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import styles from './Input.module.scss';
import { attachMultipleClasses, formatToInternationalNumbering, isValidAmount } from '@/utils/commonHelper';
import {
  InputOrientation,
  InputScale,
  InputSizes,
  InputTypes,
  InputVariants
} from '@/types/ui/input';
import { Label } from '@/ui/Label';
import { GroupTitlePositionTypes } from '@/types/ui/groupRadio';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { IoIosCloseCircle } from 'react-icons/io';

interface EnhancedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  orientation?: InputOrientation;
  isRtl?: boolean;
  label?: string;
  renderLabel?: () => ReactNode;
  variant?: InputVariants;
  type?: InputTypes;
  error?: string;
  disabled?: boolean;
  nameRef?: React.RefObject<HTMLInputElement>;
  telephoneInputValue?: string;
  fontSize?: string | number;
  onChangeTelephone?: (e: ChangeEvent<HTMLInputElement>) => void;
  telephoneId?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  buttonText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  placeholder?: string;
  checked?: boolean;
  canHaveLocalState?: boolean;
  localState?: string | number;
  defaultValue?: string | number;
  register?: UseFormRegisterReturn;
  inputName?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  maxLength?: number;
  getAmountLength?: () => number;
  handleBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  isPasswordVisible?: boolean;
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  togglePasswordVisibility?: () => void;
  onClear?: () => void;
  clearable?: boolean;
  renderIcon?: () => ReactNode;
  size?: InputSizes;
  scale?: InputScale;
  isLabel?: boolean;
  inversed?: boolean;
  labelPosition?:GroupTitlePositionTypes;
  hideValidationMessage?:boolean;
}

const InputUI: React.FC<EnhancedInputProps> = ({
  orientation = 'vertical',
  isRtl,
  label,
  renderLabel,
  type,
  error,
  disabled,
  nameRef,
  telephoneInputValue,
  fontSize,
  onChangeTelephone,
  telephoneId,
  onFocus,
  onDoubleClick,
  buttonText,
  onChange,
  accept,
  placeholder,
  checked,
  canHaveLocalState,
  localState,
  defaultValue,
  register,
  inputName,
  handleChange,
  value,
  maxLength,
  getAmountLength,
  handleBlur,
  isPasswordVisible,
  handleKeyDown,
  togglePasswordVisibility,
  onClear,
  clearable,
  renderIcon,
  size,
  scale,
  variant,
  isLabel,
  inversed,
  labelPosition,
  pattern,hideValidationMessage = false,
  ...props
}: EnhancedInputProps) => {
  const WrapperClassName = attachMultipleClasses(
    styles.Wrapper,
    styles[`variant-${variant}`],
    styles[`scale-${scale}`],
    styles[`size-${size}`],
    type === 'amount' && styles['amount'],
    styles[orientation],
    orientation === 'horizontal' && type === 'checkbox' && styles.horizontalCheckBox,
    orientation === 'horizontal' && type === 'checkbox' && inversed && styles.inversed
  );

  const getInputName = () => {
    if (register && register.name) return inputName || register.name;
    if (nameRef && nameRef.current && nameRef.current.name) return nameRef.current.name;
    return undefined;
  };

  const getRegisterProps = () => {
  if (!register) return {};
  if (typeof register === 'function' && inputName) {
    return register(inputName);
  }
  return register;
};

  return (
    <div className={WrapperClassName} onDoubleClick={onDoubleClick}>
      <Label titlePosition={labelPosition} label={label} isLabel={isLabel} />
      {renderLabel && renderLabel()}

      <div
        className={attachMultipleClasses(
          styles.InputBlock,
          type === 'checkbox' && styles.checkboxConatiner
        )}
      >
        <div
          className={attachMultipleClasses(
            styles.InputBox,
            error && styles.error,
            disabled && styles.disabled,
            type === 'checkbox' && styles.checkbox,
            error&& styles.validation,
            clearable ? styles.clearIconBox : ''
          )}
        >
          {renderIcon && <div className={styles.iconRendered}>{renderIcon()}</div>}
          {type === 'telephone' && (
            <input
              className={styles.telephone}
              name={nameRef?.current?.name}
              dir={isRtl ? 'rtl' : 'ltr'}
              value={telephoneInputValue}
              disabled={disabled}
              type="tel"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeTelephone && onChangeTelephone(e)
              }
              autoComplete="off"
              id={telephoneId}
              onFocus={onFocus}
            />
          )}
          {type === 'file' ? (
            <>
              <label className={styles.label}>
                {buttonText}
                <input
                  className={styles.HiddenFileInput}
                  name={nameRef?.current?.name}
                  type="file"
                  onChange={onChange}
                  accept={accept}
                  disabled={disabled}
                  {...props}
                />
              </label>
            </>
          ) : type === 'amount' ? (
            <input
              type="text"
              placeholder={placeholder}
              className={styles.StyledInput}
              checked={checked}
              defaultValue={canHaveLocalState ? localState : defaultValue}
              disabled={disabled}
              style={{ fontSize }}
              onFocus={onFocus}
              {...props}
              {...(register
                ? getRegisterProps()
                : {
                    onChange: handleChange,
                    value:
                      value !== '' && value !== undefined && isValidAmount(value)
                        ? formatToInternationalNumbering(value)
                        : value,
                    name: getInputName(),
                    maxLength: maxLength && getAmountLength ? getAmountLength() : maxLength
                  })}
              onBlur={handleBlur}
              autoComplete="off"
            />
          ) : (
            <>
              <input
                type={
                  type === 'password' && isPasswordVisible
                    ? 'text'
                    : type === 'range-number'
                      ? 'number'
                      : type
                }
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className={styles.StyledInput}
                checked={checked}
                defaultValue={defaultValue}
                disabled={disabled}
                style={{ fontSize }}
                onFocus={onFocus}
                {...(register
                  ? getRegisterProps()
                  : {
                      onChange: handleChange,
                      value: canHaveLocalState ? localState : value,
                      name: getInputName(),
                      maxLength: maxLength,pattern
                    })}
                {...props}
                pattern={pattern}
                maxLength={maxLength}
                autoComplete="off"
              />
              {type === 'password' && (
                <span className={styles.EyeIcon} onClick={togglePasswordVisibility}>
                  {!isPasswordVisible ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
              )}
              {type === 'dropdown' && <span className={styles.DropdownIcon} />}
            </>
          )}
          {clearable && value && <IoIosCloseCircle className={styles.clearIcon} onClick={onClear} />}
        {!hideValidationMessage&&<ErrorMessage error={error}/>}
        </div>
      </div>
    </div>
  );
};

export default InputUI;
