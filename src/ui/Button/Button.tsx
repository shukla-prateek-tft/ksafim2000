import React, { ReactNode } from 'react';
import classes from './Button.module.scss';
import { ColorVariant } from '@/themes/utils/scale';
import { ButtonVariant, ButtonSize } from '@/types/ui/button';
import { attachMultipleClasses } from '@/Languages';
import { useAuth } from '@/hooks';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scale?: ColorVariant;
  size?: ButtonSize;
  variant?: ButtonVariant;
  renderIcon?: ReactNode;
  title?: string;
  disableEnter?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = 'fullWidth',
  scale ,
  variant = 'primary',
  children,
  title,
  renderIcon,
  tabIndex = 0,
  ...props
}) => {
  const {isMunicipality}=useAuth()
  const uiScale = scale ? scale : isMunicipality?'primary':'secondary';
  const classNames = attachMultipleClasses(
    classes.button,
    classes[`size-${size}`],
    classes[`variant-${variant}`],
    classes[`scale-${uiScale}`],
    props.disabled && classes[`scale-disabled`]
  );

  return (
    <button className={classNames} tabIndex={tabIndex} {...props}>
      {renderIcon && <div className={classes.icon}>{renderIcon}</div>}
      {(title || children) && (
        <div
          className={attachMultipleClasses(
            classes.content,
            !renderIcon && classes.contentWithNoIcon
          )}
        >
          <span>{title}</span>
          {children}
        </div>
      )}
    </button>
  );
};

export default Button;
