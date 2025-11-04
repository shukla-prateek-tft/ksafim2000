import React from 'react';
import styled, { CSSObject, keyframes, ThemeProvider } from 'styled-components';
import { LuLoader } from 'react-icons/lu';
import theme from '@/utils/theme';

type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'outlined' | 'contained';
type Size = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  title?: string;
  renderIcon?: () => JSX.Element | null;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  titleStyles?: CSSObject;
  type?: ButtonType;
  loading?: boolean;
  variant?: Variant;
  fullWidth?: boolean;
  size?: Size;
  className?: string;
  style?: any;
  padding?: string;
  fontSize?: string;
  tooltip?: string;
  classNamesToCheck?: string[];
}

// Keyframe for loading spinner animation
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Button component with `ButtonProps` typed
const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => (size === 'sm' ? '5px 8px' : size === 'lg' ? '10px 15px' : '7px 10px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 0px rgb(0, 0, 0);
  margin: 0px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth, size }) => (fullWidth || size === 'lg' ? '100%' : 'auto')};
  background-color: ${({ variant }) =>
    variant === 'primary'
      ? 'rgb(211,211,211)'
      : variant === 'secondary'
        ? theme.colors.themePrimary
        : variant === 'danger'
          ? '#dc3545'
          : variant === 'success'
            ? '#28a745'
            : '#ffffff'};
  color: ${({ variant }) => (variant === 'primary' ? 'black' : 'white')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: all ease-in-out 300ms;
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    background-color: ${({ variant, theme }) =>
      variant === 'outlined' ? theme.colors.primaryLight : theme.colors.themeButton};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
  ${({ style }) => style}
`;

// Loading spinner component
const LoadingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    animation: ${spinAnimation} 1s linear infinite;
    font-size: 1.2rem;
    margin: ${theme.spacing.sm};
  }
`;

// Button title with custom styling support
const ButtonTitle = styled.span<{ titleStyles?: CSSObject }>`
  ${({ titleStyles }) => titleStyles || {}}
`;

// Button Component
const Button: React.FC<ButtonProps> = ({
  title,
  renderIcon = () => null,
  onClick,
  disabled = false,
  className = '',
  titleStyles = {},
  type = 'button',
  loading = false,
  variant = 'primary',
  fullWidth = false,
  size = 'sm',
  style,
  padding,
  fontSize,
  tooltip = '',
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        className={className}
        onClick={onClick}
        disabled={disabled}
        type={type}
        variant={variant}
        fullWidth={fullWidth}
        size={size}
        style={style}
        padding={padding}
        fontSize={fontSize}
        title={tooltip}
        {...props}
      >
        {loading ? (
          <LoadingIcon>
            <LuLoader className="icon" />
          </LoadingIcon>
        ) : (
          <>
            {title && <ButtonTitle titleStyles={titleStyles}>{title}</ButtonTitle>}
            {renderIcon && renderIcon()}
          </>
        )}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
