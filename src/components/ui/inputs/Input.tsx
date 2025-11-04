import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { useAuth } from '@/hooks';
import { IoIosCloseCircle, IoMdEyeOff, IoMdEye, IoIosArrowDown } from 'react-icons/io';

import theme from '@/utils/theme';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { formatToInternationalNumbering, regexEvaluator } from '@/utils/commonHelper';
import { InputType, REGEX } from '@/constants/appConstant';
import { RiErrorWarningLine } from 'react-icons/ri';

interface InputProps {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'telephone'
    | 'url'
    | 'checkbox'
    | 'date'
    | 'file'
    | 'dropdown'
    | 'amount'
    | 'alphaNumeric'
    | 'range-number';
  placeholder?: string;
  value?: string | number | null;
  telephoneInputValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onChangeTelephone?: ChangeEventHandler<HTMLInputElement>;
  telephoneId?: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  telephoneClassName?: string;
  label?: string;
  labelClassName?: string;
  name?: string;
  register?: UseFormRegister<FieldValues>;
  orientation?: 'horizontal' | 'vertical';
  fontSize?: string;
  error?: string;
  clearable?: boolean;
  defaultValue?: string;
  onClear?: () => void;
  variant?: 'outlined' | 'filled' | 'standard';
  buttonText?: string;
  accept?: string;
  phoneNumberSize?: boolean;
  checked?: boolean;
  [key: string]: any;
  renderLabel?: any;
  pattern?: any;
  canHaveLocalState?: boolean;
  maxLength?: number;
}

const Wrapper = styled.div<{
  orientation: 'horizontal' | 'vertical';
  isRtl: boolean;
}>`
  display: flex;
  position: relative;
  flex-direction: ${props => (props.orientation === 'horizontal' ? 'row' : 'column')};
  gap: ${props => (props.orientation === 'horizontal' ? '10px' : '0')};
  label {
    font-weight: bold;
    word-break: keep-all;
    margin-bottom: ${props => (props.orientation === 'vertical' ? '5px' : '0')};
    margin-left: ${props => (props.isRtl ? '5px' : '0')};
  }
`;

const InputBlock = styled.div`
  width: 100%;
`;

const InputBox = styled.div<{
  isCheckbox: boolean;
  variant: string;
  error?: string;
  disabled?: boolean;
}>`
  position: relative;
  border: ${props =>
    props.isCheckbox
      ? 'none'
      : props.error
        ? `1px solid ${props.theme.colors.error}`
        : `1px solid ${props.theme.colors.themeInputGrayBorder}`};
  padding: 5px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  ${props =>
    props.variant === 'outlined' &&
    css<{ error?: string; disabled?: boolean }>`
      border-radius: 4px;
      background-color: ${props =>
        props.disabled ? props.theme.colors.disabled : props.theme.colors.themeWhite};
      display: flex;
      &:focus-within {
        border-color: ${props =>
          props.error ? props.theme.colors.error : props.theme.colors.primary};
        box-shadow: 0 0 4px
          ${props => (props.error ? props.theme.colors.error : props.theme.colors.primary)};
      }
    `}
  ${props =>
    props.variant === 'filled' &&
    css`
      border: none;
      border-bottom: ${props.error
        ? `2px solid ${props.theme.colors.error}`
        : `1px solid ${props.theme.colors.gray}`};
      background-color: ${props => props.theme.colors.lightgray};
      display: flex;
    `}
  ${props =>
    props.variant === 'standard' &&
    css<{ error?: string }>`
      border: none;
      border-bottom: ${props.error
        ? `2px solid ${props.theme.colors.error}`
        : `1px solid ${props.theme.colors.gray}`};
      display: flex;
      &:focus-within {
        border-bottom: ${props.error
          ? `2px solid ${props.theme.colors.error}`
          : `2px solid ${props.theme.colors.primary}`};
        box-shadow: 0 2px 4px -2px
          ${props => (props.error ? props.theme.colors.error : props.theme.primary)};
        transition:
          border-color 0.3s ease,
          box-shadow 0.3s ease;
      }
    `}
`;

const StyledInput = styled.input<{
  disabled: boolean;
  variant: string;
  fontSize: string;
  isAmountType?: boolean;
}>`
  border: none;
  width: 100%;
  font-size: ${props => (props.fontSize ? props.fontSize : props.theme.fontSize.xSmall)};
  ${props =>
    props.variant === 'outlined' &&
    css<{ disabled: boolean }>`
      background-color: ${props =>
        props.disabled ? props.theme.colors.disabled : props.theme.colors.themeWhite};
    `}
  ${props =>
    props.variant === 'filled' &&
    css`
      background-color: ${props => props.theme.colors.lightgray};
    `}

  &:focus {
    outline: none;
  }
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
  ${props =>
    props.isAmountType &&
    css`
      direction: ltr;
      text-align: end;
    `}
`;

const TelephoneInput = styled(StyledInput)<{
  isRtl: boolean;
  phoneNumberSize: boolean;
}>`
  width: ${props => (props.phoneNumberSize ? '10ch' : '5ch')};
  border: 0;
  border-left: ${props => (props.isRtl ? `1px solid ${props.theme.colors.gray}` : '')};
  margin-left: ${props => (props.isRtl ? '5px' : '')};
  border-right: ${props => (!props.isRtl ? `1px solid ${props.theme.colors.gray}` : '')};
  margin-right: ${props => (!props.isRtl ? '5px' : '')};
  &:focus {
    outline: 0;
  }
`;

const ClearIcon = styled(IoIosCloseCircle)<{ isRtl: boolean }>`
  position: absolute;
  top: 5px;
  right: ${props => (!props.isRtl ? '5px' : '')};
  left: ${props => (props.isRtl ? '5px' : '')};
  background-color: ${props => props.theme.colors.themeWhite};
  padding: 2px;
  border-radius: 5px;
  cursor: pointer;
`;

const EyeIcon = styled.div<{ isRtl: boolean }>`
  position: absolute;
  top: 5px;
  right: ${props => (!props.isRtl ? '10px' : '')};
  left: ${props => (props.isRtl ? '10px' : '')};
  cursor: pointer;
`;
const DropdownIcon = styled(IoIosArrowDown)<{ isRtl: boolean }>`
  position: absolute;
  top: 50%;
  right: ${props => (!props.isRtl ? '5px' : 'auto')};
  left: ${props => (props.isRtl ? '5px' : 'auto')};
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 14px;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
`;

const FileInputLabel = styled.label<{ disabled: boolean }>`
  padding: 10px;
  background-color: ${props =>
    props.disabled ? props.theme.colors.disabled : props.theme.colors.themeButtonSecondary};
  color: ${props => props.theme.colors.black};
  border-radius: 5px;
  box-shadow: ${props => `0px 0px 2px 0px ${props.theme.colors.black}`};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  text-align: center;
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    background-color: ${props =>
      props.disabled ? props.theme.disabled : props.theme.colors.themeButton};
  }
`;
const WarningWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:hover .error-message {
    display: block;
  }
  .icon {
    margin: 5px 0px 0px 5px;
  }
`;
const ErrorText = styled.p`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #e74c3c;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 4px;
  margin-top: 3px;
  white-space: nowrap;
  z-index: 1000;
  display: none;
  box-shadow: 0px 0px 5px 2px #7b7776;
  &.visible {
    display: block;
  }
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 8px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #e74c3c;
  }
`;
const HiddenFileInput = styled.input`
  display: none;
`;

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange = () => {},
  disabled = false,
  className = '',
  inputClassName = '',
  label = '',
  labelClassName = '',
  telephoneClassName = '',
  telephoneInputValue = '',
  name = '',
  register,
  orientation = 'horizontal',
  fontSize = '',
  error = '',
  defaultValue = '',
  onChangeTelephone,
  onClear,
  telephoneId,
  clearable = false,
  variant = 'outlined',
  buttonText = 'Upload File',
  accept = 'image/*',
  phoneNumberSize = false,
  checked,
  onFocus,
  renderLabel,
  pattern,
  canHaveLocalState,
  maxLength,
  ...props
}) => {
  const { isRtl } = useAuth();
  const inputName = name ? name : `no-autofill-${Math.random().toString(36).substr(2, 5)}`;
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [localState, setLocalState] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const nameRef = useRef(`input_${Math.random().toString(36).substr(2, 9)}`);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value === '') {
      canHaveLocalState && setLocalState(event.target.value);
      onChange(event);
      return;
    }
    if (pattern) {
      if (regexEvaluator(pattern, value)) {
        canHaveLocalState && setLocalState(event.target.value);
        onChange(event);
        return;
      } else {
        return;
      }
    }
    switch (type) {
      case InputType.AMOUNT:
        const rawValue = event.target.value.replace(/,/g, '');
        event.target.value = rawValue;
        const mainRegex = new RegExp(`^-?\\d{0,${maxLength - 1}}(\\.\\d{0,2})?$`);
        if (regexEvaluator(mainRegex, rawValue)) {
          canHaveLocalState && setLocalState(event.target.value);
          onChange(event);
        }
        return;
      case InputType.ALPHA_NUMERIC:
        if (regexEvaluator(REGEX.alphaNumeric, value)) {
          canHaveLocalState && setLocalState(event.target.value);
          onChange(event);
        }
        return;
      case InputType.NUMBER:
        if (regexEvaluator(REGEX.number, value.trim())) {
          canHaveLocalState && setLocalState(event.target.value);
          onChange(event);
        }
        return;

      case InputType.TEXT:
        if (regexEvaluator(REGEX.text, value.trim())) {
          canHaveLocalState && setLocalState(event.target.value);
          onChange(event);
        }
        return;

      default:
        return;
    }
  };
  const handleKeyDown = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    if (value === '' || isNaN(Number(value))) return maxLength;
    const formattedValue = formatToInternationalNumbering(value);
    const decimalMatch = value?.match(/\.(\d+)/);
    const decimalCount = decimalMatch ? decimalMatch[1]?.length : 0;
    const count = (formattedValue.match(/[,.]/g) || [])?.length + decimalCount;
    return maxLength + count;
  };
  const handleBlur = event => {
    const rawValue = event.target.value.replace(/,/g, '');
    event.target.value = rawValue ? Number(rawValue).toFixed(2) : '';

    const mainRegex = new RegExp(`^-?\\d{0,${maxLength - 1}}(\\.\\d{0,2})?$`);
    if (regexEvaluator(mainRegex, rawValue)) {
      canHaveLocalState && setLocalState(event.target.value);
      props?.onBlur && props?.onBlur(event);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Wrapper className={className} orientation={orientation} isRtl={isRtl}>
        {label && <label className={labelClassName}>{label}</label>}
        {renderLabel && renderLabel()}
        <InputBlock>
          <InputBox
            variant={variant}
            isCheckbox={type === 'checkbox'}
            className="inputBox"
            error={error}
            disabled={disabled}
          >
            {type === 'telephone' && (
              <TelephoneInput
                name={nameRef.current}
                isRtl={isRtl}
                value={telephoneInputValue}
                className={telephoneClassName}
                disabled={disabled}
                type="tel"
                onChange={(e: any) => onChangeTelephone && onChangeTelephone(e)}
                variant={variant}
                fontSize={fontSize}
                phoneNumberSize={phoneNumberSize}
                autoComplete={'off'}
                id={telephoneId}
                onFocus={onFocus}
                onDoubleClick={props.onDoubleClick}
              />
            )}
            {type === 'file' ? (
              <>
                <FileInputLabel disabled={disabled}>
                  {buttonText}
                  <HiddenFileInput
                    name={nameRef.current}
                    type="file"
                    onChange={onChange}
                    accept={accept}
                    disabled={disabled}
                    {...props}
                  />
                </FileInputLabel>
              </>
            ) : type === 'amount' ? (
              <StyledInput
                type={'text'}
                placeholder={placeholder}
                variant={variant}
                checked={checked}
                defaultValue={canHaveLocalState ? localState : defaultValue}
                disabled={disabled}
                fontSize={fontSize}
                onFocus={onFocus}
                {...props}
                {...(register
                  ? register(inputName)
                  : {
                      onChange: handleChange,
                      value: formatToInternationalNumbering(
                        value !== '' && !isNaN(Number(value)) ? value : value
                      ),
                      name: nameRef.current,
                      maxLength: maxLength && getAmountLength()
                    })}
                onBlur={handleBlur}
                autoComplete={'off'}
                isAmountType={true}
              />
            ) : (
              <>
                <StyledInput
                  type={
                    type === 'password' && isPasswordVisible
                      ? 'text'
                      : type === 'range-number'
                        ? 'number'
                        : type
                  }
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  variant={variant}
                  checked={checked}
                  defaultValue={defaultValue}
                  disabled={disabled}
                  fontSize={fontSize}
                  onFocus={onFocus}
                  {...(register
                    ? register(inputName)
                    : {
                        onChange: handleChange,
                        value: canHaveLocalState ? localState : value,
                        name: nameRef.current,
                        maxLength: maxLength
                      })}
                  {...props}
                  maxLength={maxLength}
                  autoComplete={'off'}
                />
                {type === 'password' && !error && (
                  <EyeIcon isRtl={isRtl} onClick={togglePasswordVisibility}>
                    {!isPasswordVisible ? <IoMdEye /> : <IoMdEyeOff />}
                  </EyeIcon>
                )}
                {type === 'dropdown' && <DropdownIcon isRtl={isRtl} />}
              </>
            )}
            {clearable && <ClearIcon isRtl={isRtl} onClick={onClear} />}
            {error && type !== 'checkbox' && (
              <WarningWrapper>
                <RiErrorWarningLine className="icon" color="#e74c3c" />
                <ErrorText className={`error-message ${showError ? 'visible' : ''}`}>
                  {error}
                </ErrorText>
              </WarningWrapper>
            )}
          </InputBox>
        </InputBlock>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Input;
