import React, { ChangeEventHandler } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import theme from '@/utils/theme';

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: SelectOption[];
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
  className?: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  orientation?: 'horizontal' | 'vertical';
  error?: string;
  clearable?: boolean;
  onClear?: () => void;
  variant?: 'outlined' | 'filled' | 'standard';
  name?: string;
  [key: string]: any;
}

const Wrapper = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  display: flex;
  flex-direction: ${props => (props.orientation === 'horizontal' ? 'row' : 'column')};
  gap: ${props => (props.orientation === 'horizontal' ? '10px' : '0')};

  label {
    font-weight: bold;
    margin-bottom: ${props => (props.orientation === 'vertical' ? '5px' : '0')};
  }
`;

const SelectBlock = styled.div`
  width: 100%;
`;

const SelectBox = styled.div<{
  variant: string;
  error?: string;
  disabled?: boolean;
}>`
  position: relative;
  border: ${props =>
    props.error
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
      display: flex;
      background-color: ${props => (props.disabled ? '#D3D3D3' : props.theme.colors.themeWhite)};
      &:focus-within {
        border-color: ${props => (props.error ? props.theme.colors.error : props.theme.primary)};
        box-shadow: 0 0 4px
          ${props => (props.error ? props.theme.colors.error : props.theme.primary)};
      }
    `}

  ${props =>
    props.variant === 'filled' &&
    css<{ error?: string }>`
      border: none;
      border-bottom: ${props =>
        props.error
          ? `2px solid ${props.theme.colors.error}`
          : `1px solid ${props.theme.colors.themeInputGrayBorder}`};
      background-color: ${props => props.theme.colors.lightgray};
    `}

  ${props =>
    props.variant === 'standard' &&
    css<{ error?: string }>`
      border: none;
      border-bottom: ${props =>
        props.error
          ? `2px solid ${props.theme.colors.error}`
          : `1px solid ${props.theme.colors.themeInputGrayBorder}`};
      &:focus-within {
        border-bottom: ${props =>
          props.error
            ? `2px solid ${props.theme.colors.error}`
            : `2px solid ${props.theme.primary}`};
        box-shadow: 0 2px 4px -2px
          ${props => (props.error ? props.theme.colors.error : props.theme.primary)};
      }
    `}
`;

const StyledSelect = styled.select<{ disabled: boolean }>`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: ${props => props.theme.fontSize.xSmall};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  .FirstSelect {
    display: none !important;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const ClearIcon = styled(IoIosCloseCircle)`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: ${props => props.theme.colors.themeWhite};
  border-radius: 50%;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: ${props => props.theme.colors.error};
  font-size: 12px;
  margin: 5px 0 0 0;
`;

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  className,
  label,
  labelClassName = '',
  placeholder = '',
  orientation = 'horizontal',
  error = '',
  clearable = false,
  onClear,
  variant = 'outlined',
  name,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper orientation={orientation} className={className}>
        {label && <label className={labelClassName}>{label}</label>}
        <SelectBlock>
          <SelectBox variant={variant} error={error} disabled={disabled}>
            <StyledSelect
              value={value}
              onChange={onChange && onChange}
              defaultValue={props.defaultValue}
              disabled={disabled}
              name={name}
              {...props}
            >
              {placeholder && (
                <option className="FirstSelect" selected={!value} value="">
                  {placeholder}
                </option>
              )}
              {options.map(option => (
                <option disabled={option?.disabled} key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </StyledSelect>
            {clearable && value && <ClearIcon onClick={onClear} />}
          </SelectBox>
          {error && <ErrorText>{error}</ErrorText>}
        </SelectBlock>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Select;
