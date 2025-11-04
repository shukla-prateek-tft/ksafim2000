import React from 'react';
import styled from 'styled-components';

interface FlexProps {
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
}

const sizeStyles: Record<string, string> = {
  xs: '100px', // Extra small
  sm: '150px', // Small
  md: '300px', // Medium
  lg: '500px', // Large
  xl: '800px', // Extra large
  full: '100%', // Full width
  half: '50%', // Half width
  quarter: '25%', // Quarter width
  fit: 'fit-content' // Fit content
};

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  gap: ${props => (typeof props.gap === 'number' ? `${props.gap}px` : props.gap || '0')};
  padding: ${props =>
    typeof props.padding === 'number' ? `${props.padding}px` : props.padding || '0'};
  margin: ${props =>
    typeof props.margin === 'number' ? `${props.margin}px` : props.margin || '0'};
  width: ${props => sizeStyles[props.size || 'full']};
  height: ${props => (props.fullHeight ? '100%' : 'auto')};
  background-color: ${props => props.backgroundColor || 'transparent'};
  border-radius: ${props => props.borderRadius || '0'};
  box-sizing: border-box;
`;
const Flex: React.FC<FlexProps> = ({
  children,
  className = '',
  size = 'full',
  onDoubleClick,
  ...props
}) => {
  return (
    <FlexContainer onDoubleClick={onDoubleClick} className={className} size={size} {...props}>
      {children}
      {/* <SideBorder/> */}
    </FlexContainer>
  );
};

export default Flex;
