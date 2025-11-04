import React from 'react';
import styles from './Flex.module.scss';

type FlexProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'half' | 'quarter' | 'fit';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string | number;
  padding?: string | number;
  margin?: string | number;
  backgroundColor?: string;
  borderRadius?: string;
  fullHeight?: boolean;
  onDoubleClick?: () => any;
  isLTR?:boolean;
};

export const Flex: React.FC<FlexProps> = ({
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  gap = 0,
  padding = 0,
  margin = 0,
  size = 'full',
  fullHeight,
  backgroundColor = 'transparent',
  borderRadius = '0',
  children,
  onDoubleClick,
  isLTR=false,
}) => {
  const classNames = [
    styles.flexContainer,
    styles[`justify${capitalize(justifyContent.replace('-', ''))}`],
    styles[`align${capitalize(alignItems.replace('-', ''))}`],
    styles[flexDirection],
    styles[flexWrap],
    size === 'full' ? styles.fullWidth : styles.autoWidth,
    fullHeight ? styles.fullHeight : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      onDoubleClick={onDoubleClick}
      className={classNames}
      style={{
        gap: typeof gap === 'number' ? `${gap}px` : gap,
        padding: typeof padding === 'number' ? `${padding}px` : padding,
        margin: typeof margin === 'number' ? `${margin}px` : margin,
        backgroundColor,
        borderRadius,
        direction:isLTR ? 'ltr' : 'rtl'
      }}
    >
      {children}
    </div>
  );
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
