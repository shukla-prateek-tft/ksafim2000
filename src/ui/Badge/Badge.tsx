import React, { ReactNode } from 'react';
import classes from './Badge.module.scss';
import { BadgeSize } from '@/types/ui/button';
import { BsInfoCircle, BsExclamationTriangle } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { BadgeAlign, BadgeScale, BadgeVariant } from '@/types/ui/badge';
import { attachMultipleClasses } from '@/Languages';
import { GrStatusDisabled } from 'react-icons/gr';
import { PiCircleHalfTiltFill } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';

export interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: BadgeScale;
  size?: BadgeSize;
  renderIcon?: ReactNode;
  title?: string;
  badgeType?: BadgeVariant;
  align?: BadgeAlign;
}

const defaultIcons: Record<BadgeScale, ReactNode> = {
  base: <BsInfoCircle />,
  success: <FaCheckCircle  />,
  warning: <BsExclamationTriangle />,
  danger: <ImCross />,
  disabled: <GrStatusDisabled />,
  primary: <PiCircleHalfTiltFill />,
  secondary:<PiCircleHalfTiltFill />
};

const Badge: React.FC<BadgeProps> = ({
  size = 'sm',
  variant = 'base',
  fullWidth = false,
  children,
  title,
  renderIcon,
  badgeType = 'primary',
  align = 'left',...props
}) => {
  const classNames = attachMultipleClasses(
    classes.container,
    classes[`size-${size}`],
    classes[`scale-${variant}`],
    classes[align],
    fullWidth && classes.fullWidth,
    classes[variant],
    classes[badgeType]
  );

  return (
    <button className={classNames} {...props}>
      {renderIcon || defaultIcons[variant]}
      <span>{title}</span>
      {children}
    </button>
  );
};

export default Badge;
