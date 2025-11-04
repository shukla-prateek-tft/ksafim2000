import React, { ReactNode } from 'react';
import classes from './HoverCard.module.scss';
import { attachMultipleClasses } from '@/Languages';

interface HoverCardProps {
  className?: string;
  children: ReactNode;
  renderMain: ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
}

const HoverCard: React.FC<HoverCardProps> = ({
  className = '',
  renderMain,
  children,
  direction = 'bottom'
}) => {
  return (
    <div className={attachMultipleClasses(classes.tooltip, className)}>
      {children}
      <span className={attachMultipleClasses(classes.tooltiptext, classes[direction])}>
        {renderMain}
        <span
          className={attachMultipleClasses(classes.arrow, classes[`${direction}-arrow`])}
        ></span>
      </span>
    </div>
  );
};

export default HoverCard;
