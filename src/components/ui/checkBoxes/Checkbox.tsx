import React, { ChangeEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  checkboxClassName?: string;
  labelClassName?: string;
  name?: string;
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: start;
`;

const StyledCheckbox = styled.input<{ disabled: boolean }>`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Label = styled.label`
  font-size: ${props => props.theme.fontSize.xSmall};
  font-weight: normal;
  cursor: pointer;
`;

const Checkbox: React.FC<CheckboxProps> = ({
  label = '',
  checked,
  onChange,
  disabled = false,
  className = '',
  checkboxClassName = '',
  labelClassName = '',
  name = '',
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CheckboxWrapper className={className}>
        <StyledCheckbox
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={checkboxClassName}
          name={name}
          {...props}
        />
        {label && <Label className={labelClassName}>{label}</Label>}
      </CheckboxWrapper>
    </ThemeProvider>
  );
};

export default Checkbox;
