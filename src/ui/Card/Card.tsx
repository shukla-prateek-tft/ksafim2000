import React, { ReactNode } from 'react';
import classes from './Card.module.scss';
import { attachMultipleClasses } from '@/Languages';

interface CardProps {
  children: ReactNode;
  title?: string;
  renderHeaderItems?: ReactNode | (() => ReactNode);
  hideOnPrint?:boolean;
}

const Card: React.FC<CardProps> = ({ children, title, renderHeaderItems,hideOnPrint=false }) => {
  const renderNode = (node?: ReactNode | (() => ReactNode)) => {
    if (typeof node === 'function') {
      return node();
    }
    return node || null;
  };

  return (
    <div className={attachMultipleClasses(classes.container,hideOnPrint&&classes.hide)}>
      {(title || renderHeaderItems) && (
        <div className={classes.cardHeader}>
          <h3 className={classes.cardTitle}>{title}</h3>
          <div className={classes.cardActionContainer}>{renderNode(renderHeaderItems)}</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
